/**
 * Utilidades de parsing para fechas, mensajes y comandos.
 * Soporta español latinoamericano con múltiples formatos de fecha/hora.
 */

const DIAS_SEMANA = {
  lunes: 1,
  martes: 2,
  'miércoles': 3,
  miercoles: 3,
  jueves: 4,
  viernes: 5,
  'sábado': 6,
  sabado: 6,
  domingo: 0,
};

const MESES = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
};

/**
 * Parsea un texto de fecha en español a un objeto Date.
 *
 * Soporta:
 * - "hoy"
 * - "mañana"
 * - "pasado mañana"
 * - "el lunes/martes/..." → próximo día de la semana
 * - "esta semana" → próximo lunes
 * - "próxima semana" → lunes de la próxima semana
 * - "en 2 horas" / "en 30 minutos" / "en 3 días"
 * - "15 marzo" / "15 de marzo"
 * - "15/03" / "15/03/2025"
 * - "mañana 9am" / "el lunes 10:30"
 *
 * @param {string} text - Texto con la fecha
 * @returns {Date|null} Fecha parseada o null si no se reconoce
 */
function parseDate(text) {
  if (!text) return null;

  const t = text.toLowerCase().trim();
  const ahora = new Date();

  // "hoy"
  if (t === 'hoy' || t === 'today') {
    return startOfDay(ahora);
  }

  // "mañana"
  if (t === 'mañana' || t === 'manana' || t === 'tomorrow') {
    return addDays(startOfDay(ahora), 1);
  }

  // "pasado mañana"
  if (t === 'pasado mañana' || t === 'pasado manana') {
    return addDays(startOfDay(ahora), 2);
  }

  // "esta semana" → lunes de esta semana (o próximo lunes)
  if (t === 'esta semana') {
    return getNextWeekday(1, false);
  }

  // "próxima semana" / "proxima semana"
  if (t.includes('próxima semana') || t.includes('proxima semana') || t.includes('siguiente semana')) {
    return getNextWeekday(1, true);
  }

  // "en X horas/minutos/días"
  const enMatch = t.match(/en\s+(\d+)\s+(hora|horas|minuto|minutos|día|días|dia|dias)/i);
  if (enMatch) {
    const cantidad = parseInt(enMatch[1]);
    const unidad = enMatch[2].toLowerCase();
    const resultado = new Date(ahora);

    if (unidad.startsWith('hora')) {
      resultado.setHours(resultado.getHours() + cantidad);
    } else if (unidad.startsWith('minuto')) {
      resultado.setMinutes(resultado.getMinutes() + cantidad);
    } else if (unidad.startsWith('día') || unidad.startsWith('dia')) {
      resultado.setDate(resultado.getDate() + cantidad);
    }

    return resultado;
  }

  // "el lunes" / "el martes" / etc. (con o sin "el")
  const diaMatch = t.match(/^(?:el\s+)?(lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo)$/i);
  if (diaMatch) {
    const dia = normalizarDia(diaMatch[1]);
    const numeroDia = DIAS_SEMANA[dia];
    if (numeroDia !== undefined) {
      return getNextWeekday(numeroDia, false);
    }
  }

  // "mañana 9am" / "mañana 10:30" / "el lunes 9am"
  const diaHoraMatch = t.match(
    /^(?:el\s+)?(mañana|manana|lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo|hoy)\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/i
  );
  if (diaHoraMatch) {
    const diaStr = diaHoraMatch[1].toLowerCase();
    let hora = parseInt(diaHoraMatch[2]);
    const minutos = parseInt(diaHoraMatch[3] || '0');
    const ampm = (diaHoraMatch[4] || '').toLowerCase();

    if (ampm === 'pm' && hora < 12) hora += 12;
    if (ampm === 'am' && hora === 12) hora = 0;

    let fecha;
    if (diaStr === 'hoy') fecha = startOfDay(ahora);
    else if (diaStr === 'mañana' || diaStr === 'manana') fecha = addDays(startOfDay(ahora), 1);
    else {
      const numeroDia = DIAS_SEMANA[normalizarDia(diaStr)];
      fecha = getNextWeekday(numeroDia, false);
    }

    fecha.setHours(hora, minutos, 0, 0);
    return fecha;
  }

  // "15 marzo" / "15 de marzo" / "15 marzo 2025"
  const fechaTextoMatch = t.match(
    /(\d{1,2})\s+(?:de\s+)?(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)(?:\s+(\d{4}))?/i
  );
  if (fechaTextoMatch) {
    const dia = parseInt(fechaTextoMatch[1]);
    const mes = MESES[fechaTextoMatch[2].toLowerCase()];
    const anio = fechaTextoMatch[3] ? parseInt(fechaTextoMatch[3]) : ahora.getFullYear();

    const fecha = new Date(anio, mes, dia, 9, 0, 0);

    // Si la fecha ya pasó este año, usar el próximo año
    if (fecha < ahora && !fechaTextoMatch[3]) {
      fecha.setFullYear(anio + 1);
    }

    return fecha;
  }

  // "15/03" / "15/03/2025" / "15-03" / "15-03-2025"
  const fechaNumericaMatch = t.match(/^(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{2,4}))?$/);
  if (fechaNumericaMatch) {
    const dia = parseInt(fechaNumericaMatch[1]);
    const mes = parseInt(fechaNumericaMatch[2]) - 1;
    let anio = fechaNumericaMatch[3] ? parseInt(fechaNumericaMatch[3]) : ahora.getFullYear();

    if (anio < 100) anio += 2000;

    const fecha = new Date(anio, mes, dia, 9, 0, 0);

    if (fecha < ahora && !fechaNumericaMatch[3]) {
      fecha.setFullYear(anio + 1);
    }

    return fecha;
  }

  // "el 15" / "el 20"
  const elDiaMatch = t.match(/^el\s+(\d{1,2})$/);
  if (elDiaMatch) {
    const dia = parseInt(elDiaMatch[1]);
    const fecha = new Date(ahora.getFullYear(), ahora.getMonth(), dia, 9, 0, 0);

    if (fecha < ahora) {
      fecha.setMonth(fecha.getMonth() + 1);
    }

    return fecha;
  }

  return null;
}

