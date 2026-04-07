const { Client } = require('@notionhq/client');

// Inicializar cliente de Notion
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const TASKS_DB_ID = process.env.NOTION_TASKS_DB_ID;

/**
 * Crea una nueva tarea en la base de datos de Notion.
 * @param {string} title - Título de la tarea
 * @param {Date|null} date - Fecha de la tarea (opcional)
 * @param {string|null} projectName - Nombre del proyecto (opcional)
 * @param {string} from - Número de WhatsApp que creó la tarea
 */
async function createTask(title, date, projectName, from) {
  const properties = {
    Nombre: {
      title: [
        {
          text: {
            content: title,
          },
        },
      ],
    },
    Estado: {
      select: {
        name: 'Pendiente',
      },
    },
    Prioridad: {
      select: {
        name: 'Media',
      },
    },
    'Creado por Bot': {
      checkbox: true,
    },
  };

  // Agregar fecha si existe
  if (date) {
    const fechaISO = date instanceof Date ? date.toISOString().split('T')[0] : date;
    properties.Fecha = {
      date: {
        start: fechaISO,
      },
    };
  }

  // Agregar proyecto si existe
  if (projectName) {
    properties.Proyecto = {
      select: {
        name: projectName,
      },
    };
  }

  // Agregar número de WhatsApp
  if (from) {
    properties['WhatsApp From'] = {
      rich_text: [
        {
          text: {
            content: from,
          },
        },
      ],
    };
  }

  const response = await notion.pages.create({
    parent: {
      database_id: TASKS_DB_ID,
    },
    properties,
  });

  return {
    id: response.id,
    title,
    date,
    project: projectName,
    url: response.url,
    status: 'Pendiente',
  };
}

/**
 * Obtiene tareas de la base de datos con filtros opcionales.
 * @param {string} filter - 'hoy', 'semana', 'urgente', 'completadas', 'progreso', 'todas', 'pendientes'
 * @returns {Array} Lista de tareas (máx. 10)
 */
async function getTasks(filter = 'pendientes') {
  const filters = [];
  const sorts = [];

  // Filtros por estado
  if (filter === 'pendientes') {
    filters.push({
      property: 'Estado',
      select: { equals: 'Pendiente' },
    });
    sorts.push({ property: 'Fecha', direction: 'ascending' });
  } else if (filter === 'completadas') {
    filters.push({
      property: 'Estado',
      select: { equals: 'Completado' },
    });
    sorts.push({ timestamp: 'last_edited_time', direction: 'descending' });
  } else if (filter === 'progreso') {
    filters.push({
      property: 'Estado',
      select: { equals: 'En Progreso' },
    });
  } else if (filter === 'urgente') {
    filters.push(
      {
        property: 'Estado',
        select: { does_not_equal: 'Completado' },
      },
      {
        property: 'Prioridad',
        select: { equals: 'Alta' },
      }
    );
    sorts.push({ property: 'Fecha', direction: 'ascending' });
  } else if (filter === 'hoy') {
    const hoy = new Date().toISOString().split('T')[0];
    filters.push(
      {
        property: 'Estado',
        select: { does_not_equal: 'Completado' },
      },
      {
        property: 'Fecha',
        date: { equals: hoy },
      }
    );
  } else if (filter === 'semana') {
    const hoy = new Date();
    const finSemana = new Date(hoy);
    finSemana.setDate(hoy.getDate() + 7);

    filters.push(
      {
        property: 'Estado',
        select: { does_not_equal: 'Completado' },
      },
      {
        property: 'Fecha',
        date: { on_or_after: hoy.toISOString().split('T')[0] },
      },
      {
        property: 'Fecha',
        date: { on_or_before: finSemana.toISOString().split('T')[0] },
      }
    );
    sorts.push({ property: 'Fecha', direction: 'ascending' });
  }

  // Si no hay filtros, obtener todas las no completadas
  if (filter === 'todas' || filters.length === 0) {
    // Sin filtro de estado
    sorts.push({ timestamp: 'created_time', direction: 'descending' });
  }

  const queryParams = {
    database_id: TASKS_DB_ID,
    page_size: 10,
    sorts: sorts.length > 0 ? sorts : [{ timestamp: 'created_time', direction: 'descending' }],
  };

  // Construir filtro compuesto
  if (filters.length === 1) {
    queryParams.filter = filters[0];
  } else if (filters.length > 1) {
    queryParams.filter = { and: filters };
  }

  const response = await notion.databases.query(queryParams);

  return response.results.map(page => mapPageToTask(page));
}

