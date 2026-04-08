---
title: "Fórmulas en Notion: Guía completa con 20 ejemplos reales para empresas"
description: "Domina las fórmulas de Notion con esta guía completa. Desde básicas hasta avanzadas, con ejemplos reales para empresas LATAM."
keywords: ["fórmulas Notion guía completa", "Notion formulas ejemplos", "Notion formula sintaxis", "cómo usar fórmulas Notion", "Notion formulas empresa"]
author: "Notion LATAM"
date: "2026-04-07"
category: "Tutoriales"
readTime: "12 min"
---

# Fórmulas en Notion: La guía completa con 20 ejemplos para empresas LATAM

Las fórmulas de Notion son lo que separa a un usuario básico de alguien que realmente domina la herramienta. Con fórmulas puedes calcular automáticamente rentabilidades, generar semáforos de estado, calcular días entre fechas, y crear dashboards dinámicos sin saber programar.

Esta guía cubre todo: desde la sintaxis básica hasta las fórmulas más avanzadas que usamos en implementaciones reales para empresas latinoamericanas.

---

## Sintaxis básica de fórmulas en Notion

Antes de entrar en los ejemplos, necesitas entender la estructura básica:

### Cómo escribir una fórmula

Cuando creas una propiedad de tipo "Formula" en Notion, puedes escribir expresiones que usan:
- **Propiedades de la misma base de datos**: `prop("Nombre de la propiedad")`
- **Funciones**: `if()`, `add()`, `multiply()`, `format()`, etc.
- **Operadores**: `+`, `-`, `*`, `/`, `==`, `!=`, `>`, `<`, `and`, `or`, `not`
- **Valores literales**: números (`100`), texto (`"hola"`), booleanos (`true`, `false`)

### Tipos de output de fórmulas

Cada fórmula devuelve un tipo de dato específico:

| Tipo | Ejemplo de output | Cuándo usarlo |
|------|------------------|---------------|
| Número | `42`, `3.14` | Cálculos matemáticos |
| Texto | `"Completado"`, `"Alto"` | Etiquetas y clasificaciones |
| Booleano | `true`, `false` | Condiciones sí/no |
| Fecha | Una fecha calculada | Fechas dinámicas |

### El error más común

```
// INCORRECTO - mezclar tipos sin convertir
"El valor es " + 42 

// CORRECTO - convertir número a texto primero
"El valor es " + format(42)
```

---

## Las 20 fórmulas más usadas con ejemplos

### Fórmulas de texto

**Fórmula 1: Concatenar nombre completo**
```
prop("Nombre") + " " + prop("Apellido")
```
Output: "Juan Pérez"

**Fórmula 2: Crear ID único con formato**
```
"PROJ-" + format(prop("Número")) + "-" + formatDate(prop("Fecha de creación"), "YYYY")
```
Output: "PROJ-42-2026"

**Fórmula 3: Generar email corporativo automático**
```
lower(prop("Nombre")) + "." + lower(prop("Apellido")) + "@empresa.com"
```
Output: "juan.perez@empresa.com"

**Fórmula 4: Semáforo de estado (texto con emoji)**
```
if(prop("% Avance") >= 80, "🟢 En buen camino",
  if(prop("% Avance") >= 50, "🟡 Atención requerida",
    "🔴 Requiere acción"))
```

**Fórmula 5: Resumen del proyecto en una línea**
```
prop("Proyecto") + " | " + prop("Cliente") + " | " + formatDate(prop("Fecha entrega"), "DD/MM")
```
Output: "Rediseño web | Empresa XYZ | 30/06"

---

### Fórmulas numéricas

**Fórmula 6: Porcentaje de avance**
```
round(prop("Tareas completadas") / prop("Total tareas") * 100)
```
Output: `75` (como número, lo que te permite mostrar una barra de progreso)

**Fórmula 7: Margen de ganancia**
```
round((prop("Ingresos") - prop("Costos")) / prop("Ingresos") * 100)
```
Output: `35` (35% de margen)

