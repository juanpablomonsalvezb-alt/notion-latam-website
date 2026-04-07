# 🧾 Facturación y SII Chile

> **Precio:** $55 USD · `Español` · `Nivel: Avanzado` · `Categoría: Finanzas / Contabilidad / Chile`

**El único template de Notion diseñado específicamente para la tributación chilena: F29, Libro de Compras/Ventas, y control total de tu facturación electrónica.**

---

## Descripción completa

### ¿Qué es este template?

El **Sistema de Facturación y SII Chile** es un template especializado para empresas chilenas que necesitan llevar un control ordenado de su facturación electrónica, libros contables de IVA y declaraciones tributarias, todo integrado con el flujo operativo del día a día del negocio.

Está diseñado como complemento a las facturas electrónicas emitidas en el portal del SII o en un software de facturación. El template no reemplaza al SII, sino que te da la visibilidad, el control y la organización que el portal del SII no tiene.

### ¿Para quién es?

- Empresas chilenas contribuyentes de IVA
- Personas naturales con inicio de actividades en el SII
- Pymes que quieren tener control de su situación tributaria
- Dueños de negocio que quieren entender sus declaraciones antes de dárselas al contador
- Contadores que trabajan con múltiples clientes y quieren un sistema organizado
- Empresas con alta transaccionalidad (más de 50 facturas mensuales)

### ¿Qué problema resuelve?

El portal del SII tiene muchas funciones pero poca inteligencia de gestión: no te dice fácilmente cuánto IVA debes este mes, no te alerta de facturas recibidas no acreditadas, y no te ayuda a planificar el pago del F29.

Este template cierra esa brecha: conecta el mundo del SII con tu gestión financiera diaria, y te prepara para el cierre del mes tributario sin sorpresas.

---

## Qué incluye

### Bases de datos incluidas

#### 1. Facturas Emitidas `📤`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Número de documento | Título | Folio de la factura (ej: F-000123) |
| Tipo de documento | Select | Factura electrónica / Boleta electrónica / Nota de crédito / Nota de débito / Factura de exportación / Liquidación |
| RUT receptor | Texto | RUT del cliente |
| Razón social receptor | Texto | Nombre del cliente |
| Fecha de emisión | Fecha | Fecha en el SII |
| Período tributario | Select | Ene 2025 / Feb 2025... etc. |
| Monto neto | Número | Base imponible sin IVA |
| IVA (19%) | Fórmula | Neto × 0.19 |
| Monto total | Fórmula | Neto + IVA |
| Estado de cobro | Select | Pendiente / Parcial / Pagada / Incobrable |
| Fecha de cobro | Fecha | Cuándo se pagó |
| Tipo de venta | Select | Afecta / Exenta / No afecta |
| Centro de costo | Select | Área de negocio |
| Descripción del servicio | Texto | Qué se facturó |
| PDF de la factura | Archivo | Documento adjunto |
| Notas | Texto | Observaciones |

#### 2. Facturas Recibidas `📥`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Número de documento | Título | Folio del proveedor |
| Tipo de documento | Select | Factura / Boleta / Nota de crédito / Nota de débito |
| RUT emisor | Texto | RUT del proveedor |
| Razón social emisor | Texto | Nombre del proveedor |
| Fecha de emisión | Fecha | Fecha del documento |
| Fecha de recepción | Fecha | Cuándo llegó a tu empresa |
| Período tributario | Select | Mes y año de acreditación |
| Monto neto | Número | Base imponible |
| IVA (19%) | Número | Monto de IVA en el documento |
| Monto total | Número | Total del documento |
| Acreditado como | Select | Crédito fiscal / Gasto sin crédito / Activo fijo / No acreditable |
| Estado de pago | Select | Pendiente / Pagada / En disputa |
| Fecha de pago | Fecha | Cuándo pagaste |
| Fecha de vencimiento | Fecha | Plazo máximo de pago |
| Días para vencer | Fórmula | Días restantes o de atraso |
| Categoría de gasto | Select | Arriendo / Personal / Servicios / Insumos / Publicidad / IT / Otro |
| PDF del documento | Archivo | Factura adjunta |
| Aceptada en SII | Checkbox | ¿Se aceptó en el portal del SII? |

#### 3. Libro de Compras `📖`

