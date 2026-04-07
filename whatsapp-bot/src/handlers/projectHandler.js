const notionService = require('../services/notionService');
const { formatTaskList, formatError } = require('../utils/formatter');

/**
 * Handler para el comando /proyecto
 * Uso: /proyecto [nombre]
 * Sin nombre: lista todos los proyectos disponibles
 * Con nombre: muestra tareas del proyecto
 */
async function handle(nombre, from) {
  try {
    // Sin nombre → listar proyectos disponibles
    if (!nombre) {
      return await listarProyectos(from);
    }

    console.log(`📁 Buscando tareas del proyecto: "${nombre}" | From: ${from}`);

    const tareas = await notionService.getTasksByProject(nombre.trim());

    if (!tareas || tareas.length === 0) {
      // Sugerir proyectos disponibles
      const proyectos = await notionService.getProjects();
      const listaProyectos = proyectos.length > 0
        ? '\n\n📂 Proyectos disponibles:\n' + proyectos.map(p => `• ${p}`).join('\n')
        : '';

      return `❌ No encontré tareas para el proyecto *"${nombre}"*.${listaProyectos}`;
    }

    const header = `📁 *Proyecto: ${nombre}*\n`;
    return header + formatTaskList(tareas, 'proyecto');
  } catch (error) {
    console.error('❌ Error obteniendo tareas del proyecto:', error);
    return formatError('obtener las tareas del proyecto', error);
  }
}

/**
 * Lista todos los proyectos disponibles en Notion.
 */
async function listarProyectos(from) {
  try {
    console.log(`📂 Listando proyectos | From: ${from}`);
    const proyectos = await notionService.getProjects();

    if (!proyectos || proyectos.length === 0) {
      return (
        '📂 No hay proyectos configurados todavía.\n\n' +
        'Para crear tareas con proyecto usa:\n' +
        '`/tarea [descripción] #nombre-proyecto`'
      );
    }

    const lista = proyectos.map((p, i) => `${i + 1}. 📁 ${p}`).join('\n');

    return (
      `📂 *Tus proyectos (${proyectos.length})*\n\n` +
      lista +
      '\n\n💡 Usa `/proyecto [nombre]` para ver las tareas de un proyecto.'
    );
  } catch (error) {
    console.error('❌ Error listando proyectos:', error);
    return formatError('listar los proyectos', error);
  }
}

module.exports = { handle };
