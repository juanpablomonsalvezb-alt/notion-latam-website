---
title: "Notion para freelancers: Sistema completo para gestionar tu negocio"
description: "Cómo usar Notion para gestionar todos tus proyectos freelance: clientes, facturas, tiempo y propuestas. Sistema completo en español."
keywords: ["Notion para freelancers", "gestionar proyectos freelance Notion", "CRM freelancer gratis", "Notion sistema freelance LATAM", "productividad freelancer"]
author: "Notion LATAM"
date: "2026-04-07"
category: "Freelance"
readTime: "9 min"
---

# Notion para Freelancers: El sistema completo para gestionar tu negocio sin herramientas de pago

Si eres freelancer y gestionas tus proyectos con una mezcla de WhatsApp, Excel, notas del celular y correos perdidos, este artículo puede cambiar la manera en que trabajas.

Notion es, posiblemente, la herramienta más poderosa que existe para freelancers latinoamericanos. No porque sea perfecta (no lo es), sino porque te permite construir exactamente el sistema que tu negocio necesita, sin pagar por cinco herramientas separadas.

---

## Por qué Notion es perfecto para freelancers

El freelancer moderno en LATAM enfrenta un reto que pocas herramientas resuelven bien: necesita ser simultáneamente gerente de proyectos, contador, vendedor, y proveedor de servicios. Las herramientas de empresa están diseñadas para equipos grandes. Las aplicaciones personales son demasiado simples.

Notion llena ese espacio perfectamente:

- **Una sola herramienta para todo**: clientes, proyectos, tiempo, facturas, propuestas, notas, ideas
- **Funciona en el celular**: puedes actualizar mientras estás en reunión con un cliente
- **El plan gratuito es suficiente** para empezar (hasta que tengas más de 5 colaboradores)
- **Escala contigo**: cuando crezcas, la estructura ya está lista

---

## El sistema de 4 bases de datos para freelancers

La arquitectura más efectiva para un freelancer en Notion usa cuatro bases de datos interconectadas:

### Base de datos 1: Clientes

Tu directorio de clientes pasados, activos y potenciales.

**Propiedades:**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Cliente | Title | Nombre o empresa |
| Estado | Select | Activo, Terminado, Prospecto, Pausado |
| Email | Email | Email principal de contacto |
| WhatsApp | Phone | Con código de país internacional |
| País | Select | País de origen |
| Industria | Select | En qué trabajan |
| Tarifa | Number | Lo que pagas por hora o proyecto |
| Tipo tarifa | Select | Por hora, Por proyecto, Retainer mensual |
| Total facturado | Rollup | Suma automática de todas las facturas |
| Proyectos | Relation | Conectado a BD Proyectos |

**Vista útil**: Galería con foto del logo del cliente y total facturado. Te recuerda la escala de tu portafolio.

---

### Base de datos 2: Proyectos

El centro de control de cada trabajo que tienes activo o tuviste en el pasado.

**Propiedades:**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Proyecto | Title | Nombre descriptivo |
| Cliente | Relation | A qué cliente pertenece |
| Estado | Select | Propuesta, Activo, Entregado, Facturado, Cerrado |
| Tipo | Select | Diseño, Desarrollo, Consultoría, Redacción, Video |
| Fecha inicio | Date | Cuándo inicia el trabajo |
| Fecha entrega | Date | Deadline comprometida |
| Valor acordado | Number | Monto total del proyecto |
| % Cobrado | Formula | (Facturado / Valor acordado × 100) |
| Horas estimadas | Number | Cuántas horas estimas trabajar |
| Horas reales | Rollup | Suma de horas registradas en tiempo |
| Rentabilidad | Formula | Valor acordado / Horas reales |
| Facturas | Relation | Conectado a BD Facturas |
| Tiempo | Relation | Conectado a BD Registro de Tiempo |

**La propiedad de Rentabilidad** es la más importante: te dice cuánto estás ganando por hora en cada proyecto. Si la rentabilidad de un cliente es muy baja, es momento de subir precios o terminar esa relación.

---

### Base de datos 3: Registro de Tiempo

