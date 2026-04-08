# Módulo 2: Bases de Datos en Notion
## Script completo para grabación — 60 minutos

> **Instrucciones de grabación**: Este módulo es denso en contenido. Grabar a ritmo más lento que el Módulo 1. Usar zoom en la pantalla cuando muestres propiedades y configuraciones. Mostrar ejemplos reales de negocios LATAM en cada lección.

---

## LECCIÓN 2.1 — Qué son las bases de datos, inline vs full page
### Duración: 12 minutos

---

**[INTRO — cámara en rostro, 45 segundos]**

Bienvenido al Módulo 2. Si el Módulo 1 fue la base, este es el momento en que Notion realmente cobra sentido.

Las bases de datos son lo que diferencia a Notion de un simple editor de notas. Son la herramienta que le da superpoderes a tus páginas y que permite gestionar proyectos, clientes, tareas y prácticamente cualquier tipo de información estructurada.

En este módulo vamos a explorar todo sobre las bases de datos: qué son, cómo crearlas, los tipos de propiedades, las vistas y los filtros. Al final del módulo vas a construir un sistema completo de gestión de tareas para tu equipo.

¿Listo? Entremos en materia.

**[TRANSICIÓN a pantalla]**

---

**[MOSTRAR PANTALLA — comparación hoja de cálculo vs Notion]**

¿Qué es una base de datos en Notion?

Piénsalo así: una base de datos en Notion es como una hoja de Excel que tiene superpoderes.

En Excel, tienes filas y columnas. Cada fila es un registro, cada columna es un campo de datos.

En Notion es igual, pero cada fila es una página completa de Notion. Esto significa que cada registro de tu base de datos puede contener documentos, imágenes, comentarios, checklists y cualquier otro bloque de Notion.

**[MOSTRAR PANTALLA — demostración visual]**

Mira este ejemplo: tengo una base de datos de "Proyectos". Cada fila es un proyecto. Pero cuando hago clic en un proyecto...

**[PAUSA — abrir una fila de la base de datos]**

...se abre una página completa donde puedo escribir el brief del proyecto, agregar imágenes, poner un checklist de tareas, etc.

Eso es lo que hace especial a Notion: la información estructurada (las columnas/propiedades) y el contenido libre (el cuerpo de la página) coexisten en el mismo lugar.

---

**[MOSTRAR PANTALLA — crear base de datos]**

**Cómo crear una base de datos:**

Hay tres formas:

**Forma 1**: Escribir `/database` en cualquier página y elegir el tipo

**Forma 2**: Ir al menú lateral, hacer clic en "+" y seleccionar "New database"

**Forma 3**: Convertir una lista de páginas existentes en una base de datos

Vamos a usar la Forma 1 porque es la más común en el día a día.

**[PAUSA — demostrar /database y explorar opciones]**

Al escribir `/database` aparecen múltiples opciones. Ves tipos como "Table", "Board", "Gallery", etc. Esos son los tipos de **vista**, no tipos diferentes de base de datos. Una misma base de datos puede mostrarse en todas esas vistas. Lo veremos en detalle en la Lección 2.3.

---

**[MOSTRAR PANTALLA — inline vs full page]**

Ahora una distinción muy importante: **inline vs full page**.

**Base de datos inline**: Vive dentro de una página, junto a otro contenido. Por ejemplo, puedes tener una página de "Reunión del lunes" y dentro de ella tener una pequeña base de datos de los action items.

**[PAUSA — demostrar base de datos inline]**

Para crear una inline, seleccionas cualquier tipo de base de datos del menú `/`.

**Base de datos full page**: Ocupa toda la pantalla. Cuando la abres, el 100% del espacio está dedicado a la base de datos.

**[PAUSA — demostrar base de datos full page]**

Para crear una full page, la creas desde la sidebar como una página nueva.

**¿Cuándo usar cuál?**

- **Inline**: Para bases de datos pequeñas que complementan una página de contenido (lista de tareas de una reunión, tabla de comparación, etc.)
- **Full page**: Para bases de datos principales del sistema (todos los proyectos, todos los clientes, todas las tareas del equipo)

Mi recomendación general: empieza con bases de datos full page. Son más fáciles de navegar y escalar.

---

**[MOSTRAR PANTALLA — linked database]**

Una funcionalidad muy poderosa que debes conocer desde el principio: el **Linked Database** (base de datos vinculada).

Una linked database no es una nueva base de datos, es una vista de una base de datos existente que insertas en otra página.

