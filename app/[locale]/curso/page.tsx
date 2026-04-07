"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Play,
  Star,
  Users,
  Clock,
  BookOpen,
  Award,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import { AccordionItem } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const modules = [
  {
    number: "01",
    title: "Fundamentos de Notion",
    duration: "2h 30min",
    lessons: 8,
    description: "Domina la interfaz, bloques básicos, páginas y navegación. Configura tu workspace desde cero.",
    topics: ["Bloques y tipos de contenido", "Páginas y subpáginas", "Workspace y settings", "Shortcuts esenciales"],
    free: true,
  },
  {
    number: "02",
    title: "Bases de Datos Maestras",
    duration: "3h 15min",
    lessons: 12,
    description: "El corazón de Notion. Aprende tablas, boards, calendarios, galerías y cómo relacionarlas.",
    topics: ["Propiedades y tipos de datos", "Vistas: tabla, kanban, galería", "Filtros y ordenamiento", "Relaciones y Rollups"],
    free: false,
  },
  {
    number: "03",
    title: "Fórmulas Avanzadas",
    duration: "2h 45min",
    lessons: 10,
    description: "Automatiza cálculos y lógica compleja con fórmulas. Desde básicas hasta expresiones avanzadas.",
    topics: ["Sintaxis de fórmulas", "Fórmulas de fecha", "If/else y condicionales", "Casos de uso reales"],
    free: false,
  },
  {
    number: "04",
    title: "Sistema Operativo para tu Negocio",
    duration: "4h 00min",
    lessons: 14,
    description: "Construye el sistema completo de gestión de tu empresa: proyectos, clientes, finanzas y equipo.",
    topics: ["CRM de clientes", "Gestión de proyectos", "Control financiero", "Dashboard ejecutivo"],
    free: false,
  },
  {
    number: "05",
    title: "Automatizaciones e Integraciones",
    duration: "2h 00min",
    lessons: 8,
    description: "Conecta Notion con el resto de tu stack: Zapier, Make, Slack, Google y más.",
    topics: ["Notion API básica", "Zapier integrations", "Make (Integromat)", "Webhooks y triggers"],
    free: false,
  },
  {
    number: "06",
    title: "Casos Reales LATAM",
    duration: "3h 30min",
    lessons: 12,
    description: "Aprende con ejemplos reales de empresas latinoamericanas. Templates listos para copiar.",
    topics: ["Agencia digital", "E-commerce", "Consultora", "Startup tech"],
    free: false,
  },
];

const plans = [
  {
    name: "Free",
    price: 0,
    description: "Acceso al primer módulo",
    features: [
      "Módulo 1 completo (2.5 horas)",
      "8 lecciones en video",
      "Acceso de por vida",
      "Comunidad Discord",
    ],
    notIncluded: ["Módulos 2-6", "Templates premium", "Mentoría grupal", "Certificado"],
    cta: "Comenzar Gratis",
    highlighted: false,
    color: "border-notion-border",
  },
  {
    name: "Pro",
    price: 97,
    originalPrice: 147,
    description: "El curso completo",
    features: [
      "Todos los módulos (18+ horas)",
      "64 lecciones en video HD",
      "18 templates incluidos ($300+ valor)",
      "Acceso de por vida + updates",
      "Comunidad exclusiva Discord",
      "Mentoría grupal mensual",
      "Certificado de completación",
    ],
    notIncluded: [],
    cta: "Comprar Ahora",
    highlighted: true,
    color: "border-notion-blue",
    badge: "Más Popular",
  },
  {
    name: "VIP",
    price: 197,
    originalPrice: 297,
    description: "Curso + mentoría 1-1",
    features: [
      "Todo lo incluido en Pro",
      "2 sesiones 1-1 con instructor",
      "Revisión de tu sistema Notion",
      "Templates 100% personalizados",
      "Acceso canal VIP Discord",
      "Prioridad en soporte",
      "Acceso a futuros cursos",
    ],
    notIncluded: [],
    cta: "Quiero el VIP",
    highlighted: false,
    color: "border-notion-border",
    badge: "Para Equipos",
  },
];

