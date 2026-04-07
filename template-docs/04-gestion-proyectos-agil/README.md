# 🚀 Gestión de Proyectos Ágil

> **Precio:** $30 USD · `Español` · `Nivel: Básico-Intermedio` · `Categoría: Proyectos / Equipos`

**De la idea al deploy: gestiona sprints, backlog y equipo con metodología ágil sin la complejidad de Jira.**

---

## Descripción completa

### ¿Qué es este template?

El **Sistema de Gestión de Proyectos Ágil** es una implementación completa de Scrum y Kanban en Notion, diseñada para equipos de desarrollo de software, agencias digitales y cualquier equipo que trabaje con metodologías ágiles y necesite una herramienta flexible sin la curva de aprendizaje de herramientas como Jira o Azure DevOps.

Combina lo mejor del mundo ágil (sprints, backlog priorizado, retrospectivas) con la flexibilidad visual de Notion. Perfecto para equipos de 3 a 30 personas.

### ¿Para quién es?

- Equipos de desarrollo de software (startups, empresas tech)
- Agencias digitales que gestionan múltiples proyectos de clientes
- Equipos de producto y diseño UX/UI
- Consultoras y empresas de servicios con proyectos complejos
- Gerentes de proyecto que coordinan equipos multidisciplinarios
- Freelancers que manejan proyectos con clientes

### ¿Qué problema resuelve?

Los equipos pequeños no necesitan Jira. Es demasiado complejo, costoso y rígido para startups y agencias. Las hojas de Excel son lo opuesto: demasiado simples, sin visibilidad de dependencias y sin soporte para trabajo en equipo.

Este template vive en el punto exacto del medio: toda la potencia de la gestión ágil, con la simplicidad y personalización de Notion.

---

## Qué incluye

### Bases de datos incluidas

#### 1. Proyectos `🎯`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre del proyecto | Título | Nombre del proyecto |
| Descripción | Texto | Qué es, objetivo principal |
| Cliente | Relación | Vinculado a Clientes (si aplica) |
| Tipo | Select | Desarrollo / Diseño / Marketing / Consultoría / Interno |
| Estado | Select | Por iniciar / En curso / En pausa / Completado / Cancelado |
| Prioridad | Select | 🔴 Crítico / 🟠 Alto / 🟡 Medio / 🟢 Bajo |
| Fecha de inicio | Fecha | Cuándo empezó |
| Fecha de entrega | Fecha | Deadline del proyecto |
| Sprints del proyecto | Relación | Vinculado a Sprints |
| Equipo asignado | Personas | Miembros del equipo |
| Product Owner | Persona | Responsable del producto |
| Tech Lead | Persona | Líder técnico |
| Progreso | Fórmula | % de tareas completadas |
| Presupuesto total | Número | Horas o monto del proyecto |
| Horas consumidas | Rollup | Total de horas registradas |
| Margen restante | Fórmula | Presupuesto - Consumido |
| Repositorio | URL | Link al repo de código |
| Ambiente | URL | Link al ambiente de desarrollo/producción |
| Color del proyecto | Select | Para diferenciación visual |

#### 2. Sprints `⚡`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre del sprint | Título | Ej: Sprint 12 — Módulo de pagos |
| Proyecto | Relación | A qué proyecto pertenece |
| Número de sprint | Número | Correlativo del sprint |
| Objetivo del sprint | Texto | Meta específica en una oración |
| Fecha de inicio | Fecha | Lunes de inicio del sprint |
| Fecha de fin | Fecha | Viernes de fin del sprint |
| Duración | Fórmula | Días del sprint |
| Estado | Select | Planificado / En curso / Completado / Cancelado |
| Tareas del sprint | Relación | Vinculado a Backlog |
| Story points totales | Rollup | Suma de SP planeados |
| Story points completados | Rollup | SP de tareas Done |
| Velocidad | Fórmula | SP completados / SP planificados |
| Sprint Goal cumplido | Checkbox | ¿Se logró el objetivo? |
| Notas de planificación | Texto | Acuerdos de la sprint planning |
| Notas de retrospectiva | Texto | Aprendizajes del sprint |