**[PAUSA — crear linked database]**

Por ejemplo: tengo una base de datos principal de todas las tareas del equipo. En mi página de dashboard personal, puedo crear una linked database que muestre solo MIS tareas. Es la misma información, solo filtrada.

Esto es fundamental para crear dashboards y vistas personalizadas sin duplicar información.

---

**[TRANSICIÓN — cámara en rostro]**

Perfecto. Ahora que entiendes qué son las bases de datos y la diferencia entre inline, full page y linked, en la siguiente lección vamos a explorar las propiedades: los diferentes tipos de datos que puedes guardar en cada columna.

---

## LECCIÓN 2.2 — Propiedades y tipos de datos
### Duración: 12 minutos

---

**[INTRO — cámara en rostro, 30 segundos]**

En la lección 2.2 vamos a explorar todos los tipos de propiedades que puedes tener en una base de datos de Notion.

Si las filas son los registros, las propiedades son las columnas. Y Notion tiene propiedades muy especiales que van mucho más allá del texto simple.

**[TRANSICIÓN a pantalla]**

---

**[MOSTRAR PANTALLA — base de datos con varias propiedades]**

Vamos a explorar cada tipo de propiedad. Para agregar una propiedad, haces clic en el "+" al lado de las columnas existentes.

**[PAUSA — demostrar cómo agregar propiedad]**

---

**[MOSTRAR PANTALLA — demostración de cada tipo de propiedad]**

### PROPIEDADES DE TEXTO Y NÚMERO

**Title (Título)**
La única propiedad obligatoria en todas las bases de datos. Es el nombre de cada registro. No se puede eliminar.

**Text (Texto)**
Texto libre sin estructura. Para descripciones, notas, URLs, cualquier contenido de texto.

**Number (Número)**
Números enteros o decimales. Puedes formatear cómo se muestra: como moneda, porcentaje, número con o sin decimales.
*Ejemplo real LATAM*: Precio de un proyecto en USD, horas estimadas, cantidad de unidades.

---

### PROPIEDADES DE SELECCIÓN

**Select (Selección única)**
Un campo de selección con opciones predefinidas en colores. Solo puede elegirse una opción a la vez.
*Ejemplo*: Estado de un proyecto (En progreso, Completado, En espera, Cancelado)

**Multi-select (Selección múltiple)**
Como Select pero puedes elegir varias opciones simultáneamente.
*Ejemplo*: Etiquetas de contenido (Blog, Redes sociales, Email, Video)

**Status (Estado)**
Similar a Select, pero con categorías predefinidas: Not started, In progress, Done. Tiene integración especial con vistas de proyectos.

---

### PROPIEDADES DE FECHA Y TIEMPO

**Date (Fecha)**
Un selector de fecha y hora. Puede incluir solo fecha, fecha+hora, o un rango de fechas (ideal para proyectos con fechas de inicio y fin).

**Created time / Last edited time**
Fechas automáticas que registran cuándo se creó o modificó el registro. No se pueden editar manualmente.

---

### PROPIEDADES DE PERSONAS

**Person (Persona)**
Asignar a un miembro del workspace a un registro.
*Ejemplo*: Responsable de una tarea, autor de un documento.

**Created by / Last edited by**
Quién creó o modificó el registro. Automáticos.

---

### PROPIEDADES DE RELACIÓN Y DATOS

**Relation (Relación)**
Conecta dos bases de datos diferentes. Es como una clave foránea en SQL.
*Ejemplo*: La base de datos de Tareas se relaciona con la base de datos de Proyectos. Cada tarea pertenece a un proyecto.

**[PAUSA — demostrar una relación entre dos BDs]**

**Rollup**
Agregación de datos desde una base de datos relacionada. Requiere tener una Relation configurada.
*Ejemplo*: En la base de datos de Proyectos, puedo tener una propiedad Rollup que cuenta cuántas Tareas tiene cada proyecto, o calcula el total de horas de todas las tareas.

---

### OTRAS PROPIEDADES IMPORTANTES

**Checkbox**
Un campo booleano (sí/no). 
*Ejemplo*: ¿Está aprobado? ¿Fue revisado? ¿Es urgente?

**URL**
Para guardar links. Los abre directamente en el navegador.

**Email / Phone**
Específicos para esos tipos de datos. Permiten hacer clic directo para contactar.

**Files & media**
Para adjuntar archivos, imágenes o documentos directamente en la propiedad.

