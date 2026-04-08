# Brandbook — Notion LATAM
## Guía de identidad visual y activos de marca

---

## Cómo usar los assets

Este directorio contiene todos los archivos de identidad visual de Notion LATAM. Todos los activos deben usarse de acuerdo con las directrices del brandbook.

### Archivos incluidos

| Archivo | Descripción |
|---------|-------------|
| `brandbook.html` | Brandbook completo con navegación por anclas. Abrir en navegador. |
| `design-system-tokens.css` | Variables CSS con todos los tokens del sistema de diseño |
| `social-media-templates.html` | 15 templates visuales de redes sociales. Abrir en navegador. |
| `README.md` | Este archivo |

---

## Links a cada sección del brandbook

Abre `brandbook.html` en tu navegador y navega por estas secciones:

- [01 — Introducción](#intro): Misión, visión, valores y personalidad de marca
- [02 — Logo](#logo): Variaciones, usos correctos e incorrectos
- [03 — Colores](#colores): Paleta completa con HEX, RGB, HSL
- [04 — Tipografía](#tipografia): Inter, escala tipográfica, jerarquía
- [05 — Iconografía](#iconografia): Set de íconos principales
- [06 — Tono y voz](#tov): Personalidad, adjetivos, ejemplos de copy
- [07 — Fotografía](#fotografia): Estilo, directrices y filtros
- [08 — Digital](#digital): Web, email, social media
- [09 — Documentos](#documentos): Propuestas, facturas, presentaciones
- [10 — Social media](#social): Dimensiones por plataforma
- [11 — Templates](#templates): 3 layouts de Instagram (CSS mockups)
- [12 — Checklist](#checklist): Verificación de consistencia

---

## Cómo usar el CSS de design tokens

Para usar el design system en cualquier proyecto web de Notion LATAM:

```html
<!-- En el <head> de tu HTML -->
<link rel="stylesheet" href="design-system-tokens.css" />
```

```css
/* Usar los tokens en tu CSS */
.mi-boton {
  background: var(--color-brand-blue);
  color: white;
  border-radius: var(--radius-button);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  padding: var(--space-3) var(--space-5);
  transition: var(--transition-all);
}

.mi-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: var(--card-padding);
}
```

---

## Cómo replicar los templates en Canva

1. Abre `social-media-templates.html` en tu navegador para ver los templates de referencia
2. En Canva, crea un diseño con las dimensiones correctas para cada plataforma
3. Usa los colores exactos del brandbook (disponibles en el HTML):
   - Azul marca: `#2383E2`
   - Oscuro: `#37352F`
   - Navy: `#0F2E5E`
   - Fondo: `#F7F6F3`
4. Fuente: busca "Inter" en la librería de fuentes de Canva
5. Sigue la jerarquía tipográfica del brandbook

---

## Cómo solicitar assets nuevos

Para solicitar nuevos templates, variaciones del logo u otros activos de marca:

1. Envía un email a **hello@notionlatam.com** con el asunto "Solicitud de asset — [nombre del asset]"
2. Describe: ¿Para qué plataforma? ¿Qué contenido irá? ¿Fecha que lo necesitas?
3. Si tienes un ejemplo o referencia visual, adjúntala al email

Los requests se procesan en un plazo de 3–5 días hábiles.

---

## Contacto del equipo de diseño

Para consultas sobre el uso correcto de la marca o para solicitar revisión de materiales:

- **Email**: hello@notionlatam.com
- **Web**: notionlatam.com

---

*Notion LATAM Brandbook v1.0 · 2026*