El registro de horas trabajadas en cada proyecto. Fundamental para freelancers que cobran por hora o quieren saber si su tarifa por proyecto es justa.

**Propiedades:**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Actividad | Title | Qué hiciste en esas horas |
| Proyecto | Relation | A qué proyecto corresponde |
| Fecha | Date | Qué día trabajaste |
| Horas | Number | Cuántas horas trabajaste |
| Facturables | Checkbox | ¿Se cobran estas horas al cliente? |
| Notas | Text | Contexto adicional |

**Cómo usarlo**: Al final de cada sesión de trabajo, creas un registro en esta base de datos. Al cabo de una semana tienes visibilidad exacta de en qué proyectos gastaste tu tiempo.

**Vista útil**: Tabla agrupada por semana, mostrando total de horas por proyecto.

---

### Base de datos 4: Facturas

Registro de todo lo que has cobrado o necesitas cobrar.

**Propiedades:**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Factura | Title | Número o ID de la factura |
| Proyecto | Relation | A qué proyecto corresponde |
| Cliente | Relation | A quién se factura |
| Monto | Number | Total de la factura |
| IVA | Number | Impuesto aplicado (si aplica) |
| Total con IVA | Formula | Monto + IVA |
| Estado | Select | Borrador, Enviada, Pagada, Vencida |
| Fecha emisión | Date | Cuándo se emitió |
| Fecha vencimiento | Date | Cuándo vence el pago |
| Fecha pago | Date | Cuándo te pagaron realmente |
| Días de retraso | Formula | dateBetween(now(), Fecha vencimiento, "days") |
| Método de pago | Select | Transferencia, PayPal, Stripe, Efectivo |

**Vista de alerta**: Crea una vista filtrada por Estado = "Enviada" y ordenada por Fecha de vencimiento. Ese es tu dashboard de cuentas por cobrar.

---

## Fórmulas de rentabilidad por cliente

Una de las cosas más valiosas que puedes hacer como freelancer es calcular la rentabilidad real de cada cliente. Muchos freelancers tienen clientes que les consumen el 50% del tiempo pero les generan solo el 20% de los ingresos.

### Fórmula: Tarifa efectiva por hora

En la base de datos de Proyectos:

```
prop("Valor acordado") / prop("Horas reales")
```

Esta fórmula te dice cuánto ganaste realmente por hora en ese proyecto, independientemente de si acordaste un precio fijo.

### Fórmula: Semáforo de rentabilidad

```
if(prop("Tarifa efectiva") >= 50, "🟢 Excelente",
  if(prop("Tarifa efectiva") >= 30, "🟡 Aceptable",
    "🔴 Bajo costo"))
```

Ajusta los números según tu mercado (un diseñador en Buenos Aires tiene números distintos a uno en Ciudad de México).

### Rollup: Total facturado por cliente

En la base de datos de Clientes, crea un Rollup que:
- Relation: Facturas
- Property: Monto
- Calculate: Sum

Ahora ves de un vistazo cuánto te ha generado cada cliente en toda la historia de tu relación comercial.

---

## Template de propuesta de proyecto

Una propuesta bien presentada puede ser la diferencia entre ganar o perder un proyecto. Este es el template de página que recomendamos para las propuestas:

```
# Propuesta de [Tipo de proyecto] para [Nombre del cliente]

**Fecha**: [fecha]
**Preparada por**: [Tu nombre]
**Válida hasta**: [fecha + 15 días]

---

## Entendimiento del proyecto

[2-3 párrafos describiendo exactamente qué entiendes del proyecto. 
Esto demuestra que escuchaste y entendiste el brief.]

## Lo que incluye esta propuesta

### Alcance del trabajo
- Entregable 1: [descripción]
- Entregable 2: [descripción]
- Entregable 3: [descripción]

### Lo que NO incluye
- [Cosa 1 que está fuera del alcance]
- [Cosa 2 que está fuera del alcance]

## Proceso de trabajo

| Fase | Descripción | Duración |
|------|-------------|----------|
| 1 | Investigación y planificación | X días |
| 2 | Producción | X días |
| 3 | Revisiones (máx 2 rondas) | X días |
| 4 | Entrega final | X días |

## Inversión

| Concepto | Valor |
|----------|-------|
| [Descripción] | $X USD |
| **Total** | **$X USD** |

**Condiciones de pago:**
- 50% al inicio del proyecto
- 50% al entregar el proyecto final

## Próximos pasos

1. Aprobación de esta propuesta por escrito
2. Pago del 50% inicial
3. Inicio del trabajo en [fecha estimada]

---
*¿Tienes preguntas? Responde este mensaje o escríbeme al WhatsApp [número]*
```

