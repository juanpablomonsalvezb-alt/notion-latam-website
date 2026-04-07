"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";

const STEPS = 5;

type Answers = {
  rol: string;
  equipo: string;
  desafios: string[];
  nivel: string;
  presupuesto: string;
  timeline: string;
};

const initialAnswers: Answers = {
  rol: "", equipo: "", desafios: [], nivel: "", presupuesto: "", timeline: "",
};

function getRecommendations(a: Answers) {
  const presupuesto = a.presupuesto;
  const equipo = a.equipo;
  const desafios = a.desafios;

  const recs = [];

  if (presupuesto === "<100" || presupuesto === "100-500") {
    recs.push({ title: "Templates Premium", desc: "Sistemas listos para usar en minutos. Perfectos para arrancar rápido.", price: "Desde $30 USD", match: 95, href: "/templates", cta: "Ver Templates" });
  }
  if (presupuesto === "100-500" || presupuesto === "500-1000") {
    recs.push({ title: "Curso Notion Completo", desc: "Aprende a construir cualquier sistema tú mismo. Inversión de por vida.", price: "$89 USD", match: 88, href: "/curso", cta: "Ver Curso" });
  }
  if (presupuesto === "500-1000") {
    recs.push({ title: "Consultoría Implementación", desc: "Armamos tu sistema operativo completo. Listo en 2-3 semanas.", price: "$650 USD", match: 92, href: "/consultoria", cta: "Agendar llamada" });
  }
  if (presupuesto === "1000+") {
    recs.push({ title: "Consultoría Enterprise", desc: "Sistema completo para toda tu empresa. 3 meses de soporte premium.", price: "$2,200 USD", match: 97, href: "/consultoria", cta: "Hablar con un experto" });
    recs.push({ title: "Templates + Curso", desc: "Combo perfecto: domina Notion Y ten sistemas listos.", price: "$120 USD", match: 85, href: "/templates", cta: "Ver combo" });
  }

  if (desafios.includes("Finanzas caóticas") && (a.rol === "Emprendedor" || a.rol === "Freelancer")) {
    recs.unshift({ title: "Template Sistema Financiero", desc: "Control total de ingresos, gastos y flujo de caja. Setup en 10 minutos.", price: "$40 USD", match: 98, href: "/templates", cta: "Ver Template" });
  }

  if (recs.length === 0) {
    recs.push(
      { title: "Templates Premium", desc: "Empieza con lo básico. 18 templates para cualquier área.", price: "Desde $30 USD", match: 90, href: "/templates", cta: "Ver Templates" },
      { title: "Curso Notion", desc: "Aprende a armar cualquier sistema tú mismo.", price: "$89 USD", match: 82, href: "/curso", cta: "Ver Curso" },
    );
  }

  return recs.slice(0, 3);
}

