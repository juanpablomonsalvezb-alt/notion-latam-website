/**
 * Utilidades de formateo para respuestas del bot.
 * Genera mensajes WhatsApp bien formateados en español.
 */

const ICONOS_PRIORIDAD = {
  Alta: '🔴',
  Media: '🟡',
  Baja: '🟢',
};

const ICONOS_ESTADO = {
  Pendiente: '📋',
  'En Progreso': '🔄',
  Completado: '✅',
};

/**
 * Formatea la confirmación de tarea creada.
 * @param {Object} task - Tarea creada (con .url, .id, etc.)
 * @param {string} title - Título de la tarea
 * @param {Date|null} date - Fecha de la tarea
 * @param {string|null} project - Proyecto asignado
 */
function formatTaskCreated(task, title, date, project) {
  const lineas = [`✅ *Tarea creada:* ${title}`];

  if (date) {
    lineas.push(`📅 *Fecha:* ${formatDate(date)}`);
  }

  if (project) {
    lineas.push(`📁 *Proyecto:* ${project}`);
  }

  if (task && task.url) {
    lineas.push(`🔗 *Ver en Notion:* ${task.url}`);
  }

  return lineas.join('\n');
}

/**
 * Formatea la lista de tareas.
 * @param {Array} tasks - Array de tareas
 * @param {string} filter - Filtro aplicado (para el header)
 */
function formatTaskList(tasks, filter) {
  if (!tasks || tasks.length === 0) {
    return '📋 No hay tareas que mostrar.';
  }

  const headerMap = {
    hoy: `📅 *Tareas para hoy (${tasks.length})*`,
    semana: `📅 *Tareas esta semana (${tasks.length})*`,
    urgente: `🔴 *Tareas urgentes (${tasks.length})*`,
    completadas: `✅ *Tareas completadas (${tasks.length})*`,
    progreso: `🔄 *En progreso (${tasks.length})*`,
    todas: `📋 *Todas las tareas (${tasks.length})*`,
    proyecto: `📋 *Tareas del proyecto (${tasks.length})*`,
    pendientes: `📋 *Tareas pendientes (${tasks.length})*`,
  };

  const header = headerMap[filter] || `📋 *Tareas (${tasks.length})*`;
  const lineas = [header, ''];

  tasks.forEach((task, index) => {
    const numero = `${index + 1}.`;
    const icono = ICONOS_PRIORIDAD[task.priority] || '📋';
    const titulo = task.title;
    const fecha = task.date ? ` · 📅 ${formatDateShort(task.date)}` : '';
    const proyecto = task.project ? ` · 📁 ${task.project}` : '';

    lineas.push(`${numero} ${icono} ${titulo}${fecha}${proyecto}`);
  });

  lineas.push('');
  lineas.push(`💡 Usa \`/completar [número]\` para marcar como hecha.`);

  return lineas.join('\n');
}

/**
 * Formatea un mensaje de error amigable.
 * @param {string} accion - Qué se intentaba hacer
 * @param {Error} error - El error ocurrido
 */
function formatError(accion, error) {
  const esNotionError = error?.code?.startsWith('notion_') || error?.name === 'APIResponseError';
  const esConfigError = error?.message?.includes('API_KEY') || error?.message?.includes('DB_ID');

  if (esConfigError) {
    return (
      `❌ *Error de configuración*\n\n` +
      `El bot no está configurado correctamente. ` +
      `Contacta al administrador.`
    );
  }

  if (esNotionError) {
    return (
      `❌ *Error de Notion*\n\n` +
      `No se pudo ${accion}. Verifica que la integración de Notion ` +
      `tenga acceso a la base de datos.`
    );
  }

  return (
    `❌ *Error*\n\n` +
    `No se pudo ${accion}. Por favor intenta de nuevo en unos segundos.`
  );
}

/**
 * Formatea una fecha en formato largo en español.
 * Ej: "lunes, 15 de abril de 2025"
 */
function formatDate(date) {
  if (!date) return 'Sin fecha';

  const d = date instanceof Date ? date : new Date(date);
  return d.toLocaleDateString('es-CL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formatea una fecha en formato corto.
 * Ej: "lun 15/04"
 */
function formatDateShort(date) {
  if (!date) return '';

  const d = date instanceof Date ? date : new Date(date);
  const dia = d.toLocaleDateString('es-CL', { weekday: 'short' });
  const numeroDia = d.getDate().toString().padStart(2, '0');
  const mes = (d.getMonth() + 1).toString().padStart(2, '0');

  return `${dia} ${numeroDia}/${mes}`;
}

/**
 * Formatea fecha y hora juntas.
 * Ej: "lunes 15/04 a las 9:00"
 */
function formatDateTime(date) {
  if (!date) return '';

  const d = date instanceof Date ? date : new Date(date);
  const fecha = formatDateShort(d);
  const hora = d.toLocaleTimeString('es-CL', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Santiago',
  });

  return `${fecha} a las ${hora}`;
}

module.exports = {
  formatTaskCreated,
  formatTaskList,
  formatError,
  formatDate,
  formatDateShort,
  formatDateTime,
};
