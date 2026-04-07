"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Zap,
  Bot,
  Check,
  ArrowRight,
  Star,
  Play,
  Bell,
  Calendar,
  BarChart2,
  Users,
  Shield,
  Globe,
  Sparkles,
  ChevronRight,
  Phone,
  Database,
  RefreshCw,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: MessageSquare,
    title: "Respuestas Automáticas",
    description: "Responde mensajes de WhatsApp automáticamente usando la información de tu Notion. Clientes, precios, disponibilidad.",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Bell,
    title: "Notificaciones Inteligentes",
    description: "Recibe alertas en WhatsApp cuando hay cambios en tu Notion. Nuevas tareas, vencimientos, actualizaciones críticas.",
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: Database,
    title: "Sincronización Bidireccional",
    description: "Los datos fluyen en ambas direcciones. Crea registros en Notion desde WhatsApp y viceversa. Todo sincronizado.",
    color: "from-violet-400 to-purple-600",
  },
  {
    icon: Bot,
    title: "Agente IA Integrado",
    description: "Tu asistente IA con contexto completo de tu negocio. Responde consultas, genera reportes y toma decisiones.",
    color: "from-orange-400 to-red-600",
  },
  {
    icon: BarChart2,
    title: "Dashboard de Conversaciones",
    description: "Monitorea todas las conversaciones, métricas de respuesta y satisfacción desde tu panel en Notion.",
    color: "from-pink-400 to-rose-600",
  },
  {
    icon: RefreshCw,
    title: "Flujos Automatizados",
    description: "Diseña flujos de conversación con lógica condicional. Calificación de leads, soporte y onboarding automático.",
    color: "from-indigo-400 to-blue-600",
  },
];

const useCases = [
  {
    title: "Atención al Cliente",
    icon: Users,
    description: "Responde consultas frecuentes, gestiona tickets y escala a humanos cuando es necesario. 24/7 sin intervención.",
    stats: "80% consultas resueltas automáticamente",
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Ventas y Leads",
    icon: TrendingUp,
    description: "Califica leads automáticamente, agenda demos y envía propuestas. Todo integrado con tu CRM en Notion.",
    stats: "3x más leads calificados por semana",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Gestión de Equipo",
    icon: Bell,
    description: "Notifica al equipo sobre tareas, deadlines y actualizaciones desde WhatsApp. Sin necesidad de abrir Notion.",
    stats: "15h/sem menos en coordinación",
    color: "from-violet-400 to-purple-500",
  },
];

const plans = [
  {
    name: "Starter",
    price: 29,
    period: "/mes",
    description: "Para emprendedores y solopreneurs",
    features: [
      "1 número de WhatsApp",
      "500 mensajes/mes",
      "3 flujos automatizados",
      "Integración básica con Notion",
      "Respuestas automáticas",
      "Soporte por email",
    ],
    notIncluded: ["IA avanzada", "Múltiples números", "Analytics avanzados", "API access"],
    cta: "Empezar Prueba Gratis",
    highlighted: false,
    trial: "14 días gratis",
  },
  {
    name: "Pro",
    price: 79,
    period: "/mes",
    description: "Para PyMEs en crecimiento",
    features: [
      "3 números de WhatsApp",
      "5,000 mensajes/mes",
      "Flujos ilimitados",
      "Integración completa Notion",
      "Agente IA con contexto",
      "Dashboard de analytics",
      "Notificaciones inteligentes",
      "Soporte prioritario",
      "API access",
    ],
    notIncluded: [],
    cta: "Empezar Prueba Gratis",
    highlighted: true,
    trial: "14 días gratis",
    badge: "Más Popular",
  },
  {
    name: "Business",
    price: 149,
    period: "/mes",
    description: "Para equipos de ventas y soporte",
    features: [
      "10 números de WhatsApp",
      "Mensajes ilimitados",
      "IA avanzada personalizada",
      "Múltiples workspaces Notion",
      "Analytics en tiempo real",
      "Integraciones custom",
      "Onboarding dedicado",
      "SLA garantizado",
      "Soporte 24/7",
    ],
    notIncluded: [],
    cta: "Hablar con Ventas",
    highlighted: false,
    trial: null,
  },
];

