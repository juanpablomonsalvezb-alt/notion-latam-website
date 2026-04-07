# 📦 Control de Inventario

> **Precio:** $45 USD · `Español` · `Nivel: Intermedio` · `Categoría: Operaciones / Inventario`

**Nunca más te quedes sin stock ni sobre-compres: control de inventario en tiempo real con alertas automáticas y órdenes de compra integradas.**

---

## Descripción completa

### ¿Qué es este template?

El **Control de Inventario** es un sistema completo de gestión de stock construido en Notion, diseñado para negocios con productos físicos que necesitan saber en todo momento cuánto tienen, dónde está, cuándo reordenar y a quién comprarlo.

Cubre todo el ciclo del inventario: desde la orden de compra al proveedor, pasando por la recepción en bodega, los movimientos de salida por ventas o uso interno, hasta las alertas cuando el stock baja del mínimo definido.

### ¿Para quién es?

- Tiendas físicas y e-commerce con stock propio
- Restaurantes y negocios gastronómicos (control de insumos)
- Talleres y empresas de manufactura (materia prima y producto terminado)
- Negocios de importación y distribución
- Empresas de tecnología con activos físicos (equipos, accesorios)
- Clínicas y centros médicos (insumos y medicamentos)

### ¿Qué problema resuelve?

**Problema 1 — Sobre-stock:** Compras demasiado por desconocer el stock real, inmovilizas capital y arriesgas vencimientos o daños.

**Problema 2 — Quiebre de stock:** No detectas a tiempo que un producto se agota, pierdes ventas y dañas la relación con clientes.

**Problema 3 — Trazabilidad cero:** No sabes qué se usó, cuándo, quién lo sacó ni por qué. Los ajustes de inventario son frecuentes y nadie sabe de dónde vienen las diferencias.

Este template resuelve los tres: stock exacto en tiempo real, alertas automáticas antes del quiebre y trazabilidad completa de cada movimiento.

---

## Qué incluye

### Bases de datos incluidas

#### 1. Productos `📦`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre del producto | Título | Nombre del artículo |
| SKU / Código | Texto | Código interno único |
| Código de barras | Texto | EAN, UPC o código propio |
| Categoría | Select | Insumo / Producto terminado / Materia prima / Activo / Consumible |
| Subcategoría | Select | Categoría más específica |
| Descripción | Texto | Descripción detallada |
| Imagen | Archivo | Foto del producto |
| Proveedor principal | Relación | Vinculado a Proveedores |
| Unidad de medida | Select | Unidad / Kg / Litro / Metro / Caja / Docena |
| Stock actual | Número | Cantidad actual en inventario |
| Stock mínimo | Número | Nivel de alerta de reposición |
| Stock máximo | Número | Máximo que se debe tener |
| Stock óptimo | Número | Cantidad ideal de reorden |
| Punto de reorden | Número | Cuándo lanzar la orden de compra |
| Requiere reposición | Fórmula | Automático si stock < mínimo |
| Costo unitario | Número | Precio de compra |
| Precio de venta | Número | Precio de venta al público |
| Margen | Fórmula | (Venta - Costo) / Venta × 100 |
| Ubicación en bodega | Texto | Pasillo / Estante / Bin |
| Lote / Vencimiento | Fecha | Si aplica, fecha de vencimiento |
| Activo | Checkbox | Si está vigente para venta/uso |
| Notas | Texto | Observaciones especiales |

#### 2. Movimientos de Inventario `🔄`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Descripción | Título | Qué fue este movimiento |
| Producto | Relación | Vinculado a Productos |
| Tipo | Select | Entrada / Salida / Ajuste positivo / Ajuste negativo / Devolución |
| Cantidad | Número | Unidades del movimiento |
| Fecha | Fecha | Cuándo ocurrió |
| Motivo | Select | Compra / Venta / Devolución / Pérdida / Muestra / Uso interno / Corrección |
| Documento de referencia | Texto | Número de factura, orden, venta |
| Proveedor / Cliente | Texto | Contraparte del movimiento |
| Costo unitario | Número | Precio en este movimiento |
| Costo total | Fórmula | Cantidad × Costo unitario |
| Stock previo | Número | Stock antes del movimiento |
| Stock resultante | Número | Stock después del movimiento |
| Responsable | Persona | Quien registró el movimiento |
| Aprobado por | Persona | Quien autorizó (para ajustes) |
| Notas | Texto | Observaciones |

