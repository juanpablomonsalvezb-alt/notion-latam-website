# Notion LATAM - Sitio Web Premium

## Descripción del Proyecto
Sitio web premium para vender productos y servicios complementarios a Notion, dirigido al mercado LATAM. Diseño inspirado 90% en el ADN visual de Notion con animaciones de clase mundial.

## Stack Tecnológico
- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Componentes:** shadcn/ui
- **Tipografía:** Inter (la misma de Notion)
- **Iconos:** Lucide React
- **Pagos:** Stripe
- **Hosting:** Vercel

## Estructura del Proyecto
```
notion-latam-website/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home page
│   ├── templates/          # Página de templates
│   ├── curso/              # Página del curso
│   ├── consultoria/        # Página de consultoría
│   └── saas/               # Página del SaaS WhatsApp Bot
├── components/
│   ├── ui/                 # Componentes shadcn/ui
│   ├── layout/            # Header, Footer
│   ├── sections/          # Secciones del sitio
│   └── animations/        # Componentes con animaciones
├── lib/
│   └── utils.ts           # Utilidades
├── public/
│   └── assets/            # Imágenes, logos
└── styles/
    └── globals.css        # Estilos globales
```

## Paleta de Colores (ADN Notion)
- **Background:** #FFFFFF (light), #191919 (dark)
- **Text Primary:** #37352F (light), #FFFFFF (dark)
- **Text Secondary:** #787774 (light), #9B9A97 (dark)
- **Accent:** #2383E2 (Notion blue)
- **Border:** #E9E9E7 (light), #373737 (dark)

## Características Clave

### 1. Animaciones Premium
- Scroll-triggered animations (elementos aparecen al scrollear)
- Smooth page transitions
- Hover effects sutiles en cards
- Parallax effects moderados
- Cursor customizado (opcional)
- Loading states elegantes

### 2. Secciones del Sitio

#### Home Page
1. **Hero Section**
   - Headline impactante
   - Gradiente sutil de fondo
   - CTA prominente
   - Preview animado del producto

2. **Features Section**
   - Grid de características
   - Iconos animados
   - Micro-interacciones

3. **Templates Showcase**
   - Carousel/Grid de templates
   - Hover previews
   - Precios claros

4. **Social Proof**
   - Testimonios
   - Logos de clientes

5. **CTA Final**
   - Call to action fuerte
   - Múltiples opciones de contacto

#### Templates Page
- Filtros por categoría
- Grid responsivo
- Vista previa en modal
- Compra directa

#### Curso Page
- Video demo
- Curriculum detallado
- Pricing
- FAQ

#### Consultoría Page
- Proceso paso a paso
- Paquetes de servicio
- Calendario de agendamiento
- Casos de éxito

#### SaaS Page
- Demo interactivo
- Features del producto
- Pricing tiers
- Prueba gratis CTA

### 3. Componentes Reutilizables
- Button (con variantes)
- Card (con animaciones)
- Input/Form
- Modal
- Navigation
- Footer

## Instrucciones para Claude Code

### Paso 1: Inicializar Proyecto
```bash
npx create-next-app@latest notion-latam --typescript --tailwind --app
cd notion-latam
```

### Paso 2: Instalar Dependencias
```bash
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge
npx shadcn-ui@latest init
```

### Paso 3: Configurar shadcn/ui
Cuando pregunte, seleccionar:
- Style: Default
- Base color: Slate
- CSS variables: Yes

### Paso 4: Agregar Componentes shadcn/ui
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add tabs
```

### Paso 5: Configurar Tailwind
Ver archivo `tailwind.config.ts` en este proyecto.

### Paso 6: Crear Estructura de Carpetas
Seguir estructura definida arriba.

### Paso 7: Implementar Páginas
Crear cada página según los diseños proporcionados en `/designs/`

## Diseño Responsivo
- Mobile First approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navegación mobile con menú hamburguesa
- Imágenes optimizadas para cada tamaño

## Performance
- Next.js Image optimization
- Lazy loading de componentes
- Code splitting automático
- Fonts optimization (next/font)

## SEO
- Metadata en cada página
- Open Graph tags
- Sitemap.xml
- robots.txt

## Deployment
1. Push a GitHub
2. Conectar con Vercel
3. Deploy automático en cada push

## Próximos Pasos
1. Crear componentes base
2. Implementar sistema de animaciones
3. Desarrollar páginas principales
4. Integrar Stripe para pagos
5. Testing y optimización
6. Deploy a producción
