# 💰 Sistema Financiero PyME

> **Precio:** $40 USD · `Español` · `Nivel: Intermedio` · `Categoría: Finanzas`

**Toma el control total de las finanzas de tu empresa sin contratar un contador a tiempo completo.**

---

## Descripción completa

### ¿Qué es este template?

El **Sistema Financiero PyME** es una solución integral de gestión financiera construida en Notion, diseñada específicamente para pequeñas y medianas empresas latinoamericanas que necesitan visibilidad clara sobre su dinero sin la complejidad de un ERP o software contable costoso.

Este template reemplaza las hojas de Excel desordenadas, los cuadernos con anotaciones y los archivos dispersos en distintos correos. Todo en un solo lugar: ingresos, gastos, facturas, presupuestos y flujo de caja proyectado.

### ¿Para quién es?

- Dueños de PyMEs con entre 1 y 50 empleados
- Emprendedores que acaban de formalizar su negocio
- Directores financieros que administran múltiples unidades de negocio
- Contadores que quieren una herramienta ágil para sus clientes
- Freelancers con facturación mensual superior a $1,000 USD

### ¿Qué problema resuelve?

El 78% de los dueños de PyMEs en Latinoamérica no sabe con exactitud cuánto dinero tiene disponible en este momento. Este template resuelve exactamente eso: visibilidad financiera en tiempo real, proyecciones automáticas y alertas cuando el flujo de caja se pone tenso.

**Sin este template:** Pierdes horas buscando facturas, no sabes si el mes fue rentable hasta que llega el contador, y las decisiones de inversión se toman "a ojo".

**Con este template:** En 5 minutos tienes el estado financiero de tu empresa, sabes exactamente qué facturas están pendientes, y puedes proyectar el flujo de caja para los próximos 3 meses.

---

## Qué incluye

### Bases de datos incluidas

#### 1. Ingresos `📈`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Concepto | Título | Descripción del ingreso |
| Monto | Número | Valor en moneda local |
| Fecha de ingreso | Fecha | Cuándo se recibió el pago |
| Categoría | Select | Ventas / Servicios / Intereses / Otros |
| Cliente | Relación | Vinculado a base de Clientes |
| Factura relacionada | Relación | Vinculado a Facturas |
| Método de pago | Select | Transferencia / Efectivo / Tarjeta / Cheque |
| Cuenta bancaria | Select | Banco 1 / Banco 2 / Caja |
| Estado | Select | Confirmado / Pendiente / Anulado |
| Mes | Fórmula | Extrae mes y año automáticamente |
| Trimestre | Fórmula | Q1 / Q2 / Q3 / Q4 automático |
| Notas | Texto | Observaciones adicionales |

#### 2. Gastos `📉`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Concepto | Título | Descripción del gasto |
| Monto | Número | Valor del gasto |
| Fecha | Fecha | Cuándo se realizó el pago |
| Categoría | Select | Arriendo / Salarios / Marketing / Servicios / Insumos / Impuestos / Otros |
| Proveedor | Relación | Vinculado a Proveedores |
| Factura recibida | Relación | Vinculado a Facturas |
| Tipo | Select | Fijo / Variable / Extraordinario |
| Deducible | Checkbox | ¿Es deducible de impuestos? |
| Comprobante | Archivo | Foto o PDF del comprobante |
| Aprobado por | Persona | Quién autorizó el gasto |
| Centro de costo | Select | Área o departamento |
| Mes | Fórmula | Extrae mes y año |

#### 3. Facturas `🧾`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Número de factura | Título | Folio o número correlativo |
| Tipo | Select | Emitida / Recibida |
| Cliente / Proveedor | Relación | Vinculado a Contactos |
| Monto neto | Número | Monto antes de impuestos |
| IVA / Impuesto | Número | Porcentaje o monto de impuesto |
| Monto total | Fórmula | Neto + Impuesto automático |
| Fecha de emisión | Fecha | Cuando se emitió |
| Fecha de vencimiento | Fecha | Plazo de pago |
| Estado | Select | Borrador / Enviada / Pagada / Vencida / Anulada |
| Días para vencer | Fórmula | Calcula días restantes o de atraso |
| PDF | Archivo | Documento de la factura |
| Ingreso relacionado | Relación | Vinculado a Ingresos |
| Gasto relacionado | Relación | Vinculado a Gastos |