#### 3. Proveedores `🏭`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre proveedor | Título | Razón social o nombre |
| RUT / ID fiscal | Texto | Identificación tributaria |
| Contacto principal | Texto | Nombre de la persona de contacto |
| Email | Email | Correo de compras |
| Teléfono | Teléfono | Número de contacto |
| WhatsApp | Teléfono | WhatsApp del vendedor |
| País | Select | País de origen |
| Tiempo de entrega | Número | Días promedio de despacho |
| Condiciones de pago | Select | Contado / 30 días / 60 días / Crédito |
| Descuento habitual | Número | % de descuento negociado |
| Mínimo de pedido | Número | Monto o unidades mínimas |
| Calificación | Select | ⭐⭐⭐⭐⭐ / ⭐⭐⭐⭐ / ⭐⭐⭐ / ⭐⭐ / ⭐ |
| Productos que suministra | Relación | Vinculado a Productos |
| Órdenes relacionadas | Relación | Vinculado a Órdenes de Compra |
| Notas | Texto | Condiciones especiales, historial |

#### 4. Órdenes de Compra `🛒`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Número de OC | Título | Correlativo de la orden |
| Proveedor | Relación | Vinculado a Proveedores |
| Fecha de emisión | Fecha | Cuándo se emitió la orden |
| Fecha de entrega esperada | Fecha | Cuándo se espera recibir |
| Fecha de entrega real | Fecha | Cuándo llegó realmente |
| Estado | Select | Borrador / Enviada / Confirmada / En tránsito / Recibida parcial / Recibida completa / Cancelada |
| Items de la orden | Texto | Lista de productos y cantidades |
| Monto total | Número | Valor total de la orden |
| Forma de pago | Select | Contado / Crédito / Transferencia |
| Notas de la OC | Texto | Condiciones especiales |
| Recibido por | Persona | Quien firmó la recepción |
| Documentos | Archivo | Orden, guía de despacho, factura |
| Días de atraso | Fórmula | Si está atrasada, calcula días |

#### 5. Alertas de Stock `🚨`

Vista filtrada automática que muestra todos los productos con:
- Stock actual ≤ Stock mínimo (alerta crítica)
- Stock actual ≤ Punto de reorden (alerta preventiva)
- Productos con fecha de vencimiento próxima (30 días)

---

## Vistas disponibles

### En la base de Productos:
- **Inventario completo** — Vista tabla con todos los campos y filtros
- **Alertas de reposición** — Solo productos bajo el mínimo (filtro automático)
- **Por categoría** — Agrupado por tipo de producto
- **Por proveedor** — Agrupado para identificar dependencia de proveedores
- **Galería de productos** — Vista visual con imagen y datos clave
- **Productos con bajo margen** — Filtro: margen < 20%
- **Próximos a vencer** — Productos con vencimiento en los próximos 30 días
- **Mapa de bodega** — Agrupado por ubicación física

### En Movimientos:
- **Todos los movimientos** — Historial completo, ordenado por fecha
- **Entradas del mes** — Filtro por tipo y mes
- **Salidas del mes** — Filtro por tipo y mes
- **Ajustes recientes** — Solo ajustes para auditoría
- **Por producto** — Historial de un producto específico
- **Calendario** — Movimientos en vista de calendario

### En Órdenes de Compra:
- **Tablero Kanban por estado** — Vista del proceso de compra
- **Órdenes atrasadas** — OC con fecha esperada superada
- **Por proveedor** — Agrupado por proveedor
- **Monto total del mes** — Para control presupuestal de compras

---

## Dashboard principal

