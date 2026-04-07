const taskHandler = require('./taskHandler');
const listHandler = require('./listHandler');
const completeHandler = require('./completeHandler');
const reminderHandler = require('./reminderHandler');
const projectHandler = require('./projectHandler');
const helpHandler = require('./helpHandler');
const { parseMessage } = require('../utils/parser');

// Mapa de estados de conversación para mensajes libres (sin comando)
const pendingConfirmations = new Map();

/**
 * Dispatcher principal de comandos.
 * Recibe el mensaje y el número de WhatsApp del remitente.
 */
async function handle(message, from) {
  if (!message) {
    return '❓ No entendí tu mensaje. Escribe */ayuda* para ver los comandos disponibles.';
  }

  const lowerMessage = message.toLowerCase().trim();

  // Verificar si hay una confirmación pendiente
  if (pendingConfirmations.has(from)) {
    return await handleConfirmation(message, from);
  }

  // Detectar comando
  if (lowerMessage.startsWith('/tarea') || lowerMessage.startsWith('/task')) {
    const content = message.replace(/^\/ta[rs][ke]a?\s*/i, '').trim();
    return await taskHandler.handle(content, from);
  }

  if (lowerMessage.startsWith('/lista') || lowerMessage.startsWith('/list')) {
    const filtro = message.replace(/^\/list[ao]?\s*/i, '').trim();
    return await listHandler.handle(filtro, from);
  }

  if (lowerMessage.startsWith('/completar') || lowerMessage.startsWith('/complete') || lowerMessage.startsWith('/done')) {
    const identificador = message.replace(/^\/(completar|complete|done)\s*/i, '').trim();
    return await completeHandler.handle(identificador, from);
  }

  if (lowerMessage.startsWith('/recordatorio') || lowerMessage.startsWith('/reminder')) {
    const contenido = message.replace(/^\/(recordatorio|reminder)\s*/i, '').trim();
    return await reminderHandler.handle(contenido, from);
  }

  if (lowerMessage.startsWith('/proyecto') || lowerMessage.startsWith('/project')) {
    const nombre = message.replace(/^\/(proyecto|project)\s*/i, '').trim();
    return await projectHandler.handle(nombre, from);
  }

  if (lowerMessage.startsWith('/ayuda') || lowerMessage.startsWith('/help') || lowerMessage === '?') {
    return helpHandler.handle();
  }

  // Mensaje libre — intentar interpretar como tarea nueva
  return await handleFreeMessage(message, from);
}

/**
 * Maneja mensajes libres (sin comando) interpretándolos como tareas.
 */
async function handleFreeMessage(message, from) {
  const parsed = parseMessage(message);

  const preview = parsed.date
    ? `📝 *${parsed.title}*\n📅 Fecha: ${formatDate(parsed.date)}`
    : `📝 *${parsed.title}*\n📅 Sin fecha`;

  // Guardar en estado pendiente
  pendingConfirmations.set(from, {
    action: 'create_task',
    title: parsed.title,
    date: parsed.date,
    originalMessage: message,
    timestamp: Date.now(),
  });

  // Limpiar confirmación pendiente después de 5 minutos
  setTimeout(() => {
    if (pendingConfirmations.has(from)) {
      pendingConfirmations.delete(from);
    }
  }, 5 * 60 * 1000);

  return `¿Quieres que cree esta tarea?\n\n${preview}\n\nResponde *SI* para confirmar o *NO* para cancelar.`;
}

/**
 * Maneja la confirmación del usuario para acciones pendientes.
 */
async function handleConfirmation(message, from) {
  const pending = pendingConfirmations.get(from);
  const response = message.toLowerCase().trim();

  // Limpiar el estado pendiente
  pendingConfirmations.delete(from);

  if (response === 'si' || response === 'sí' || response === 'yes' || response === 's') {
    if (pending.action === 'create_task') {
      return await taskHandler.createTask(pending.title, pending.date, null, from);
    }
  }

  if (response === 'no' || response === 'n') {
    return '❌ Cancelado. ¿Hay algo más en lo que pueda ayudarte?';
  }

  // Respuesta no reconocida — tratar como nuevo mensaje libre
  pendingConfirmations.delete(from);
  return await handle(message, from);
}

/**
 * Formatea una fecha para mostrar al usuario.
 */
function formatDate(date) {
  if (!date) return 'Sin fecha';
  const d = new Date(date);
  return d.toLocaleDateString('es-CL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

module.exports = { handle };
