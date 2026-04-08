---
title: "OKRs en Notion: Implementa el framework que usa Google para tu empresa"
description: "Implementa el framework OKR en Notion para alinear a tu equipo. Guía paso a paso con plantillas para Objectives y Key Results."
keywords: ["OKRs en Notion", "framework OKR empresa", "Objectives Key Results Notion", "OKR plantilla Notion", "implementar OKRs LATAM"]
author: "Notion LATAM"
date: "2026-04-07"
category: "Estrategia"
readTime: "10 min"
---

# OKRs en Notion: La guía completa para implementar el framework de Google

Google, Intel, LinkedIn, y miles de empresas de alto rendimiento en todo el mundo usan OKRs (Objectives and Key Results) para definir metas ambiciosas y medirlas con precisión. En LATAM, el framework está ganando adopción rápidamente, especialmente en startups y empresas tech.

Notion es, posiblemente, el mejor lugar para implementar OKRs en una empresa mediana. Es lo suficientemente flexible para adaptarse a cualquier estructura organizacional, y lo suficientemente simple para que todos en el equipo lo entiendan.

---

## Qué son los OKRs y por qué funcionan

OKR significa **Objectives and Key Results**. La estructura es simple pero poderosa:

**Objective (O)**: Una declaración inspiradora y cualitativa de hacia dónde vamos.
- Debe ser ambicioso pero alcanzable
- Cualitativo (no un número)
- Memorable: el equipo debe poder repetirlo sin mirar el documento

**Key Results (KR)**: Las medidas específicas y cuantificables que demuestran que logramos el objetivo.
- Siempre tienen un número
- Verifiables: al final del período, es obvio si se logró o no
- Generalmente 3-5 KRs por Objective

### Ejemplo clásico de OKR

**Objective**: Convertirnos en la referencia de productividad para PyMEs en LATAM.

**Key Results:**
- KR1: Aumentar el MRR de $15,000 a $50,000 USD para Q4
- KR2: Alcanzar 1,000 clientes activos de pago
- KR3: Lograr NPS promedio de 70 o más
- KR4: Publicar 24 artículos de blog que generen 50,000 visitas mensuales

¿Ves la diferencia? El Objective inspira y da dirección. Los KRs son la prueba objetiva de que llegamos ahí.

### Por qué los OKRs funcionan

**Alineación**: Cuando todos en el equipo conocen los OKRs de la empresa, pueden tomar decisiones autónomas alineadas con la dirección.

**Foco**: Los OKRs obligan a priorizar. Una empresa con 3 Objectives y 12 Key Results sabe exactamente en qué concentrarse.

**Transparencia**: Los OKRs son públicos dentro de la empresa. Cualquiera puede ver qué hace cualquier equipo y por qué.

**Ambición calibrada**: La regla de los OKRs es que lograr el 70% de un OKR ambicioso es mejor que lograr el 100% de uno conservador.

---

## Estructura de OKRs en Notion: Las tres capas

Un sistema de OKRs en Notion bien diseñado tiene tres capas:

### Capa 1: Objetivos de empresa (nivel estratégico)

Los OKRs anuales o trimestrales de toda la organización. Definidos por el equipo directivo.

**Base de datos: Objectives**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Objective | Title | La declaración del objetivo |
| Nivel | Select | Empresa, Área, Individual |
| Período | Select | Q1, Q2, Q3, Q4, Anual |
| Año | Number | Año del objetivo |
| Área | Select | Empresa, Ventas, Marketing, Tech, Ops |
| Responsable | Person | Dueño del objetivo |
| Key Results | Relation | KRs conectados a este objetivo |
| % Avance | Rollup | Promedio del avance de los KRs |
| Estado | Select | En progreso, Completado, Cancelado |

### Capa 2: Key Results (nivel de medición)

Cada KR es un registro individual que mide el progreso hacia un objetivo.

