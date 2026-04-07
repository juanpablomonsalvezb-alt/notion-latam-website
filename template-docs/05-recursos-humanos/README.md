# 👥 Sistema de Recursos Humanos

> **Precio:** $50 USD · `Español` · `Nivel: Intermedio-Avanzado` · `Categoría: RRHH / Personas`

**Gestiona a tu equipo completo — desde el onboarding hasta las evaluaciones — con un sistema de RRHH diseñado para PyMEs de 10 a 50 personas.**

---

## Descripción completa

### ¿Qué es este template?

El **Sistema de RRHH** es una plataforma completa de gestión de personas construida en Notion, que cubre todo el ciclo de vida del empleado en tu organización: incorporación, información personal y laboral, gestión de vacaciones y licencias, evaluaciones de desempeño, documentos legales, capacitaciones y planes de desarrollo.

Es el equivalente de un software de RRHH dedicado, pero sin la complejidad de implementación ni las tarifas mensuales de soluciones como Workday, BambooHR o SAP HR.

### ¿Para quién es?

- Empresas con entre 10 y 50 empleados sin área de RRHH dedicada
- Gerentes generales que también gestionan a su equipo
- Jefaturas que necesitan visibilidad del estado de su departamento
- Empresas en crecimiento que quieren profesionalizar la gestión de personas
- Startups que están formalizando su operación de personas

### ¿Qué problema resuelve?

Cuando una empresa crece de 5 a 20 personas, la gestión de personas que antes era informal se vuelve caótica: nadie sabe cuántas vacaciones tiene cada quien, los documentos de contrato están en distintos computadores, las evaluaciones de desempeño nunca se hacen porque no hay sistema, y el onboarding de nuevos empleados es inconsistente.

Este template formaliza todos esos procesos sin requerir un sistema de RRHH enterprise costoso.

---

## Qué incluye

### Bases de datos incluidas

#### 1. Empleados `👤`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre completo | Título | Nombre del empleado |
| Foto | Archivo | Foto de perfil |
| RUT / ID | Texto | Identificación legal |
| Email corporativo | Email | Correo de trabajo |
| Email personal | Email | Correo personal |
| Teléfono | Teléfono | Número de contacto |
| WhatsApp | Teléfono | WhatsApp personal |
| Cargo | Texto | Título del cargo |
| Área / Departamento | Select | Ventas / Tecnología / Marketing / Admin / Operaciones / RRHH |
| Jefe directo | Relación | Vinculado a Empleados (mismo DB) |
| Reportes directos | Relación | Empleados que le reportan |
| Fecha de inicio | Fecha | Fecha de contratación |
| Antigüedad | Fórmula | Años y meses en la empresa |
| Tipo de contrato | Select | Indefinido / Plazo fijo / Honorarios / Part-time |
| Fecha fin contrato | Fecha | Para contratos a plazo fijo |
| Modalidad | Select | Presencial / Remoto / Híbrido |
| Días en oficina | Multi-select | Lunes / Martes / Miércoles / Jueves / Viernes |
| Salario bruto | Número | Remuneración mensual |
| Estado | Select | Activo / Con licencia / Vacaciones / Desvinculado |
| Fecha desvinculación | Fecha | Si aplica |
| Motivo desvinculación | Select | Renuncia / Despido / Fin contrato / Mutuo acuerdo |
| Días de vacaciones | Fórmula | Días acumulados por ley |
| Días usados | Rollup | Días de vacaciones tomados |
| Días disponibles | Fórmula | Acumulados - Usados |
| Ciudad | Select | Ciudad donde trabaja/vive |
| Dirección | Texto | Domicilio (para datos laborales) |
| Banco | Select | Banco para pago de sueldo |
| Cuenta bancaria | Texto | Número de cuenta |
| Tipo de cuenta | Select | Corriente / Vista / Ahorro |
| Contacto de emergencia | Texto | Nombre y teléfono |
| Seguro médico | Select | Fonasa / Isapre |
| AFP | Select | AFP del empleado |
| Nivel de estudios | Select | Básico / Medio / Técnico / Universitario / Postgrado |
| Carrera/Título | Texto | Título profesional |

#### 2. Vacaciones y Ausencias `🏖️`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Descripción | Título | Ej: Vacaciones anuales Juan Pérez |
| Empleado | Relación | Vinculado a Empleados |
| Tipo | Select | Vacaciones anuales / Licencia médica / Permiso sin goce / Permiso con goce / Día administrativo / Licencia parental |
| Fecha de inicio | Fecha | Primer día ausente |
| Fecha de retorno | Fecha | Primer día de regreso |
| Días hábiles | Número | Días hábiles ausentes |
| Estado | Select | Solicitada / Aprobada / Rechazada / Completada |
| Aprobada por | Persona | Jefe que aprobó |
| Motivo | Texto | Razón de la ausencia |
| Documento de respaldo | Archivo | Licencia médica, etc. |
| Cubierta por | Relación | Empleado que cubrirá |

