"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";

const STEPS = 4;

type WizardAnswers = {
  objetivo: string;
  modo: string;
  herramientas: string[];
  meta: string;
};

const TEMPLATES_MAP: Record<string, { title: string; desc: string; href: string; price: string }> = {
  "📊 Proyectos y tareas": { title: "Gestión de Proyectos Ágil", desc: "Sprints, backlog, kanban y timeline.", href: "/templates", price: "$30 USD" },
  "💰 Finanzas": { title: "Sistema Financiero PyME", desc: "Ingresos, gastos y flujo de caja.", href: "/templates", price: "$40 USD" },
  "👥 Clientes (CRM)": { title: "CRM WhatsApp para Ventas", desc: "Pipeline de ventas y seguimiento.", href: "/templates", price: "$35 USD" },
  "📝 Documentos y notas": { title: "Base de Conocimiento", desc: "Wiki empresarial con procesos y FAQs.", href: "/templates", price: "$35 USD" },
  "📅 Calendario y eventos": { title: "Planificador de Contenido", desc: "Calendario editorial multi-canal.", href: "/templates", price: "$30 USD" },
  "🎯 Metas y OKRs": { title: "OKRs y Metas Empresariales", desc: "Framework OKR con check-ins semanales.", href: "/templates", price: "$35 USD" },
};

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <motion.div key={i}
          className="absolute w-2 h-2 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: ["#2383E2", "#37352F", "#0F7B6C", "#D9730D", "#9065B0"][i % 5],
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{ y: "110vh", opacity: [1, 1, 0], rotate: Math.random() * 720 - 360 }}
          transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 0.5, ease: "linear" }}
        />
      ))}
    </div>
  );
}

