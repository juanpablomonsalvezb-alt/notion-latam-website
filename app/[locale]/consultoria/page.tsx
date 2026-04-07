"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Star,
  MessageSquare,
  Zap,
  Users,
  BarChart2,
  Shield,
  Clock,
  Calendar,
  ChevronRight,
  Sparkles,
  Globe,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import { cn } from "@/lib/utils";

const process = [
  {
    step: "01",
    title: "Diagnóstico Inicial",
    duration: "1 hora",
    description: "Analizamos tu negocio en profundidad: workflows actuales, puntos de dolor, equipo y objetivos. Identificamos exactamente qué necesitas.",
    icon: MessageSquare,
    color: "from-blue-400 to-cyan-500",
  },
  {
    step: "02",
    title: "Diseño del Sistema",
    duration: "3-5 días",
    description: "Arquitectamos tu sistema operativo completo en Notion. Databases, relaciones, automaciones y flujos de trabajo personalizados para tu industria.",
    icon: BarChart2,
    color: "from-violet-400 to-purple-500",
  },
  {
    step: "03",
    title: "Implementación",
    duration: "1-2 semanas",
    description: "Construimos todo desde cero. Templates personalizados, migración de datos existentes y configuración de integraciones con tus herramientas.",
    icon: Zap,
    color: "from-orange-400 to-red-500",
  },
  {
    step: "04",
    title: "Capacitación del Equipo",
    duration: "2-4 horas",
    description: "Entrenamos a todo tu equipo para que adopten el sistema. Videos de referencia, documentación y SOPs incluidos.",
    icon: Users,
    color: "from-green-400 to-emerald-500",
  },
  {
    step: "05",
    title: "Soporte Post-Lanzamiento",
    duration: "30 días",
    description: "Acompañamiento durante el primer mes. Ajustes, mejoras y respuesta rápida a cualquier duda del equipo.",
    icon: Shield,
    color: "from-pink-400 to-rose-500",
  },
];

const packages = [
  {
    name: "Starter",
    price: 490,
    duration: "1-2 semanas",
    idealFor: "Freelancers y solopreneurs",
    description: "Sistema personal de gestión de proyectos, clientes y finanzas. Perfecto para profesionales independientes.",
    features: [
      "Diagnóstico de necesidades (1h)",
      "Sistema de gestión personal",
      "CRM de clientes básico",
      "Dashboard de proyectos",
      "1 template personalizado",
      "Capacitación 2 horas",
      "Soporte 2 semanas post-lanzamiento",
    ],
    notIncluded: ["Integración de equipo", "Múltiples departamentos", "Automaciones avanzadas"],
    highlighted: false,
    cta: "Contratar Starter",
    color: "border-notion-border",
  },
  {
    name: "Business",
    price: 990,
    duration: "2-3 semanas",
    idealFor: "PyMEs de 5-20 personas",
    description: "Sistema operativo completo para tu empresa. Gestión de proyectos, clientes, finanzas y equipo en un solo lugar.",
    features: [
      "Diagnóstico profundo (2h)",
      "Sistema operativo completo",
      "CRM avanzado con pipeline",
      "Gestión financiera",
      "Control de proyectos multi-equipo",
      "Hasta 3 integraciones (Slack, Drive, etc.)",
      "4 templates personalizados",
      "Capacitación equipo (4h)",
      "Soporte 30 días post-lanzamiento",
      "Videos de referencia internos",
    ],
    notIncluded: [],
    highlighted: true,
    cta: "Contratar Business",
    color: "border-notion-blue",
    badge: "Más Solicitado",
  },
  {
    name: "Enterprise",
    price: null,
    duration: "3-6 semanas",
    idealFor: "Empresas 20+ personas",
    description: "Implementación completa a medida para empresas con múltiples equipos, departamentos y flujos complejos.",
    features: [
      "Todo lo incluido en Business",
      "Múltiples departamentos",
      "Automaciones avanzadas (Zapier/Make)",
      "Integraciones ilimitadas",
      "Templates ilimitados",
      "API custom si se requiere",
      "Capacitación departamental",
      "Soporte 60 días",
      "Documentación completa SOPs",
      "Acceso prioritario ongoing",
    ],
    notIncluded: [],
    highlighted: false,
    cta: "Solicitar Cotización",
    color: "border-notion-border",
    customPrice: "Desde $1,990",
  },
];