#### 3. Evaluaciones de Desempeño `⭐`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Título de evaluación | Título | Ej: Evaluación Q4 2024 — María López |
| Empleado | Relación | Vinculado a Empleados |
| Período evaluado | Texto | Ej: Q3 2024 / Año 2024 |
| Tipo | Select | Trimestral / Semestral / Anual / 90 días / Por proyecto |
| Fecha de evaluación | Fecha | Cuándo se realizó |
| Evaluador | Persona | Quien conduce la evaluación |
| Calificación general | Select | 1-Insatisfactorio / 2-Regular / 3-Satisfactorio / 4-Bueno / 5-Excelente |
| Puntaje (1-100) | Número | Puntuación numérica |
| Desempeño en objetivos | Número | Puntaje 1-5 |
| Competencias técnicas | Número | Puntaje 1-5 |
| Habilidades blandas | Número | Puntaje 1-5 |
| Trabajo en equipo | Número | Puntaje 1-5 |
| Iniciativa / Proactividad | Número | Puntaje 1-5 |
| Puntaje promedio | Fórmula | Promedio de todas las dimensiones |
| Fortalezas identificadas | Texto | Qué hace bien |
| Áreas de mejora | Texto | Qué debe mejorar |
| Objetivos próximo período | Texto | Compromisos para el siguiente período |
| Comentarios del empleado | Texto | Autoevaluación o comentarios |
| Acuerdo de desarrollo | Texto | Plan de acción acordado |
| Firma del empleado | Checkbox | ¿Firmó el empleado? |
| Firma del evaluador | Checkbox | ¿Firmó el evaluador? |

#### 4. Documentos `📂`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre del documento | Título | Qué es este documento |
| Empleado | Relación | Vinculado a Empleados |
| Tipo | Select | Contrato / Addendum / Finiquito / Carta de aviso / Certificado / Licencia / Evaluación firmada / Otro |
| Archivo | Archivo | Documento adjunto |
| Fecha del documento | Fecha | Cuándo se emitió |
| Firmado | Checkbox | ¿Está firmado? |
| Fecha de firma | Fecha | Cuándo se firmó |
| Confidencial | Checkbox | Acceso restringido |
| Notas | Texto | Observaciones |

#### 5. Onboarding `🎉`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Tarea de onboarding | Título | Qué hay que hacer |
| Nuevo empleado | Relación | Para quién es este onboarding |
| Responsable | Persona | Quien ejecuta la tarea |
| Categoría | Select | Documentación / Accesos / Equipamiento / Presentaciones / Capacitación / Administrativo |
| Semana | Select | Semana 1 / Semana 2 / Semana 3 / Primer mes |
| Estado | Select | Pendiente / En progreso / Completado |
| Fecha límite | Fecha | Cuándo debe estar lista |
| Notas | Texto | Instrucciones específicas |
| Plantilla | Checkbox | Si es tarea del checklist estándar |

#### 6. Capacitaciones `📚`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre del curso | Título | Qué capacitación es |
| Empleado | Relación | Quién se capacitó o capacitará |
| Tipo | Select | Interna / Externa / Online / Presencial |
| Proveedor | Texto | Institución que imparte |
| Área temática | Select | Técnico / Liderazgo / Ventas / Compliance / Seguridad / Idiomas / Otro |
| Fecha inicio | Fecha | Cuándo empieza |
| Fecha fin | Fecha | Cuándo termina |
| Horas de duración | Número | Total de horas |
| Costo | Número | Precio de la capacitación |
| Estado | Select | Planificada / En curso / Completada / Cancelada |
| Certificado | Archivo | Certificado obtenido |
| Calificación | Número | Nota obtenida |
| Aplicabilidad | Texto | Cómo aplica al trabajo |

---

## Vistas disponibles

### En Empleados:
- **Directorio completo** — Tabla con todos los datos, filtros por área
- **Organigrama** — Vista galería con foto, cargo y jefe directo
- **Por área** — Agrupado por departamento
- **Cumpleaños del mes** — Filtro por mes de nacimiento
- **Contratos por vencer** — Contratos a plazo fijo próximos a vencer (30 días)
- **Vacaciones disponibles** — Ordenado por días disponibles
- **Tabla de sueldos** — Vista restringida con remuneraciones