export default function Empezar() {
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<WizardAnswers>({ objetivo: "", modo: "", herramientas: [], meta: "" });
  const [done, setDone] = useState(false);
  const [direction, setDirection] = useState(1);

  const next = () => { setDirection(1); if (step < STEPS - 1) setStep(s => s + 1); else setDone(true); };
  const prev = () => { setDirection(-1); setStep(s => Math.max(0, s - 1)); };

  const toggleHerramienta = (h: string) => {
    setAnswers(a => ({ ...a, herramientas: a.herramientas.includes(h) ? a.herramientas.filter(x => x !== h) : [...a.herramientas, h] }));
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const recomendado = TEMPLATES_MAP[answers.objetivo];

  const steps = [
    {
      title: "¿Qué quieres organizar primero?",
      subtitle: "Elige el área que más necesitas resolver hoy",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {Object.keys(TEMPLATES_MAP).map((op) => (
            <button key={op} onClick={() => setAnswers(a => ({ ...a, objetivo: op }))}
              className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${answers.objetivo === op
                ? "border-notion-blue bg-notion-blue/5 dark:bg-notion-blue/10"
                : "border-notion-border dark:border-notion-border-dark hover:border-notion-blue/40 bg-white dark:bg-notion-gray-900"}`}>
              <div className="text-2xl mb-2">{op.split(" ")[0]}</div>
              <div className={`text-sm font-medium ${answers.objetivo === op ? "text-notion-blue" : "text-notion-text-primary dark:text-notion-text-dark"}`}>
                {op.slice(2)}
              </div>
            </button>
          ))}
        </div>
      ),
    },
    {
      title: "¿Cómo trabajas?",
      subtitle: "El sistema se adapta a tu forma de trabajar",
      content: (
        <div className="space-y-3">
          {[
            { label: "Solo — soy freelancer o emprendedor individual", icon: "🧍" },
            { label: "Equipo pequeño — 2 a 10 personas", icon: "👥" },
            { label: "Equipo grande — más de 10 personas", icon: "🏢" },
          ].map(({ label, icon }) => (
            <button key={label} onClick={() => setAnswers(a => ({ ...a, modo: label }))}
              className={`w-full text-left p-4 rounded-xl border-2 flex items-center gap-3 transition-all cursor-pointer ${answers.modo === label
                ? "border-notion-blue bg-notion-blue/5 dark:bg-notion-blue/10"
                : "border-notion-border dark:border-notion-border-dark hover:border-notion-blue/40 bg-white dark:bg-notion-gray-900"}`}>
              <span className="text-2xl">{icon}</span>
              <span className={`font-medium ${answers.modo === label ? "text-notion-blue" : "text-notion-text-primary dark:text-notion-text-dark"}`}>{label}</span>
              {answers.modo === label && <CheckCircle className="ml-auto w-5 h-5 text-notion-blue" />}
            </button>
          ))}
        </div>
      ),
    },
    {
      title: "¿Qué herramientas usas hoy?",
      subtitle: "Selecciona las que usas actualmente (puedes elegir varias)",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {["📁 Google Drive", "✅ Trello", "📋 Asana", "📊 Excel / Sheets", "📓 Evernote", "💬 Slack", "📧 Gmail", "🗓️ Google Calendar"].map((h) => (
            <button key={h} onClick={() => toggleHerramienta(h)}
              className={`p-3 rounded-xl border-2 text-left flex items-center gap-2 transition-all cursor-pointer text-sm ${answers.herramientas.includes(h)
                ? "border-notion-blue bg-notion-blue/5 dark:bg-notion-blue/10"
                : "border-notion-border dark:border-notion-border-dark hover:border-notion-blue/40 bg-white dark:bg-notion-gray-900"}`}>
              <span>{h.split(" ")[0]}</span>
              <span className={answers.herramientas.includes(h) ? "text-notion-blue font-medium" : "text-notion-text-primary dark:text-notion-text-dark"}>
                {h.slice(2)}
              </span>
              {answers.herramientas.includes(h) && <CheckCircle className="ml-auto w-4 h-4 text-notion-blue flex-shrink-0" />}
            </button>
          ))}
        </div>
      ),
    },
    {
      title: "¿Cuál es tu objetivo principal?",
      subtitle: "Esto define la estructura de tu workspace",
      content: (
        <div className="space-y-3">
          {[
            { label: "Organizarme y no perder nada importante", icon: "📦" },
            { label: "Aumentar mi productividad y ahorrar tiempo", icon: "⚡" },
            { label: "Colaborar mejor con mi equipo", icon: "🤝" },
            { label: "Centralizar toda la información de mi empresa", icon: "🎯" },
            { label: "Automatizar procesos repetitivos", icon: "🤖" },
          ].map(({ label, icon }) => (
            <button key={label} onClick={() => setAnswers(a => ({ ...a, meta: label }))}
              className={`w-full text-left p-4 rounded-xl border-2 flex items-center gap-3 transition-all cursor-pointer ${answers.meta === label
                ? "border-notion-blue bg-notion-blue/5 dark:bg-notion-blue/10"
                : "border-notion-border dark:border-notion-border-dark hover:border-notion-blue/40 bg-white dark:bg-notion-gray-900"}`}>
              <span className="text-2xl">{icon}</span>
              <span className={`font-medium ${answers.meta === label ? "text-notion-blue" : "text-notion-text-primary dark:text-notion-text-dark"}`}>{label}</span>
              {answers.meta === label && <CheckCircle className="ml-auto w-5 h-5 text-notion-blue" />}
            </button>
          ))}
        </div>
      ),
    },
  ];

  if (done) {
    return (
      <>
        <Confetti />
        <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
          <div className="max-w-2xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-2">
                ¡Tu workspace personalizado está listo!
              </h1>
              <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary">
                Basado en tus respuestas, creamos el setup perfecto para ti.
              </p>
              <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary mt-2">
                👥 Más de <strong className="text-notion-text-primary dark:text-notion-text-dark">127 personas</strong> crearon su workspace hoy
              </p>
            </motion.div>

            {recomendado && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-notion-blue rounded-2xl p-8 text-white mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-blue-100 text-sm font-medium uppercase tracking-wider">Template recomendado para ti</span>
                </div>
                <h2 className="text-2xl font-bold mb-1">{recomendado.title}</h2>
                <p className="text-blue-100 mb-4">{recomendado.desc}</p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">{recomendado.price}</span>
                  <Link href={`/${locale}${recomendado.href}`}>
                    <Button className="bg-white text-notion-blue hover:bg-blue-50 font-semibold">
                      Duplicar a mi Notion <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Checklist */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6 mb-6">
              <h3 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">✅ Tus próximos 5 pasos</h3>
              <div className="space-y-3">
                {[
                  "Crear cuenta gratuita en notion.so",
                  "Duplicar el template recomendado a tu workspace",
                  "Personalizar con el nombre de tu empresa",
                  "Agregar tus primeros 5 registros de datos",
                  "Invitar a tu equipo (si aplica)",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-notion-blue/10 text-notion-blue text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-notion-text-secondary dark:text-notion-text-dark-secondary text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Community CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="bg-notion-gray-50 dark:bg-notion-gray-800 rounded-2xl p-6 text-center">
              <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary text-sm mb-4">
                ¿Necesitas ayuda con la configuración?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`/${locale}/consultoria`}>
                  <Button className="bg-notion-blue hover:bg-notion-blue/90 w-full sm:w-auto">
                    Hablar con un experto
                  </Button>
                </Link>
                <Link href={`/${locale}/curso`}>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Ver el curso completo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  const current = steps[step];
  const canContinue = step === 0 ? !!answers.objetivo
    : step === 1 ? !!answers.modo
    : step === 2 ? true // herramientas es opcional
    : !!answers.meta;

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-2">
            Configura tu primer workspace
          </h1>
          <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary">
            En 4 pasos tendrás un sistema Notion personalizado listo para usar
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary mb-2">
            <span>Paso {step + 1} de {STEPS}</span>
            <span>{Math.round(((step + 1) / STEPS) * 100)}%</span>
          </div>
          <div className="w-full bg-notion-gray-100 dark:bg-notion-gray-800 rounded-full h-2">
            <motion.div className="bg-notion-blue h-2 rounded-full" animate={{ width: `${((step + 1) / STEPS) * 100}%` }} transition={{ duration: 0.3 }} />
          </div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div key={step} custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark p-8 mb-6">
            <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-1">{current.title}</h2>
            <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary mb-6">{current.subtitle}</p>
            {current.content}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between">
          <Button variant="outline" onClick={prev} disabled={step === 0}>
            <ArrowLeft className="mr-2 w-4 h-4" /> Anterior
          </Button>
          <Button onClick={next} disabled={!canContinue} className="bg-notion-blue hover:bg-notion-blue/90">
            {step === STEPS - 1 ? "🎉 Crear mi workspace" : "Siguiente"} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