Vista/resumen mensual de las facturas recibidas. Cada entrada representa un período tributario.

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Período | Título | Ej: Enero 2025 |
| Mes-Año | Texto | Formato MM-AAAA para ordenar |
| Facturas recibidas | Rollup | Cantidad de documentos del mes |
| Total neto compras | Rollup | Suma de montos netos |
| Total IVA crédito | Rollup | Suma de IVA acreditable |
| Total no acreditable | Rollup | IVA no acreditable |
| Estado | Select | Abierto / Cerrado / Declarado |
| Fecha cierre | Fecha | Cuándo se cerró el libro |
| Notas del período | Texto | Observaciones tributarias |

#### 4. Libro de Ventas `📖`

Vista/resumen mensual de las facturas emitidas.

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Período | Título | Ej: Enero 2025 |
| Mes-Año | Texto | Formato MM-AAAA para ordenar |
| Facturas emitidas | Rollup | Cantidad de documentos |
| Total neto ventas | Rollup | Suma de montos netos |
| Total IVA débito | Rollup | Suma de IVA generado |
| Ventas exentas | Rollup | Monto de ventas exentas |
| Estado | Select | Abierto / Cerrado / Declarado |
| Fecha cierre | Fecha | Cuándo se cerró el libro |

#### 5. Declaraciones F29 `📋`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Período tributario | Título | Ej: F29 Enero 2025 |
| Fecha de vencimiento | Fecha | Fecha límite de declaración (generalmente 12 de cada mes) |
| IVA débito fiscal | Número | IVA de ventas del mes (del Libro de Ventas) |
| IVA crédito fiscal | Número | IVA de compras acreditable (del Libro de Compras) |
| IVA neto a pagar | Fórmula | Débito - Crédito |
| Remanente anterior | Número | Si quedó crédito del mes anterior |
| Total IVA a pagar | Fórmula | Neto - Remanente anterior |
| PPM (Pago Provisional) | Número | Si aplica PPM mensual |
| Retenciones aplicadas | Número | Retenciones que se rebajan |
| Total a pagar F29 | Fórmula | IVA + PPM - Retenciones |
| Estado | Select | Por preparar / En revisión / Declarada / Pagada / Con diferencias |
| Fecha de declaración | Fecha | Cuándo se declaró |
| Fecha de pago | Fecha | Cuándo se pagó |
| Número de folio | Texto | Folio de la declaración en SII |
| Monto pagado | Número | Lo que efectivamente se pagó |
| Diferencia | Fórmula | Calculado vs pagado |
| Notas del contador | Texto | Observaciones de tu contador |
| Comprobante de pago | Archivo | Voucher del pago |

#### 6. Clientes y Proveedores `👥`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Razón social | Título | Nombre legal |
| RUT | Texto | RUT o RUC |
| Tipo | Select | Cliente / Proveedor / Ambos |
| Giro comercial | Texto | Actividad económica |
| Email de facturación | Email | Para envío de documentos |
| Teléfono | Teléfono | Contacto |
| Dirección | Texto | Dirección comercial |
| Ciudad | Select | Santiago / Regiones / Internacional |
| Facturas emitidas | Rollup | Histórico de ventas |
| Facturas recibidas | Rollup | Histórico de compras |
| Saldo pendiente | Rollup | Facturas no pagadas |
| Condición tributaria | Select | Afecto a IVA / Exento / No contribuyente |
| Notas | Texto | Condiciones especiales |

#### 7. Retenciones y Honorarios `📄`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre del trabajador | Título | Quien emitió la boleta |
| RUT | Texto | RUT del trabajador |
| Mes | Select | Mes del honorario |
| Monto bruto | Número | Monto de la boleta de honorarios |
| Retención (%) | Número | Porcentaje de retención vigente |
| Monto retención | Fórmula | Bruto × Retención% |
| Monto a pagar | Fórmula | Bruto - Retención |
| Pagado | Checkbox | ¿Se pagó? |
| Fecha de pago | Fecha | Cuándo se liquidó |
| Declarado en F29 | Checkbox | ¿Se incluyó en la declaración? |

---

## Vistas disponibles

### En Facturas Emitidas:
- **Todas las facturas** — Vista tabla completa
- **Por cobrar** — Estado de cobro ≠ Pagada
- **Facturas del mes** — Filtro por período tributario actual
- **Por cliente** — Agrupado por razón social receptor
- **Calendario de cobros** — Vista calendario por fecha de cobro esperada
- **Notas de crédito** — Filtro por tipo = Nota de crédito

### En Facturas Recibidas:
- **Por pagar** — Estado de pago ≠ Pagada
- **Por vencer esta semana** — Alertas de pago
- **Por acreditar** — Aceptada en SII = No
- **Por período** — Agrupado por mes para el libro
- **Por proveedor** — Historial por proveedor