### En Vacaciones:
- **Solicitudes pendientes** — Filtro por estado = Solicitada
- **Calendario de ausencias** — Vista calendario con todas las ausencias aprobadas
- **Por empleado** — Historial de vacaciones de cada persona
- **Ausentismo del mes** — Todos los que están o estuvieron ausentes este mes

### En Evaluaciones:
- **Todas las evaluaciones** — Historial completo
- **Evaluaciones pendientes** — Sin fecha o sin firma
- **Ranking de desempeño** — Ordenado por puntaje
- **Por trimestre** — Agrupado por período

### En Onboarding:
- **Checklist por empleado** — Filtrado por nuevo empleado
- **Tablero por semana** — Kanban por semana de onboarding
- **Tareas sin completar** — Pendientes o vencidos

---

## Dashboard principal

```
┌──────────────────────────────────────────────────────┐
│  ESTADO DEL EQUIPO — [MES ACTUAL]                    │
├──────────┬───────────┬──────────────┬───────────────┤
│ Empleados│ Activos   │ Ausentes hoy │ Nuevos        │
│ totales  │           │              │ este mes      │
│ 28       │ 24 (86%)  │ 4            │ 2             │
├──────────┴───────────┴──────────────┴───────────────┤
│  Vacaciones solicitadas pendientes: 3               │
│  Contratos a plazo fijo por vencer (30 días): 2    │
│  Evaluaciones de desempeño pendientes: 7           │
│  Capacitaciones en curso: 4                        │
├──────────────────────────────────────────────────────┤
│  ALERTAS                                             │
│  🎂 Cumpleaños esta semana: María Silva (martes)   │
│  📋 Evaluación Q1 pendiente para 7 empleados       │
│  📄 Contrato de Pedro Muñoz vence en 18 días       │
└──────────────────────────────────────────────────────┘
```

---

## Fórmulas automáticas

### Antigüedad del empleado:

```
Antigüedad años = floor(dateBetween(now(), prop("Fecha de inicio"), "days") / 365)

Antigüedad texto = if(
  prop("Antigüedad años") >= 1,
  format(prop("Antigüedad años")) + " año(s) y " + 
  format(floor(dateBetween(now(), prop("Fecha de inicio"), "days") % 365 / 30)) + " mes(es)",
  format(floor(dateBetween(now(), prop("Fecha de inicio"), "days") / 30)) + " mes(es)"
)
```

### Días de vacaciones acumulados (Ley chilena — 15 días hábiles por año):

```
Días acumulados = floor(
  dateBetween(now(), prop("Fecha de inicio"), "days") / 365 * 15
)

Días disponibles = prop("Días acumulados") - prop("Días usados")

Alerta vacaciones = if(
  prop("Días disponibles") > 30, "⚠️ Acumula muchos días",
  if(prop("Días disponibles") < 0, "🔴 Días en deuda", "🟢 Normal")
)
```

### Puntaje de evaluación:

```
Puntaje promedio = round(
  (prop("Desempeño objetivos") + prop("Competencias técnicas") + 
  prop("Habilidades blandas") + prop("Trabajo en equipo") + 
  prop("Iniciativa")) / 5 * 10
) / 10

Clasificación = if(
  prop("Puntaje promedio") >= 4.5, "⭐ Excepcional",
  if(prop("Puntaje promedio") >= 3.5, "🟢 Por encima del estándar",
  if(prop("Puntaje promedio") >= 2.5, "🟡 Cumple expectativas",
  if(prop("Puntaje promedio") >= 1.5, "🟠 Bajo expectativas", "🔴 Crítico")))
)
```

---

## Automatizaciones

### Automatización 1: Bienvenida a nuevo empleado
- **Trigger:** Nuevo registro en Empleados
- **Acción:** Crear checklist de onboarding completo (25 tareas estándar) vinculado al empleado

### Automatización 2: Alerta de contrato por vencer
- **Trigger:** Diario
- **Condición:** Fecha fin contrato - 30 días
- **Acción:** Notificar al jefe directo y a RRHH

### Automatización 3: Recordatorio de evaluación trimestral
- **Trigger:** Primer día de cada trimestre
- **Acción:** Crear tareas de evaluación para todos los empleados activos

### Automatización 4: Notificación de solicitud de vacaciones
- **Trigger:** Estado en Vacaciones cambia a "Solicitada"
- **Acción:** Notificar al jefe directo para aprobación

### Automatización 5: Cumpleaños del equipo
- **Trigger:** Semanal, lunes
- **Acción:** Notificar cumpleaños de la semana al canal del equipo

---