#### 3. Backlog (Tareas) `📋`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Título de la tarea | Título | Descripción de la historia de usuario |
| Tipo | Select | Historia de usuario / Bug / Tarea técnica / Mejora / Epic |
| Proyecto | Relación | A qué proyecto pertenece |
| Sprint asignado | Relación | En qué sprint está |
| Estado | Select | Backlog / Por hacer / En progreso / En revisión / QA / Done |
| Prioridad | Select | Must have / Should have / Nice to have / Won't have |
| Story points | Select | 1 / 2 / 3 / 5 / 8 / 13 / 21 |
| Estimación en horas | Número | Horas estimadas |
| Horas reales | Número | Tiempo real invertido |
| Asignado a | Persona | Quién hace esta tarea |
| Revisor | Persona | Quién hace code review |
| Epic relacionada | Relación | La épica padre |
| Dependencias | Relación | Tareas que deben completarse antes |
| Descripción detallada | Texto | Criterios de aceptación |
| Criterios de aceptación | Texto | Definición de Done para esta tarea |
| Labels | Multi-select | frontend / backend / DB / infra / diseño / testing |
| PR / Commit | URL | Link al pull request o commit |
| Fecha de inicio real | Fecha | Cuándo comenzó el trabajo |
| Fecha de completado | Fecha | Cuándo se marcó como Done |
| Cycle time | Fórmula | Días desde inicio hasta Done |
| Bloqueada | Checkbox | Si está bloqueada por algo |
| Motivo de bloqueo | Texto | Por qué está bloqueada |

#### 4. Equipo `👥`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre | Título | Nombre del miembro |
| Rol | Select | Dev Frontend / Dev Backend / DevOps / QA / Diseñador / PM / PO |
| Nivel | Select | Junior / Mid / Senior / Lead / Manager |
| Email | Email | Correo de trabajo |
| Slack / Discord | Texto | Handle en canal de comunicación |
| GitHub | URL | Perfil de GitHub |
| Capacidad semanal | Número | Horas disponibles por semana |
| Tareas asignadas activas | Rollup | Tareas en curso |
| Story points en sprint | Rollup | Carga en el sprint actual |
| % Disponibilidad | Fórmula | Horas asignadas vs capacidad |
| Stack tecnológico | Multi-select | React / Node / Python / SQL / etc. |
| Proyectos activos | Rollup | En cuántos proyectos está |

#### 5. Épicas `🗺️`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre de la épica | Título | Nombre del feature grande |
| Proyecto | Relación | A qué proyecto pertenece |
| Descripción | Texto | Qué incluye esta épica |
| Historias relacionadas | Relación | Vinculado a Backlog |
| Total de tareas | Rollup | Número de tareas en la épica |
| Tareas completadas | Rollup | Cuántas están Done |
| Progreso | Fórmula | % de completitud |
| Prioridad | Select | Alta / Media / Baja |
| Fecha objetivo | Fecha | Cuándo debería estar lista |
| Estado | Select | Por iniciar / En curso / Completada |

#### 6. Retrospectivas `🔍`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Sprint | Relación | A qué sprint corresponde |
| Fecha de la retro | Fecha | Cuándo se realizó |
| ¿Qué salió bien? | Texto | Cosas positivas del sprint |
| ¿Qué mejorar? | Texto | Problemas identificados |
| Acciones de mejora | Texto | Compromisos concretos para siguiente sprint |
| Facilitador | Persona | Quien facilitó la retrospectiva |
| Participantes | Personas | Equipo presente |
| Satisfacción del equipo | Select | 😊 Alta / 😐 Media / 😔 Baja |
| Velocidad del sprint | Número | SP completados en el sprint |
| Impedimentos resueltos | Número | Bloqueadores que se levantaron |

---

## Vistas disponibles

### En el Backlog:
- **Tablero Kanban** — Vista principal por estado del trabajo
- **Backlog priorizado** — Tabla ordenada por prioridad para sprint planning
- **Sprint actual** — Filtro por sprint activo
- **Mis tareas** — Filtro por persona = yo
- **Bugs activos** — Filtro por tipo = Bug y estado ≠ Done
- **Tareas bloqueadas** — Filtro por Bloqueada = true
- **Vista por épica** — Agrupado por épica para roadmap
- **Timeline / Gantt** — Vista de fechas para dependencias
- **Sin asignar** — Tareas sin persona asignada

### En Sprints:
- **Lista de sprints** — Historial ordenado por fecha
- **Sprint en curso** — Filtro por estado = En curso
- **Progreso de sprints** — Vista con velocidad y % completitud
- **Calendario de sprints** — Vista de fechas en calendario

