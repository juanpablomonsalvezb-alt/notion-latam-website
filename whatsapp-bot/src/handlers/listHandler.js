const notionService = require('../services/notionService');
const { formatTaskList, formatError } = require('../utils/formatter');

/**
 * Handler para el comando /lista
 * Uso: /lista [filtro]
 * Filtros: hoy, esta semana, urgente, completadas
 * Sin filtro: últimas 10 tareas pendientes
 */
async function handle(filtro, from) {
  try {
    const filtroNormalizado = normalizarFiltro(filtro);

    console.log(`📋 Listando tareas | Filtro: "${filtroNormalizado}" | From: ${from}`);

    const tareas = await notionService.getTasks(filtroNormalizado);

    if (!tareas || tareas.length === 0) {
      const mensaje = obtenerMensajeVacio(filtroNormalizado);
      return mensaje;
    }

    return formatTaskList(tareas, filtroNormalizado);
  } catch (error) {
    console.error('❌ Error obteniendo lista de tareas:', error);
    return formatError('obtener la lista de tareas', error);
  }
}

/**
 * Normaliza el filtro recibido a un valor estándar.
 */
function normalizarFiltro(filtro) {
  if (!filtro) return 'pendientes';

  const f = filtro.toLowerCase().trim();

  if (f === 'hoy' || f === 'today') return 'hoy';
  if (f.includes('semana') || f === 'week') return 'semana';
  if (f === 'urgente' || f === 'urgentes' || f === 'alta' || f === 'urgent') return 'urgente';
  if (f === 'completada' || f === 'completadas' || f === 'done' || f === 'completed') return 'completadas';
  if (f === 'todas' || f === 'all') return 'todas';
  if (f === 'progreso' || f === 'en progreso' || f === 'in progress') return 'progreso';

  return 'pendientes';
}

/**
 * Devuelve mensaje apropiado cuando no hay tareas.
 */
function obtenerMensajeVacio(filtro) {
  const mensajes = {
    hoy: '🎉 ¡No tienes tareas para hoy! Disfruta tu día.',
    semana: '📅 No hay tareas programadas para esta semana.',
    urgente: '✅ No hay tareas urgentes. ¡Todo bajo control!',
    completadas: '📋 No hay tareas completadas todavía.',
    progreso: '🔄 No hay tareas en progreso.',
    pendientes: '✅ ¡No tienes tareas pendientes! Estás al día.',
    todas: '📋 No hay tareas en la base de datos.',
  };

  return mensajes[filtro] || '📋 No se encontraron tareas con ese filtro.';
}

module.exports = { handle };
