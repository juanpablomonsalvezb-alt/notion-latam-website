# Cheat Sheet — Fórmulas en Notion
## Notion LATAM · 30 fórmulas esenciales + 10 casos reales

> Las fórmulas en Notion se escriben en propiedades de tipo "Formula" y operan sobre otras propiedades del mismo registro. Sintaxis general: `prop("Nombre de Propiedad")`.

---

## CATEGORÍA 1: MATEMÁTICAS (8 fórmulas)

| # | Nombre | Sintaxis | Ejemplo | Cuándo usarla |
|---|--------|----------|---------|---------------|
| 1 | Suma | `prop("A") + prop("B")` | `prop("Precio") + prop("IVA")` | Calcular totales, sumar valores numéricos |
| 2 | Resta | `prop("A") - prop("B")` | `prop("Presupuesto") - prop("Gastado")` | Ver presupuesto restante, diferencias |
| 3 | Multiplicación | `prop("A") * prop("B")` | `prop("Horas") * prop("Tarifa por hora")` | Calcular ingresos, totales de línea |
| 4 | División | `prop("A") / prop("B")` | `prop("Ganancia") / prop("Ingresos")` | Calcular márgenes, ratios |
| 5 | Porcentaje de avance | `round(prop("Completadas") / prop("Total") * 100)` | `round(prop("Tareas done") / prop("Total tareas") * 100)` | Barra de progreso de proyectos |
| 6 | Valor absoluto | `abs(prop("Variación"))` | `abs(prop("Diferencia"))` | Mostrar diferencia sin negativos |
| 7 | Redondeo | `round(prop("Número"))` | `round(prop("Horas reales"))` | Mostrar números sin decimales |
| 8 | Redondeo hacia arriba | `ceil(prop("Número"))` | `ceil(prop("Días estimados"))` | Siempre redondear al entero mayor |

---

## CATEGORÍA 2: TEXTO (7 fórmulas)

| # | Nombre | Sintaxis | Ejemplo | Cuándo usarla |
|---|--------|----------|---------|---------------|
| 9 | Concatenar texto | `prop("A") + " " + prop("B")` | `prop("Nombre") + " " + prop("Apellido")` | Unir campos de texto |
| 10 | Nombre completo | `prop("Nombre") + " — " + prop("Empresa")` | — | Crear etiquetas únicas |
| 11 | Longitud de texto | `length(prop("Descripción"))` | — | Verificar si hay contenido, límites de caracteres |
| 12 | Texto en mayúsculas | `toUpperCase(prop("Categoría"))` | — | Estandarizar etiquetas |
| 13 | Texto en minúsculas | `toLowerCase(prop("Email"))` | — | Normalizar emails |
| 14 | Verificar si está vacío | `empty(prop("Cliente"))` | — | Detectar campos sin rellenar |
| 15 | Reemplazar texto | `replace(prop("Código"), "-", "")` | `replace(prop("Referencia"), " ", "_")` | Limpiar formatos de texto |

---

## CATEGORÍA 3: FECHA (7 fórmulas)

| # | Nombre | Sintaxis | Ejemplo | Cuándo usarla |
|---|--------|----------|---------|---------------|
| 16 | Días hasta vencimiento | `dateBetween(prop("Fecha límite"), now(), "days")` | — | Mostrar urgencia de tareas |
| 17 | Días desde creación | `dateBetween(now(), prop("Created time"), "days")` | — | Medir antigüedad de registros |
| 18 | Duración del proyecto | `dateBetween(prop("Fecha fin"), prop("Fecha inicio"), "days")` | — | Calcular duración en días |
| 19 | Año de una fecha | `year(prop("Fecha"))` | — | Agrupar por año |
| 20 | Mes de una fecha | `month(prop("Fecha"))` | — | Agrupar por mes (devuelve 0–11) |
| 21 | Día de la semana | `day(prop("Fecha"))` | — | Identificar qué día de la semana es |
| 22 | Formatear fecha | `formatDate(prop("Fecha"), "DD/MM/YYYY")` | `formatDate(now(), "MMMM YYYY")` | Mostrar fechas con formato personalizado |

---

## CATEGORÍA 4: CONDICIONALES (5 fórmulas)

| # | Nombre | Sintaxis | Ejemplo | Cuándo usarla |
|---|--------|----------|---------|---------------|
| 23 | Si / entonces | `if(condición, "Si es verdad", "Si es falso")` | `if(prop("Status") == "Completado", "✅", "⏳")` | Lógica condicional básica |
| 24 | Estado de urgencia | `if(dateBetween(prop("Fecha límite"), now(), "days") < 0, "🔴 Vencido", if(dateBetween(prop("Fecha límite"), now(), "days") < 3, "🟡 Urgente", "🟢 OK"))` | — | Semáforo visual de urgencia |
| 25 | Verificar múltiples condiciones | `if(prop("A") == "X" and prop("B") > 100, "Alerta", "Normal")` | — | Combinar múltiples criterios |
| 26 | Estado de presupuesto | `if(prop("Gastado") > prop("Presupuesto"), "⚠️ Sobre presupuesto", "✅ En presupuesto")` | — | Control de costos |
| 27 | Prioridad calculada | `if(prop("Urgencia") == "Alta" and prop("Impacto") == "Alto", "P1 — Crítico", if(prop("Urgencia") == "Alta", "P2 — Urgente", "P3 — Normal"))` | — | Calcular prioridad automáticamente |