**Formula**
Cálculos basados en otras propiedades. Los veremos en el cheat sheet de fórmulas del curso.
*Ejemplo simple*: `prop("Precio") * prop("Cantidad")` para calcular el total de una línea.

---

**[EJERCICIO — pausa de 2 minutos]**

Pausa el video. Crea una base de datos llamada "Proyectos" con estas propiedades:
1. Title: Nombre del proyecto
2. Status: En progreso / Completado / Pausado
3. Date: Fecha de entrega (rango de fechas)
4. Person: Responsable
5. Number: Presupuesto (en formato moneda)
6. Select: Prioridad (Alta / Media / Baja)

Agrega 3 proyectos de ejemplo con datos ficticios.

---

**[TRANSICIÓN — cámara en rostro]**

Muy bien. En la siguiente lección vamos a ver las vistas: las 6 formas diferentes de visualizar tu información en Notion.

---

## LECCIÓN 2.3 — Las 6 vistas: tabla, board, calendario, galería, timeline, lista
### Duración: 12 minutos

---

**[INTRO — cámara en rostro, 30 segundos]**

Una de las cosas más poderosas de Notion es que la misma base de datos puede mostrarse de 6 formas diferentes. Cada vista está diseñada para un caso de uso específico.

Imagina que tienes 50 proyectos en tu base de datos. A veces quieres verlos como una lista ordenada. A veces quieres ver cuáles están en qué estado. A veces quieres verlos en un calendario. La misma información, vistas distintas.

**[TRANSICIÓN a pantalla]**

---

**[MOSTRAR PANTALLA — base de datos con varias vistas]**

Para agregar una nueva vista a una base de datos, haces clic en el "+" al lado de las pestañas de vistas en la parte superior.

**[PAUSA — demostrar cómo agregar vista]**

---

**[MOSTRAR PANTALLA — Vista Tabla]**

### Vista 1: Tabla (Table)
La vista más clásica. Información en filas y columnas como una hoja de cálculo.

**Cuándo usarla**: Para editar datos, ver muchas propiedades a la vez, importar/exportar datos, hacer cálculos.

**Características especiales**:
- Puedes ordenar columnas haciendo clic en el encabezado
- Puedes cambiar el ancho de las columnas
- Puedes calcular totales, promedios, conteos en la fila de sumarios al fondo

**[PAUSA — demostrar estas características]**

---

**[MOSTRAR PANTALLA — Vista Board]**

### Vista 2: Board (Tablero Kanban)
Columnas verticales donde cada columna es un valor de una propiedad Select o Status.

**Cuándo usarla**: Para gestión de tareas (Por hacer → En progreso → Hecho), pipelines de ventas, flujos de trabajo con estados claros.

**Características especiales**:
- Arrastra tarjetas entre columnas para cambiar su estado
- Limita la cantidad de tarjetas visible por columna (WIP limits)
- Agrupa por cualquier propiedad Select o Status

**[PAUSA — demostrar drag & drop entre columnas]**

El tablero Kanban es uno de los usos más populares de Notion en equipos de desarrollo y agencias.

---

**[MOSTRAR PANTALLA — Vista Calendario]**

### Vista 3: Calendario (Calendar)
Vista de calendario mensual o semanal mostrando los registros por su fecha.

**Cuándo usarla**: Calendarios editoriales, deadlines de proyectos, scheduling de contenido, eventos.

**Características especiales**:
- Arrastra eventos para cambiar su fecha
- Ve hasta 3 propiedades en las tarjetas del calendario
- Cambia entre vista mensual y semanal

**[PAUSA — demostrar la vista de calendario]**

Para que funcione, la base de datos debe tener al menos una propiedad de tipo Date.

---

**[MOSTRAR PANTALLA — Vista Galería]**

### Vista 4: Galería (Gallery)
Vista de tarjetas visuales donde la imagen de portada de cada registro es el elemento principal.

**Cuándo usarla**: Portfolio de trabajos, catálogo de productos, base de perfiles, recursos visuales.

**Características especiales**:
- Muestra la imagen de portada o una propiedad de imagen como preview
- Ajusta el tamaño de las tarjetas (pequeño, mediano, grande)
- Ideal para proyectos donde la imagen es el identificador

**[PAUSA — demostrar galería con proyectos visuales]**

---

**[MOSTRAR PANTALLA — Vista Timeline]**

### Vista 5: Timeline (Línea de tiempo / Gantt)
Vista de diagrama de Gantt que muestra los registros en una línea de tiempo.

**Cuándo usarla**: Planificación de proyectos, roadmaps de producto, cronogramas de campañas.

