"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Bell,
  CheckCircle2,
  Zap,
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Sparkles,
  Bot,
  Phone,
  Database,
  RefreshCw,
  Lock,
  ChevronRight,
  Gift,
  Timer,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FadeInSection from "@/components/animations/FadeInSection";
import { cn } from "@/lib/utils";

// Countdown to launch date: March 15 2026
function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

const features = [
  {
    icon: MessageSquare,
    title: "Crear tareas desde WhatsApp",
    description: 'Escribe "/tarea Llamar a cliente" y aparece instantáneamente en Notion.',
    color: "from-green-400 to-emerald-600",
    command: "/tarea Llamar a cliente mañana 3pm",
    response: "✅ Tarea creada en Notion → Clientes → Follow-up",
  },
  {
    icon: Bell,
    title: "Notificaciones inteligentes",
    description: "Recibe alertas de deadlines, nuevas tareas y updates del equipo directo en WhatsApp.",
    color: "from-blue-400 to-cyan-600",
    command: null,
    response: "🔔 Tienes 3 tareas para hoy:\n- Propuesta García (vence hoy)\n- Meeting con equipo (3pm)\n- Factura pendiente",
  },
  {
    icon: Database,
    title: "Consultar tu Notion",
    description: 'Pregunta "¿Cuántos proyectos activos tengo?" y el bot responde con datos reales.',
    color: "from-violet-400 to-purple-600",
    command: "/proyectos activos",
    response: "📊 Tienes 7 proyectos activos:\n• 3 en desarrollo\n• 2 en revisión\n• 2 por iniciar",
  },
  {
    icon: RefreshCw,
    title: "Actualizar registros",
    description: "Marca tareas como completadas, cambia estados y actualiza campos desde WhatsApp.",
    color: "from-orange-400 to-red-600",
    command: "/completar tarea propuesta-garcia",
    response: "✅ Tarea actualizada en Notion\n🎉 ¡Propuesta enviada!",
  },
  {
    icon: Bot,
    title: "Agente IA con contexto",
    description: "El bot conoce tu negocio completo. Responde preguntas complejas y genera reportes.",
    color: "from-pink-400 to-rose-600",
    command: "¿Cuál cliente tiene más deuda?",
    response: "💰 Mayor deuda pendiente:\n1. García y Asoc. → $2,500\n2. TechCo → $1,800\n3. Retail SA → $900",
  },
  {
    icon: Lock,
    title: "100% privado y seguro",
    description: "Tus datos nunca salen de tu Notion. Encriptación end-to-end. Cumplimiento GDPR.",
    color: "from-indigo-400 to-blue-600",
    command: null,
    response: "🔒 Datos seguros\nTu información permanece en tu workspace",
  },
];

const roadmap = [
  {
    phase: "Fase 1",
    title: "Lanzamiento",
    date: "Marzo 2026",
    status: "launch",
    features: ["Crear/ver tareas desde WhatsApp", "Notificaciones automáticas", "Consulta de bases de datos", "Marcar como completado"],
  },
  {
    phase: "Fase 2",
    title: "Calendario y Eventos",
    date: "Q2 2026",
    status: "upcoming",
    features: ["Sincronización de calendario", "Crear y ver eventos", "Recordatorios inteligentes", "Agenda del día automática"],
  },
  {
    phase: "Fase 3",
    title: "Reportes Automáticos",
    date: "Q3 2026",
    status: "upcoming",
    features: ["Reporte semanal en WhatsApp", "KPIs en tiempo real", "Métricas de ventas", "Resumen ejecutivo diario"],
  },
  {
    phase: "Fase 4",
    title: "Integraciones",
    date: "Q4 2026",
    status: "upcoming",
    features: ["Stripe → Notion automático", "Gmail summaries", "Slack bidireccional", "Zapier/Make actions"],
  },
];