#### 4. Flujo de Caja `💵`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Período | Título | Mes y año (ej: Enero 2025) |
| Saldo inicial | Número | Dinero al inicio del período |
| Ingresos reales | Rollup | Suma de ingresos del mes |
| Gastos reales | Rollup | Suma de gastos del mes |
| Saldo final real | Fórmula | Inicial + Ingresos - Gastos |
| Ingresos proyectados | Número | Estimación para el mes |
| Gastos proyectados | Número | Estimación para el mes |
| Saldo proyectado | Fórmula | Cálculo de saldo esperado |
| Variación | Fórmula | Real vs proyectado en % |
| Estado | Select | Cerrado / Abierto / Proyectado |
| Notas del período | Texto | Observaciones del mes |

#### 5. Presupuestos `📊`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre del presupuesto | Título | Ej: Presupuesto Q1 2025 |
| Período | Fecha | Rango de fechas del presupuesto |
| Área | Select | Ventas / Operaciones / Marketing / Admin |
| Monto presupuestado | Número | Lo que se planificó gastar |
| Monto ejecutado | Rollup | Lo que realmente se gastó |
| Porcentaje ejecución | Fórmula | Ejecutado / Presupuestado × 100 |
| Estado | Select | En curso / Cerrado / Excedido |
| Responsable | Persona | Quien maneja este presupuesto |
| Items relacionados | Relación | Gastos vinculados |

#### 6. Clientes `👥`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre | Título | Razón social o nombre |
| RUT / ID fiscal | Texto | Identificación tributaria |
| Email | Email | Correo de contacto |
| Teléfono | Teléfono | Número de contacto |
| Dirección | Texto | Dirección comercial |
| Total facturado | Rollup | Suma de facturas emitidas |
| Facturas pendientes | Rollup | Monto sin cobrar |
| Última factura | Rollup | Fecha de última transacción |
| Estado | Select | Activo / Inactivo / Bloqueado |

---

## Vistas disponibles

### En la base de Ingresos:
- **Tabla completa** — Vista por defecto con todos los campos
- **Por mes** — Agrupado por mes para ver evolución
- **Por categoría** — Agrupado por tipo de ingreso con totales
- **Pendientes** — Filtrado: estado = Pendiente
- **Galería de recibos** — Vista visual de comprobantes adjuntos

### En la base de Gastos:
- **Tabla completa** — Todos los gastos con filtros rápidos
- **Por categoría** — Agrupado y subtotalizado por área de gasto
- **Gastos fijos vs variables** — Filtro por tipo de gasto
- **Deducibles** — Solo gastos con checkbox deducible marcado
- **Tablero Kanban** — Por estado de aprobación
- **Por centro de costo** — Agrupado por departamento

### En la base de Facturas:
- **Todas las facturas** — Vista maestra
- **Facturas vencidas** — Filtro: fecha vencimiento < hoy y estado ≠ Pagada
- **Por vencer esta semana** — Alertas de vencimiento próximo
- **Emitidas vs Recibidas** — Filtro por tipo
- **Calendario de vencimientos** — Vista calendario por fecha de vencimiento

### En el Flujo de Caja:
- **Timeline anual** — Vista de todos los meses del año
- **Comparativo real vs proyectado** — Tabla con ambas columnas
- **Gráfico de tendencia** — Saldo mes a mes (vista galería con fórmulas)

---

## Dashboard principal

El dashboard ejecutivo muestra en tiempo real:

```
┌─────────────────────────────────────────────────┐
│  ESTADO FINANCIERO — [MES ACTUAL]               │
├──────────────┬──────────────┬───────────────────┤
│ Ingresos     │ Gastos       │ Resultado neto     │
│ del mes      │ del mes      │ del mes            │
│ $X,XXX       │ $X,XXX       │ $X,XXX ✅/⚠️      │
├──────────────┴──────────────┴───────────────────┤
│  Facturas pendientes de cobro: $X,XXX (N fact.) │
│  Facturas por pagar: $X,XXX (N fact.)           │
│  Saldo proyectado próximo mes: $X,XXX           │
├─────────────────────────────────────────────────┤
│  ALERTAS ACTIVAS                                │
│  🔴 3 facturas vencidas sin pago               │
│  🟡 2 facturas vencen en los próximos 7 días   │
│  🟢 Flujo de caja saludable este trimestre     │
└─────────────────────────────────────────────────┘
```