const testimonials = [
  {
    name: "Andrés López",
    role: "Dueño e-commerce, Perú",
    avatar: "AL",
    rating: 5,
    text: "Conecté mi CRM de Notion con WhatsApp y ahora mis clientes reciben respuestas instantáneas. Pasé de responder 50 mensajes diarios a solo los más complejos.",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Camila Torres",
    role: "Coach de negocios, México",
    avatar: "CT",
    rating: 5,
    text: "El flujo de calificación de leads es increíble. Ahora solo hablo con prospectos ya calificados. Triplicé mis ventas en 60 días.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Felipe Ramos",
    role: "Gerente operaciones, Chile",
    avatar: "FR",
    rating: 5,
    text: "Las notificaciones inteligentes cambiaron la dinámica del equipo. Ahora todos saben qué hacer desde WhatsApp sin entrar a Notion.",
    color: "from-violet-400 to-purple-500",
  },
];

// Demo chat messages
const chatMessages = [
  { from: "client", text: "Hola! ¿Cuánto cuesta el plan Pro?" },
  { from: "bot", text: "¡Hola! 👋 El plan Pro está en $79/mes e incluye 3 números de WhatsApp, mensajes ilimitados y agente IA. ¿Te gustaría saber más o empezar una prueba gratis de 14 días?" },
  { from: "client", text: "¿Qué es el agente IA?" },
  { from: "bot", text: "¡Excelente pregunta! 🤖 El agente IA tiene acceso a toda tu información en Notion (productos, clientes, precios) y puede responder consultas complejas, crear registros nuevos e incluso agendar reuniones automáticamente." },
  { from: "client", text: "Me interesa la prueba gratis" },
  { from: "bot", text: "Perfecto! Te comparto el link de registro: notionlatam.com/saas/trial ✨ Tienes 14 días completos sin tarjeta de crédito. ¿Tienes alguna otra pregunta?" },
];