### En Declaraciones F29:
- **Línea de tiempo** — Todos los F29 ordenados
- **Pendientes** — Estado ≠ Declarada o Pagada
- **Análisis anual** — Comparativo mes a mes del IVA a pagar

---

## Dashboard tributario principal

```
┌──────────────────────────────────────────────────────┐
│  SITUACIÓN TRIBUTARIA — [MES ACTUAL]                 │
├──────────────┬──────────────┬────────────────────────┤
│ IVA Débito   │ IVA Crédito  │ IVA estimado a pagar   │
│ (ventas)     │ (compras)    │ este mes               │
│ $X,XXX,XXX  │ $X,XXX,XXX  │ $XXX,XXX               │
├──────────────┴──────────────┴────────────────────────┤
│  Próximo F29: vence el 12 de [mes siguiente]        │
│  Estado: 🟡 Preparando — 8 días hábiles             │
├──────────────────────────────────────────────────────┤
│  FACTURAS EMITIDAS DEL MES                          │
│  Total: $XX,XXX,XXX neto | 48 facturas             │
│  Por cobrar: $X,XXX,XXX (12 facturas)              │
│                                                      │
│  FACTURAS RECIBIDAS DEL MES                         │
│  Total: $XX,XXX,XXX neto | 32 facturas             │
│  Por pagar: $X,XXX,XXX (8 facturas)                │
│  Sin aceptar en SII: 3 facturas ⚠️                 │
└──────────────────────────────────────────────────────┘
```

---

## Fórmulas automáticas

### Cálculo de IVA automático:

```
IVA de factura = round(prop("Monto neto") * 0.19)

Monto total = prop("Monto neto") + prop("IVA")
```

### F29 — IVA neto a pagar:

```
IVA neto = prop("IVA débito fiscal") - prop("IVA crédito fiscal")

Total F29 = max(
  prop("IVA neto") - prop("Remanente anterior") + prop("PPM") - prop("Retenciones"),
  0
)

Remanente a siguiente mes = max(
  prop("IVA crédito fiscal") - prop("IVA débito fiscal"),
  0
)

Semáforo F29 = if(
  prop("Total F29") > 1000000, "🔴 Alto pago",
  if(prop("Total F29") > 0, "🟡 Pago normal",
  if(prop("Remanente a siguiente mes") > 0, "🟢 Remanente de crédito", "🟢 Sin pago"))
)
```

### Alerta de facturas recibidas sin acreditar:

```
Días para acreditar = dateBetween(
  dateAdd(prop("Fecha de emisión"), 2, "months"),
  now(),
  "days"
)

Urgencia acreditación = if(
  prop("Aceptada en SII") == false,
  if(prop("Días para acreditar") < 15, "🔴 URGENTE - Acreditar ya",
  if(prop("Días para acreditar") < 30, "🟡 Acreditar pronto", "🟢 Sin urgencia")),
  "✅ Acreditada"
)
```

### Días para vencer facturas recibidas:

```
Días vencimiento = dateBetween(prop("Fecha de vencimiento"), now(), "days")

Estado pago = if(
  prop("Estado de pago") == "Pagada", "✅ Pagada",
  if(prop("Días vencimiento") < 0, "🔴 VENCIDA " + format(abs(prop("Días vencimiento"))) + " días",
  if(prop("Días vencimiento") <= 5, "🟡 Vence en " + format(prop("Días vencimiento")) + " días",
  "🟢 Al día"))
)
```

---

## Automatizaciones

### Automatización 1: Recordatorio F29
- **Trigger:** Día 5 de cada mes
- **Acción:** Notificar al responsable que en 7 días vence el F29. Cambiar estado a "Por preparar"

### Automatización 2: Alerta de factura por vencer
- **Trigger:** Diario
- **Condición:** Fecha de vencimiento de factura recibida = Hoy + 3 días
- **Acción:** Notificar para pagar

### Automatización 3: Cierre del libro mensual
- **Trigger:** Último día del mes
- **Acción:** Notificar para cerrar los libros de compras y ventas del mes

### Automatización 4: Facturas sin aceptar en SII
- **Trigger:** Semanal
- **Condición:** Facturas recibidas del mes con checkbox "Aceptada en SII" = false
- **Acción:** Recordatorio de aceptar facturas en el portal

---

## Instrucciones de uso

### Setup inicial paso a paso

**Paso 1: Configurar datos de tu empresa (5 minutos)**

En la página de configuración ingresa:
- RUT de tu empresa
- Razón social
- Giro comercial
- Resolución de factura electrónica (número y fecha)
- Período tributario de inicio (desde qué mes empieza el registro)