**Métricas del dashboard:**
- Ingresos del mes actual vs mes anterior (variación %)
- Gastos del mes actual vs mes anterior (variación %)
- Resultado neto (ingresos - gastos)
- Margen de utilidad bruta
- Facturas pendientes de cobro (aging 0-30, 30-60, +60 días)
- Facturas por pagar próximas 2 semanas
- Saldo de caja proyectado a 30 y 90 días
- Top 5 categorías de gasto del mes
- Top 5 clientes por ingresos

---

## Fórmulas automáticas

### Fórmulas en Facturas:

```
Monto total = prop("Monto neto") * (1 + prop("IVA %") / 100)

Días para vencer = dateBetween(prop("Fecha vencimiento"), now(), "days")

Estado automático = if(
  prop("Estado") != "Pagada" and prop("Días para vencer") < 0,
  "🔴 VENCIDA",
  if(prop("Días para vencer") <= 7, "🟡 POR VENCER", "🟢 Al día")
)
```

### Fórmulas en Flujo de Caja:

```
Saldo final real = prop("Saldo inicial") + prop("Ingresos reales") - prop("Gastos reales")

Variación vs proyectado = 
  round((prop("Saldo final real") - prop("Saldo proyectado")) 
  / prop("Saldo proyectado") * 100)

Semáforo de caja = if(
  prop("Saldo final real") > prop("Reserva mínima"),
  "🟢 Saludable",
  if(prop("Saldo final real") > 0, "🟡 Ajustado", "🔴 Déficit")
)
```

### Fórmulas en Ingresos/Gastos:

```
Mes = formatDate(prop("Fecha"), "YYYY-MM")

Trimestre = if(
  month(prop("Fecha")) <= 3, "Q1",
  if(month(prop("Fecha")) <= 6, "Q2",
  if(month(prop("Fecha")) <= 9, "Q3", "Q4"))
)

Año fiscal = year(prop("Fecha"))
```

### Fórmulas en Presupuestos:

```
% Ejecución = round(prop("Ejecutado") / prop("Presupuestado") * 100)

Saldo disponible = prop("Presupuestado") - prop("Ejecutado")

Estado alerta = if(
  prop("% Ejecución") > 100, "🔴 Excedido",
  if(prop("% Ejecución") > 85, "🟡 Por agotar", "🟢 En control")
)
```

---

## Automatizaciones

Este template incluye automatizaciones configuradas con Notion Automations (disponible en plan Plus y superior):

### Automatización 1: Alerta de factura vencida
- **Trigger:** Cada día a las 9:00 AM
- **Condición:** Fecha de vencimiento < Hoy y Estado ≠ Pagada
- **Acción:** Cambiar estado a "Vencida" + notificar al responsable

### Automatización 2: Recordatorio de cobro
- **Trigger:** Fecha de vencimiento = Hoy - 3 días
- **Condición:** Factura emitida con estado "Enviada"
- **Acción:** Crear tarea de seguimiento en base de tareas

### Automatización 3: Cierre mensual
- **Trigger:** Último día del mes
- **Condición:** Mes actual
- **Acción:** Crear entrada de Flujo de Caja para el mes siguiente con saldo inicial = saldo final del mes actual

### Automatización 4: Alerta de presupuesto
- **Trigger:** Al editar monto en Gastos
- **Condición:** % Ejecución de presupuesto relacionado > 85%
- **Acción:** Notificar al responsable del presupuesto

### Automatización 5: Duplicar presupuesto trimestral
- **Trigger:** Manual (botón)
- **Acción:** Duplicar presupuestos del trimestre anterior como plantilla para el nuevo trimestre

---

## Instrucciones de uso

### Setup inicial paso a paso

**Paso 1: Configurar tu empresa (5 minutos)**

Abre la página "⚙️ Configuración" y completa:
- Nombre de tu empresa
- Moneda principal (CLP, USD, EUR, MXN, etc.)
- Año fiscal de inicio
- Cuentas bancarias (hasta 5)
- Porcentaje de IVA aplicable
- Reserva mínima de caja (recomendado: 3 meses de gastos fijos)

**Paso 2: Cargar clientes y proveedores (10-20 minutos)**

Ve a la base de Clientes y carga al menos:
- Los 10 clientes que más te facturan
- Los 5 proveedores con pagos más frecuentes