const testimonials = [
  {
    name: "Valentina Cruz",
    role: "Dueña de agencia, Colombia",
    avatar: "VC",
    rating: 5,
    text: "En 3 semanas monté el sistema operativo completo de mi agencia. Ahora gestiono 12 clientes y 40 proyectos activos desde un solo lugar. El ROI fue inmediato.",
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Diego Morales",
    role: "Freelancer, México",
    avatar: "DM",
    rating: 5,
    text: "Las fórmulas avanzadas me cambiaron la vida. Tenía miedo de ese módulo pero el instructor lo explica de forma increíblemente clara. Ahora automatizo cosas que antes tardaban horas.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Lucía Fernández",
    role: "Gerente de operaciones, Argentina",
    avatar: "LF",
    rating: 5,
    text: "El módulo de casos reales LATAM es oro puro. Ver cómo una empresa similar a la tuya implementó Notion y ahorró 15 horas semanales... eso no tiene precio.",
    color: "from-violet-400 to-purple-500",
  },
];

const faqs = [
  {
    question: "¿Necesito experiencia previa con Notion?",
    answer: "No, el curso está diseñado para todos los niveles. Comenzamos desde cero y avanzamos gradualmente hasta niveles expertos.",
  },
  {
    question: "¿Por cuánto tiempo tengo acceso?",
    answer: "El acceso es de por vida, incluyendo todas las actualizaciones futuras del curso sin costo adicional.",
  },
  {
    question: "¿Los templates están incluidos en el precio?",
    answer: "Sí, el plan Pro incluye todos los templates del curso (valor de $300+ USD) sin costo adicional.",
  },
  {
    question: "¿Hay garantía de devolución?",
    answer: "Sí, ofrecemos garantía total de 30 días. Si el curso no supera tus expectativas, te devolvemos el 100% sin preguntas.",
  },
  {
    question: "¿Puedo ver el curso a mi ritmo?",
    answer: "Absolutamente. Todo el contenido está disponible de inmediato y puedes avanzar al ritmo que mejor se adapte a tu agenda.",
  },
  {
    question: "¿El curso se actualiza con las nuevas features de Notion?",
    answer: "Sí, actualizamos el contenido constantemente con cada nueva feature importante que lanza Notion. Sin costo adicional.",
  },
];