const cases = [
  {
    company: "Agencia Digital Creativa",
    location: "Bogotá, Colombia",
    team: "12 personas",
    challenge: "Gestionaban proyectos de 30+ clientes con hojas de Excel y WhatsApp. Información dispersa, deadlines perdidos.",
    solution: "Sistema operativo completo: gestión de clientes, proyectos, briefings, recursos y facturación en Notion.",
    result: "Redujo 15 horas semanales de coordinación. 0 deadlines perdidos en 6 meses.",
    metric: "15h/sem ahorradas",
    color: "from-blue-400 to-cyan-600",
    avatar: "AC",
  },
  {
    company: "E-commerce de Moda",
    location: "Santiago, Chile",
    team: "8 personas",
    challenge: "Inventario en Excel, pedidos en hojas de cálculo, sin visibilidad del stock en tiempo real.",
    solution: "Sistema de inventario + órdenes integrado en Notion con alertas automáticas y dashboard de métricas.",
    result: "Eliminó errores de stock. Visibilidad total en tiempo real para todo el equipo.",
    metric: "0 errores de stock",
    color: "from-pink-400 to-rose-600",
    avatar: "EF",
  },
  {
    company: "Consultora de RRHH",
    location: "Buenos Aires, Argentina",
    team: "5 consultores",
    challenge: "Procesos de selección manuales, sin trazabilidad de candidatos y reportes imposibles de generar.",
    solution: "ATS (Applicant Tracking System) personalizado en Notion con pipeline de candidatos, evaluaciones y reportes.",
    result: "3x más rápido el proceso de selección. Reportes automáticos para clientes.",
    metric: "3x más rápido",
    color: "from-violet-400 to-purple-600",
    avatar: "CR",
  },
];

const testimonials = [
  {
    name: "Roberto Jiménez",
    role: "CEO, Agencia Digital",
    location: "Colombia",
    text: "El equipo de Notion LATAM entendió nuestro negocio desde el día uno. El sistema que construyeron es exactamente lo que necesitábamos. 100% recomendado.",
    rating: 5,
    avatar: "RJ",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Patricia Vega",
    role: "Fundadora, Fashion Store",
    location: "Chile",
    text: "Profesionalismo impecable. Llegaron con soluciones que yo ni había imaginado. El ROI fue evidente en la primera semana.",
    rating: 5,
    avatar: "PV",
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Marcos Santos",
    role: "Director, RRHH Consulting",
    location: "Brasil",
    text: "La capacitación del equipo fue clave. Ahora todos usamos Notion de forma autónoma y el sistema se mantiene solo. Excelente inversión.",
    rating: 5,
    avatar: "MS",
    color: "from-violet-400 to-purple-500",
  },
];