## Instrucciones de uso

### Setup inicial paso a paso

**Paso 1: Cargar la plantilla de onboarding (30 minutos)**

Antes de agregar empleados, personaliza el checklist de onboarding estándar con las tareas específicas de tu empresa. Cada empresa tiene pasos únicos. El template incluye 25 tareas generales; agrega, modifica o elimina las que no apliquen.

**Paso 2: Crear los perfiles de empleados existentes (1-3 horas)**

Carga a todos tus empleados actuales. Para cada uno:
- Datos personales básicos
- Cargo y área
- Fecha de inicio (para calcular antigüedad y vacaciones automáticamente)
- Tipo de contrato y fecha fin si aplica

Puedes importar desde una planilla Excel/CSV con los datos básicos.

**Paso 3: Cargar documentos históricos críticos**

Para cada empleado, sube al menos:
- Contrato de trabajo vigente
- Últimas evaluaciones de desempeño (si existen)

Esto centraliza la documentación legal importante.

**Paso 4: Registrar vacaciones históricas**

Para que el cálculo de días disponibles sea correcto, carga las vacaciones tomadas por cada empleado en el año en curso. Si no tienes el historial exacto, empieza desde el 1 de enero del año actual.

**Paso 5: Configurar la estructura del equipo**

Vincula cada empleado a su jefe directo en el campo correspondiente. Esto construye el organigrama automáticamente y activa las notificaciones de aprobación correctas.

**Paso 6: Programar el primer ciclo de evaluaciones**

Define cuándo harás la primera ronda de evaluaciones (recomendamos 90 días desde el inicio de uso del sistema). Usa la automatización de recordatorio trimestral.

**Paso 7: Compartir acceso con jefaturas**

Da acceso a cada jefe directo para que vea al menos la información de sus reportes directos. Configura permisos para que no puedan ver salarios de otras áreas.

---

## Mejores prácticas

### 1. Actualiza el estado del empleado inmediatamente
Cuando alguien toma vacaciones, entra con licencia o se desvincula, actualiza el campo "Estado" ese mismo día. El dashboard de equipo pierde sentido si el estado no está actualizado.

### 2. Haz las evaluaciones de desempeño, aunque sean informales
Muchas empresas pequeñas no hacen evaluaciones "porque no hay tiempo" o "porque nos conocemos todos". Error. Una conversación de 45 minutos al trimestre donde se revisan objetivos y se da retroalimentación honesta impacta directamente en la retención. El template hace que la evaluación sea simple y estructurada.

### 3. Usa el onboarding para todos, sin excepción
Un onboarding consistente reduce el tiempo que tarda un nuevo empleado en ser productivo. Si el checklist está bien armado, cualquier persona puede hacer el onboarding de un nuevo colega, no solo el gerente.

### 4. Mantén los datos de remuneración actualizados
El campo de salario bruto es sensible. Configura los permisos de Notion para que solo RRHH y gerencia tengan acceso a esa vista. Notion permite restringir el acceso por página, no por campo, así que crea una vista separada "Tabla de Remuneraciones" y compártela solo con quienes corresponda.

### 5. Documenta todo lo que firmas
Cada carta, addendum, modificación de contrato o acuerdo verbal importante debe tener un registro escrito en el template. En Chile especialmente, la documentación laboral tiene implicancias legales que pueden afectar a la empresa en una inspección del trabajo o en un proceso laboral.

---

## Casos de uso

### Caso 1: Empresa de servicios financieros — 22 empleados

**Empresa:** "Contacorp", empresa de contabilidad y asesoría tributaria.

**Situación:** Con 22 empleados, la gerente general manejaba RRHH informalmente. No había forma de saber cuántos días de vacaciones quedaban disponibles por empleado y las evaluaciones de desempeño no se hacían hace 2 años.

**Uso del template:**
- Todos los empleados cargados con sus fechas de inicio
- Vacaciones registradas desde enero 2024
- Ciclo de evaluaciones Q2 2024 completado por primera vez en años
- Contratos a plazo fijo monitoreados con alertas

**Resultado:** En la primera semana, detectaron que 3 empleados tenían más de 30 días de vacaciones acumuladas (riesgo legal en Chile). Tomaron medidas preventivas. Las evaluaciones mejoraron la comunicación entre jefaturas y empleados.

---

### Caso 2: Startup tecnológica — 15 personas en crecimiento

**Empresa:** "DataFlow", startup de analítica de datos que creció de 5 a 15 personas en 18 meses.

**Situación:** El crecimiento rápido hizo que los onboardings fueran inconsistentes: algunos llegaban con todos los accesos el primer día, otros esperaban semanas por sus credenciales. El ambiente de trabajo se deterioró por falta de estructura.