**Fórmula 8: Valor ponderado de oportunidad**
```
prop("Valor") * prop("Probabilidad de cierre") / 100
```
Output: Si el valor es $10,000 y la probabilidad 70%, el resultado es $7,000

**Fórmula 9: Tarifa efectiva por hora**
```
if(prop("Horas trabajadas") > 0, 
  round(prop("Valor del proyecto") / prop("Horas trabajadas")),
  0)
```
Output: Cuánto ganaste por hora real trabajada

**Fórmula 10: Precio con IVA chileno (19%)**
```
round(prop("Precio neto") * 1.19)
```

**Fórmula 11: Precio con IVA mexicano (16%)**
```
round(prop("Precio neto") * 1.16)
```

**Fórmula 12: Cálculo de comisión de ventas**
```
if(prop("Monto venta") >= 10000, prop("Monto venta") * 0.08,
  if(prop("Monto venta") >= 5000, prop("Monto venta") * 0.06,
    prop("Monto venta") * 0.04))
```
Comisión escalonada: 8% para ventas +$10k, 6% para +$5k, 4% para el resto.

---

### Fórmulas de fecha

**Fórmula 13: Días hasta el deadline**
```
dateBetween(prop("Fecha límite"), now(), "days")
```
Output: Número positivo = días que faltan. Número negativo = días de retraso.

**Fórmula 14: Semáforo de urgencia por fecha**
```
if(dateBetween(prop("Fecha límite"), now(), "days") < 0, "🔴 VENCIDO",
  if(dateBetween(prop("Fecha límite"), now(), "days") <= 3, "🟠 Urgente",
    if(dateBetween(prop("Fecha límite"), now(), "days") <= 7, "🟡 Esta semana",
      "🟢 A tiempo")))
```

**Fórmula 15: Días desde la última interacción con cliente**
```
dateBetween(now(), prop("Última interacción"), "days")
```
Úsala para identificar clientes que llevan muchos días sin contacto.

**Fórmula 16: Calcular fecha de vencimiento de factura (+30 días)**
```
dateAdd(prop("Fecha de emisión"), 30, "days")
```

**Fórmula 17: Obtener el mes en texto (en español)**
```
if(month(prop("Fecha")) == 1, "Enero",
  if(month(prop("Fecha")) == 2, "Febrero",
    if(month(prop("Fecha")) == 3, "Marzo",
      if(month(prop("Fecha")) == 4, "Abril",
        if(month(prop("Fecha")) == 5, "Mayo",
          if(month(prop("Fecha")) == 6, "Junio",
            if(month(prop("Fecha")) == 7, "Julio",
              if(month(prop("Fecha")) == 8, "Agosto",
                if(month(prop("Fecha")) == 9, "Septiembre",
                  if(month(prop("Fecha")) == 10, "Octubre",
                    if(month(prop("Fecha")) == 11, "Noviembre",
                      "Diciembre")))))))))))
```

---

### Fórmulas condicionales avanzadas

**Fórmula 18: Clasificación de leads por múltiples criterios**
```
if(prop("Presupuesto confirmado") and prop("Necesidad urgente") and prop("Decisor involucrado"),
  "🔥 Lead Caliente",
  if(prop("Presupuesto confirmado") or prop("Necesidad urgente"),
    "⚡ Lead Tibio",
    "❄️ Lead Frío"))
```

**Fórmula 19: Prioridad automática basada en impacto y esfuerzo**
```
if(prop("Impacto") == "Alto" and prop("Esfuerzo") == "Bajo",
  "1 - Quick Win",
  if(prop("Impacto") == "Alto" and prop("Esfuerzo") == "Alto",
    "2 - Proyecto Mayor",
    if(prop("Impacto") == "Bajo" and prop("Esfuerzo") == "Bajo",
      "3 - Completar si hay tiempo",
      "4 - No hacer")))
```