**Paso 2: Cargar clientes y proveedores frecuentes (20-30 minutos)**

Ingresa los RUTs y razones sociales de tus principales clientes y proveedores. Esto agiliza el registro de nuevas facturas.

**Paso 3: Registrar facturas del mes actual (30-60 minutos)**

Descarga desde el portal del SII la lista de facturas emitidas y recibidas del mes en curso. Puedes exportar como CSV desde "Consulta de DTE" y cargar los datos al template.

**Paso 4: Crear el registro del F29 del mes**

Crea una entrada en Declaraciones F29 para el mes actual. A medida que cargas facturas, los totales de IVA se actualizan automáticamente vía Rollup.

**Paso 5: Establecer el ritual de cierre mensual**

Cada mes, el último día hábil:
1. Revisa que todas las facturas emitidas estén cargadas
2. Revisa que todas las facturas recibidas estén aceptadas en SII
3. Cierra los libros de compras y ventas
4. Calcula el F29 con los totales del template
5. Presenta y paga antes del día 12 del mes siguiente

**Paso 6: Configurar acceso para tu contador**

Comparte la vista de Facturas y Declaraciones F29 con tu contador. Con acceso de lectura puede revisar la situación sin necesidad de reuniones largas.

**Paso 7: Retroalimentar con el contador el primer mes**

El primer mes de uso, revisa con tu contador las categorías de gasto, el tratamiento de las facturas (crédito fiscal vs gasto) y asegúrate de que el sistema esté alineado con cómo él lleva tu contabilidad.

---

## Mejores prácticas

### 1. Carga las facturas recibidas el mismo día que llegan
La regla de los 60 días: el SII permite acreditar el IVA de una factura recibida dentro de los 2 períodos tributarios siguientes a su emisión. Si acumulas facturas para registrar a fin de mes, arriesgas perder el crédito fiscal de algunas.

### 2. Acepta las facturas en el SII dentro del plazo
El portal del SII tiene un plazo de 8 días hábiles para aceptar o reclamar una factura recibida. Si no actúas, se acepta automáticamente. Revisa las facturas recibidas al menos 2 veces por semana.

### 3. Concilia con el portal del SII mensualmente
El template y el portal del SII deben tener los mismos números. Antes del cierre de cada mes, compara el total de facturas emitidas y recibidas del template vs el reporte del SII. Cualquier diferencia debe investigarse.

### 4. Guarda los comprobantes del F29 siempre
El comprobante de pago del F29 es el documento legal que prueba que declaraste y pagaste. Súbelo al template apenas lo generes. El SII guarda los últimos 5 años, pero tener tu propia copia organizada te ahorra tiempo en cualquier fiscalización.

### 5. No uses el template para reemplazar al contador
Este template es una herramienta de control y visibilidad, no de contabilidad formal. Para la contabilidad completa, el cálculo correcto de impuestos (renta, PPM proporcional, gastos rechazados) y la presentación legal de declaraciones, necesitas un contador. El template te hace un cliente más informado y organizado, lo que reduce el tiempo y costo con el contador.

---

## Casos de uso

### Caso 1: Consultora de RRHH — persona natural

**Perfil:** Valeria Morales, psicóloga laboral que presta servicios a través de inicio de actividades como persona natural con segunda categoría. Emite facturas y paga PPM mensual.

**Situación:** Mezclaba sus facturas de honorarios con las boletas de proveedores en una carpeta física. Nunca sabía cuánto PPM había pagado en el año ni podía anticipar el pago de impuesto anual.

**Uso del template:**
- Registro de todas las facturas emitidas mensualmente
- Control del PPM acumulado en el año
- Estimación del impuesto anual (renta) basada en ingresos acumulados

**Resultado:** Por primera vez en 5 años, Valeria sabe en tiempo real cuánto PPM lleva pagado y puede estimar su impuesto de renta de abril con 3 meses de anticipación. Dejó de pagar multas por F29 atrasados.

---

### Caso 2: Empresa de construcción — alta transaccionalidad

**Empresa:** "Construmax SPA", empresa de remodelaciones con 15-20 proyectos simultáneos, cada uno con múltiples proveedores.

**Situación:** Recibían más de 100 facturas mensuales de proveedores. El contador tardaba 2 días en ordenar todo para el cierre. Las facturas vencidas se descubrían tarde, generando recargos.

**Uso del template:**
- Las facturas recibidas se cargan al momento de recibirlas (2 minutos por factura)
- Alertas automáticas de vencimiento a 5 días
- Tabla de facturas sin aceptar en SII para revisar semanalmente
- El F29 se prepara en 1 hora porque los totales ya están calculados