### En Proyectos:
- **Board de proyectos** — Kanban por estado
- **Por cliente** — Agrupado para ver proyectos de cada cliente
- **Timeline de proyectos** — Gantt para ver solapamientos
- **Carga de equipo** — Quién está en qué proyectos

---

## Dashboard principal

```
┌──────────────────────────────────────────────────────┐
│  SPRINT ACTUAL — Sprint 14: Módulo Dashboard         │
│  📅 15 Mar - 28 Mar 2025 | 11 días restantes        │
├──────────┬───────────┬─────────────┬────────────────┤
│ Por      │ En        │ En          │ Done           │
│ hacer    │ progreso  │ revisión    │                │
│ 8 tareas │ 5 tareas  │ 3 tareas    │ 12 tareas      │
├──────────┴───────────┴─────────────┴────────────────┤
│  Story Points: 28/45 completados (62%)              │
│  Velocidad proyectada: 42 SP (objetivo: 45)        │
│  Tareas bloqueadas: 2 🔴                            │
├──────────────────────────────────────────────────────┤
│  EQUIPO — CARGA ACTUAL                              │
│  Ana García    ██████░░░░ 65% (13/20 hrs)          │
│  Pedro López   ████████░░ 82% (16/20 hrs)          │
│  María Ruiz    ████░░░░░░ 40% (8/20 hrs)           │
└──────────────────────────────────────────────────────┘
```

---

## Fórmulas automáticas

### Progreso del proyecto:

```
Progreso proyecto = if(
  prop("Total tareas") > 0,
  round(prop("Tareas completadas") / prop("Total tareas") * 100),
  0
)

Días restantes = dateBetween(prop("Fecha de entrega"), now(), "days")

Semáforo deadline = if(
  prop("Estado") == "Completado", "✅ Entregado",
  if(prop("Días restantes") < 0, "🔴 Vencido",
  if(prop("Días restantes") <= 7, "🟡 Urgente", "🟢 En tiempo"))
)
```

### Velocidad del sprint:

```
Velocidad = if(
  prop("SP planificados") > 0,
  round(prop("SP completados") / prop("SP planificados") * 100),
  0
)

Estado del sprint = if(
  prop("Velocidad") >= 90, "🟢 Excelente",
  if(prop("Velocidad") >= 70, "🟡 Aceptable",
  if(prop("Velocidad") >= 50, "🟠 En riesgo", "🔴 Crítico"))
)
```

### Cycle time de tareas:

```
Cycle time = if(
  and(prop("Fecha inicio real") != empty, prop("Fecha completado") != empty),
  dateBetween(prop("Fecha completado"), prop("Fecha inicio real"), "days"),
  if(prop("Fecha inicio real") != empty, 
  dateBetween(now(), prop("Fecha inicio real"), "days"), 0)
)
```

### Carga del equipo:

```
% Carga = if(
  prop("Capacidad semanal") > 0,
  round(prop("Horas asignadas sprint") / prop("Capacidad semanal") * 100),
  0
)

Estado carga = if(
  prop("% Carga") > 100, "🔴 Sobrecargado",
  if(prop("% Carga") > 85, "🟡 Al límite", "🟢 Disponible")
)
```

---

## Automatizaciones

### Automatización 1: Asignación automática de sprint
- **Trigger:** Cambio de estado de tarea a "Por hacer"
- **Condición:** No tiene sprint asignado
- **Acción:** Asignar al sprint activo del proyecto

### Automatización 2: Notificación de tarea asignada
- **Trigger:** Campo "Asignado a" recibe un valor
- **Acción:** Notificar a la persona asignada

### Automatización 3: Alerta de tarea bloqueada
- **Trigger:** Checkbox "Bloqueada" = true
- **Acción:** Notificar al Tech Lead y al PM del proyecto

### Automatización 4: Creación de retrospectiva al cerrar sprint
- **Trigger:** Estado del sprint cambia a "Completado"
- **Acción:** Crear entrada de Retrospectiva vinculada al sprint

### Automatización 5: Alerta de deadline próximo
- **Trigger:** Diario
- **Condición:** Fecha de entrega del proyecto - 7 días
- **Acción:** Notificar al PM y Product Owner

---

## Instrucciones de uso

### Setup inicial paso a paso

**Paso 1: Crear el equipo (10 minutos)**

Ingresa cada miembro del equipo con su rol, nivel y capacidad semanal en horas. Esta información calibra las alertas de sobre-carga.