**Características especiales**:
- Requiere una propiedad de fecha con rango (inicio y fin)
- Puedes agrupar por departamento, persona o proyecto
- Zoom de días, semanas, meses o años

**[PAUSA — demostrar timeline con proyectos que tienen fechas de inicio y fin]**

Esta vista es la favorita de project managers y directores de operaciones.

---

**[MOSTRAR PANTALLA — Vista Lista]**

### Vista 6: Lista (List)
La más simple: una lista limpia de registros con propiedades esenciales.

**Cuándo usarla**: Listas de tareas simples, wikis, recursos, lecturas pendientes.

**Características especiales**:
- Muy limpia visualmente, ideal para contenido
- Muestra pocas propiedades para no saturar
- Perfecta para búsquedas rápidas en bases de datos grandes

**[PAUSA — demostrar vista lista]**

---

**[MOSTRAR PANTALLA — tabla comparativa de cuándo usar cada vista]**

Para recordar cuándo usar cada vista:

| Vista | Mejor para... |
|-------|--------------|
| Tabla | Editar datos, ver muchas propiedades |
| Board | Estados de trabajo, pipelines |
| Calendario | Fechas, scheduling, eventos |
| Galería | Proyectos visuales, catálogos |
| Timeline | Proyectos con duración, roadmaps |
| Lista | Listas simples, wikis |

---

**[TRANSICIÓN — cámara en rostro]**

Ya dominas todas las vistas. En la siguiente lección vamos a ver cómo usar filtros, ordenamiento y búsqueda para encontrar exactamente lo que necesitas en tus bases de datos.

---

## LECCIÓN 2.4 — Filtros, ordenamiento y búsqueda avanzada
### Duración: 12 minutos

---

**[INTRO — cámara en rostro, 30 segundos]**

¿De qué sirve tener toda tu información en Notion si no puedes encontrarla rápidamente? En esta lección aprendemos a usar filtros y ordenamiento para convertir una base de datos grande en vistas exactas de la información que necesitas.

**[TRANSICIÓN a pantalla]**

---

**[MOSTRAR PANTALLA — base de datos con muchos registros]**

Imagina que tienes una base de datos de 200 tareas del equipo. Sin filtros, ves todo. Con filtros, puedes crear una vista que muestre solo:

- Las tareas que me están asignadas a mí
- Las tareas con fecha de entrega esta semana
- Las tareas con prioridad alta que no están terminadas

Eso es el poder de los filtros. Vamos a aprenderlos.

---

**[MOSTRAR PANTALLA — agregar filtro]**

**Cómo agregar un filtro:**

Haz clic en "Filter" en la barra de herramientas de la base de datos.

**[PAUSA — demostrar el botón de filtro]**

Se abre un panel donde puedes agregar condiciones de filtro.

**Estructura de un filtro:**
```
[Propiedad] [Condición] [Valor]
```

Por ejemplo:
- `Status` `is` `In progress`
- `Assigned to` `contains` `@me`
- `Due date` `is before` `end of this week`
- `Priority` `is not` `Low`

**[PAUSA — demostrar creando filtros uno por uno]**

---

**[MOSTRAR PANTALLA — filtros avanzados con AND/OR]**

**Filtros combinados con AND / OR:**

Puedes combinar múltiples condiciones:

**AND**: Todos los criterios deben cumplirse
*Ejemplo*: Status = "In progress" AND Assigned = "Juan Pablo"
→ Muestra las tareas EN PROGRESO que están asignadas a Juan Pablo

**OR**: Al menos uno de los criterios debe cumplirse
*Ejemplo*: Status = "In progress" OR Status = "Not started"
→ Muestra las tareas que NO están completadas

**[PAUSA — demostrar filtro AND y filtro OR]**

---

**[MOSTRAR PANTALLA — filtros en grupos]**

Los filtros más avanzados usan grupos para combinar ANDs y ORs de forma compleja.

*Ejemplo avanzado*:
(Priority = "High" OR Priority = "Medium") AND Status ≠ "Done" AND Due date < "Today"
→ Tareas urgentes o importantes, que no están terminadas, con fecha vencida

**[PAUSA — demostrar grupos de filtros]**

---

**[MOSTRAR PANTALLA — ordenamiento]**

**Ordenamiento (Sort):**

El ordenamiento controla en qué orden se muestran los registros.

Haz clic en "Sort" en la barra de herramientas.

**[PAUSA — demostrar Sort]**