**Resultado:** El cierre mensual bajó de 2 días a medio día. Los recargos por facturas vencidas prácticamente desaparecieron. El contador redujo su tarifa mensual porque el trabajo de ordenamiento ya lo hace la empresa.

---

### Caso 3: Restaurante — control de crédito fiscal

**Empresa:** "Gastronómica del Valle", restaurante que compra insumos a múltiples proveedores pequeños que no siempre emiten factura.

**Situación:** Sin control de qué compras tenían factura y cuáles no, perdían crédito fiscal significativo cada mes por no hacer el seguimiento.

**Uso del template:**
- Campo "Acreditado como" para clasificar cada factura recibida
- Vista "Compras sin crédito fiscal" para identificar oportunidades de mejora
- Registro de proveedores que no emiten factura para negociar el cambio

**Resultado:** Identificaron que 3 de sus 5 principales proveedores de insumos no emitían factura electrónica. Al negociar el cambio (con el argumento de que los reportarían al SII si no), recuperaron $350,000 CLP mensuales en crédito fiscal.

---

## FAQ

**¿Este template reemplaza al software de facturación del SII?**
No. Las facturas electrónicas se siguen emitiendo en el portal del SII o en tu software de facturación (Nubox, Siigo, Bsale, etc.). El template es un sistema de registro, control y análisis de esas facturas, no un sistema de emisión.

**¿Puedo importar facturas directamente desde el SII?**
El SII permite exportar reportes en formato CSV desde "Consulta de DTE" y "Registro de Compras y Ventas". Puedes importar esos CSV a Notion para cargar masivamente las facturas sin ingresarlas una a una.

**¿Funciona para empresas con IVA diferido o parcialmente exento?**
El template base está configurado para el régimen general de IVA (19%). Para regímenes especiales (IVA diferido en construcción, actividades exentas, proporcionalidad del crédito fiscal), el template requiere personalización adicional.

**¿Puedo llevar el control del impuesto de renta (Formulario 22)?**
El template incluye un módulo básico de seguimiento del PPM acumulado, que es el principal insumo para el Formulario 22. El cálculo completo de renta requiere información contable adicional (gastos, corrección monetaria, etc.) que está fuera del alcance del template base.

**¿Es compatible con el régimen Pro PyME?**
Sí. El template tiene un campo para marcar el tipo de contribuyente (régimen general vs Pro PyME). Las fórmulas de IVA son idénticas; las diferencias del Pro PyME están principalmente en el impuesto de renta, que no es el foco del template.

**¿Puedo llevar múltiples RUTs con un solo template?**
Para empresas con múltiples razones sociales (holdings, grupos empresariales), recomendamos un workspace por RUT. También se puede gestionar en un solo workspace con un campo "Empresa" en cada base de datos, pero la separación por workspace es más limpia.

**¿El template incluye el Libro Mayor o la contabilidad completa?**
No. El template cubre el Libro de Compras y Ventas (el registro de IVA) y el control de facturas. La contabilidad completa (Libro Mayor, Libro Diario, Estado de Resultados contable) requiere un software ERP o contable dedicado.

**¿Funciona para empresas que usan boletas de honorarios?**
Sí. El template incluye una base de datos específica para el control de honorarios y retenciones. Puedes registrar cada boleta de honorarios recibida de trabajadores independientes, calcular la retención a enterar y controlar que cada boleta esté incluida en el F29 correspondiente.

---

## Soporte

**Email:** soporte@notionlatam.com
**WhatsApp Business:** +56 9 XXXX XXXX (Lun-Vie, 9:00-18:00 hora Chile)
**Comunidad Discord:** discord.gg/notionlatam
**Tutoriales en video:** youtube.com/@notionlatam (Serie SII Chile: 10 videos)

### Nota importante
Este template es una herramienta de gestión y control, no constituye asesoría tributaria. Para interpretaciones legales de las normas tributarias del SII, consulta siempre con un contador o abogado tributario.

### Implementación para contadores
¿Eres contador y quieres usar este template para múltiples clientes?
- **Licencia multi-cliente:** $120 USD — Cubre hasta 10 clientes
- Incluye: Template base para cada cliente + guía de implementación

---

*Última actualización: Abril 2025 | Versión 2.4*
*Compatible con Notion web, desktop y mobile*
*Aplica normativa tributaria chilena vigente a la fecha de publicación. Verifica cambios en las tasas y formularios con el SII.*
