const notionService = require('../services/notionService');
const { parseDate, extractProject } = require('../utils/parser');
const { formatTaskCreated, formatError } = require('../utils/formatter');

/**
 * Handler para el comando /tarea
 * Uso: /tarea [descripción] [fecha opcional] [proyecto opcional]
 * Ejemplo: /tarea Llamar a María mañana #trabajo
 */
async function handle(content, from) {
  if (!content) {
    return (
      '📝 *Crear tarea*\n\n' +
      'Uso: `/tarea [descripción] [fecha]`\n\n' +
      'Ejemplos:\n' +
      '• `/tarea Revisar informe mañana`\n' +
      '• `/tarea Llamar al cliente el lunes`\n' +
      '• `/tarea Enviar propuesta 15 abril #trabajo`'
    );
  }

  return await createTask(content, null, null, from);
}

/**
 * Crea una tarea parseando el contenido completo.
 * Extrae título, fecha y proyecto del texto libre.
 */
async function createTask(content, dateOverride, projectOverride, from) {
  try {
    // Extraer proyecto del contenido (ej: #trabajo → "trabajo")
    const { text: textSinProyecto, project: projectFromText } = extractProject(content);
    const projectName = projectOverride || projectFromText || null;

    // Parsear fecha del texto restante
    const { title, date: dateFromText } = parseTitleAndDate(textSinProyecto);
    const fecha = dateOverride || dateFromText || null;

    if (!title || title.trim() === '') {
      return '❌ No pude entender el título de la tarea. Por favor escríbelo más claramente.';
    }

    console.log(`📋 Creando tarea: "${title}" | Fecha: ${fecha} | Proyecto: ${projectName} | From: ${from}`);

    // Crear en Notion
    const task = await notionService.createTask(title.trim(), fecha, projectName, from);

    return formatTaskCreated(task, title.trim(), fecha, projectName);
  } catch (error) {
    console.error('❌ Error creando tarea:', error);
    return formatError('crear la tarea', error);
  }
}

/**
 * Separa el título de la fecha en un texto libre.
 * Ej: "Llamar a María mañana" → { title: "Llamar a María", date: <mañana> }
 */
function parseTitleAndDate(text) {
  if (!text) return { title: '', date: null };

  // Patrones de fecha comunes al final del texto
  const datePatterns = [
    // "mañana", "hoy", "pasado mañana"
    /\s+(mañana|hoy|pasado\s+mañana)$/i,
    // "el lunes/martes/etc"
    /\s+(el\s+)?(lunes|martes|miércoles|miercoles|jueves|viernes|sábado|sabado|domingo)$/i,
    // "esta semana", "próxima semana"
    /\s+(esta\s+semana|próxima?\s+semana|proxima\s+semana)$/i,
    // "en 2 horas", "en 30 minutos"
    /\s+en\s+\d+\s+(hora|horas|minuto|minutos|día|días|dia|dias)$/i,
    // "15 marzo", "15 de marzo", "15/03"
    /\s+(\d{1,2}\s+de\s+)?(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)$/i,
    /\s+\d{1,2}\/\d{1,2}(\/\d{2,4})?$/i,
    // "el 15", "el 20 de mayo"
    /\s+el\s+\d{1,2}(\s+de\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre))?$/i,
  ];

  let title = text;
  let dateText = null;

  for (const pattern of datePatterns) {
    const match = text.match(pattern);
    if (match) {
      dateText = match[0].trim();
      title = text.replace(pattern, '').trim();
      break;
    }
  }

  const date = dateText ? parseDate(dateText) : null;

  return { title, date };
}

module.exports = { handle, createTask };
