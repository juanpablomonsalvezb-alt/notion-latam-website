"use client";
import { motion } from "framer-motion";
import { PlayCircle, Clock, Users, Award, Check, ArrowRight, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const MONDAY_COLOR = "#FF3D57";

const modules = [
  { num: "01", title: "Fundamentos de Monday.com", duration: "45 min", lessons: 5, desc: "Qué es Monday, cómo navegar la interfaz, crear tu primer workspace y entender la estructura de boards, grupos e ítems." },
  { num: "02", title: "Boards y columnas avanzadas", duration: "60 min", lessons: 6, desc: "Todos los tipos de columnas, propiedades, fórmulas, relaciones entre boards y mirror columns para conectar tu información." },
  { num: "03", title: "Vistas: Kanban, Gantt, Calendar", duration: "45 min", lessons: 5, desc: "Cómo configurar cada vista para sacarle el máximo provecho según el tipo de trabajo de tu equipo." },
  { num: "04", title: "Automatizaciones sin código", duration: "55 min", lessons: 6, desc: "Las 20 automatizaciones más útiles para PyMEs LATAM. Triggers, acciones, condicionales y notificaciones automáticas." },
  { num: "05", title: "Dashboards y reportes", duration: "40 min", lessons: 4, desc: "Construye dashboards ejecutivos con widgets de KPIs, gráficos y listas que se actualizan en tiempo real." },
  { num: "06", title: "Integraciones y API", duration: "35 min", lessons: 4, desc: "Conecta Monday con Gmail, Slack, Google Drive, Zapier y herramientas que ya usas en tu empresa." },
  { num: "07", title: "Casos de uso reales LATAM", duration: "50 min", lessons: 5, desc: "Implementaciones reales: agencia digital en Colombia, startup en México, distribuidora en Argentina." },
];

function ModuleRow({ m, index }: { m: typeof modules[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="border border-notion-border dark:border-notion-border-dark rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-notion-gray-50 dark:hover:bg-notion-gray-800 transition-colors">
        <span className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: MONDAY_COLOR }}>{m.num}</span>
        <div className="flex-1">
          <p className="font-semibold text-notion-text-primary dark:text-notion-text-dark">{m.title}</p>
          <p className="text-xs text-notion-text-secondary">{m.lessons} lecciones · {m.duration}</p>
        </div>
        <ChevronDown className={cn("w-4 h-4 text-notion-text-secondary transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="px-6 pb-4 text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary border-t border-notion-border dark:border-notion-border-dark pt-3">
              {m.desc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function MondayCurso() {
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <FadeInSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ backgroundColor: `${MONDAY_COLOR}15`, borderColor: `${MONDAY_COLOR}30` }}>
            <span className="w-4 h-4 rounded text-white font-bold text-xs flex items-center justify-center" style={{ backgroundColor: MONDAY_COLOR }}>M</span>
            <span className="text-sm font-medium" style={{ color: MONDAY_COLOR }}>Curso Monday.com para LATAM</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6 tracking-tight">
            Domina Monday.com<br />
            <span style={{ color: MONDAY_COLOR }}>de cero a experto</span>
          </h1>
          <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto mb-8">
            El único curso de Monday.com diseñado para empresas latinoamericanas. En español, con casos reales de LATAM y acceso de por vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white shadow-lg py-6 text-lg font-semibold" style={{ backgroundColor: MONDAY_COLOR }}>
              Acceder al curso — $97 USD <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="py-6 text-lg">
              <PlayCircle className="mr-2 w-5 h-5" /> Ver demo gratis
            </Button>
          </div>
        </FadeInSection>
      </section>

      {/* Stats */}
      <section className="border-y border-notion-border dark:border-notion-border-dark py-10 mb-16">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: PlayCircle, value: "35 lecciones", label: "en video HD" },
            { icon: Clock, value: "6 horas", label: "de contenido" },
            { icon: Users, value: "450+ alumnos", label: "en LATAM" },
            { icon: Award, value: "Certificado", label: "digital incluido" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="w-6 h-6" style={{ color: MONDAY_COLOR }} />
              <p className="font-bold text-notion-text-primary dark:text-notion-text-dark">{value}</p>
              <p className="text-sm text-notion-text-secondary">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        {/* What you'll learn */}
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-8">¿Qué vas a aprender?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Configurar Monday desde cero para tu empresa",
                "Usar todos los tipos de columnas y vistas",
                "Crear automatizaciones sin código",
                "Construir dashboards ejecutivos",
                "Conectar Monday con tu stack de herramientas",
                "Gestionar proyectos con metodología ágil",
                "Implementar pipelines de ventas en Monday",
                "Reportes automáticos para clientes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-white dark:bg-notion-gray-800 rounded-lg border border-notion-border dark:border-notion-border-dark">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${MONDAY_COLOR}20` }}>
                    <Check className="w-3 h-3" style={{ color: MONDAY_COLOR }} />
                  </div>
                  <span className="text-sm text-notion-text-primary dark:text-notion-text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Curriculum */}
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6">Curriculum completo</h2>
            <div className="space-y-3">
              {modules.map((m, i) => <ModuleRow key={m.num} m={m} index={i} />)}
            </div>
          </div>
        </FadeInSection>

        {/* Testimonials */}
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6">Lo que dicen los alumnos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Pablo R.", role: "Gerente de Proyectos", country: "Colombia", text: "En 2 semanas tenía Monday funcionando para todo mi equipo. El módulo de automatizaciones me ahorró 5 horas semanales." },
                { name: "María T.", role: "CEO Agencia", country: "México", text: "Vine sabiendo usar Monday básico. Ahora tengo dashboards que impresionan a mis clientes en cada reunión." },
              ].map((t) => (
                <div key={t.name} className="bg-white dark:bg-notion-gray-800 rounded-xl border border-notion-border dark:border-notion-border-dark p-6">
                  <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                  <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary italic mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-notion-text-primary dark:text-notion-text-dark">{t.name}</p>
                    <p className="text-sm text-notion-text-secondary">{t.role} · {t.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Pricing CTA */}
        <FadeInSection>
          <div className="rounded-3xl p-10 text-white text-center" style={{ background: `linear-gradient(135deg, ${MONDAY_COLOR}, #c42042)` }}>
            <h2 className="text-3xl font-bold mb-3">Empieza hoy — acceso de por vida</h2>
            <p className="text-white/80 text-lg mb-2">$97 USD · Una sola vez · Sin suscripción</p>
            <p className="text-white/60 text-sm mb-8">Incluye actualizaciones futuras del contenido</p>
            <Button size="lg" className="bg-white font-semibold text-lg px-10 py-6" style={{ color: MONDAY_COLOR }}>
              Quiero acceder al curso <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-white/60 text-sm mt-4">Garantía de satisfacción 30 días — si no sirve, reembolso completo</p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