Tip: Puedes importar desde CSV si ya tienes un listado en Excel.

**Paso 3: Registrar facturas pendientes (20-30 minutos)**

Antes de empezar a operar, carga todas las facturas que ya tienes:
- Facturas emitidas pendientes de cobro
- Facturas recibidas pendientes de pago
- Ajusta las fechas de vencimiento correctamente

**Paso 4: Cargar saldo inicial (5 minutos)**

En la base de Flujo de Caja, crea una entrada para el mes actual e ingresa el saldo inicial real de tu cuenta bancaria principal. Esto calibra todas las proyecciones.

**Paso 5: Registrar ingresos y gastos históricos (opcional, 30-60 minutos)**

Si quieres comparativos históricos, carga los últimos 3-6 meses de movimientos. Puedes importar desde CSV del banco o ingresarlo manualmente por mes.

**Paso 6: Configurar presupuestos (15 minutos)**

Crea un presupuesto para cada área principal de tu empresa con el monto mensual estimado. Esto activa el control de ejecución presupuestal automático.

**Paso 7: Compartir con tu equipo**

Comparte la página con:
- **Tu contador:** Acceso de solo lectura o comentarios a Facturas
- **Gerente de área:** Acceso de edición a su centro de costo
- **Asistente administrativo:** Acceso de edición a Gastos e Ingresos

---

## Mejores prácticas

### 1. Registra movimientos el mismo día
El mayor error es dejar acumular registros para el fin de semana. Dedica 3-5 minutos diarios a cargar ingresos y gastos del día. Con el tiempo se vuelve un hábito que toma menos de 2 minutos.

### 2. Usa las categorías de gasto consistentemente
Define desde el inicio cuáles son tus categorías y no las cambies. La consistencia permite comparar períodos: si en enero "publicidad" era "Marketing" y en febrero lo cambias a "Publicidad digital", los filtros no funcionarán bien.

### 3. Fotografía todos los comprobantes inmediatamente
Con la app de Notion en el móvil, fotografía cada boleta, factura o comprobante antes de archivarlo físicamente. Esto te ahorra horas de búsqueda en auditorías y revisiones del contador.

### 4. Revisa el dashboard cada lunes
Establece como ritual el "Lunes Financiero": 15 minutos revisando el estado financiero, las facturas que vencen esa semana y el saldo proyectado. Esto previene sorpresas desagradables.

### 5. Proyecta siempre a 90 días
No te quedes solo con el mes actual. Mantén actualizado el flujo de caja proyectado para los próximos 3 meses con los ingresos y gastos que ya conoces. Esto te permite tomar decisiones de inversión con datos reales.

---

## Casos de uso

### Caso 1: Consultora de Marketing Digital — 8 empleados

**Empresa:** "Pixel Agency", empresa de marketing con clientes en Chile y Colombia.

**Situación antes:** El dueño no sabía cuánto dinero real tenía hasta que el contador entregaba el estado financiero mensual (15 días después de cerrado el mes). Perdió un cliente importante porque no detectó a tiempo que la factura llevaba 45 días sin pagarse.

**Cómo usa el template:**
- Registra cada nuevo proyecto como ingreso proyectado cuando firma el contrato
- El contador del cliente carga las facturas emitidas directamente
- Revisa el dashboard todos los lunes (15 minutos)
- El asistente carga los gastos operativos diariamente

**Resultado:** Detecta facturas vencidas en promedio 3 días después del vencimiento (vs 45 días antes). Flujo de caja siempre visible. Tomó la decisión de contratar a un nuevo diseñador porque el flujo a 90 días mostraba que podía sostener el gasto.

---

### Caso 2: Importadora de productos electrónicos — 3 socios

**Empresa:** "TechImport SPA", importa gadgets desde China y los vende en Chile.

**Situación antes:** Los tres socios tenían versiones distintas de las finanzas porque cada uno llevaba sus propios Excel. Las discusiones en reuniones de directorio se alargaban porque nadie tenía los mismos números.

**Cómo usa el template:**
- Un solo sistema compartido para los tres socios
- Las órdenes de compra a proveedores chinos se registran como gastos proyectados
- El sistema de presupuestos controla el gasto por importación
- Los tres socios ven el mismo dashboard en tiempo real

