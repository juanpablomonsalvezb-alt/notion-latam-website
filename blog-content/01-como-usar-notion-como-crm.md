---
title: "Cómo usar Notion como CRM: Guía completa para gestionar clientes en LATAM"
description: "Aprende a convertir Notion en un CRM poderoso para gestionar tus clientes y ventas en LATAM. Guía paso a paso con ejemplos reales."
keywords: ["cómo usar Notion como CRM", "Notion CRM", "gestión de clientes Notion", "CRM gratuito LATAM", "Notion ventas"]
author: "Notion LATAM"
date: "2026-04-07"
category: "Productividad"
readTime: "9 min"
---

# Cómo usar Notion como CRM: La guía definitiva para empresas en LATAM

Si tienes un negocio en México, Colombia, Argentina o Chile y gestionas clientes con hojas de Excel o simplemente en tu cabeza, este artículo es para ti. Notion puede convertirse en el CRM más poderoso y económico que hayas usado, sin necesidad de pagar suscripciones costosas a HubSpot o Salesforce.

En esta guía vamos a construir, paso a paso, un sistema completo de gestión de clientes en Notion que cualquier equipo puede implementar en menos de un día.

---

## ¿Qué es un CRM y por qué Notion funciona perfectamente?

Un CRM (Customer Relationship Management) es básicamente un sistema para registrar, organizar y dar seguimiento a tus relaciones con clientes potenciales y actuales. Los CRMs tradicionales como Salesforce o HubSpot son potentes, pero tienen dos problemas para las empresas latinoamericanas:

1. **Son caros**: HubSpot Professional cuesta desde $800 USD/mes. Para una PyME en Bogotá o Monterrey, eso es inaccesible.
2. **Son rígidos**: Están diseñados para procesos de ventas norteamericanos o europeos, no para cómo funciona realmente el mercado LATAM.

Notion, en cambio, te da una base de datos flexible que puedes moldear exactamente a tu proceso de ventas. Y si ya tienes el plan gratuito o Plus (que cuesta $10/mes), no necesitas pagar nada adicional.

### Las ventajas concretas de Notion como CRM

- **Todo en un solo lugar**: Notas de reuniones, propuestas, emails, tareas de seguimiento — todo vive en la misma página del cliente
- **Personalizable al 100%**: Puedes agregar cualquier propiedad que necesites (número de RUT/RFC, industria, origen del lead, etc.)
- **Vistas múltiples**: Un mismo cliente puede verse en Kanban (por etapa del pipeline), en tabla (para reportes), o en lista (para seguimiento rápido)
- **Acceso desde móvil**: El equipo de ventas puede actualizar desde el teléfono mientras están en reunión con el cliente

---

## Estructura recomendada: Las bases de datos que necesitas

Para tener un CRM funcional en Notion, necesitas al menos estas cuatro bases de datos interconectadas:

### 1. Base de datos: Contactos

Esta es tu tabla maestra de personas. Cada fila es una persona real con quien has tenido o podrías tener una relación comercial.

**Propiedades esenciales:**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Nombre | Title | Nombre completo del contacto |
| Empresa | Relation | Conectada a tu BD de Empresas |
| Email | Email | Email principal |
| WhatsApp | Phone | Número con código de país |
| Cargo | Select | CEO, Gerente, Comprador, etc. |
| País | Select | México, Colombia, Argentina, Chile |
| Origen | Select | Referido, Redes, Web, Evento |
| Última interacción | Date | Fecha del último contacto |
| Score | Formula | Puntuación automática del lead |

### 2. Base de datos: Empresas

Si vendes a empresas (B2B), necesitas esta base de datos separada de los contactos.

**Propiedades esenciales:**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Empresa | Title | Nombre de la empresa |
| Industria | Multi-select | Tech, Retail, Servicios, etc. |
| Tamaño | Select | 1-10, 11-50, 51-200, 200+ |
| País | Select | País de operación |
| Sitio web | URL | Website oficial |
| Contactos | Relation | Linked a BD Contactos |
| Oportunidades | Relation | Linked a BD Oportunidades |
| Valor total | Rollup | Suma de todas las oportunidades |

### 3. Base de datos: Oportunidades (Pipeline)

Aquí está el corazón de tu CRM. Cada fila es una oportunidad de venta específica.

**Propiedades esenciales:**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Oportunidad | Title | Descripción de qué estás vendiendo |
| Empresa | Relation | A quién le vendes |
| Contacto | Relation | Con quién negocias |
| Etapa | Select | Lead, Contactado, Propuesta, Negociación, Cerrado |
| Valor | Number | Monto estimado en USD o moneda local |
| Probabilidad | Number | % de cierre (0-100) |
| Valor ponderado | Formula | Valor × Probabilidad/100 |
| Fecha cierre estimada | Date | Cuándo esperas cerrar |
| Propietario | Person | Vendedor responsable |