/**
 * Parsea el tiempo de un recordatorio del formato "[mensaje] [cuando]".
 * Devuelve { message, time }.
 *
 * @param {string} text - Texto completo del recordatorio
 * @returns {{ message: string, time: Date|null }}
 */
function parseReminderTime(text) {
  if (!text) return { message: text, time: null };

  // Patrones de tiempo al final del texto
  const timePatterns = [
    // "en X horas/minutos"
    /\s+en\s+(\d+)\s+(hora|horas|minuto|minutos)$/i,
    // "mañana [hora]am/pm"
    /\s+(mañana|manana)(?:\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?)?$/i,
    // "hoy [hora]"
    /\s+hoy\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/i,
    // "el lunes/etc. [hora opcional]"
    /\s+(?:el\s+)?(lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo)(?:\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?)?$/i,
    // "en X días"
    /\s+en\s+(\d+)\s+(día|días|dia|dias)$/i,
    // "el 15" / "el 20 de mayo"
    /\s+el\s+\d{1,2}(?:\s+de\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre))?$/i,
    // "15/03" / "15 marzo"
    /\s+\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?$/i,
    /\s+\d{1,2}\s+de\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)(?:\s+\d{4})?$/i,
  ];

  for (const pattern of timePatterns) {
    const match = text.match(pattern);
    if (match) {
      const timeText = match[0].trim();
      const message = text.replace(pattern, '').trim();
      const time = parseDate(timeText);

      if (time) {
        return { message, time };
      }
    }
  }

  // Intentar parsear todo el texto como fecha (si es solo tiempo)
  const time = parseDate(text);
  if (time) {
    return { message: 'Recordatorio', time };
  }

  return { message: text, time: null };
}

/**
 * Parsea un mensaje libre para extraer título y fecha.
 * Usado para mensajes sin comando.
 *
 * @param {string} text - Mensaje libre
 * @returns {{ title: string, date: Date|null }}
 */
function parseMessage(text) {
  if (!text) return { title: '', date: null };

  // Usar la misma lógica que taskHandler para separar título y fecha
  const datePatterns = [
    /\s+(mañana|hoy|pasado\s+mañana|manana)$/i,
    /\s+(el\s+)?(lunes|martes|mi[eé]rcoles|miercoles|jueves|viernes|s[aá]bado|sabado|domingo)$/i,
    /\s+(esta\s+semana|próxima?\s+semana|proxima\s+semana)$/i,
    /\s+en\s+\d+\s+(hora|horas|minuto|minutos|día|días|dia|dias)$/i,
    /\s+(\d{1,2}\s+de\s+)?(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)$/i,
    /\s+\d{1,2}\/\d{1,2}(\/\d{2,4})?$/i,
    /\s+el\s+\d{1,2}(\s+de\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre))?$/i,
  ];

  let title = text;
  let date = null;

  for (const pattern of datePatterns) {
    const match = text.match(pattern);
    if (match) {
      const dateText = match[0].trim();
      const parsedDate = parseDate(dateText);
      if (parsedDate) {
        date = parsedDate;
        title = text.replace(pattern, '').trim();
        break;
      }
    }
  }

  return { title, date };
}

/**
 * Extrae el nombre del proyecto si hay un hashtag en el texto.
 * Ej: "Revisar informe #trabajo" → { text: "Revisar informe", project: "trabajo" }
 *
 * @param {string} text
 * @returns {{ text: string, project: string|null }}
 */
function extractProject(text) {
  if (!text) return { text: '', project: null };

  const match = text.match(/#([a-zA-ZáéíóúÁÉÍÓÚñÑ0-9_-]+)/);
  if (match) {
    const project = match[1];
    const cleanText = text.replace(match[0], '').trim();
    return { text: cleanText, project };
  }

  return { text, project: null };
}

// ─── Helpers de fecha ────────────────────────────────────────────────────────

/**
 * Devuelve el inicio del día (00:00:00).
 */
function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Añade días a una fecha.
 */
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

/**
 * Obtiene el próximo día de la semana.
 * @param {number} weekday - 0=domingo, 1=lunes, ..., 6=sábado
 * @param {boolean} nextWeek - Si true, siempre usa la próxima semana
 */
function getNextWeekday(weekday, nextWeek = false) {
  const ahora = new Date();
  const diaActual = ahora.getDay();
  let diff = weekday - diaActual;

  if (diff <= 0 || nextWeek) {
    diff += 7;
  }

  const fecha = addDays(startOfDay(ahora), diff);
  fecha.setHours(9, 0, 0, 0); // Por defecto 9am
  return fecha;
}

/**
 * Normaliza el nombre de un día de la semana (quita acentos).
 */
function normalizarDia(dia) {
  return dia
    .toLowerCase()
    .replace('é', 'e')
    .replace('á', 'a')
    .replace('ó', 'o')
    .replace('ú', 'u');
}

module.exports = {
  parseDate,
  parseReminderTime,
  parseMessage,
  extractProject,
};