export default function Recomendador() {
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [done, setDone] = useState(false);
  const [direction, setDirection] = useState(1);

  const next = () => { setDirection(1); if (step < STEPS - 1) setStep(s => s + 1); else setDone(true); };
  const prev = () => { setDirection(-1); setStep(s => Math.max(0, s - 1)); };

  const toggle = (field: keyof Answers, value: string) => {
    if (field === "desafios") {
      const arr = answers.desafios;
      setAnswers({ ...answers, desafios: arr.includes(value) ? arr.filter(x => x !== value) : arr.length < 3 ? [...arr, value] : arr });
    } else {
      setAnswers({ ...answers, [field]: value });
    }
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const OptionCard = ({ label, selected, onClick, icon }: { label: string; selected: boolean; onClick: () => void; icon?: string }) => (
    <button onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${selected
        ? "border-notion-blue bg-notion-blue/5 dark:bg-notion-blue/10"
        : "border-notion-border dark:border-notion-border-dark hover:border-notion-blue/40 bg-white dark:bg-notion-gray-900"}`}>
      <div className="flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <span className={`font-medium ${selected ? "text-notion-blue" : "text-notion-text-primary dark:text-notion-text-dark"}`}>{label}</span>
        {selected && <CheckCircle className="ml-auto w-5 h-5 text-notion-blue" />}
      </div>
    </button>
  );

  const steps = [
    {
      title: "¿Cuál es tu rol?",
      subtitle: "Cuéntanos sobre ti para personalizar la recomendación",
      content: (
        <div className="space-y-3">
          {[
            { label: "Fundador / CEO", icon: "🚀" },
            { label: "Manager / Líder de equipo", icon: "👥" },
            { label: "Freelancer / Consultor", icon: "💻" },
            { label: "Emprendedor", icon: "⚡" },
            { label: "Estudiante", icon: "📚" },
          ].map(({ label, icon }) => (
            <OptionCard key={label} label={label} icon={icon} selected={answers.rol === label} onClick={() => toggle("rol", label)} />
          ))}
        </div>
      ),
    },
    {
      title: "¿Cuáles son tus mayores desafíos?",
      subtitle: "Selecciona hasta 3 opciones",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {["Información desorganizada", "Proyectos sin seguimiento", "Clientes mal gestionados", "Finanzas caóticas", "Equipo desalineado", "Contenido sin planificar", "Sin documentación", "Procesos manuales"].map((d) => (
            <OptionCard key={d} label={d} selected={answers.desafios.includes(d)} onClick={() => toggle("desafios", d)} />
          ))}
        </div>
      ),
    },
    {
      title: "¿Cuánto dominas Notion?",
      subtitle: "Sé honesto, no hay respuesta incorrecta",
      content: (
        <div className="space-y-3">
          {[
            { label: "No lo he usado nunca", icon: "🌱" },
            { label: "Lo uso para notas básicas", icon: "📝" },
            { label: "Sé crear bases de datos simples", icon: "📊" },
            { label: "Uso relaciones y fórmulas", icon: "⚙️" },
            { label: "Soy usuario avanzado", icon: "🏆" },
          ].map(({ label, icon }) => (
            <OptionCard key={label} label={label} icon={icon} selected={answers.nivel === label} onClick={() => toggle("nivel", label)} />
          ))}
        </div>
      ),
    },
    {
      title: "¿Cuánto puedes invertir?",
      subtitle: "En dólares, por única vez",
      content: (
        <div className="space-y-3">
          {[
            { label: "Menos de $100 USD", value: "<100", icon: "🎯" },
            { label: "$100 – $500 USD", value: "100-500", icon: "📈" },
            { label: "$500 – $1,000 USD", value: "500-1000", icon: "💼" },
            { label: "Más de $1,000 USD", value: "1000+", icon: "🏢" },
          ].map(({ label, value, icon }) => (
            <OptionCard key={value} label={label} icon={icon} selected={answers.presupuesto === value} onClick={() => toggle("presupuesto", value)} />
          ))}
        </div>
      ),
    },
    {
      title: "¿Cuándo necesitas la solución?",
      subtitle: "Esto nos ayuda a priorizar la recomendación",
      content: (
        <div className="space-y-3">
          {[
            { label: "Esta semana — es urgente", icon: "🔥" },
            { label: "Este mes", icon: "📅" },
            { label: "En los próximos 3 meses", icon: "🗓️" },
            { label: "Sin prisa, quiero hacerlo bien", icon: "🧘" },
          ].map(({ label, icon }) => (
            <OptionCard key={label} label={label} icon={icon} selected={answers.timeline === label} onClick={() => toggle("timeline", label)} />
          ))}
        </div>
      ),
    },
  ];

  if (done) {
    const recs = getRecommendations(answers);
    return (
      <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="text-5xl mb-4">🎯</div>
            <h1 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-2">Tus recomendaciones personalizadas</h1>
            <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary">Basadas en tus respuestas, estas son las 3 mejores opciones para ti</p>
          </motion.div>
          <div className="space-y-4">
            {recs.map((rec, i) => (
              <motion.div key={rec.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {i === 0 && <span className="px-2 py-0.5 text-xs font-bold bg-notion-blue text-white rounded-full">MEJOR OPCIÓN</span>}
                      <span className="text-xs text-notion-text-secondary dark:text-notion-text-dark-secondary">{rec.match}% match</span>
                    </div>
                    <h3 className="text-xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-1">{rec.title}</h3>
                    <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary text-sm mb-3">{rec.desc}</p>
                    <p className="text-lg font-bold text-notion-blue">{rec.price}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className={`w-4 h-4 ${j < Math.round(rec.match / 20) ? "text-yellow-400 fill-yellow-400" : "text-notion-gray-200"}`} />)}
                  </div>
                </div>
                <Link href={`/${locale}${rec.href}`} className="block mt-4">
                  <Button className={`w-full ${i === 0 ? "bg-notion-blue hover:bg-notion-blue/90" : ""}`} variant={i === 0 ? "default" : "outline"}>
                    {rec.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => { setDone(false); setStep(0); setAnswers(initialAnswers); }}
              className="text-notion-text-secondary dark:text-notion-text-dark-secondary hover:text-notion-text-primary dark:hover:text-notion-text-dark text-sm underline">
              Empezar de nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }

  const current = steps[step];
  const canContinue = step === 1 ? answers.desafios.length > 0
    : step === 0 ? !!answers.rol
    : step === 2 ? !!answers.nivel
    : step === 3 ? !!answers.presupuesto
    : !!answers.timeline;

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary mb-2">
            <span>Paso {step + 1} de {STEPS}</span>
            <span>{Math.round(((step + 1) / STEPS) * 100)}% completado</span>
          </div>
          <div className="w-full bg-notion-gray-100 dark:bg-notion-gray-800 rounded-full h-2">
            <motion.div className="bg-notion-blue h-2 rounded-full" animate={{ width: `${((step + 1) / STEPS) * 100}%` }} transition={{ duration: 0.3 }} />
          </div>
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div key={step} custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark p-8">
            <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-1">{current.title}</h2>
            <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary mb-6">{current.subtitle}</p>
            {current.content}
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={prev} disabled={step === 0} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Anterior
          </Button>
          <Button onClick={next} disabled={!canContinue} className="bg-notion-blue hover:bg-notion-blue/90 flex items-center gap-2">
            {step === STEPS - 1 ? "Ver mis recomendaciones" : "Siguiente"} <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