### 4. Base de datos: Actividades

Registro de cada interacción con un cliente o prospecto.

**Propiedades esenciales:**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Actividad | Title | Descripción de qué se hizo |
| Tipo | Select | Llamada, Email, Reunión, WhatsApp |
| Contacto | Relation | Con quién fue la interacción |
| Oportunidad | Relation | A qué oportunidad aplica |
| Fecha | Date | Cuándo ocurrió |
| Próximo paso | Text | Qué hay que hacer después |
| Hecho por | Person | Quién realizó la actividad |

---

## Pipeline de ventas en Kanban: Las etapas que funcionan en LATAM

La vista Kanban de Notion es perfecta para visualizar tu pipeline. Para el mercado latinoamericano, recomendamos estas etapas basadas en cómo realmente se dan las conversaciones de ventas aquí:

### Las 7 etapas del pipeline LATAM

**1. Lead Frío**
El contacto existe en tu base de datos pero aún no has tenido interacción directa. Viene de una lista, evento, o referido que debes investigar más.

**2. Prospecto Calificado**
Has verificado que tiene el perfil ideal (industria, tamaño, presupuesto potencial). Vale la pena intentar contacto.

**3. Primer Contacto**
Enviaste el primer mensaje o tuviste la primera llamada. La pelota está en su cancha.

**4. En Conversación**
Hay respuesta y hay interés. Están en proceso de entender si tu solución les sirve.

**5. Propuesta Enviada**
Les mandaste una propuesta formal con precio, alcance y condiciones.

**6. Negociación**
Están interesados pero negociando precio, términos, o plazos. Etapa crítica.

**7. Cerrado (Ganado / Perdido)**
La venta se concretó o se perdió. Ambos casos son información valiosa.

> **💡 Tip LATAM**: En muchos países de la región, el ciclo de ventas incluye una etapa extra de "aprobación interna" que puede durar semanas. Considera agregar esa etapa si tu cliente objetivo es una empresa corporativa.

---

## Historial de conversaciones y seguimiento automatizado

Una de las cosas más poderosas del CRM en Notion es poder tener todo el historial de un cliente en un solo lugar. Así se estructura:

### La página de cliente ideal

Cuando abres la página de una oportunidad en Notion, debería verse así:

**Sección superior:**
- Propiedades principales (etapa, valor, fecha de cierre, propietario)
- Botones de acción rápida (registrar llamada, crear propuesta, agendar seguimiento)

**Sección de actividades (base de datos filtrada):**
- Lista de todas las actividades relacionadas con ese cliente, ordenadas por fecha
- Cada actividad tiene: tipo, fecha, resumen, próximo paso

**Sección de documentos:**
- Propuestas enviadas (como páginas hijas)
- Notas de reuniones
- Emails importantes copiados

**Sección de notas libres:**
- Información contextual sobre el cliente
- Datos de la empresa, dolores identificados, competidores mencionados

---

## Fórmulas para scoring de leads

Una de las características más poderosas de Notion para CRM son las fórmulas. Aquí te dejamos fórmulas reales que puedes copiar:

### Fórmula de score de lead

```
if(prop("Origen") == "Referido", 30, if(prop("Origen") == "Web", 20, 10)) +
if(prop("Tamaño empresa") == "51-200", 25, if(prop("Tamaño empresa") == "11-50", 15, 5)) +
if(dateBetween(now(), prop("Última interacción"), "days") < 7, 20, if(dateBetween(now(), prop("Última interacción"), "days") < 30, 10, 0)) +
if(prop("Tiene presupuesto") == true, 25, 0)
```

Esta fórmula genera un score del 0 al 100 basado en:
- **Origen del lead** (30 pts máx): Los referidos son los mejores leads
- **Tamaño de empresa** (25 pts máx): Empresas medianas suelen tener más presupuesto
- **Actividad reciente** (20 pts máx): Leads con interacción reciente tienen más probabilidad de cierre
- **Presupuesto confirmado** (25 pts máx): Si confirmaron que tienen budget, es un lead muy calificado

### Fórmula de días sin contacto

```
dateBetween(now(), prop("Última interacción"), "days")
```

Puedes usar esta propiedad para filtrar leads que llevan más de 14 días sin contacto y crear una vista de "seguimientos urgentes".

### Fórmula de valor ponderado

```
prop("Valor") * prop("Probabilidad") / 100
```

Esta fórmula te da el valor esperado de cada oportunidad considerando la probabilidad de cierre. La suma de todos los valores ponderados de tu pipeline es tu pronóstico de ventas más realista.

---

## Comparativa: Notion CRM vs HubSpot vs Pipedrive