**Resultado:** Las reuniones de directorio se redujeron de 3 horas a 45 minutos porque todos llegan con los mismos datos. Identificaron que el 30% de sus gastos en "Varios" en realidad eran comisiones bancarias, y negociaron mejores condiciones con el banco.

---

### Caso 3: Restaurante familiar — 12 empleados

**Empresa:** "La Cuisine de María", restaurante en Providencia, Santiago.

**Situación antes:** Los dueños no diferenciaban gastos fijos de variables. En los meses de baja temporada no sabían cuánto dinero mínimo necesitaban para sobrevivir.

**Cómo usa el template:**
- Todos los gastos están categorizados como Fijo / Variable / Extraordinario
- El flujo de caja proyectado les muestra el "piso mínimo" de caja necesario
- Las compras de insumos se registran por proveedor para detectar aumentos de precio
- Las facturas de proveedores de alimentos tienen fecha de vencimiento configurada

**Resultado:** En la baja temporada de julio ahorraron $2.3M CLP porque sabían exactamente qué gastos podían diferir. Identificaron que el proveedor de carnes había aumentado precios un 23% en 6 meses sin que nadie se diera cuenta.

---

## FAQ

**¿Necesito saber contabilidad para usar este template?**
No. El template está diseñado para personas sin formación contable. No usa jerga técnica y todas las fórmulas funcionan automáticamente. Si tienes dudas de si algo va en "Ingresos" o "Gastos", hay una guía incluida en la página de ayuda del template.

**¿Puedo usarlo con múltiples monedas?**
El template trabaja mejor con una sola moneda. Si tienes operaciones en dos monedas, puedes duplicar las bases de Ingresos y Gastos, una para cada moneda. En el roadmap de actualizaciones está planificado el soporte multi-moneda nativo.

**¿Qué pasa si tengo varias empresas o locales?**
Puedes duplicar el workspace completo para cada empresa. También puedes agregar una propiedad "Empresa" o "Local" a cada base de datos y usar filtros para segmentar por unidad de negocio.

**¿Funciona con el plan gratuito de Notion?**
El template funciona en todos los planes de Notion. Las automatizaciones incluidas requieren plan Plus ($10/mes) o superior. Las fórmulas y vistas funcionan en el plan gratuito.

**¿Puedo importar mis datos de Excel?**
Sí. Notion permite importar CSV. Puedes exportar tus datos de Excel como CSV y cargarlos en cada base de datos. Incluimos una guía de importación en la carpeta de recursos del template.

**¿Cuánto tiempo tarda el setup inicial?**
Para una empresa activa con historial, el setup toma entre 2 y 4 horas la primera vez. Después, el mantenimiento diario es de 5-10 minutos. Muchos usuarios invierten una tarde en la configuración inicial y desde entonces dedican menos de 30 minutos semanales.

**¿Puedo compartirlo con mi contador?**
Sí. Puedes compartir páginas específicas con tu contador con distintos niveles de acceso (solo lectura, comentarios o edición). No necesitas darle acceso a todo el workspace, solo a las páginas financieras relevantes.

**¿El template se actualiza?**
Sí. Los compradores tienen acceso a todas las actualizaciones futuras del template sin costo adicional. Cuando hay una nueva versión, recibes un correo con las instrucciones para incorporar los cambios.

---

## Soporte

### Canales de atención

**Email:** soporte@notionlatam.com
**Tiempo de respuesta:** Máximo 48 horas hábiles

**WhatsApp Business:** +56 9 XXXX XXXX
**Horario:** Lunes a viernes, 9:00 - 18:00 (hora Chile)

**Comunidad en Discord:** discord.gg/notionlatam
Únete a más de 2,000 usuarios de templates Notion en español. Comparte dudas, tips y casos de uso.

**Tutoriales en video:** youtube.com/@notionlatam
Serie de 8 videos de 10-15 minutos cubriendo cada sección del template.

### ¿Necesitas personalización?

Si necesitas adaptar el template a las necesidades específicas de tu empresa (integración con sistemas existentes, propiedades adicionales, flujos personalizados), ofrecemos sesiones de consultoría de implementación.

**Consultoría de implementación:** $150 USD / 2 horas
Incluye: Configuración inicial, carga de datos históricos, capacitación del equipo y 30 días de soporte prioritario.

---

*Última actualización: Abril 2025 | Versión 2.1*
*Compatible con Notion versión web, desktop y mobile*
