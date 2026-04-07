# Notion LATAM — Sitio Web

Plataforma completa para el ecosistema Notion en Latinoamérica. Templates premium, cursos, consultoría y herramientas para empresas.

## Stack

- **Framework:** Next.js 15 (App Router + SSG)
- **Estilos:** Tailwind CSS 3.4 con design system Notion
- **Animaciones:** Framer Motion 11
- **Componentes:** shadcn/ui (manual, sin CLI)
- **i18n:** next-intl (ES / EN / FR)
- **Tipografía:** Inter (next/font)
- **Hosting:** Vercel

## Inicio rápido

```bash
npm install
cp .env.example .env.local
# Edita .env.local con tus valores
npm run dev
```

## Estructura

```
app/
├── [locale]/              # Rutas con i18n (es/en/fr)
│   ├── page.tsx           # Home
│   ├── templates/         # Catálogo de templates
│   │   └── [slug]/        # Detalle de template
│   ├── curso/             # Página del curso
│   ├── consultoria/       # Servicios de consultoría
│   ├── saas/              # SaaS WhatsApp Bot
│   ├── bot/               # Waitlist bot
│   ├── blog/              # Blog SEO
│   │   └── [slug]/        # Artículo de blog
│   ├── calculadora-roi/   # Herramienta ROI
│   ├── recomendador/      # Quiz de recomendación
│   ├── empezar/           # Onboarding wizard
│   ├── casos-exito/       # Casos de éxito
│   ├── sobre-nosotros/    # About
│   ├── contacto/          # Formulario de contacto
│   ├── faq/               # Preguntas frecuentes
│   ├── terminos/          # Términos y condiciones
│   └── privacidad/        # Política de privacidad
│
├── sitemap.ts             # Sitemap dinámico (50+ URLs)
├── robots.ts              # robots.txt
└── globals.css            # Estilos globales

components/
├── layout/
│   ├── Header.tsx         # Nav con mega-menu
│   └── Footer.tsx         # Footer con links
├── ui/                    # shadcn/ui components
├── animations/            # FadeInSection, etc.
├── Analytics.tsx          # GA4 + FB Pixel
├── CookieConsent.tsx      # Banner GDPR
├── SchemaOrg.tsx          # JSON-LD schemas
└── LanguageSwitcher.tsx   # ES/EN/FR switcher

messages/
├── es.json                # Español (default)
├── en.json                # English
└── fr.json                # Français

whatsapp-bot/              # Bot Node.js + Twilio + Notion API
public/
├── manifest.json          # PWA manifest
├── favicon.svg
├── logo.svg
├── logo-white.svg
├── logo-icon.svg
└── og-image.svg
```

## Paleta de colores

| Token | Light | Dark |
|-------|-------|------|
| `notion-bg` | `#FFFFFF` | `#191919` |
| `notion-text-primary` | `#37352F` | `#FFFFFF` |
| `notion-text-secondary` | `#787774` | `#9B9A97` |
| `notion-blue` | `#2383E2` | `#2383E2` |
| `notion-border` | `#E9E9E7` | `#373737` |

## i18n

Locales soportados: `es` (default), `en`, `fr`.

Las rutas tienen el formato `/{locale}/ruta`. El middleware de next-intl detecta automáticamente el idioma del navegador y redirige.

```
/es/templates    # Español
/en/templates    # English
/fr/templates    # Français
```

## Variables de entorno

Ver `.env.example` para la lista completa de variables requeridas.

## Deploy en Vercel

1. Push a GitHub
2. Importar proyecto en Vercel
3. Configurar variables de entorno del `.env.example`
4. Deploy automático en cada push a `main`

El archivo `vercel.json` configura headers de seguridad, caché y redirects automáticamente.

## WhatsApp Bot

Ver `whatsapp-bot/README.md` para instrucciones de configuración del bot Node.js con Twilio + Notion API.

## SEO

- Sitemap dinámico con hreflang en `/sitemap.xml`
- robots.txt en `/robots.txt`
- Open Graph + Twitter Card en cada página
- Schema.org JSON-LD (Organization, Product, Course, FAQ, Article)
- PWA manifest para instalación móvil