export default function SaasPage() {
  const [visibleMessages, setVisibleMessages] = useState(3);
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/8 via-notion-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Nuevo — WhatsApp × Notion
                </div>
              </FadeInSection>
              <FadeInSection delay={0.1}>
                <h1 className="text-5xl md:text-6xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-5 leading-tight tracking-tight">
                  Conecta Notion con{" "}
                  <span className="text-green-500">WhatsApp</span>
                  <br />
                  con <span className="gradient-text">IA incluida</span>
                </h1>
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary mb-8 leading-relaxed">
                  Automatiza respuestas, gestiona clientes y notifica a tu equipo usando la información de tu Notion. El primer WhatsApp Bot nativo para Notion en LATAM.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: "2min", label: "Setup inicial" },
                    { value: "80%", label: "Mensajes auto" },
                    { value: "24/7", label: "Disponible" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-4 bg-notion-gray-50 dark:bg-notion-gray-800 rounded-xl text-center"
                    >
                      <div className="text-2xl font-bold text-notion-blue mb-1">{s.value}</div>
                      <div className="text-xs text-notion-text-secondary">{s.label}</div>
                    </div>
                  ))}
                </div>
              </FadeInSection>
              <FadeInSection delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all text-lg px-8"
                  >
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Prueba Gratis — 14 días
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 gap-2">
                    <Play className="w-4 h-4 fill-current" />
                    Ver Demo
                  </Button>
                </div>
                <p className="mt-3 text-sm text-notion-text-secondary">
                  Sin tarjeta de crédito · Cancela cuando quieras · Setup en 2 minutos
                </p>
              </FadeInSection>
            </div>

            {/* Demo Chat */}
            <FadeInSection delay={0.3} direction="left">
              <div className="relative">
                <div className="bg-white dark:bg-notion-gray-800 rounded-3xl notion-shadow-lg overflow-hidden border border-notion-border dark:border-notion-border-dark">
                  {/* Chat header */}
                  <div className="bg-green-500 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Notion Assistant</p>
                      <p className="text-xs text-white/80">● En línea</p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/60" />
                      <div className="w-2 h-2 rounded-full bg-white/60" />
                      <div className="w-2 h-2 rounded-full bg-white/60" />
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-3 bg-notion-gray-50 dark:bg-notion-gray-900 min-h-[320px]">
                    {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className={cn(
                          "flex",
                          msg.from === "client" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                            msg.from === "client"
                              ? "bg-green-500 text-white rounded-tr-sm"
                              : "bg-white dark:bg-notion-gray-700 text-notion-text-primary dark:text-notion-text-dark shadow-sm rounded-tl-sm"
                          )}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                    {visibleMessages < chatMessages.length && (
                      <div className="text-center">
                        <button
                          onClick={() => setVisibleMessages(chatMessages.length)}
                          className="text-xs text-notion-blue hover:underline"
                        >
                          Ver conversación completa →
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="p-3 bg-white dark:bg-notion-gray-800 border-t border-notion-border dark:border-notion-border-dark">
                    <div className="flex items-center gap-2 px-3 py-2 bg-notion-gray-100 dark:bg-notion-gray-700 rounded-full">
                      <p className="text-sm text-notion-text-secondary flex-1">
                        Escribe un mensaje...
                      </p>
                      <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-3 -right-3 bg-notion-blue text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                >
                  ⚡ IA Powered
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
                ¿Para qué lo usa tu empresa?
              </h2>
              <p className="text-xl text-notion-text-secondary">
                Casos de uso reales que generan ROI inmediato
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <FadeInSection key={uc.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-white dark:bg-notion-gray-800 rounded-2xl p-7 notion-shadow hover:notion-shadow-lg transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${uc.color} flex items-center justify-center mb-4 shadow-md`}>
                    <uc.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-notion-text-primary dark:text-notion-text-dark mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-notion-text-secondary leading-relaxed mb-4 text-sm">
                    {uc.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {uc.stats}
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
                Todo lo que necesitas incluido
              </h2>
              <p className="text-xl text-notion-text-secondary">
                Una plataforma completa, no un bot simple
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <FadeInSection key={f.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white dark:bg-notion-gray-800 rounded-2xl p-6 notion-shadow hover:notion-shadow-lg transition-all border border-transparent hover:border-notion-blue/20"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-notion-text-primary dark:text-notion-text-dark mb-2 group-hover:text-notion-blue transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-notion-text-secondary leading-relaxed">{f.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
                Precios simples y transparentes
              </h2>
              <p className="text-xl text-notion-text-secondary">
                Comienza gratis. Escala cuando lo necesites.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <FadeInSection key={plan.name} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative rounded-2xl border-2 p-8 flex flex-col h-full",
                    plan.highlighted
                      ? "border-green-500 bg-green-500/3 notion-shadow-lg"
                      : "border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-800"
                  )}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-green-500 text-white text-sm font-bold rounded-full shadow-md">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-notion-text-secondary mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark">
                        ${plan.price}
                      </span>
                      <span className="text-notion-text-secondary">{plan.period}</span>
                    </div>
                    {plan.trial && (
                      <span className="inline-block mt-2 text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                        {plan.trial}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-notion-text-primary dark:text-notion-text-dark">{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded?.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm opacity-35">
                        <span className="w-4 h-4 shrink-0 text-xs flex items-center">–</span>
                        <span className="text-notion-text-secondary line-through">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={cn(
                      "w-full",
                      plan.highlighted
                        ? "bg-green-500 hover:bg-green-600 text-white shadow-md"
                        : ""
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center text-notion-text-primary dark:text-notion-text-dark mb-12">
              Lo que dicen los usuarios
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
                      <p className="text-xs text-notion-text-secondary">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-500/10 via-notion-blue/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <MessageSquare className="w-14 h-14 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
              Empieza en 2 minutos
            </h2>
            <p className="text-xl text-notion-text-secondary mb-8">
              Conecta tu Notion con WhatsApp hoy mismo. 14 días gratis, sin tarjeta de crédito.
            </p>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-6"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Activar Prueba Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-4 text-sm text-notion-text-secondary">
              Setup en 2 minutos · Sin código · Soporte en español
            </p>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
