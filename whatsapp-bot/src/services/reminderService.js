const cron = require('node-cron');
const twilioService = require('./twilioService');

// Almacenamiento en memoria de recordatorios pendientes
// En producción, esto debería persistir en Redis o base de datos
const reminders = new Map();
let reminderCounter = 1;

// Tarea cron que verifica recordatorios cada minuto
let cronTask = null;

/**
 * Inicializa el servicio de recordatorios.
 * Debe llamarse al arrancar el servidor.
 */
function init() {
  // Verificar recordatorios cada minuto
  cronTask = cron.schedule('* * * * *', checkAndSendReminders, {
    scheduled: true,
    timezone: 'America/Santiago',
  });

  console.log('⏰ Servicio de recordatorios iniciado (verificación cada minuto)');
}

/**
 * Verifica y envía los recordatorios que ya vencieron.
 */
async function checkAndSendReminders() {
  const ahora = new Date();
  const vencidos = [];

  // Encontrar recordatorios vencidos
  for (const [id, reminder] of reminders) {
    if (reminder.time <= ahora && !reminder.sent) {
      vencidos.push({ id, ...reminder });
    }
  }

  // Enviar cada recordatorio vencido
  for (const reminder of vencidos) {
    try {
      console.log(`⏰ Enviando recordatorio ${reminder.id}: "${reminder.message}" a ${reminder.to}`);
      await twilioService.sendReminder(reminder.to, reminder.message);

      // Marcar como enviado y eliminar después de 1 hora
      reminders.get(reminder.id).sent = true;
      reminders.get(reminder.id).sentAt = new Date();

      setTimeout(() => {
        reminders.delete(reminder.id);
        console.log(`🗑️ Recordatorio ${reminder.id} eliminado del cache`);
      }, 60 * 60 * 1000);

    } catch (error) {
      console.error(`❌ Error enviando recordatorio ${reminder.id}:`, error.message);

      // Incrementar intentos fallidos
      const r = reminders.get(reminder.id);
      r.failedAttempts = (r.failedAttempts || 0) + 1;

      // Si falló 3 veces, eliminar
      if (r.failedAttempts >= 3) {
        console.warn(`⚠️ Recordatorio ${reminder.id} eliminado después de 3 intentos fallidos`);
        reminders.delete(reminder.id);
      }
    }
  }
}

/**
 * Crea un nuevo recordatorio.
 * @param {Object} options
 * @param {string} options.message - Mensaje del recordatorio
 * @param {Date} options.time - Cuándo enviar el recordatorio
 * @param {string} options.to - Número de WhatsApp destino
 * @returns {Object} Recordatorio creado con su ID
 */
function createReminder({ message, time, to }) {
  const id = `reminder_${reminderCounter++}_${Date.now()}`;

  const reminder = {
    id,
    message,
    time,
    to,
    sent: false,
    createdAt: new Date(),
    failedAttempts: 0,
  };

  reminders.set(id, reminder);

  console.log(`✅ Recordatorio creado: ${id} para ${time.toISOString()} → ${to}`);
  return reminder;
}

/**
 * Cancela un recordatorio por ID.
 * @param {string} id - ID del recordatorio
 */
function cancelReminder(id) {
  if (reminders.has(id)) {
    reminders.delete(id);
    console.log(`❌ Recordatorio ${id} cancelado`);
    return true;
  }
  return false;
}

/**
 * Obtiene todos los recordatorios pendientes de un número.
 * @param {string} to - Número de WhatsApp
 */
function getRemindersForNumber(to) {
  const resultado = [];
  for (const [id, reminder] of reminders) {
    if (reminder.to === to && !reminder.sent) {
      resultado.push({ id, ...reminder });
    }
  }
  return resultado.sort((a, b) => a.time - b.time);
}

/**
 * Detiene el servicio de recordatorios.
 */
function stop() {
  if (cronTask) {
    cronTask.stop();
    console.log('⏹️ Servicio de recordatorios detenido');
  }
}

module.exports = {
  init,
  createReminder,
  cancelReminder,
  getRemindersForNumber,
  stop,
};