const useCases = [
  {
    persona: "Emprendedor",
    emoji: "🚀",
    scenario: "Estás en una reunión con un cliente y surge una tarea importante.",
    withBot: 'Escribes en WhatsApp: "/tarea Preparar propuesta para Cliente X" y ya está en tu Notion.',
    withoutBot: "Llegas a la oficina, tratas de recordar qué tareas surgieron, probablemente olvidas algo.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    persona: "Equipo Remoto",
    emoji: "👥",
    scenario: "El equipo necesita saber el estado de los proyectos sin entrar a Notion.",
    withBot: "Cada mañana a las 9am llega un mensaje automático con el estado del día y tareas pendientes.",
    withoutBot: "Reuniones de 30 minutos para sincronizar lo que estaba en Notion.",
    color: "from-green-400 to-emerald-500",
  },
  {
    persona: "Freelancer",
    emoji: "💼",
    scenario: "Trabajas desde el celular y necesitas gestionar múltiples clientes.",
    withBot: 'Consultas con "/clientes sin contactar" y sabes exactamente a quién llamar primero.',
    withoutBot: "Abres Notion, navegas entre bases de datos, pierdes tiempo y contexto.",
    color: "from-violet-400 to-purple-500",
  },
];

export default function BotPage() {
  const launchDate = new Date("2026-03-15T00:00:00");
  const countdown = useCountdown(launchDate);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [waitlistCount] = useState(347);
  const [activeDemo, setActiveDemo] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-20">
      {/* Launch Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2.5 px-6 text-center text-sm font-medium">
        <Flame className="w-4 h-4 inline mr-2" />
        Lanzamiento Oficial: <strong>15 de Marzo 2026</strong> — Los primeros 100 usuarios obtienen <strong>40% descuento de por vida</strong>
        <Flame className="w-4 h-4 inline ml-2" />
      </div>

      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/8 via-emerald-400/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-3 pointer-events-none" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 -left-10 w-72 h-72 bg-green-400/15 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-10 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <FadeInSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/12 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Próximamente — Lista de Espera Abierta
                </div>
              </FadeInSection>
              <FadeInSection delay={0.1}>
                <h1 className="text-5xl md:text-6xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-5 leading-tight tracking-tight">
                  Notion en tu{" "}
                  <span className="text-green-500">WhatsApp</span>
                  <br />
                  con <span className="gradient-text">IA nativa</span>
                </h1>
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary mb-8 leading-relaxed">
                  Crea tareas, consulta datos y recibe notificaciones de Notion directamente en WhatsApp. Sin abrir el navegador. Sin perder el contexto.
                </p>
              </FadeInSection>

              {/* Countdown */}
              <FadeInSection delay={0.3}>
                <div className="mb-8">
                  <p className="text-sm text-notion-text-secondary mb-3 flex items-center gap-2">
                    <Timer className="w-4 h-4 text-green-500" />
                    Lanzamiento oficial en:
                  </p>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { value: countdown.days, label: "Días" },
                      { value: countdown.hours, label: "Horas" },
                      { value: countdown.minutes, label: "Minutos" },
                      { value: countdown.seconds, label: "Segundos" },
                    ].map((item) => (
                      <div key={item.label} className="bg-notion-gray-50 dark:bg-notion-gray-800 rounded-xl p-3 text-center border border-notion-border dark:border-notion-border-dark">
                        <div className="text-2xl font-bold text-green-500 tabular-nums">
                          {String(item.value).padStart(2, "0")}
                        </div>
                        <div className="text-xs text-notion-text-secondary mt-0.5">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Social proof */}
              <FadeInSection delay={0.4}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    {["AM", "LR", "CG", "PV", "DM"].map((initials, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="font-bold text-notion-text-primary dark:text-notion-text-dark">
                      {waitlistCount}
                    </span>
                    <span className="text-notion-text-secondary text-sm ml-1">
                      personas ya en lista de espera
                    </span>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all text-lg px-8"
                  >
                    <Gift className="mr-2 w-5 h-5" />
                    Unirme — 40% Early Bird
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 gap-2">
                    <ChevronRight className="w-4 h-4" />
                    Ver Demo
                  </Button>
                </div>
                <p className="mt-3 text-xs text-notion-text-secondary">
                  Gratis hasta el lanzamiento · Sin tarjeta de crédito · Cancela cuando quieras
                </p>
              </FadeInSection>
            </div>

            {/* Right — Interactive Demo */}
            <FadeInSection delay={0.3} direction="left">
              <div className="relative">
                <div className="bg-white dark:bg-notion-gray-800 rounded-3xl notion-shadow-lg overflow-hidden border border-notion-border dark:border-notion-border-dark">
                  {/* WhatsApp header */}
                  <div className="bg-green-500 px-4 py-3 flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">Notion Assistant</p>
                      <p className="text-xs text-white/80 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80 inline-block" />
                        En línea
                      </p>
                    </div>
                    <Phone className="w-4 h-4 text-white/70" />
                  </div>

                  {/* Chat tabs */}
                  <div className="flex border-b border-notion-border dark:border-notion-border-dark">
                    {features.slice(0, 4).map((f, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveDemo(i)}
                        className={cn(
                          "flex-1 py-2 text-xs font-medium transition-colors",
                          activeDemo === i
                            ? "text-green-500 border-b-2 border-green-500"
                            : "text-notion-text-secondary hover:text-notion-text-primary"
                        )}
                      >
                        <f.icon className="w-3.5 h-3.5 mx-auto" />
                      </button>
                    ))}
                  </div>

                  {/* Chat messages */}
                  <div className="p-4 bg-notion-gray-50 dark:bg-notion-gray-900 min-h-[260px] flex flex-col justify-end gap-3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeDemo}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-3"
                      >
                        {features[activeDemo].command && (
                          <div className="flex justify-end">
                            <div className="max-w-[80%] bg-green-500 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm">
                              {features[activeDemo].command}
                            </div>
                          </div>
                        )}
                        <div className="flex justify-start">
                          <div className="max-w-[85%] bg-white dark:bg-notion-gray-700 shadow-sm px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm text-notion-text-primary dark:text-notion-text-dark whitespace-pre-line leading-relaxed">
                            {features[activeDemo].response}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Feature title */}
                  <div className="px-4 py-3 bg-white dark:bg-notion-gray-800 border-t border-notion-border dark:border-notion-border-dark">
                    <p className="text-xs font-semibold text-notion-text-primary dark:text-notion-text-dark">
                      {features[activeDemo].title}
                    </p>
                    <p className="text-xs text-notion-text-secondary mt-0.5">
                      {features[activeDemo].description}
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-notion-blue text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1.5"
                >
                  <Zap className="w-3 h-3" />
                  IA Powered
                </motion.div>

                {/* Bottom floating */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-3 -left-3 bg-white dark:bg-notion-gray-800 border border-notion-border dark:border-notion-border-dark px-3 py-2 rounded-xl shadow-lg text-xs font-medium text-notion-text-primary dark:text-notion-text-dark flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Setup en 2 minutos
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">
                ¿Te suena familiar?
              </h2>
              <p className="text-notion-text-secondary">
                Situaciones que se resuelven con el bot
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <FadeInSection key={uc.persona} delay={i * 0.1}>
                <div className="bg-white dark:bg-notion-gray-800 rounded-2xl overflow-hidden notion-shadow">
                  <div className={`h-1.5 bg-gradient-to-r ${uc.color}`} />
                  <div className="p-6">
                    <div className="text-3xl mb-3">{uc.emoji}</div>
                    <h3 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">
                      {uc.persona}
                    </h3>
                    <p className="text-sm text-notion-text-secondary mb-4 italic">
                      "{uc.scenario}"
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 p-2.5 bg-red-50 dark:bg-red-900/10 rounded-lg">
                        <span className="text-red-400 text-sm shrink-0 mt-0.5">✗</span>
                        <p className="text-xs text-notion-text-secondary">{uc.withoutBot}</p>
                      </div>
                      <div className="flex items-start gap-2 p-2.5 bg-green-50 dark:bg-green-900/10 rounded-lg">
                        <span className="text-green-500 text-sm shrink-0 mt-0.5">✓</span>
                        <p className="text-xs text-notion-text-secondary">{uc.withBot}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                Qué podrás hacer en el lanzamiento
              </h2>
              <p className="text-xl text-notion-text-secondary">
                Fase 1 — Disponible desde Marzo 2026
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <FadeInSection key={f.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="group bg-white dark:bg-notion-gray-800 rounded-2xl p-6 notion-shadow hover:notion-shadow-lg transition-all border border-transparent hover:border-green-500/20"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-notion-text-primary dark:text-notion-text-dark mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-notion-text-secondary leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
                Roadmap del producto
              </h2>
              <p className="text-xl text-notion-text-secondary">
                Esto es solo el comienzo
              </p>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-violet-400 opacity-30" />

            <div className="space-y-8">
              {roadmap.map((phase, i) => (
                <FadeInSection key={phase.phase} delay={i * 0.1}>
                  <div className={cn("flex gap-8 items-start", i % 2 === 1 && "md:flex-row-reverse")}>
                    <div className={cn("flex-1", i % 2 === 0 ? "md:text-right" : "md:text-left")}>
                      <div
                        className={cn(
                          "inline-block bg-white dark:bg-notion-gray-800 rounded-2xl p-6 notion-shadow",
                          phase.status === "launch" && "border-2 border-green-500/30"
                        )}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          {phase.status === "launch" ? (
                            <span className="text-xs px-2.5 py-1 bg-green-500 text-white rounded-full font-bold">
                              🚀 Lanzamiento
                            </span>
                          ) : (
                            <span className="text-xs px-2.5 py-1 bg-notion-gray-100 dark:bg-notion-gray-700 text-notion-text-secondary rounded-full font-medium">
                              Próximamente
                            </span>
                          )}
                          <span className="text-xs text-notion-text-secondary">{phase.date}</span>
                        </div>
                        <h3 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">
                          {phase.phase}: {phase.title}
                        </h3>
                        <ul className="space-y-1.5">
                          {phase.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2 text-sm text-notion-text-secondary">
                              <CheckCircle2 className={cn(
                                "w-3.5 h-3.5 shrink-0",
                                phase.status === "launch" ? "text-green-500" : "text-notion-gray-300"
                              )} />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="hidden md:flex w-4 h-4 shrink-0 items-center justify-center mt-8">
                      <div className={cn(
                        "w-4 h-4 rounded-full border-2",
                        phase.status === "launch"
                          ? "bg-green-500 border-green-500"
                          : "bg-white dark:bg-notion-gray-800 border-notion-gray-300 dark:border-notion-gray-600"
                      )} />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing early bird */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
                Precio transparente
              </h2>
              <p className="text-xl text-notion-text-secondary">
                Los primeros 100 usuarios obtienen precio Early Bird de por vida
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Early Bird",
                price: 15,
                originalPrice: 25,
                discount: "40% OFF",
                description: "Primeros 100 usuarios",
                features: ["Acceso completo desde lanzamiento", "Tareas ilimitadas", "Notificaciones ilimitadas", "Agente IA incluido", "Soporte prioritario", "Precio bloqueado de por vida"],
                cta: "Asegurar mi precio",
                highlighted: true,
                spotsLeft: 100 - Math.min(waitlistCount, 90),
                color: "border-green-500",
              },
              {
                name: "Precio Regular",
                price: 25,
                originalPrice: null,
                discount: null,
                description: "Después de los primeros 100",
                features: ["Acceso completo", "Tareas ilimitadas", "Notificaciones ilimitadas", "Agente IA incluido", "Soporte estándar"],
                cta: "Ver precio regular",
                highlighted: false,
                spotsLeft: null,
                color: "border-notion-border",
              },
            ].map((plan) => (
              <FadeInSection key={plan.name}>
                <div
                  className={cn(
                    "relative rounded-2xl border-2 p-8 h-full flex flex-col",
                    plan.highlighted
                      ? "border-green-500 bg-green-500/3 notion-shadow-lg"
                      : "border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-800"
                  )}
                >
                  {plan.discount && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-green-500 text-white text-sm font-bold rounded-full shadow-md">
                        {plan.discount}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-notion-text-secondary mb-3">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark">
                        ${plan.price}
                      </span>
                      <span className="text-notion-text-secondary">/mes</span>
                      {plan.originalPrice && (
                        <span className="text-sm text-notion-text-secondary line-through">
                          ${plan.originalPrice}/mes
                        </span>
                      )}
                    </div>
                    {plan.spotsLeft !== null && plan.spotsLeft > 0 && (
                      <div className="mt-2 flex items-center gap-1.5 text-sm">
                        <Flame className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-orange-500 font-medium">Solo quedan {plan.spotsLeft} cupos Early Bird</span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-notion-text-primary dark:text-notion-text-dark">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={cn(
                      "w-full",
                      plan.highlighted ? "bg-green-500 hover:bg-green-600 text-white" : ""
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist-form" className="py-20 px-6 bg-gradient-to-br from-green-500/8 via-emerald-400/5 to-transparent">
        <div className="max-w-xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-4">
                <Gift className="w-4 h-4" />
                40% descuento de por vida
              </div>
              <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">
                Únete a la lista de espera
              </h2>
              <p className="text-notion-text-secondary">
                {waitlistCount} personas ya aseguraron su lugar. Solo quedan{" "}
                <span className="font-bold text-orange-500">
                  {Math.max(0, 100 - Math.min(waitlistCount, 97))} cupos Early Bird.
                </span>
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="bg-white dark:bg-notion-gray-800 rounded-3xl notion-shadow-lg p-8 border border-notion-border dark:border-notion-border-dark">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-notion-text-primary dark:text-notion-text-dark mb-1.5">
                      Nombre *
                    </label>
                    <Input
                      required
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-notion-border dark:border-notion-border-dark bg-notion-gray-50 dark:bg-notion-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-notion-text-primary dark:text-notion-text-dark mb-1.5">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-notion-border dark:border-notion-border-dark bg-notion-gray-50 dark:bg-notion-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-notion-text-primary dark:text-notion-text-dark mb-1.5">
                      WhatsApp (opcional)
                    </label>
                    <Input
                      type="tel"
                      placeholder="+56 9 XXXX XXXX"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="border-notion-border dark:border-notion-border-dark bg-notion-gray-50 dark:bg-notion-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-notion-text-primary dark:text-notion-text-dark mb-1.5">
                      ¿Para qué lo usarías principalmente?
                    </label>
                    <select className="w-full px-3 py-2 rounded-lg border border-notion-border dark:border-notion-border-dark bg-notion-gray-50 dark:bg-notion-gray-700 text-notion-text-primary dark:text-notion-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option value="">Selecciona una opción</option>
                      <option>Gestión personal de tareas</option>
                      <option>Notificaciones del equipo</option>
                      <option>Atención al cliente</option>
                      <option>CRM y ventas</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg mt-2"
                  >
                    <Flame className="mr-2 w-5 h-5" />
                    Asegurar mi lugar Early Bird
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-xs text-center text-notion-text-secondary mt-2">
                    Sin spam · Puedes salir cuando quieras · Nos vemos en Marzo 2026
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-2">
                    ¡Estás dentro! 🎉
                  </h3>
                  <p className="text-notion-text-secondary mb-4">
                    Te enviaremos un email de confirmación y te avisaremos el día del lanzamiento.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full text-sm text-green-600 dark:text-green-400 font-medium">
                    <Gift className="w-4 h-4" />
                    Tu precio Early Bird está bloqueado: $15/mes de por vida
                  </div>
                </motion.div>
              )}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