```
┌──────────────────────────────────────────────────────┐
│  INVENTARIO EN TIEMPO REAL                           │
├──────────────┬─────────────────┬────────────────────┤
│ Total        │ Productos en    │ Órdenes de         │
│ productos    │ alerta          │ compra abiertas    │
│ activos      │ 🔴 5 / 🟡 12   │ 3 por $X,XXX       │
├──────────────┴─────────────────┴────────────────────┤
│  Valor del inventario actual: $XX,XXX               │
│  Valor a precio de venta: $XX,XXX                   │
│  Margen promedio del inventario: XX%                │
├──────────────────────────────────────────────────────┤
│  ALERTAS ACTIVAS                                     │
│  🔴 5 productos bajo stock mínimo — REORDENAR YA   │
│  🟡 12 productos bajo punto de reorden             │
│  🟠 3 productos vencen en menos de 30 días         │
│  📦 2 órdenes de compra con atraso                 │
└──────────────────────────────────────────────────────┘
```

---

## Fórmulas automáticas

### Alertas de stock:

```
Estado de stock = if(
  prop("Stock actual") <= 0, "🔴 Sin stock",
  if(prop("Stock actual") <= prop("Stock mínimo"), "🔴 Bajo mínimo",
  if(prop("Stock actual") <= prop("Punto de reorden"), "🟡 Reordenar pronto",
  if(prop("Stock actual") >= prop("Stock máximo"), "🔵 Stock alto", "🟢 Normal")))
)

Unidades para reordenar = max(prop("Stock óptimo") - prop("Stock actual"), 0)

Requiere reposición = prop("Stock actual") <= prop("Stock mínimo")
```

### Valorización del inventario:

```
Valor en inventario = prop("Stock actual") * prop("Costo unitario")

Valor potencial venta = prop("Stock actual") * prop("Precio de venta")

Margen = if(
  prop("Precio de venta") > 0,
  round((prop("Precio de venta") - prop("Costo unitario")) / prop("Precio de venta") * 100),
  0
)
```

### Atraso en órdenes de compra:

```
Días de atraso = if(
  prop("Estado") != "Recibida completa" and 
  dateBetween(now(), prop("Fecha entrega esperada"), "days") < 0,
  abs(dateBetween(now(), prop("Fecha entrega esperada"), "days")),
  0
)

Semáforo OC = if(
  prop("Días de atraso") > 7, "🔴 Atraso crítico",
  if(prop("Días de atraso") > 0, "🟡 Atrasada",
  if(dateBetween(prop("Fecha entrega esperada"), now(), "days") <= 2, 
  "📦 Llega pronto", "🟢 En tiempo"))
)
```

### Rotación de inventario (Movimientos):

```
Costo total movimiento = prop("Cantidad") * prop("Costo unitario")
```

---

## Automatizaciones

### Automatización 1: Alerta de reposición
- **Trigger:** Cambio en campo "Stock actual" de cualquier producto
- **Condición:** Stock actual ≤ Stock mínimo
- **Acción:** Notificar al responsable de compras + agregar a vista de alertas

### Automatización 2: Crear OC sugerida
- **Trigger:** Stock actual ≤ Punto de reorden
- **Acción:** Crear borrador de Orden de Compra con proveedor principal y cantidad óptima pre-llenada

### Automatización 3: Actualizar stock al recibir OC
- **Trigger:** Estado de OC cambia a "Recibida completa"
- **Acción:** Crear movimiento de entrada automático con las unidades recibidas

### Automatización 4: Alerta de OC atrasada
- **Trigger:** Diario a las 8:00 AM
- **Condición:** OC con fecha entrega esperada < hoy y estado ≠ Recibida
- **Acción:** Notificar a compras para hacer seguimiento al proveedor

### Automatización 5: Alerta de vencimiento próximo
- **Trigger:** Semanal, lunes 8:00 AM
- **Condición:** Fecha de vencimiento - 30 días
- **Acción:** Notificar a bodega de productos próximos a vencer

---

## Instrucciones de uso

### Setup inicial paso a paso

**Paso 1: Cargar el catálogo de productos (30-60 minutos)**

Ingresa todos tus productos activos. Lo mínimo necesario por producto:
- Nombre y SKU (si no tienes SKU, el template te ayuda a generarlos)
- Unidad de medida
- Stock mínimo (regla práctica: ventas de 2 semanas)
- Costo unitario y precio de venta

Tip: Si tienes tu catálogo en Excel, puedes importarlo como CSV.

**Paso 2: Ingresar el stock inicial**