Puedes ordenar por cualquier propiedad:
- Por fecha de creación (más recientes primero)
- Por prioridad (Alta, Media, Baja)
- Por nombre (A→Z o Z→A)
- Por número (mayor a menor)

Y puedes tener múltiples criterios de ordenamiento. Por ejemplo: primero por prioridad, y dentro de cada prioridad, por fecha de entrega.

---

**[MOSTRAR PANTALLA — búsqueda]**

**Búsqueda dentro de una base de datos:**

Haz clic en el ícono de lupa (Search) en la barra de herramientas.

**[PAUSA — demostrar búsqueda]**

Busca en el texto del title y del cuerpo de las páginas. Es útil para bases de datos grandes donde recuerdas algo del nombre pero no sabes exactamente dónde está.

---

**[MOSTRAR PANTALLA — búsqueda global]**

**Búsqueda global en todo el workspace:**

El atajo Cmd/Ctrl+P abre la búsqueda global que busca en TODO tu workspace: páginas, bases de datos, contenido de páginas.

**[PAUSA — demostrar la búsqueda global]**

También puedes escribir en la barra de la sidebar para filtrar las páginas que aparecen.

---

**[MOSTRAR PANTALLA — guardar vistas con filtros]**

**Guardar vistas personalizadas:**

La clave para aprovechar los filtros es guardarlos como vistas nombradas.

Cada vez que creas una vista nueva en una base de datos y le agregas filtros y ordenamiento, esa vista guarda esas configuraciones.

Por ejemplo, en mi base de datos de tareas podría tener:
- Vista "Mis tareas de hoy" (filtro: Asignado = yo, Fecha = hoy)
- Vista "Retrasadas" (filtro: Fecha < hoy, Status ≠ Done)
- Vista "En progreso del equipo" (filtro: Status = In progress)
- Vista "Backlog" (filtro: Status = Not started, Priority = Medium/Low)

**[PAUSA — demostrar creando vistas nombradas con filtros guardados]**

---

**[EJERCICIO — pausa de 2 minutos]**

En la base de datos de Proyectos que creaste en la lección 2.2, crea estas 2 vistas:

1. **"Activos"**: Filtro Status = "En progreso", ordenados por fecha de entrega (más cercana primero)
2. **"Esta semana"**: Filtro fecha de entrega = esta semana, Status ≠ Completado

---

**[TRANSICIÓN — cámara en rostro]**

¡Excelente! Ahora vamos al proyecto práctico final que integra todo lo del módulo: construir un sistema completo de gestión de tareas para un equipo.

---

## LECCIÓN 2.5 — Proyecto práctico: sistema de gestión de tareas completo
### Duración: 12 minutos

---

**[INTRO — cámara en rostro, 45 segundos]**

Llegamos al proyecto más importante del módulo. Vamos a construir desde cero un sistema de gestión de tareas y proyectos para un equipo.

Este sistema es la base de lo que cualquier empresa necesita en Notion. Cuando lo termines, vas a entender cómo se conectan todos los conceptos que vimos en este módulo.

El sistema que construiremos tiene dos bases de datos principales:
1. **Proyectos**: La base de datos de todos los proyectos activos e históricos
2. **Tareas**: La base de datos de todas las tareas, relacionada con Proyectos

Vamos a construirlo paso a paso.

**[TRANSICIÓN a pantalla]**

---

**[MOSTRAR PANTALLA — crear estructura]**

**Paso 1: Crear la página principal**

Primero creo una página llamada "Sistema de Proyectos" o "Gestión Operativa". Esta va a ser la página contenedora de todo.

**[PAUSA — crear página]**

---

**[MOSTRAR PANTALLA — crear BD de proyectos]**

**Paso 2: Base de datos de Proyectos**

Escribo `/database` → Full page database

La llamo "Proyectos". Aquí están las propiedades que agrego:

| Propiedad | Tipo | Opciones |
|-----------|------|----------|
| Nombre | Title | — |
| Estado | Status | Sin iniciar / En progreso / Completado / Pausado |
| Prioridad | Select | 🔴 Alta / 🟡 Media / 🟢 Baja |
| Cliente | Text | — |
| Responsable | Person | — |
| Fecha inicio | Date | — |
| Fecha entrega | Date | — |
| Presupuesto | Number | Formato: moneda ($) |
| Progreso | Number | Formato: porcentaje (0–100%) |

**[PAUSA — construir la BD de proyectos en pantalla]**

Ahora agrego 3–5 proyectos de ejemplo con datos ficticios pero realistas.