**Uso del template:**
- Checklist de onboarding estándar de 30 tareas
- Asignación automática al contratar un nuevo empleado
- Responsables claros para cada tarea (IT para accesos, admin para documentos)

**Resultado:** El tiempo promedio para que un nuevo empleado esté "completamente operativo" bajó de 3 semanas a 5 días. La satisfacción en el onboarding (medida en evaluación de 30 días) pasó de 6/10 a 8.5/10.

---

### Caso 3: Cadena de retail — 35 empleados, 3 locales

**Empresa:** "Tiendas Gómez", cadena familiar de tiendas de hogar con 3 locales.

**Situación:** Los 35 empleados estaban distribuidos en 3 locales con 3 jefes diferentes. Cada jefe manejaba a su gente con criterios distintos. Las vacaciones se otorgaban sin criterio central y generaban inequidades.

**Uso del template:**
- Estructura organizacional clara con 3 jefes de local + gerente general
- Política de vacaciones unificada y visible
- Evaluaciones semestrales con mismo formato para todos los locales
- Cada jefe solo ve a sus empleados directos (permisos configurados)

**Resultado:** Se eliminaron las quejas sobre trato diferenciado entre locales. La rotación de personal bajó un 25% el primer año, ahorrando costos de reclutamiento y capacitación.

---

## FAQ

**¿El sistema maneja el cálculo de finiquito?**
El template no hace el cálculo legal del finiquito (que depende de la legislación local y tiene cálculos específicos). Sí registra todos los datos necesarios para que tu contador o abogado laboral calcule el finiquito: fecha de inicio, remuneración, tipo de contrato, vacaciones pendientes.

**¿Puedo configurar distintos días de vacaciones por tipo de contrato?**
Sí. La fórmula de vacaciones usa 15 días hábiles por año (estándar chileno). Si tienes políticas distintas (ej: 20 días para seniors), puedes modificar la fórmula o agregar un campo "Días de vacaciones por año" personalizado por empleado.

**¿El template es compatible con la normativa laboral de otros países?**
El template base está configurado con la normativa chilena (vacaciones, tipo de contratos, AFP, Isapre). Las fórmulas y campos se pueden adaptar a Colombia, México, Argentina u otro país. Ofrecemos versiones específicas por país como personalización.

**¿Cómo protejo la información sensible de sueldos?**
Notion permite crear páginas separadas con permisos diferentes. Recomendamos que la vista con sueldos sea una página separada compartida solo con RRHH y gerencia. El resto del equipo puede acceder al directorio de empleados sin ver esa información.

**¿Puedo usar el template para gestionar freelancers o contratistas?**
Sí. Usa el tipo de contrato "Honorarios" y adapta los campos relevantes. Los freelancers no acumulan vacaciones, pero puedes usar el sistema para gestionar sus proyectos, documentos y pagos.

**¿El onboarding se puede personalizar por cargo o área?**
El template base tiene un checklist genérico. Para personalización por cargo (ej: onboarding diferente para desarrolladores vs. vendedores), crea múltiples plantillas de onboarding y aplica la correcta según el cargo del nuevo empleado.

**¿Puedo integrar esto con un sistema de nómina?**
El template gestiona la información de RRHH pero no calcula ni procesa nómina. Los datos del template (sueldos, ausencias, nuevos empleados) sirven de insumo para tu sistema de nómina existente (Excel, software contable, etc.).

**¿Hay plantillas de documentos incluidas?**
El template incluye páginas de referencia con modelos de: carta de amonestación, carta de acuerdo de objetivos, evaluación de desempeño formato Word. Estos documentos son referenciales y deben ser revisados por un abogado laboral antes de usarse.

---

## Soporte

**Email:** soporte@notionlatam.com
**WhatsApp Business:** +56 9 XXXX XXXX (Lun-Vie, 9:00-18:00 hora Chile)
**Comunidad Discord:** discord.gg/notionlatam
**Tutoriales en video:** youtube.com/@notionlatam (Serie RRHH: 8 videos)

### Consultoría de implementación RRHH
¿Necesitas ayuda para profesionalizar la gestión de personas en tu empresa?
- **Setup completo RRHH (3 horas):** $300 USD
- Incluye: Carga de datos, configuración de políticas, capacitación para jefaturas

---

*Última actualización: Abril 2025 | Versión 2.0*
*Compatible con Notion web, desktop y mobile*
*Notas legales: Las fórmulas de vacaciones y contratos son referenciales. Consulta siempre con un abogado laboral para tu país.*