**Base de datos: Key Results**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Key Result | Title | La métrica específica |
| Objective | Relation | A qué objetivo pertenece |
| Valor inicial | Number | Dónde empezamos |
| Meta | Number | A dónde queremos llegar |
| Valor actual | Number | Dónde estamos hoy |
| % Avance | Formula | (Actual - Inicial) / (Meta - Inicial) × 100 |
| Tendencia | Formula | Semáforo basado en % avance |
| Responsable | Person | Quién lo trackea |
| Fuente | Text | De dónde viene el dato |
| Frecuencia | Select | Semanal, Mensual, Trimestral |

**Fórmula de % avance:**
```
if(prop("Meta") != prop("Valor inicial"),
  round((prop("Valor actual") - prop("Valor inicial")) / (prop("Meta") - prop("Valor inicial")) * 100),
  0)
```

**Fórmula de tendencia (semáforo):**
```
if(prop("% Avance") >= 70, "🟢 En buen camino",
  if(prop("% Avance") >= 40, "🟡 Atención",
    "🔴 En riesgo"))
```

### Capa 3: Iniciativas (nivel de ejecución)

Las acciones específicas que el equipo tomará para mover los Key Results.

**Base de datos: Iniciativas**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Iniciativa | Title | Qué vamos a hacer |
| Key Result | Relation | A qué KR contribuye |
| Estado | Select | Por iniciar, En progreso, Completado |
| Responsable | Person | Quién la ejecuta |
| Fecha límite | Date | Cuándo estará lista |
| Impacto esperado | Select | Alto, Medio, Bajo |

---

## Check-ins semanales documentados

El mayor error al implementar OKRs es definirlos al inicio del trimestre y no revisarlos hasta el final. Los check-ins semanales evitan eso.

### Formato de check-in semanal (15 minutos)

Crea una base de datos de Check-ins con estas propiedades:

| Propiedad | Tipo |
|-----------|------|
| Semana | Title |
| Key Result | Relation |
| Valor esta semana | Number |
| Qué avanzamos | Text |
| Qué nos bloqueó | Text |
| Plan próxima semana | Text |
| Confianza | Select (1-5) |

El "Nivel de confianza" es importante: ¿qué tan seguro estás de lograr este KR al final del trimestre? Si la confianza baja consistentemente, es momento de escalar o ajustar la meta.

### La reunión de OKRs semanal (equipo directivo)

Agenda: 30-45 minutos, todos los lunes por la mañana.

1. **Revisión rápida del dashboard** (5 min): Ver el estado general de todos los KRs
2. **KRs en rojo** (15 min): Enfocarse solo en los que están en riesgo. ¿Por qué? ¿Qué necesitamos?
3. **Decisiones** (10 min): ¿Qué cambiamos? ¿Qué recursos se asignan?
4. **Compromisos** (5 min): Cada responsable de KR en riesgo dice qué hará esta semana

---

## Retrospectivas trimestrales

Al final de cada trimestre, antes de definir los OKRs del siguiente, se hace la retrospectiva trimestral.

### Template de retrospectiva trimestral

```
# Retrospectiva OKRs Q[N] — [Año]

**Fecha**: [fecha]
**Duración**: 2 horas
**Participantes**: [equipo directivo]

---

## Resumen de resultados

| Objective | KR | Meta | Resultado | % |
|-----------|----|----|-----------|---|
| O1: [nombre] | KR1 | X | Y | Z% |
| O1: [nombre] | KR2 | X | Y | Z% |
| O2: [nombre] | KR1 | X | Y | Z% |

**Promedio general del trimestre**: [X]%

---

## Análisis: ¿Qué logramos?

[Narrative de los objetivos completados]

## Análisis: ¿Qué no logramos y por qué?

### [KR que no se logró]
- ¿Qué pasó realmente?
- ¿Era una meta realista?
- ¿Faltaron recursos o priorización?
- ¿Aprendizaje para el próximo trimestre?

## Lecciones aprendidas

1. [Lección 1]
2. [Lección 2]
3. [Lección 3]

## Propuestas para el próximo trimestre

[Borradores iniciales de OKRs para Q(N+1)]
```