Para cada producto, ingresa el stock actual (el que tienes físicamente hoy). La mejor práctica es hacer un conteo físico un fin de semana antes de activar el sistema. Crea un movimiento tipo "Ajuste positivo" por el stock inicial de cada producto.

**Paso 3: Cargar proveedores (20 minutos)**

Ingresa al menos los 10 proveedores principales con sus datos de contacto y tiempo de entrega habitual. Vincula cada producto a su proveedor principal.

**Paso 4: Definir niveles de alerta**

Para cada producto, configura:
- **Stock mínimo:** Cantidad mínima antes de "alarmar"
- **Punto de reorden:** Cuándo lanzar la orden (considera el tiempo de entrega del proveedor)
- **Stock óptimo:** Cuánto pedir cada vez

Fórmula para el punto de reorden: `Ventas diarias promedio × Tiempo de entrega (días) + Stock mínimo`

**Paso 5: Registrar las órdenes de compra abiertas**

Si ya tienes órdenes de compra enviadas a proveedores, regístralas en el template con su estado actual. Esto te da visibilidad inmediata de cuándo llega más mercadería.

**Paso 6: Entrenar a tu equipo de bodega**

Enseña a tu equipo que cada vez que sale o entra mercadería, deben crear un movimiento en el template. Esto es el hábito más importante para que el sistema funcione.

**Paso 7: Activar las automatizaciones y revisar alertas diariamente**

Activa las 5 automatizaciones y establece como rutina revisar el dashboard de alertas cada mañana (5 minutos).

---

## Mejores prácticas

### 1. La regla de oro: cada movimiento físico = un movimiento en Notion
El sistema funciona solo si es fiel a la realidad física. Designa a una persona responsable de registrar cada entrada y salida. Si el registro es inconsistente, el stock virtual se desincroniza del físico y el sistema pierde valor.

### 2. Haz un conteo físico mensual el primer año
Cada mes, haz un recuento físico de al menos el 20% del inventario (rotar qué productos revisas) y compara con el sistema. Al inicio encontrarás diferencias; anota el motivo (merma, pérdida, error de registro) y ajusta. Con el tiempo, las diferencias deberían acercarse a cero.

### 3. Parametriza bien el stock mínimo por producto
No todos los productos tienen el mismo riesgo de quiebre. Un producto "A" de alta rotación y bajo tiempo de entrega tiene un stock mínimo diferente a un producto "C" de importación. Dedica tiempo a parametrizar esto bien: es lo que previene el 90% de los quiebres.

### 4. Crea códigos SKU consistentes desde el inicio
Si no tienes SKU, crea una estructura lógica desde el primer día. Ejemplo: `CAT-SUBCAT-001`. Una vez que los SKU están en facturas, etiquetas y sistemas externos, son muy difíciles de cambiar.

### 5. Aprovecha las órdenes de compra para negociar
Con el historial de órdenes de compra, tienes datos para negociar con proveedores: volumen anual comprado, frecuencia de pedidos, historial de atrasos. Usa esto en tu próxima negociación de precios o condiciones.

---

## Casos de uso

### Caso 1: Tienda de mascotas — 2 locales + e-commerce

**Empresa:** "PetWorld", tienda de mascotas con 2 sucursales en Santiago y tienda online.

**Situación:** Manejaban un inventario de 350 SKUs con Excel por local. Las hojas nunca coincidían. El stock del e-commerce se publicaba con números incorrectos, generando ventas de productos agotados.

**Uso del template:**
- Un inventario maestro con campo "Ubicación" para diferenciar locales
- Movimientos diferenciados por local (Entrada Local 1, Salida Local 2)
- Alertas de reposición configuradas por local
- El e-commerce se alimenta manualmente del stock virtual cada mañana (10 minutos)

**Resultado:** Eliminaron el 100% de ventas online de productos sin stock. Redujeron el over-stock un 28% al tener visibilidad real. El tiempo de preparación de órdenes de compra bajó de 3 horas a 45 minutos.

---

### Caso 2: Restaurante con cocina de producción — 25 empleados

**Empresa:** "Cocina Central Buen Sabor", restaurante con cocina centralizada que abastece 3 locales.

**Situación:** El jefe de cocina no sabía cuánto tenía de cada insumo hasta que abría la cámara frigorífica. Sobre-compraba para "no quedarse sin nada" y tenía mermas elevadas por vencimientos.