**Fórmula 20: Score total de empleado (para evaluaciones)**
```
round(
  (prop("Calidad trabajo") * 0.35 +
   prop("Cumplimiento plazos") * 0.25 +
   prop("Trabajo en equipo") * 0.20 +
   prop("Iniciativa") * 0.20) * 10
) / 10
```
Esta fórmula calcula un score ponderado donde cada dimensión tiene un peso diferente.

---

## Fórmulas específicas para empresas chilenas (IVA 19%)

Para empresas en Chile, estas fórmulas son especialmente útiles:

**Calcular IVA separado**
```
round(prop("Monto neto") * 0.19)
```

**Total con IVA**
```
round(prop("Monto neto") * 1.19)
```

**Extraer neto de un monto que incluye IVA**
```
round(prop("Monto con IVA") / 1.19)
```

**Verificar si está dentro del límite de exención**
```
if(prop("Monto neto") < 35 * 5810, "Exento de boleta", "Requiere factura")
```
*(Límite aproximado; verificar con tu contador)*

**Fecha de vencimiento SII (día 20 del mes siguiente)**
```
dateAdd(dateAdd(prop("Fecha factura"), 1, "months"), 20 - date(prop("Fecha factura")), "days")
```

---

## Troubleshooting de fórmulas en Notion

Los errores más comunes y cómo resolverlos:

### Error: "Type mismatch"

**El problema**: Estás intentando combinar o comparar tipos incompatibles.

```
// ERROR: comparando texto con número
prop("Estado") == 1

// CORRECTO: comparar con el mismo tipo
prop("Estado") == "Activo"
```

### Error: "Property doesn't exist"

**El problema**: El nombre de la propiedad en la fórmula no coincide exactamente con el nombre real.

```
// Si la propiedad se llama "Fecha de entrega" (con espacios)
prop("Fecha de entrega")  // CORRECTO
prop("FechaEntrega")      // ERROR
```

### Error: La fórmula devuelve NaN o Infinity

**El problema**: Estás dividiendo por cero.

```
// PROBLEMA: si Horas = 0, devuelve Infinity
prop("Valor") / prop("Horas")

// SOLUCIÓN: verificar que no sea 0 antes de dividir
if(prop("Horas") > 0, prop("Valor") / prop("Horas"), 0)
```

### Error: Las fechas no calculan correctamente

**El problema**: `dateBetween` puede devolver números negativos cuando el orden de las fechas está invertido.

```
// Para días que FALTAN (fecha futura - hoy)
dateBetween(prop("Fecha límite"), now(), "days")

// Para días TRANSCURRIDOS (hoy - fecha pasada)
dateBetween(now(), prop("Fecha inicio"), "days")
```

### La fórmula funciona pero no muestra lo que espero

**El problema**: El tipo de output no coincide con lo que quieres mostrar.

```
// Quieres mostrar un porcentaje como texto "75%"
format(round(prop("Avance") * 100)) + "%"

// vs. solo el número para usar en cálculos
round(prop("Avance") * 100)
```

---

## Recursos para seguir aprendiendo

Las fórmulas de Notion tienen una curva de aprendizaje real, pero con práctica se vuelven una segunda naturaleza. Recomendamos:

1. Empieza con fórmulas simples de texto y número
2. Progresa a fórmulas condicionales `if()`
3. Luego incorpora fórmulas de fecha
4. Finalmente, combina todo en fórmulas complejas

Nuestro template **Fórmulas Notion para LATAM** incluye una biblioteca de 50+ fórmulas listas para copiar, organizadas por categoría y con documentación en español.

> **[→ Obtener biblioteca de fórmulas — $15 USD](https://notionlatam.com/templates/formulas)**

¿Necesitas una fórmula específica para tu negocio? Escríbenos y la desarrollamos.

> **[→ Soporte técnico — notionlatam.com/soporte](https://notionlatam.com/soporte)**