---

## Ejemplos de OKRs por área de empresa

### Área de Ventas

**Objective**: Convertirnos en el equipo de ventas más efectivo en nuestra industria.

- KR1: Aumentar el deal size promedio de $2,000 a $3,500 USD
- KR2: Reducir el ciclo de ventas de 45 a 30 días
- KR3: Lograr tasa de conversión lead-a-cliente del 25%
- KR4: Generar $200,000 en nuevos contratos firmados

### Área de Marketing

**Objective**: Construir una marca que atraiga clientes sin gastar en publicidad paga.

- KR1: Aumentar tráfico orgánico de 5,000 a 20,000 visitas/mes
- KR2: Hacer crecer el newsletter de 500 a 2,500 suscriptores
- KR3: Alcanzar 10,000 seguidores en LinkedIn con engagement > 3%
- KR4: Lograr que 40% de los nuevos leads vengan de referidos

### Área de Tecnología

**Objective**: Tener un producto que los usuarios amen y recomienden.

- KR1: Reducir el tiempo de carga promedio de 3.2s a menos de 1.5s
- KR2: Alcanzar NPS de producto de 50 o más
- KR3: Reducir tickets de soporte técnico en 40%
- KR4: Lanzar 3 funcionalidades nuevas con adopción > 60%

### Área de Operaciones

**Objective**: Operar con la eficiencia de una empresa 10x nuestro tamaño.

- KR1: Documentar el 100% de los procesos críticos
- KR2: Reducir el tiempo de onboarding de nuevos clientes de 5 días a 2 días
- KR3: Automatizar 5 procesos manuales que consumen más de 5h/semana
- KR4: Alcanzar satisfacción del equipo (eNPS) de 60 o más

---

## Errores más comunes al implementar OKRs

**Error 1: Confundir Objectives con KPIs del negocio**

Los OKRs son para cambio transformacional. "Mantener el NPS en 75" no es un OKR, es un KPI operativo. Un OKR sería "Transformar nuestra experiencia de cliente para ser referencia del mercado", con KRs que representen un salto, no el statu quo.

**Error 2: Tener demasiados OKRs**

Si tienes 5 Objectives con 5 KRs cada uno, nadie puede recordar qué es prioridad. Regla: máximo 3 Objectives por período, máximo 4 KRs por Objective.

**Error 3: No hacer check-ins**

Los OKRs sin seguimiento semanal son solo una lista de deseos. El proceso de check-in es lo que hace que los OKRs funcionen.

**Error 4: Castigar los OKRs no logrados**

Si los líderes castigan el no lograr OKRs, el equipo aprenderá a poner metas conservadoras que siempre logren. Los OKRs deben ser un poco ambiciosos por diseño.

**Error 5: No cascadear los OKRs**

Los OKRs de empresa deben conectar con los de área, que deben conectar con los individuales. Si no hay cascada, la alineación es falsa.

---

## Obtén el template de OKRs para Notion

Nuestro template **OKRs Notion para LATAM** incluye:

- Base de datos de Objectives con propiedades configuradas
- Base de datos de Key Results con fórmulas de % avance y semáforos
- Base de datos de Iniciativas conectada a KRs
- Dashboard ejecutivo de OKRs para revisión directiva
- Templates de check-in semanal y retrospectiva trimestral
- Guía de facilitación para la sesión de definición de OKRs
- 30 ejemplos de OKRs para empresas de servicios LATAM

> **[→ Obtener template OKRs — $20 USD](https://notionlatam.com/templates/okrs)**

¿Quieres facilitar una sesión de definición de OKRs con tu equipo directivo? Ofrecemos workshops de 3 horas.

> **[→ Workshop de OKRs — desde $300 USD](https://notionlatam.com/talleres/okrs)**
