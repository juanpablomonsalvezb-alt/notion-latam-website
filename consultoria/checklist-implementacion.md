# Checklist de Implementación Notion
## Notion LATAM · 50 ítems · 5 fases

> Usar este checklist en cada proyecto de implementación. Cada ítem debe ser verificado y firmado por el consultor responsable antes de avanzar a la siguiente fase.

---

## FASE 1: DISCOVERY (10 ítems)

- [ ] **1.1** Enviar cuestionario pre-discovery al cliente (al menos 48h antes de la primera sesión)
- [ ] **1.2** Revisar respuestas del cuestionario y preparar preguntas de profundización específicas para el sector/industria del cliente
- [ ] **1.3** Realizar sesión de discovery (90 min): mapear todos los procesos actuales del cliente documentando flujo de trabajo actual (AS-IS)
- [ ] **1.4** Identificar y documentar los 3–5 dolores principales ordenados por impacto en el negocio
- [ ] **1.5** Listar todas las herramientas que usa el cliente actualmente y el propósito de cada una
- [ ] **1.6** Mapear roles del equipo: quiénes producen información, quiénes la consultan, quiénes la administran
- [ ] **1.7** Definir los KPIs o métricas que el cliente necesita ver de forma frecuente (semanal/mensual)
- [ ] **1.8** Identificar qué datos o información ya existen y necesitan migrarse a Notion
- [ ] **1.9** Acordar formalmente el alcance del proyecto en un documento de scope firmado por ambas partes
- [ ] **1.10** Crear carpeta del proyecto en el sistema interno con toda la documentación del discovery

---

## FASE 2: DISEÑO DE ARQUITECTURA (10 ítems)

- [ ] **2.1** Diseñar el mapa de arquitectura completo: jerarquía de páginas, bases de datos y sus relaciones
- [ ] **2.2** Definir el esquema de cada base de datos: nombre, propósito y listado de todas las propiedades con sus tipos
- [ ] **2.3** Mapear las relaciones entre bases de datos: qué BD se relaciona con qué BD y en qué dirección
- [ ] **2.4** Definir las vistas necesarias por rol (qué ve el manager vs qué ve el operativo vs qué ve el cliente)
- [ ] **2.5** Diseñar la estructura de permisos: quién tiene acceso a qué y con qué nivel (view, comment, edit)
- [ ] **2.6** Identificar los templates que necesitará el sistema (tareas recurrentes, reuniones, proyectos, etc.)
- [ ] **2.7** Documentar los flujos de automatización que se implementarán con las condiciones trigger/acción
- [ ] **2.8** Presentar el diseño de arquitectura al cliente para revisión y aprobación formal (no avanzar sin aprobación)
- [ ] **2.9** Incorporar los cambios solicitados por el cliente en el diseño revisado
- [ ] **2.10** Confirmar por escrito (email/mensaje) que el cliente aprueba el diseño y se puede proceder con la implementación

---

## FASE 3: IMPLEMENTACIÓN (15 ítems)

- [ ] **3.1** Crear la estructura de páginas maestras en el workspace del cliente siguiendo la arquitectura aprobada
- [ ] **3.2** Construir todas las bases de datos con sus propiedades, tipos y valores predefinidos (selects, multi-selects, etc.)
- [ ] **3.3** Configurar todas las relaciones entre bases de datos y verificar que funcionan correctamente en ambas direcciones
- [ ] **3.4** Crear las rollup properties necesarias para agregar datos entre bases de datos relacionadas
- [ ] **3.5** Configurar las fórmulas necesarias (fechas calculadas, estados derivados, prioridades automáticas, etc.)
- [ ] **3.6** Crear todas las vistas definidas en el diseño (tabla, board, calendario, timeline, galería, lista) con sus filtros y ordenamientos
- [ ] **3.7** Construir y probar todos los templates acordados (crear al menos 2 ejemplos reales en cada template)
- [ ] **3.8** Configurar las automatizaciones básicas nativas de Notion (si el cliente tiene Notion Plus/Business)
- [ ] **3.9** Implementar las automatizaciones externas (Zapier/Make) según los flujos definidos en la arquitectura
- [ ] **3.10** Conectar las integraciones con herramientas externas acordadas y verificar que fluyen datos correctamente
- [ ] **3.11** Configurar Notion AI según los prompts y casos de uso definidos para el cliente (si aplica)
- [ ] **3.12** Realizar migración de datos históricos del cliente al nuevo sistema (si está en el scope)
- [ ] **3.13** Construir el dashboard ejecutivo o página home con los KPIs del cliente usando linked databases
- [ ] **3.14** Ejecutar prueba completa del sistema: crear un caso real de trabajo en cada base de datos y seguirlo de inicio a fin
- [ ] **3.15** Documentar todas las decisiones de diseño y configuraciones especiales para el manual del sistema

---

## FASE 4: CAPACITACIÓN (10 ítems)

- [ ] **4.1** Preparar el plan de capacitación personalizado: contenido adaptado al sistema específico del cliente, no genérico
- [ ] **4.2** Preparar la guía de usuario del sistema (documento en Notion) organizada por rol con capturas de pantalla
- [ ] **4.3** Realizar la sesión de capacitación general para todo el equipo (máx. 90 min, grabar la sesión)
- [ ] **4.4** Realizar sesión de capacitación para managers/líderes: vistas avanzadas, dashboard, reportes, permisos
- [ ] **4.5** Si hay más de 2 departamentos con flujos distintos, realizar sesión separada por departamento
- [ ] **4.6** Crear cheat sheet de atajos de teclado y acciones más frecuentes del sistema (1 página imprimible)
- [ ] **4.7** Subir todas las grabaciones de capacitación al workspace del cliente en una sección de "Recursos de Capacitación"
- [ ] **4.8** Verificar que el 100% del equipo tiene acceso al workspace y puede navegar el sistema correctamente
- [ ] **4.9** Designar un "Notion Champion" interno del equipo del cliente (la persona que será el referente interno)
- [ ] **4.10** Enviar ejercicio práctico post-capacitación: pedir al equipo que complete una tarea real en el sistema dentro de las 24h siguientes

---

## FASE 5: ENTREGA Y CIERRE (5 ítems)

- [ ] **5.1** Entregar el manual completo del sistema (manual operativo + SOPs de los procesos implementados)
- [ ] **5.2** Realizar sesión de entrega oficial (30 min): revisar lo construido, confirmar que el cliente está conforme y firmar acta de entrega
- [ ] **5.3** Configurar y entregar el canal de soporte (Slack, WhatsApp o email dedicado) e informar los SLAs de respuesta
- [ ] **5.4** Enviar encuesta de satisfacción del proceso de implementación (NPS + preguntas abiertas)
- [ ] **5.5** Agendar check-in de seguimiento a los 30 días para revisar adopción y resolver dudas pendientes

---

## NOTAS DEL PROYECTO

| Campo | Detalle |
|-------|---------|
| Cliente | |
| Consultor responsable | |
| Fecha de inicio | |
| Fecha de entrega | |
| Servicio contratado | Auditoría / Implementación / Enterprise |
| Número de personas en el equipo | |
| Herramientas integradas | |
| Automatizaciones implementadas | |
| Observaciones generales | |

---

*Notion LATAM — hello@notionlatam.com · notionlatam.com*
