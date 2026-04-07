# INSTRUCCIONES PARA CLAUDE CODE

## 🎯 OBJETIVO
Construir un sitio web premium con 90% ADN Notion para vender servicios y productos complementarios a Notion en LATAM.

## 📋 PASOS DE IMPLEMENTACIÓN

### PASO 1: Inicializar Proyecto
```bash
# Crear proyecto Next.js
npx create-next-app@latest notion-latam-website --typescript --tailwind --app --use-npm

# Entrar al directorio
cd notion-latam-website
```

### PASO 2: Instalar Dependencias
```bash
# Dependencias principales
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge react-intersection-observer

# Inicializar shadcn/ui
npx shadcn@latest init
```

Cuando pregunte configuración shadcn, responder:
- Would you like to use TypeScript? → Yes
- Which style would you like to use? → Default
- Which color would you like to use as base color? → Slate
- Where is your global CSS file? → app/globals.css
- Would you like to use CSS variables for colors? → Yes
- Where is your tailwind.config.js located? → tailwind.config.ts
- Configure the import alias for components? → @/components
- Configure the import alias for utils? → @/lib/utils

### PASO 3: Instalar Componentes shadcn/ui
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add dialog
npx shadcn@latest add tabs
npx shadcn@latest add scroll-area
npx shadcn@latest add dropdown-menu
npx shadcn@latest add slot
```

### PASO 4: Reemplazar Archivos de Configuración

Copiar los siguientes archivos del proyecto provisto:
- `tailwind.config.ts` (paleta Notion + animaciones)
- `app/globals.css` (estilos globales ADN Notion)
- `package.json` (dependencias completas)

### PASO 5: Crear Estructura de Carpetas
```bash
mkdir -p components/animations
mkdir -p components/layout
mkdir -p components/sections
mkdir -p components/ui
mkdir -p app/templates
mkdir -p app/curso
mkdir -p app/consultoria
mkdir -p app/saas
mkdir -p public/assets
```

### PASO 6: Copiar Componentes

Copiar todos los archivos creados a sus respectivas carpetas:

**Layout:**
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`

**Animations:**
- `components/animations/AnimatedGradient.tsx`
- `components/animations/FadeInSection.tsx`

**Sections:**
- `components/sections/FeaturesGrid.tsx`
- `components/sections/TemplatesShowcase.tsx`
- `components/sections/SocialProof.tsx`
- `components/sections/CTASection.tsx`

**Pages:**
- `app/layout.tsx`
- `app/page.tsx`

### PASO 7: Agregar Patrón de Grid (Opcional)
```bash
# Crear archivo grid.svg en public/
# (patrón sutil para fondos)
```

### PASO 8: Configurar Fonts (Ya incluido en layout.tsx)
La fuente Inter (la misma de Notion) ya está configurada en `app/layout.tsx`.

### PASO 9: Crear Páginas Adicionales

**Templates Page** (`app/templates/page.tsx`):
```tsx
"use client";

import FadeInSection from "@/components/animations/FadeInSection";

export default function TemplatesPage() {
  return (
    <div className="pt-24 px-6">
      <FadeInSection>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Templates Notion</h1>
          <p className="text-xl text-notion-text-secondary">
            Catálogo completo de templates profesionales
          </p>
        </div>
      </FadeInSection>
    </div>
  );
}
```

**Curso Page** (`app/curso/page.tsx`):
Similar estructura, cambiar contenido.

**Consultoría Page** (`app/consultoria/page.tsx`):
Similar estructura, cambiar contenido.

**SaaS Page** (`app/saas/page.tsx`):
Similar estructura, cambiar contenido.

### PASO 10: Ejecutar Desarrollo
```bash
npm run dev
```

Abrir http://localhost:3000

### PASO 11: Build y Deploy
```bash
# Build para producción
npm run build

# Test producción local
npm start

# Deploy a Vercel
# 1. Push a GitHub
# 2. Conectar repo en vercel.com
# 3. Deploy automático
```

## ✅ CHECKLIST DE COMPLETITUD

- [ ] Proyecto Next.js inicializado
- [ ] Todas las dependencias instaladas
- [ ] shadcn/ui configurado
- [ ] Tailwind con paleta Notion
- [ ] Estilos globales aplicados
- [ ] Header con navegación funcionando
- [ ] Footer completo
- [ ] Hero section con animaciones
- [ ] Features grid
- [ ] Templates showcase
- [ ] Social proof
- [ ] CTA section
- [ ] Navegación responsive (mobile)
- [ ] Dark mode funcional (opcional)
- [ ] Build sin errores
- [ ] Deployed a Vercel

## 🎨 CARACTERÍSTICAS CLAVE IMPLEMENTADAS

✅ Paleta de colores exacta de Notion
✅ Tipografía Inter (la misma de Notion)
✅ Animaciones suaves con Framer Motion
✅ Scroll-triggered animations
✅ Hover effects en cards
✅ Gradientes animados
✅ Glass morphism effects
✅ Shadows estilo Notion
✅ Responsive design
✅ Performance optimizado

## 🚀 PRÓXIMOS PASOS (OPCIONAL)

1. Agregar más páginas (Templates, Curso, Consultoría, SaaS)
2. Implementar sistema de autenticación
3. Integrar Stripe para pagos
4. Agregar CMS para gestionar templates
5. Implementar sistema de búsqueda
6. Agregar blog
7. Implementar dark mode toggle
8. Agregar analytics (Google Analytics / Vercel Analytics)
9. SEO optimization
10. Agregar sitemap.xml

## 📝 NOTAS IMPORTANTES

- El sitio tiene 90% ADN visual de Notion
- Todas las animaciones son suaves y profesionales
- El diseño es totalmente responsive
- Los componentes son reutilizables
- El código está optimizado para performance
- Ready para escalar y agregar más features

## 🐛 TROUBLESHOOTING

**Error: Module not found**
→ Verificar que todas las dependencias estén instaladas: `npm install`

**Error: Cannot find module '@/components/...'**
→ Verificar tsconfig.json tiene configurado el alias `@`

**Animaciones no funcionan**
→ Verificar que framer-motion esté instalado correctamente

**Estilos no se aplican**
→ Verificar que globals.css esté importado en layout.tsx

**Build falla**
→ Ejecutar `npm run build` y revisar errores específicos
→ Verificar que todos los imports sean correctos

## 🎯 RESULTADO ESPERADO

Un sitio web que:
- Se ve profesional como Notion
- Tiene animaciones premium
- Es 100% responsive
- Carga rápido
- Está listo para producción
- Puede escalar fácilmente

**Tiempo estimado de implementación: 2-3 horas**
