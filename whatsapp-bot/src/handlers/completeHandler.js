const notionService = require('../services/notionService');
const { formatError } = require('../utils/formatter');

// Cache temporal de la última lista consultada por número
const ultimaLista = new Map();

/**
 * Actualiza el cache de última lista para un número.
 * Llamado desde listHandler después de obtener tareas.
 */
function setUltimaLista(from, tareas) {
  ultimaLista.set(from, tareas);
  // Expirar el cache después de 30 minutos
  setTimeout(() => ultimaLista.delete(from), 30 * 60 * 1000);
}

/**
 * Handler para el comando /completar
 * Uso: /completar [número] o /completar [nombre parcial]
 * Ejemplo: /completar 3
 * Ejemplo: /completar Llamar a María
 */
async function handle(identificador, from) {
  if (!identificador) {
    return (
      '✅ *Completar tarea*\n\n' +
      'Uso: `/completar [número o nombre]`\n\n' +
      'Ejemplos:\n' +
      '• `/completar 3` (número de la lista)\n' +
      '• `/completar Llamar a María` (nombre parcial)\n\n' +
      '💡 Tip: Usa `/lista` primero para ver los números.'
    );
  }

  try {
    let tarea = null;

    // Intentar por número
    const numero = parseInt(identificador.trim());
    if (!isNaN(numero)) {
      tarea = await resolverPorNumero(numero, from);
    }

    // Intentar por nombre parcial si no se encontró por número
    if (!tarea) {
      tarea = await notionService.findTaskByName(identificador.trim());
    }

    if (!tarea) {
      return (
        `❌ No encontré una tarea con "${identificador}".\n\n` +
        '💡 Usa `/lista` para ver tus tareas y sus números.'
      );
    }

    console.log(`✅ Completando tarea: "${tarea.title}" (${tarea.id}) | From: ${from}`);

    // Marcar como completada en Notion
    await notionService.completeTask(tarea.id);

    return `✅ *Completado:* ${tarea.title}\n\n🎉 ¡Excelente trabajo! La tarea ha sido marcada como completada en Notion.`;
  } catch (error) {
    console.error('❌ Error completando tarea:', error);
    return formatError('completar la tarea', error);
  }
}

/**
 * Resuelve una tarea por el número en la última lista vista.
 */
async function resolverPorNumero(numero, from) {
  // Intentar con el cache de última lista
  const lista = ultimaLista.get(from);
  if (lista && lista[numero - 1]) {
    return lista[numero - 1];
  }

  // Si no hay cache, obtener tareas pendientes y buscar
  try {
    const tareas = await notionService.getTasks('pendientes');
    if (tareas && tareas[numero - 1]) {
      return tareas[numero - 1];
    }
  } catch (e) {
    console.warn('⚠️ No se pudo obtener tareas para resolver por número:', e.message);
  }

  return null;
}

module.exports = { handle, setUltimaLista };