---

## Facturación básica sin apps de pago

Para freelancers que recién empiezan o que trabajan con clientes informales, Notion puede servir como registro de facturación básico sin necesitar Facturalopedia, Siigo, o cualquier otra app de facturación.

**El flujo es simple:**

1. **Creas la factura** en tu BD de Facturas con todos los datos
2. **Exportas la página como PDF** (menú de la página → Export → PDF)
3. **Le envías el PDF al cliente** por email o WhatsApp
4. **Cuando te pagan**, cambias el estado a "Pagada" y registras la fecha

**Nota importante**: En países donde la facturación electrónica es obligatoria (México con CFDI, Colombia con factura electrónica, Chile con DTE), necesitas complementar esto con la herramienta de facturación fiscal que corresponda a tu país. Notion es el registro, no el sistema fiscal.

---

## Caso real: Diseñadora de Uruguay que aumentó precios 40%

**La situación**: Valentina trabaja como diseñadora gráfica freelance en Montevideo hace 4 años. Tenía 8 clientes activos pero siempre sentía que trabajaba mucho y ganaba poco. No tenía claridad de cuánto tiempo le tomaba cada proyecto ni qué clientes eran realmente rentables.

**La implementación**: En un sábado por la mañana, armó su sistema en Notion: base de datos de clientes, proyectos y registro de tiempo. Empezó a registrar sus horas con honestidad.

**El descubrimiento**: Después de dos meses de datos, Valentina descubrió que su cliente más "grande" (que le pagaba $800 por proyecto) le consumía en promedio 40 horas de trabajo. Eso era $20/hora — por debajo de lo que cobra cualquier diseñadora junior en Montevideo.

**La decisión**: Con los datos en la mano, Valentina fue a negociar con ese cliente. Le presentó el análisis honestamente y dijo que el próximo proyecto sería a $1,200 o no podría tomarlo. El cliente aceptó.

**El resultado**: Valentina aumentó sus precios promedio 40% en los siguientes 6 meses, no porque le "pusiera ganas", sino porque tuvo los datos para negociar desde una posición de información. Hoy trabaja 20% menos horas y gana 40% más.

---

## Plan de implementación: Empieza en un día

**Mañana (3 horas):**
1. Crea las 4 bases de datos con las propiedades básicas
2. Importa tus clientes actuales desde tu lista de contactos
3. Agrega tus proyectos activos

**Esta semana (30 min/día):**
1. Registra las horas que trabajas cada día
2. Crea las facturas pendientes en la BD de Facturas
3. Ajusta las propiedades según tus necesidades específicas

**Próximo mes:**
1. Con datos reales, analiza la rentabilidad por cliente
2. Toma decisiones sobre precios basadas en datos, no en intuición

---

## Obtén el Template Freelancer completo

El sistema descrito en este artículo está disponible como template listo para duplicar. Incluye:

- Las 4 bases de datos ya configuradas y conectadas
- Plantillas de propuesta profesional
- Fórmulas de rentabilidad instaladas
- Vista de "Dashboard de Ingresos" para ver el mes de un vistazo
- Guía de uso de 8 páginas en español

> **[→ Obtener Template Freelancer — $15 USD](https://notionlatam.com/templates/freelancer)** — Duplica en 1 clic y empieza hoy

¿Prefieres que te ayudemos a configurarlo según tu caso específico? Ofrecemos sesiones de implementación de 60 minutos.

> **[→ Agendar sesión de implementación — $30 USD](https://notionlatam.com/consultoria/freelancer)**