| Característica | Notion | HubSpot Free | HubSpot Pro | Pipedrive |
|----------------|--------|--------------|-------------|-----------|
| Precio/mes | $0-16 | $0 | $800+ | $15-99 |
| Pipeline visual | ✅ | ✅ | ✅ | ✅ |
| Email tracking | ❌ | ✅ | ✅ | ✅ |
| Llamadas integradas | ❌ | Limitado | ✅ | ✅ |
| Reportes avanzados | Limitado | Limitado | ✅ | ✅ |
| Personalización | ✅✅✅ | Limitado | Buena | Buena |
| Integración con WhatsApp | Manual | ❌ | Vía Zapier | Vía Zapier |
| Documentación en la misma herramienta | ✅✅✅ | ❌ | ❌ | ❌ |
| Curva de aprendizaje | Media | Baja | Alta | Baja |
| Soporte en español | Limitado | ✅ | ✅ | ✅ |

**¿Cuándo preferir Notion sobre HubSpot o Pipedrive?**

- Tienes menos de 3 personas en el equipo de ventas
- Tu proceso de ventas es único y necesitas personalizarlo totalmente
- Ya usas Notion para otras cosas y quieres centralizar todo
- Tu presupuesto para herramientas es limitado

**¿Cuándo es mejor HubSpot o Pipedrive?**

- Necesitas tracking de apertura de emails nativo
- Tienes más de 10 vendedores con flujos complejos
- Necesitas reportes de ventas muy sofisticados
- Quieres automatizaciones de email marketing integradas

---

## Casos de uso reales en LATAM

### Caso 1: Agencia de diseño en Bogotá

**Situación**: Una agencia de 4 personas manejaba sus prospectos en WhatsApp y perdía el historial constantemente.

**Solución**: Implementaron Notion CRM con tres bases de datos: Clientes, Proyectos, y Propuestas. Cada cliente tiene su propia página con todo el historial.

**Resultado**: Redujeron el tiempo de "¿en qué quedamos con X cliente?" de 15 minutos a menos de 1 minuto. Cerraron 40% más proyectos porque dejaron de perder seguimientos.

### Caso 2: Consultora de RRHH en Ciudad de México

**Situación**: Equipo de 8 personas con procesos de venta desorganizados, sin visibilidad del pipeline.

**Solución**: CRM en Notion con pipeline Kanban, scoring de leads automatizado, y reunión semanal de revisión del pipeline directamente en Notion.

**Resultado**: El director de ventas ahora puede ver en 5 minutos el estado exacto de todas las oportunidades. El equipo cerró un 25% más en el primer trimestre de implementación.

### Caso 3: SaaS B2B en Buenos Aires

**Situación**: Startup tech con 2 vendedores que necesitaba escalar sin gastar en Salesforce.

**Solución**: Notion CRM integrado con Zapier para capturar leads automáticamente desde el formulario de la web.

**Resultado**: Sistema completamente funcional a costo casi cero. Cuando crecieron a 15 personas, migraron a HubSpot con toda la data estructurada.

### Caso 4: Distribuidora en Santiago de Chile

**Situación**: Empresa con 200+ clientes activos, manejados en Excel por distintos vendedores.

**Solución**: CRM en Notion con base de datos compartida, segmentación por región y propiedades personalizadas para el mercado chileno (RUT, región, condición de pago).

**Resultado**: Primera vez en 8 años que el gerente general podía ver en tiempo real quién estaba comprando qué, sin esperar el reporte mensual de ventas.

---

## Cómo construir tu CRM en Notion: Plan de 5 días

**Día 1**: Crear las 4 bases de datos y definir las propiedades
**Día 2**: Importar tus contactos y empresas actuales desde Excel
**Día 3**: Crear las vistas (Kanban, tabla, lista de seguimientos)
**Día 4**: Crear plantillas de páginas para estandarizar el registro de actividades
**Día 5**: Capacitar al equipo (30 minutos es suficiente)

---

## Obtén el template gratuito

Construir este sistema desde cero puede tomar varios días. Por eso creamos un template completo ya armado que incluye:

- Las 4 bases de datos con todas las propiedades configuradas
- 6 vistas predefinidas (Kanban, tabla, seguimientos urgentes, pipeline mensual)
- Fórmulas de scoring y valor ponderado ya instaladas
- Guía de uso de 10 páginas en español

> **[→ Obtener Template CRM Gratis](https://notionlatam.com/templates/crm)** — Incluido en el plan Plus de Notion LATAM

Si quieres un CRM más avanzado con bases de datos adicionales para cotizaciones, contratos y comisiones de vendedores, tenemos también el **CRM Pro** disponible por $25 USD.

---

*¿Tienes preguntas sobre cómo implementar este CRM en tu negocio específico? Escríbenos en el chat o agendar una llamada de 30 minutos sin costo.*
