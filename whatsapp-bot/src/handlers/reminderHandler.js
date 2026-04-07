const reminderService = require('../services/reminderService');
const { parseReminderTime } = require('../utils/parser');
const { formatError } = require('../utils/formatter');

/**
 * Handler para el comando /recordatorio
 * Uso: /recordatorio [mensaje] [cuando]
 * Ejemplo: /recordatorio Llamar al médico en 2 horas
 * Ejemplo: /recordatorio Reunión semanal mañana 9am
 * Ejemplo: /recordatorio Pagar renta el viernes
 */
async function handle(contenido, from) {
  if (!contenido) {
    return (
      '⏰ *Crear recordatorio*\n\n' +
      'Uso: `/recordatorio [mensaje] [cuándo]`\n\n' +
      'Ejemplos:\n' +
      '• `/recordatorio Llamar al médico en 2 horas`\n' +
      '• `/recordatorio Reunión con equipo mañana 9am`\n' +
      '• `/recordatorio Pagar renta el viernes`\n' +
      '• `/recordatorio Revisar correos en 30 minutos`'
    );
  }

  try {
    // Parsear el mensaje y tiempo del contenido
    const parsed = parseReminderTime(contenido);

    if (!parsed.time) {
      return (
        '❌ No pude entender el tiempo del recordatorio.\n\n' +
        'Prueba con formatos como:\n' +
        '• "en 2 horas"\n' +
        '• "en 30 minutos"\n' +
        '• "mañana 9am"\n' +
        '• "el lunes 10am"\n' +
        '• "mañana" (por defecto 9am)'
      );
    }

    const ahora = new Date();
    if (parsed.time <= ahora) {
      return '❌ La fecha del recordatorio ya pasó. Por favor elige un tiempo futuro.';
    }

    console.log(`⏰ Creando recordatorio: "${parsed.message}" para ${parsed.time} | From: ${from}`);

    // Crear el recordatorio en el servicio de cron
    const recordatorio = reminderService.createReminder({
      message: parsed.message,
      time: parsed.time,
      to: from,
    });

    return formatReminderCreated(parsed.message, parsed.time, recordatorio.id);
  } catch (error) {
    console.error('❌ Error creando recordatorio:', error);
    return formatError('crear el recordatorio', error);
  }
}

/**
 * Formatea el mensaje de confirmación del recordatorio.
 */
function formatReminderCreated(message, time, id) {
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Santiago',
  };

  const fechaFormateada = time.toLocaleString('es-CL', opciones);
  const ahora = new Date();
  const diffMs = time - ahora;
  const diffMin = Math.round(diffMs / 60000);

  let tiempoRelativo;
  if (diffMin < 60) {
    tiempoRelativo = `en ${diffMin} minuto${diffMin !== 1 ? 's' : ''}`;
  } else if (diffMin < 1440) {
    const horas = Math.round(diffMin / 60);
    tiempoRelativo = `en ${horas} hora${horas !== 1 ? 's' : ''}`;
  } else {
    const dias = Math.round(diffMin / 1440);
    tiempoRelativo = `en ${dias} día${dias !== 1 ? 's' : ''}`;
  }

  return (
    `⏰ *Recordatorio configurado*\n\n` +
    `💬 ${message}\n` +
    `📅 ${fechaFormateada}\n` +
    `🕐 Te avisaré ${tiempoRelativo}\n\n` +
    `🔖 ID: ${id}`
  );
}

module.exports = { handle };