/**
 * Marca una tarea como completada.
 * @param {string} taskId - ID de la página en Notion
 */
async function completeTask(taskId) {
  await notion.pages.update({
    page_id: taskId,
    properties: {
      Estado: {
        select: {
          name: 'Completado',
        },
      },
    },
  });
}

/**
 * Busca una tarea por nombre parcial entre las tareas pendientes.
 * @param {string} nombre - Nombre parcial a buscar
 */
async function findTaskByName(nombre) {
  const response = await notion.databases.query({
    database_id: TASKS_DB_ID,
    filter: {
      and: [
        {
          property: 'Estado',
          select: { does_not_equal: 'Completado' },
        },
        {
          property: 'Nombre',
          title: { contains: nombre },
        },
      ],
    },
    page_size: 5,
  });

  if (response.results.length === 0) return null;
  return mapPageToTask(response.results[0]);
}

/**
 * Obtiene la lista de proyectos únicos de la base de datos.
 * @returns {Array<string>} Lista de nombres de proyectos
 */
async function getProjects() {
  // Consultar la base de datos para obtener valores únicos del campo Proyecto
  const response = await notion.databases.retrieve({
    database_id: TASKS_DB_ID,
  });

  const proyectosProp = response.properties?.Proyecto;

  if (proyectosProp && proyectosProp.type === 'select' && proyectosProp.select?.options) {
    return proyectosProp.select.options
      .map(o => o.name)
      .filter(n => n && n.trim() !== '');
  }

  // Fallback: buscar en páginas existentes
  const pages = await notion.databases.query({
    database_id: TASKS_DB_ID,
    page_size: 100,
    filter: {
      property: 'Proyecto',
      select: { is_not_empty: true },
    },
  });

  const proyectosSet = new Set();
  pages.results.forEach(page => {
    const proyecto = page.properties?.Proyecto?.select?.name;
    if (proyecto) proyectosSet.add(proyecto);
  });

  return Array.from(proyectosSet).sort();
}

/**
 * Obtiene tareas filtradas por proyecto.
 * @param {string} projectName - Nombre del proyecto
 */
async function getTasksByProject(projectName) {
  const response = await notion.databases.query({
    database_id: TASKS_DB_ID,
    filter: {
      and: [
        {
          property: 'Estado',
          select: { does_not_equal: 'Completado' },
        },
        {
          property: 'Proyecto',
          select: { equals: projectName },
        },
      ],
    },
    page_size: 10,
    sorts: [{ property: 'Fecha', direction: 'ascending' }],
  });

  return response.results.map(page => mapPageToTask(page));
}

/**
 * Mapea una página de Notion al formato interno de tarea.
 */
function mapPageToTask(page) {
  const props = page.properties;

  const title = props.Nombre?.title?.[0]?.text?.content
    || props.Nombre?.title?.[0]?.plain_text
    || 'Sin título';

  const estado = props.Estado?.select?.name || 'Pendiente';
  const prioridad = props.Prioridad?.select?.name || null;
  const proyecto = props.Proyecto?.select?.name || null;
  const fecha = props.Fecha?.date?.start || null;
  const whatsappFrom = props['WhatsApp From']?.rich_text?.[0]?.text?.content || null;

  return {
    id: page.id,
    title,
    status: estado,
    priority: prioridad,
    project: proyecto,
    date: fecha ? new Date(fecha) : null,
    url: page.url,
    whatsappFrom,
    createdAt: new Date(page.created_time),
  };
}

module.exports = {
  createTask,
  getTasks,
  completeTask,
  findTaskByName,
  getProjects,
  getTasksByProject,
};