export default function ConsultoriaPage() {
  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-notion-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-notion-blue/10 text-notion-blue text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Consultoría Personalizada
            </div>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6 tracking-tight leading-tight">
              Tu sistema operativo
              <br />
              <span className="gradient-text">en Notion, listo</span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
              No tienes que aprender Notion tú mismo. Nuestro equipo construye, configura y entrena a tu empresa. Tú solo empiezas a usarlo.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-notion-blue hover:bg-notion-blue/90 text-white shadow-lg hover:shadow-xl text-lg px-8 py-6 transition-all"
              >
                Agendar Llamada Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                Ver Casos de Éxito
              </Button>
            </div>
          </FadeInSection>
          {/* Trust indicators */}
          <FadeInSection delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {[
                { icon: Globe, label: "15+ países atendidos" },
                { icon: Users, label: "500+ empresas" },
                { icon: Star, label: "4.9/5 rating" },
                { icon: Award, label: "100% satisfacción garantizada" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-notion-text-secondary">
                  <item.icon className="w-4 h-4 text-notion-blue" />
                  {item.label}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
                Nuestro proceso
              </h2>
              <p className="text-xl text-notion-text-secondary">
                Probado con 500+ empresas en 15+ países de LATAM
              </p>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-300 via-violet-300 to-green-300 opacity-30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, i) => (
                <FadeInSection key={step.step} delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center group">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-bold text-notion-blue mb-2 tracking-widest uppercase">
                      Paso {step.step}
                    </span>
                    <h3 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-1">
                      {step.title}
                    </h3>
                    <span className="text-xs text-notion-text-secondary mb-2 font-medium">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {step.duration}
                    </span>
                    <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
                Paquetes de Consultoría
              </h2>
              <p className="text-xl text-notion-text-secondary">
                Cada paquete incluye diagnóstico, implementación y capacitación.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <FadeInSection key={pkg.name} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative rounded-2xl border-2 p-8 flex flex-col h-full",
                    pkg.highlighted
                      ? "border-notion-blue bg-notion-blue/3 notion-shadow-lg"
                      : "border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-800"
                  )}
                >
                  {pkg.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-notion-blue text-white text-sm font-bold rounded-full shadow-md">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-notion-text-primary dark:text-notion-text-dark">
                        {pkg.name}
                      </h3>
                      <span className="text-xs px-2.5 py-1 bg-notion-gray-100 dark:bg-notion-gray-700 rounded-full text-notion-text-secondary font-medium">
                        {pkg.idealFor}
                      </span>
                    </div>
                    <p className="text-sm text-notion-text-secondary mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark">
                        {pkg.customPrice || `$${pkg.price}`}
                      </span>
                      <span className="text-notion-text-secondary text-sm">USD</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 text-sm text-notion-text-secondary">
                      <Clock className="w-3.5 h-3.5" />
                      Entrega en {pkg.duration}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-notion-text-primary dark:text-notion-text-dark">{f}</span>
                      </li>
                    ))}
                    {pkg.notIncluded?.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm opacity-35">
                        <span className="w-4 h-4 shrink-0 flex items-center justify-center text-xs">–</span>
                        <span className="text-notion-text-secondary line-through">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={cn(
                      "w-full",
                      pkg.highlighted
                        ? "bg-notion-blue hover:bg-notion-blue/90 text-white"
                        : ""
                    )}
                    variant={pkg.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
                Casos de Éxito
              </h2>
              <p className="text-xl text-notion-text-secondary">
                Resultados reales de empresas como la tuya
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <FadeInSection key={c.company} delay={i * 0.1}>
                <div className="bg-white dark:bg-notion-gray-800 rounded-2xl overflow-hidden notion-shadow hover:notion-shadow-lg transition-all group">
                  <div className={`h-2 bg-gradient-to-r ${c.color}`} />
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold text-sm`}>
                        {c.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-notion-text-primary dark:text-notion-text-dark text-sm">
                          {c.company}
                        </p>
                        <p className="text-xs text-notion-text-secondary">
                          {c.location} · {c.team}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Desafío</span>
                        <p className="text-sm text-notion-text-secondary mt-1 leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-notion-blue uppercase tracking-wider">Solución</span>
                        <p className="text-sm text-notion-text-secondary mt-1 leading-relaxed">{c.solution}</p>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                          {c.metric}
                        </span>
                        <span className="text-xs text-notion-text-secondary ml-auto">{c.result.split(".")[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center text-notion-text-primary dark:text-notion-text-dark mb-12">
              Lo que dicen nuestros clientes
            </h2>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 0.1}>
                <div className="bg-white dark:bg-notion-gray-800 rounded-2xl p-7 notion-shadow">
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
                      <p className="text-xs text-notion-text-secondary">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-br from-notion-blue/10 via-purple-500/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <Calendar className="w-12 h-12 text-notion-blue mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
              Agenda tu llamada gratuita
            </h2>
            <p className="text-xl text-notion-text-secondary mb-8">
              30 minutos para entender tu negocio y proponerte el mejor sistema. Sin compromiso.
            </p>
            <Button
              size="lg"
              className="bg-notion-blue hover:bg-notion-blue/90 text-white shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-6"
            >
              Reservar Mi Llamada
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-4 text-sm text-notion-text-secondary">
              Respuesta en menos de 24 horas · 100% gratis · Sin compromiso
            </p>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