---

## CATEGORÍA 5: ÚTILES PARA LISTAS Y REGISTROS (3 fórmulas)

| # | Nombre | Sintaxis | Ejemplo | Cuándo usarla |
|---|--------|----------|---------|---------------|
| 28 | ID único con prefijo | `"PROJ-" + format(prop("ID"))` | `"INV-" + format(prop("Número"))` | Crear códigos únicos con prefijo |
| 29 | Iniciales del nombre | `slice(prop("Nombre"), 0, 1) + slice(prop("Apellido"), 0, 1)` | — | Avatar con iniciales |
| 30 | URL de detalle | `"https://tuapp.com/proyecto/" + prop("ID")` | — | Generar links dinámicos |

---

## 10 FÓRMULAS PARA CASOS REALES DE EMPRESAS LATAM

### CASO 1 — Agencia de servicios: Rentabilidad por proyecto
```
if(
  prop("Facturado") > 0,
  round((prop("Facturado") - prop("Costo estimado")) / prop("Facturado") * 100),
  0
)
```
*Resultado*: Muestra el margen de rentabilidad (%) de cada proyecto. Si es negativo, el proyecto está en pérdida.

---

### CASO 2 — SaaS/Ventas: Estado del deal en el pipeline
```
if(prop("Probabilidad") >= 75, "🔥 Hot",
  if(prop("Probabilidad") >= 50, "👍 Warm",
    if(prop("Probabilidad") >= 25, "❄️ Cold", "💀 Perdido")))
```
*Resultado*: Etiqueta visual del estado del deal según la probabilidad de cierre.

---

### CASO 3 — Recursos humanos: Antiguedad del empleado
```
if(
  dateBetween(now(), prop("Fecha de ingreso"), "years") == 0,
  "Nuevo (< 1 año)",
  format(dateBetween(now(), prop("Fecha de ingreso"), "years")) + " años en empresa"
)
```
*Resultado*: Muestra la antigüedad del empleado en años.

---

### CASO 4 — eCommerce/Inventario: Alerta de stock bajo
```
if(
  prop("Stock actual") <= prop("Stock mínimo"),
  "⚠️ REABASTECER",
  if(prop("Stock actual") <= prop("Stock mínimo") * 1.5, "🟡 Stock bajo", "✅ OK")
)
```
*Resultado*: Semáforo de inventario para gestión de stock.

---

### CASO 5 — Proyectos: Días de retraso
```
if(
  prop("Status") != "Completado",
  if(
    dateBetween(now(), prop("Fecha límite"), "days") > 0,
    format(dateBetween(now(), prop("Fecha límite"), "days")) + " días de retraso",
    "En tiempo"
  ),
  "Completado"
)
```
*Resultado*: Muestra cuántos días lleva atrasado un proyecto activo.

---

### CASO 6 — Facturación: IVA y total con impuesto
```
round(prop("Subtotal") * 1.19)
```
*(Para Chile con IVA del 19%)*
*Resultado*: Total con IVA incluido. Cambiar 1.19 por el valor del IVA de tu país.

---

### CASO 7 — Marketing: Costo por resultado
```
if(
  prop("Resultados") > 0,
  round(prop("Inversión publicitaria") / prop("Resultados")),
  0
)
```
*Resultado*: Costo por lead, costo por venta o costo por click según lo que midas.

---

### CASO 8 — Equipo: Carga de trabajo (horas asignadas esta semana)
Usar con Rollup de tareas + filtro de esta semana.
```
if(prop("Horas asignadas") > 40, "🔴 Sobrecargado",
  if(prop("Horas asignadas") > 30, "🟡 Cargado",
    "🟢 Disponible"))
```
*Resultado*: Visibilidad rápida de quién está sobrecargado.

---

### CASO 9 — Contenido: Días desde última publicación
```
if(
  empty(prop("Última publicación")),
  "Sin publicaciones",
  format(dateBetween(now(), prop("Última publicación"), "days")) + " días"
)
```
*Resultado*: Para gestión de blog o redes sociales, ver qué canales llevan más días sin publicar.

---

### CASO 10 — Contratos: Estado de renovación
```
if(
  dateBetween(prop("Fecha vencimiento"), now(), "days") < 0,
  "❌ Vencido",
  if(dateBetween(prop("Fecha vencimiento"), now(), "days") < 30,
    "⚠️ Vence en " + format(dateBetween(prop("Fecha vencimiento"), now(), "days")) + " días",
    "✅ Vigente"
  )
)
```
*Resultado*: Gestión de vencimiento de contratos, suscripciones y renovaciones.

---

## OPERADORES DE REFERENCIA

| Operador | Uso | Ejemplo |
|----------|-----|---------|
| `==` | Igual a | `prop("Status") == "Activo"` |
| `!=` | No igual a | `prop("Prioridad") != "Baja"` |
| `>` | Mayor que | `prop("Precio") > 1000` |
| `<` | Menor que | `prop("Días restantes") < 7` |
| `>=` | Mayor o igual | `prop("Progreso") >= 100` |
| `<=` | Menor o igual | `prop("Stock") <= 10` |
| `and` | Y lógico | `condición1 and condición2` |
| `or` | O lógico | `condición1 or condición2` |
| `not` | Negación | `not empty(prop("Campo"))` |

---

*Notion LATAM — hello@notionlatam.com · notionlatam.com*