export default function CursoPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-notion-blue/8 via-purple-500/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-notion-blue/10 text-notion-blue text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Curso Completo de Notion
                </div>
              </FadeInSection>
              <FadeInSection delay={0.1}>
                <h1 className="text-5xl md:text-6xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-5 leading-tight tracking-tight">
                  Domina Notion y{" "}
                  <span className="gradient-text">transforma tu negocio</span>
                </h1>
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary mb-8 leading-relaxed">
                  Aprende a construir el sistema operativo de tu empresa en Notion. Desde cero hasta nivel experto, con casos reales de LATAM.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Clock, label: "18+ horas de video" },
                    { icon: BookOpen, label: "64 lecciones" },
                    { icon: Users, label: "500+ alumnos" },
                    { icon: Award, label: "Certificado incluido" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 bg-notion-gray-50 dark:bg-notion-gray-800 rounded-xl"
                    >
                      <div className="w-8 h-8 bg-notion-blue/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-notion-blue" />
                      </div>
                      <span className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeInSection>
              <FadeInSection delay={0.4}>
                <div className="flex items-center gap-4">
                  <Button
                    size="lg"
                    className="bg-notion-blue hover:bg-notion-blue/90 text-white shadow-lg hover:shadow-xl transition-all text-lg px-8"
                  >
                    Inscribirme Ahora — $97
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="ghost" className="gap-2">
                    <Play className="w-5 h-5 fill-current" />
                    Ver Demo Gratis
                  </Button>
                </div>
                <p className="mt-4 text-sm text-notion-text-secondary">
                  Garantía de 30 días • Acceso de por vida • Actualizado para 2026
                </p>
              </FadeInSection>
            </div>

            {/* Right — Course preview card */}
            <FadeInSection delay={0.3} direction="left">
              <div className="relative">
                <div className="relative bg-white dark:bg-notion-gray-800 rounded-3xl notion-shadow-lg p-8 border border-notion-border dark:border-notion-border-dark">
                  {/* Video placeholder */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-notion-blue to-purple-600 aspect-video mb-6 flex items-center justify-center cursor-pointer group">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl"
                    >
                      <Play className="w-7 h-7 fill-notion-blue text-notion-blue ml-1" />
                    </motion.div>
                    <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                      Vista previa — Módulo 1
                    </div>
                  </div>

                  <div className="space-y-3">
                    {modules.slice(0, 3).map((mod) => (
                      <div
                        key={mod.number}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-notion-gray-50 dark:hover:bg-notion-gray-700 transition-colors"
                      >
                        <div className="w-8 h-8 bg-notion-blue/10 rounded-lg flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-notion-blue">{mod.number}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark truncate">
                            {mod.title}
                          </p>
                          <p className="text-xs text-notion-text-secondary">{mod.duration} · {mod.lessons} lecciones</p>
                        </div>
                        {mod.free ? (
                          <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">Gratis</span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-notion-text-secondary shrink-0" />
                        )}
                      </div>
                    ))}
                    <p className="text-xs text-center text-notion-text-secondary pt-1">
                      +{modules.length - 3} módulos más...
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-notion-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  ⭐ 4.9/5
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">
                Contenido del Curso
              </h2>
              <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary">
                {modules.reduce((a, m) => a + m.lessons, 0)} lecciones · {modules.length} módulos · 18+ horas
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-3">
            {modules.map((mod, i) => (
              <FadeInSection key={mod.number} delay={i * 0.07}>
                <div
                  className={cn(
                    "bg-white dark:bg-notion-gray-800 rounded-2xl overflow-hidden border transition-all duration-200",
                    openModule === i
                      ? "border-notion-blue/30 notion-shadow"
                      : "border-notion-border dark:border-notion-border-dark hover:border-notion-blue/20"
                  )}
                >
                  <button
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <div className="w-10 h-10 bg-notion-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-notion-blue">{mod.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-notion-text-primary dark:text-notion-text-dark">
                          {mod.title}
                        </h3>
                        {mod.free && (
                          <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                            Gratis
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-notion-text-secondary mt-0.5">
                        {mod.duration} · {mod.lessons} lecciones
                      </p>
                    </div>
                    <ChevronRight
                      className={cn(
                        "w-5 h-5 text-notion-text-secondary transition-transform duration-200",
                        openModule === i && "rotate-90"
                      )}
                    />
                  </button>

                  {openModule === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 border-t border-notion-border/50 dark:border-notion-border-dark/50"
                    >
                      <p className="text-sm text-notion-text-secondary mt-4 mb-4 leading-relaxed">
                        {mod.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {mod.topics.map((topic) => (
                          <div key={topic} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-notion-blue shrink-0" />
                            <span className="text-notion-text-secondary dark:text-notion-text-dark-secondary">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
                Elige tu plan
              </h2>
              <p className="text-xl text-notion-text-secondary">
                Sin compromisos. Garantía de 30 días.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <FadeInSection key={plan.name} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative rounded-2xl border-2 p-8 flex flex-col h-full transition-all",
                    plan.highlighted
                      ? "border-notion-blue bg-notion-blue/3 dark:bg-notion-blue/5 notion-shadow-lg"
                      : "border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-800"
                  )}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-notion-blue text-white text-sm font-bold rounded-full shadow-md">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-notion-text-secondary mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark">
                        ${plan.price}
                      </span>
                      {plan.price > 0 && <span className="text-notion-text-secondary">USD</span>}
                      {plan.originalPrice && (
                        <span className="text-sm text-notion-text-secondary line-through">
                          ${plan.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-notion-text-primary dark:text-notion-text-dark">{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded?.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm opacity-40">
                        <span className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center">–</span>
                        <span className="text-notion-text-secondary line-through">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={cn(
                      "w-full",
                      plan.highlighted
                        ? "bg-notion-blue hover:bg-notion-blue/90 text-white shadow-md"
                        : "variant-outline border-2"
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">
                Lo que dicen los alumnos
              </h2>
              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="font-bold ml-2">4.9</span>
                <span className="text-notion-text-secondary">(500+ alumnos)</span>
              </div>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 0.1}>
                <div className="bg-white dark:bg-notion-gray-800 rounded-2xl p-7 notion-shadow hover:notion-shadow-lg transition-all">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed mb-5 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-notion-text-primary dark:text-notion-text-dark">{t.name}</p>
                      <p className="text-xs text-notion-text-secondary">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-10 text-center">
              Preguntas Frecuentes
            </h2>
          </FadeInSection>
          <div>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-notion-blue/10 via-purple-500/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
              Empieza hoy, gratis
            </h2>
            <p className="text-xl text-notion-text-secondary mb-8">
              Accede al Módulo 1 completo sin costo y descubre por qué más de 500 profesionales de LATAM eligieron este curso.
            </p>
            <Button
              size="lg"
              className="bg-notion-blue hover:bg-notion-blue/90 text-white shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-6"
            >
              Comenzar Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-4 text-sm text-notion-text-secondary">
              Sin tarjeta de crédito • Acceso inmediato • 30 días de garantía
            </p>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