**Paso 2: Crear el proyecto o proyectos activos (5 minutos por proyecto)**

Por cada proyecto activo, crea una entrada con el objetivo, fechas y equipo asignado. Vincula al Product Owner y Tech Lead.

**Paso 3: Cargar el backlog inicial (1-2 horas)**

Esta es la inversión más grande del setup. Carga todas las historias de usuario, bugs y tareas conocidas en el backlog. Para cada una, mínimo:
- Título descriptivo en formato historia de usuario: "Como [rol], quiero [acción] para [beneficio]"
- Tipo (historia, bug, tarea técnica)
- Prioridad (MoSCoW)
- Story points estimados

**Paso 4: Planificar el primer sprint**

Haz una sprint planning: elige las tareas de mayor prioridad que el equipo puede completar en el período del sprint, considerando la capacidad total en story points. Asigna cada tarea a un miembro.

**Paso 5: Activar el flujo diario — Daily Standup**

En la daily (15 minutos), el equipo abre el tablero Kanban y revisa:
1. ¿Qué terminé ayer? (mueve tareas a Done)
2. ¿Qué hago hoy? (mueve tareas a En progreso)
3. ¿Hay algo que me bloquea? (marca como Bloqueada)

**Paso 6: Sprint Review y Retrospectiva**

Al final del sprint:
- Sprint Review: muestra al cliente/stakeholder lo que se completó
- Retrospectiva: usa la base de Retrospectivas para documentar aprendizajes
- Sprint Planning del siguiente: repite el paso 4

**Paso 7: Monitorear las métricas de velocidad**

Después de 3-4 sprints tendrás datos de velocidad del equipo. Usa esto para hacer estimaciones más realistas en las sprint plannings.

---

## Mejores prácticas

### 1. Escribe buenos criterios de aceptación
Una tarea sin criterios de aceptación claros siempre genera malentendidos entre desarrolladores y el cliente o product owner. Antes de poner una tarea "En progreso", debe tener al menos 3 criterios de aceptación verificables.

### 2. Mantén el backlog priorizado, no acumulado
Un backlog de 500 items sin priorizar no es un backlog, es una lista de deseos. El Product Owner debe revisar y priorizar el backlog al menos una vez por sprint. Todo lo que no tenga fecha clara de abordarse en los próximos 3 sprints, muévelo a una épica de "Future" y no contamines el backlog activo.

### 3. Respeta el sprint, no agregues tareas a mitad
Una de las reglas de oro de Scrum: el scope del sprint no cambia una vez iniciado (salvo emergencias reales). Si aparece algo urgente, va al backlog del siguiente sprint. Esto protege el foco del equipo.

### 4. Mide la velocidad pero no la uses para presionar
La velocidad en story points es para planificar mejor, no para presionar al equipo a hacer más. Un equipo que infla los story points para "parecer más productivo" destruye la utilidad de la métrica.

### 5. Haz las retrospectivas de verdad
Muchos equipos saltean la retrospectiva porque "no hay tiempo". Es el mayor error. 45 minutos de retrospectiva honestos al final de cada sprint generan más valor que 5 horas de trabajo adicional. El template incluye la estructura para hacerla eficiente: Qué salió bien / Qué mejorar / Compromisos concretos.

---

## Casos de uso

### Caso 1: Startup de fintech — equipo de 8 personas

**Empresa:** "PagoFácil", startup que desarrolla una app de pagos móviles.

**Situación:** Usaban Jira pero el 70% de las features del equipo no las usaban. Los tickets tenían 40 campos y nadie los llenaba. El PM perdía 3 horas semanales en "administrar Jira".

**Uso del template:**
- Backlog con campos esenciales (sin los 40 de Jira)
- Sprints de 2 semanas con objetivo claro
- Daily de 15 minutos con el tablero Kanban
- Retrospectivas quincenales documentadas

**Resultado:** El PM redujo el tiempo de administración de proyectos de 3 horas a 45 minutos semanales. El equipo reportó mayor satisfacción con el flujo de trabajo. La velocidad promedio aumentó un 20% porque las tareas tenían criterios de aceptación claros.

---

### Caso 2: Agencia digital — 5 clientes simultáneos

**Empresa:** "Digital Studio", agencia que desarrolla sitios y apps para clientes corporativos.