**Uso del template:**
- Inventario de insumos con unidades de medida mixtas (kg, litros, unidades)
- Movimientos de salida diarios por producción (recetas estándar)
- Alertas de vencimiento a 7 días para productos perecibles
- OC automáticas a proveedores cuando se activa la alerta de reposición

**Resultado:** Reducción de la merma por vencimiento en un 40% el primer trimestre. El jefe de cocina llegó a tener +95% de exactitud en el inventario vs realidad física.

---

### Caso 3: Taller de carpintería a medida — 5 empleados

**Empresa:** "Maderas del Sur", taller de muebles a medida para proyectos de arquitectura.

**Situación:** Compraban materiales sin saber cuánto tenían, a veces duplicando compras innecesarias. Tampoco podían costear proyectos con exactitud porque no sabían el costo real de sus materiales.

**Uso del template:**
- Inventario de materia prima (maderas, herrajes, terminaciones)
- Movimientos de salida vinculados a proyectos específicos
- Costo de materiales por proyecto calculado automáticamente
- OC por proyecto generadas desde el template

**Resultado:** El costo de materiales por proyecto ahora es trazable y preciso. El margen promedio mejoró un 15% porque dejaron de sub-cotizar proyectos por no conocer el costo real de materiales.

---

## FAQ

**¿El template actualiza el stock automáticamente al ingresar un movimiento?**
En Notion estándar, el stock se actualiza manualmente (el campo "Stock actual" en Productos es un número que se edita). Para automatización completa del stock, se puede usar una fórmula basada en Rollups de movimientos, pero esto requiere configuración adicional que ofrecemos como servicio de personalización.

**¿Puedo gestionar múltiples bodegas o locales?**
Sí. Agrega la propiedad "Bodega/Local" a los Movimientos y filtra por ella. También puedes agregar campos de "Stock por local" en la base de Productos.

**¿Cómo manejo los productos con número de serie?**
Para productos con número de serie individual (equipos, electrónicos), duplica la base de Productos y crea un registro por unidad física, no por tipo de producto. Agrega campos de "Número de serie", "Estado" (Nuevo/Usado/Defectuoso) y "Asignado a".

**¿Puedo llevar el inventario de activos fijos?**
Sí. La categoría "Activo" en Productos está pensada para esto. Agrega propiedades como "Fecha de adquisición", "Valor de adquisición", "Depreciación mensual", "Responsable del activo" y "Vida útil".

**¿Funciona con códigos de barras?**
El template incluye un campo para el código de barras, pero Notion no tiene lector de barras nativo. Para escanear con el móvil, puedes usar apps de terceros que ingresan el código al campo de texto de Notion vía teclado virtual.

**¿Cuántos productos puedo tener?**
Notion maneja sin problemas bases de datos de hasta 100,000 registros. Para inventarios con más de 5,000 SKUs, recomendamos usar filtros y vistas agresivamente para no cargar toda la base en pantalla.

**¿Puedo llevar control de número de lote?**
Sí. Agrega una propiedad "Número de lote" a los Movimientos y a los Productos. Para gestión por lote más avanzada (FIFO/LIFO), el template base puede extenderse con personalización adicional.

**¿El template incluye reportes de inventario?**
Incluye las vistas y filtros para analizar el inventario. Los reportes formales de valorización o movimientos se exportan desde Notion como CSV para procesarlos en Excel o Google Sheets.

---

## Soporte

**Email:** soporte@notionlatam.com
**WhatsApp Business:** +56 9 XXXX XXXX (Lun-Vie, 9:00-18:00 hora Chile)
**Comunidad Discord:** discord.gg/notionlatam
**Tutoriales en video:** youtube.com/@notionlatam (Serie Inventario: 7 videos)

### Setup asistido para empresas con stock complejo
¿Tienes más de 200 SKUs o múltiples bodegas? Ofrecemos servicio de implementación guiada:
- **Auditoría de inventario + setup:** $250 USD
- Incluye: Migración de datos, configuración de alertas, capacitación del equipo

---

*Última actualización: Abril 2025 | Versión 2.3*
*Compatible con Notion web, desktop y mobile*