---

**[MOSTRAR PANTALLA — crear BD de tareas]**

**Paso 3: Base de datos de Tareas**

Creo otra base de datos llamada "Tareas". Sus propiedades:

| Propiedad | Tipo | Opciones |
|-----------|------|----------|
| Tarea | Title | — |
| Estado | Status | Pendiente / En progreso / En revisión / Completado |
| Prioridad | Select | 🔴 Alta / 🟡 Media / 🟢 Baja |
| Proyecto | Relation | → Proyectos (relación con la BD de Proyectos) |
| Responsable | Person | — |
| Fecha límite | Date | — |
| Estimación | Number | Formato: horas |
| Etiquetas | Multi-select | Diseño / Desarrollo / Contenido / Marketing / Admin |

**[PAUSA — construir la BD de tareas en pantalla]**

Ahora creo la relación entre Tareas y Proyectos.

**[PAUSA — demostrar creación de Relation]**

Cuando creo una propiedad de tipo Relation y la apunto a la BD Proyectos, puedo ver en la BD Proyectos todas las tareas asociadas a cada proyecto.

Agrego 5–10 tareas de ejemplo y las asigno a diferentes proyectos.

---

**[MOSTRAR PANTALLA — agregar Rollup en Proyectos]**

**Paso 4: Rollup en Proyectos**

Ahora que hay relación entre Proyectos y Tareas, en la BD Proyectos agrego propiedades Rollup:

1. **Total tareas**: Rollup de Tareas → Count all
2. **Tareas completadas**: Rollup de Tareas → Count values where Status = "Completado"

**[PAUSA — configurar rollups]**

Esto me da visibilidad instantánea del avance de cada proyecto.

---

**[MOSTRAR PANTALLA — crear vistas en BD de Tareas]**

**Paso 5: Configurar las vistas**

En la BD de Tareas, creo las siguientes vistas:

**Vista Board "Kanban"**: Agrupado por Estado. Para que el equipo arrastre tareas entre columnas.

**Vista Calendar "Calendario de entregas"**: Por propiedad Fecha límite. Para visualizar qué vence cuándo.

**Vista Table "Todas las tareas"**: Sin filtros, todas las tareas ordenadas por fecha límite.

**Vista Table "Mis tareas"**: Filtro Responsable = Me, Estado ≠ Completado, ordenado por Prioridad.

**[PAUSA — crear las cuatro vistas]**

---

**[MOSTRAR PANTALLA — crear el dashboard]**

**Paso 6: Dashboard de la página principal**

Vuelvo a la página "Sistema de Proyectos" y creo el dashboard:

1. Inserto una linked database de Proyectos mostrando los proyectos activos
2. Inserto una linked database de Tareas mostrando "Mis tareas"
3. Agrego un callout con los objetivos del trimestre
4. Agrego algunos bookmarks a recursos importantes

**[PAUSA — construir el dashboard]**

---

**[MOSTRAR PANTALLA — sistema terminado]**

**¡El sistema está listo!**

Repasemos lo que construimos:
- 2 bases de datos con propiedades completas
- Relación bidireccional entre Tareas y Proyectos
- Rollups para ver el avance de proyectos
- 4 vistas diferentes de tareas
- Dashboard principal que muestra la información más relevante

Este es el sistema que tiene el 80% de lo que necesita cualquier equipo. En el Módulo 3 vamos a aprender a automatizarlo y optimizarlo.

---

**[EJERCICIO FINAL — pausa de 15 minutos]**

Construye tu versión del sistema. Usa proyectos y tareas reales de tu trabajo. Cuando termines, comparte una captura de pantalla de tu sistema en la comunidad del curso.

---

**[CÁMARA EN ROSTRO — cierre del módulo]**

¡Felicitaciones! Terminaste el Módulo 2 y ya tienes un sistema funcional de gestión de proyectos.

Resumiendo lo que aprendiste:
- Las bases de datos en Notion son páginas con superpoderes
- Hay 10+ tipos de propiedades para estructurar tu información
- Las 6 vistas te dan perspectivas diferentes de los mismos datos
- Los filtros y ordenamientos convierten una BD en múltiples herramientas
- Y un sistema de Proyectos + Tareas relacionadas es la base de cualquier operación

En el Módulo 3 vamos a ver automatizaciones, integraciones con otras herramientas y Notion AI. 

¡Nos vemos ahí!

---

*Script Módulo 2 — Notion LATAM · hello@notionlatam.com*