**Situación:** Manejaban 5 proyectos en paralelo con trello individual por proyecto. No había visión consolidada y constantemente sobrecomprometían al equipo.

**Uso del template:**
- Un workspace con todos los proyectos
- Vista de "Carga de equipo" muestra quién tiene capacidad disponible
- Los proyectos de clientes están claramente diferenciados por color
- Las reuniones de estado con clientes se preparan en 10 minutos con las vistas del proyecto

**Resultado:** Eliminaron el sobre-compromiso de recursos. El director vio por primera vez que tenían al equipo de frontend al 140% de capacidad, y contrataron un freelancer a tiempo. Los proyectos empezaron a entregarse en fecha por primera vez en años.

---

### Caso 3: Equipo de producto B2B SaaS — 12 personas

**Empresa:** "CRM Pro", empresa de software B2B con producto maduro y múltiples módulos.

**Situación:** Múltiples stakeholders (CEO, CTO, jefes de área de clientes) querían reportes de avance distintos. El PM dedicaba un día completo a preparar reportes semanales.

**Uso del template:**
- Los stakeholders tienen acceso de solo lectura al template
- Cada viernes el PM actualiza el estado del sprint (20 minutos)
- Los stakeholders revisan directamente sin necesidad de reunión
- Las reuniones de steering committee bajaron de semanales a mensuales

**Resultado:** El PM recuperó un día por semana. Los stakeholders tenían más visibilidad que antes y reportaron mayor confianza en el equipo.

---

## FAQ

**¿Es compatible con Scrum y con Kanban?**
Sí. El template soporta ambas metodologías. Para Kanban puro, ignora los Sprints y usa solo el Backlog con el tablero Kanban. Para Scrum, usa el flujo completo de Sprints + Planning + Retrospectivas.

**¿Qué diferencia tiene con Jira?**
Jira tiene funciones más potentes para equipos grandes (más de 50 personas): workflows personalizados, integraciones nativas con CI/CD, reportes automáticos de velocidad, etc. Este template es ideal para equipos de 3-30 personas que priorizan simplicidad y personalización sobre potencia bruta.

**¿Puedo integrarlo con GitHub o GitLab?**
No hay integración nativa con GitHub/GitLab. El campo "PR / Commit" es un link manual que creas cuando abres el PR. Para automatización bidireccional (que el PR actualice el estado en Notion automáticamente), necesitas Zapier/Make, que requiere configuración adicional.

**¿Cómo manejo proyectos de clientes que quieren ver el avance?**
Puedes compartir una vista de solo lectura del proyecto específico con el cliente. También puedes crear una "Vista Cliente" simplificada que muestre solo las épicas y su % de progreso, sin el detalle técnico interno.

**¿Se pueden hacer estimaciones en tiempo (horas) en lugar de story points?**
Sí. El template tiene campo de "Estimación en horas" además de story points. Puedes usar el que prefiera tu equipo, o ambos para comparar.

**¿Hay un límite de proyectos simultáneos?**
No hay límite técnico. En la práctica, equipos con más de 15 proyectos activos simultáneos pueden encontrar el tablero difícil de navegar. Recomendamos archivar proyectos completados periódicamente.

**¿Funciona para proyectos no tecnológicos?**
Perfectamente. El template se usa en producción para campañas de marketing, proyectos de arquitectura, lanzamientos de productos físicos y consultoría empresarial. Solo adapta los tipos de tarea y labels a tu contexto.

**¿Hay versión con soporte para OKRs integrados?**
El template de OKRs (Template 08) se puede vincular a este template para conectar tareas de sprint con resultados clave de la empresa. Si tienes ambos templates, incluimos una guía de integración.

---

## Soporte

**Email:** soporte@notionlatam.com
**WhatsApp Business:** +56 9 XXXX XXXX (Lun-Vie, 9:00-18:00 hora Chile)
**Comunidad Discord:** discord.gg/notionlatam
**Tutoriales en video:** youtube.com/@notionlatam (Serie Ágil: 9 videos)

### Workshops de metodología ágil
¿Tu equipo quiere aprender a trabajar con Scrum usando este template? Ofrecemos:
- **Workshop introductorio (2 horas):** $150 USD para el equipo completo
- **Coaching ágil mensual:** $200 USD/mes, 4 sesiones mensuales de 1 hora

---

*Última actualización: Abril 2025 | Versión 3.1*
*Compatible con Notion web, desktop y mobile*
