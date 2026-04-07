"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Star,
  Filter,
  ChevronRight,
  Sparkles,
  BarChart2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Todos" },
  { id: "templates", label: "Templates" },
  { id: "consultoria", label: "Consultoría" },
  { id: "curso", label: "Curso" },
];

const cases = [
  {
    id: 1,
    company: "Agencia Creativa Digital",
    industry: "Agencia de Marketing",
    country: "Colombia",
    flag: "🇨🇴",
    teamSize: "12 personas",
    category: "consultoria",
    product: "Implementación Business",
    duration: "3 semanas",
    challenge:
      "Gestionaban 30+ clientes activos con hojas de Excel, WhatsApp y múltiples herramientas desconectadas. Los deadlines se perdían, la información estaba dispersa y el equipo perdía más de 15 horas semanales en coordinación manual.",
    solution:
      "Sistema operativo completo en Notion: CRM de clientes, gestión de proyectos por sprints, tracking de tareas por responsable, dashboard financiero y base de conocimiento interna con SOPs para el equipo.",
    results: [
      { metric: "15h/sem", label: "ahorradas en coordinación" },
      { metric: "0", label: "deadlines perdidos en 6 meses" },
      { metric: "3x", label: "más rápido el onboarding de nuevos clientes" },
      { metric: "$0", label: "en herramientas adicionales" },
    ],
    testimonial:
      "Teníamos miedo de que fuera complicado migrar todo a Notion, pero el equipo de LATAM lo hizo tan natural que en una semana todos estábamos usando el sistema. Literalmente no concibo trabajar sin esto.",
    person: "Roberto Jiménez",
    role: "CEO",
    avatar: "RJ",
    color: "from-blue-400 to-cyan-600",
    rating: 5,
  },
  {
    id: 2,
    company: "E-commerce Moda Urbana",
    industry: "Retail / E-commerce",
    country: "Chile",
    flag: "🇨🇱",
    teamSize: "8 personas",
    category: "consultoria",
    product: "Sistema de Inventario",
    duration: "2 semanas",
    challenge:
      "Inventario en Excel con errores constantes, pedidos gestionados en hojas separadas sin visibilidad en tiempo real. Dos veces al mes vendían productos sin stock, generando retrasos y clientes insatisfechos.",
    solution:
      "Sistema de inventario en Notion con alertas automáticas cuando el stock baja del mínimo, sincronización de órdenes de compra, historial de movimientos y dashboard en tiempo real accesible desde el celular.",
    results: [
      { metric: "100%", label: "eliminación de errores de stock" },
      { metric: "2x", label: "más rápido el proceso de reposición" },
      { metric: "4.8/5", label: "satisfacción de clientes (subió de 3.9)" },
      { metric: "$2,400", label: "ahorrados en devoluciones el primer mes" },
    ],
    testimonial:
      "Antes yo vivía con el miedo de vender algo que no tenía. Ahora tengo paz mental total. El sistema avisa solo cuando hay que comprar y todo el equipo puede ver el stock en tiempo real desde el celular.",
    person: "Patricia Vega",
    role: "Fundadora",
    avatar: "PV",
    color: "from-pink-400 to-rose-600",
    rating: 5,
  },
  {
    id: 3,
    company: "Consultora RRHH Partners",
    industry: "Recursos Humanos",
    country: "Argentina",
    flag: "🇦🇷",
    teamSize: "5 consultores",
    category: "templates",
    product: "Template Sistema RRHH",
    duration: "Implementado en 2 días",
    challenge:
      "Proceso de selección 100% manual con seguimiento de candidatos en Excel. Imposible generar reportes para clientes, sin historial de interacciones y sin forma de escalar el proceso con el mismo equipo.",
    solution:
      "ATS personalizado en Notion con pipeline visual de candidatos, evaluaciones estructuradas, reportes automáticos para clientes y base de datos de talento reutilizable para futuras búsquedas.",
    results: [
      { metric: "3x", label: "más rápido el proceso de selección" },
      { metric: "40%", label: "reducción en tiempo administrativo" },
      { metric: "5 clientes", label: "nuevos en 3 meses (escalabilidad)" },
      { metric: "NPS 9.2", label: "de satisfacción de clientes" },
    ],
    testimonial:
      "Tengo 5 consultores y manejamos 20 búsquedas simultáneas. Sin Notion, hubiera necesitado contratar 2 personas más. El template de RRHH nos salvó el negocio literalmente.",
    person: "Marcos Santos",
    role: "Director General",
    avatar: "MS",
    color: "from-violet-400 to-purple-600",
    rating: 5,
  },
  {
    id: 4,
    company: "Startup FinTech Pagos",
    industry: "Tecnología / Finanzas",
    country: "México",
    flag: "🇲🇽",
    teamSize: "25 personas",
    category: "consultoria",
    product: "Sistema Enterprise",
    duration: "5 semanas",
    challenge:
      "Empresa en rápido crecimiento con 25 personas, 3 departamentos y ningún sistema centralizado. Los OKRs trimestrales se definían pero nunca se seguían. Reuniones de 1h para sintonizar estado de proyectos.",
    solution:
      "Sistema operativo completo: dashboards por departamento (CTO, CMO, COO), OKRs con check-ins semanales automáticos, gestión de proyectos ágil, CRM de ventas y base de conocimiento centralizada.",
    results: [
      { metric: "85%", label: "cumplimiento de OKRs (vs 30% anterior)" },
      { metric: "12h/sem", label: "menos en reuniones de sincronización" },
      { metric: "2x", label: "velocidad de onboarding de nuevos empleados" },
      { metric: "$18k/año", label: "ahorro en herramientas eliminadas" },
    ],
    testimonial:
      "Éramos una startup caótica que no sabía si iba a sobrevivir el caos de crecer. Notion LATAM nos construyó el sistema nervioso central de la empresa. Ahora todos sabemos qué hacer, por qué y cuándo.",
    person: "Daniela Herrera",
    role: "COO",
    avatar: "DH",
    color: "from-orange-400 to-red-600",
    rating: 5,
  },
  {
    id: 5,
    company: "Freelancer Diseño UX",
    industry: "Diseño / Freelance",
    country: "Uruguay",
    flag: "🇺🇾",
    teamSize: "1 persona",
    category: "curso",
    product: "Curso Completo Notion",
    duration: "Curso en 3 semanas",
    challenge:
      "Diseñador freelancer con 8 clientes simultáneos sin sistema de gestión. Perdía propuestas, confundía feedback de distintos proyectos y trabajaba hasta tarde por falta de organización.",
    solution:
      "Después del curso, construyó su propio sistema: CRM personal, gestión de proyectos por cliente, tracking de tiempo y facturación. Todo desde Notion sin herramientas adicionales.",
    results: [
      { metric: "8 clientes", label: "gestionados sin estrés" },
      { metric: "2h/día", label: "recuperadas (menos admin)" },
      { metric: "$500/mes", label: "en herramientas canceladas" },
      { metric: "4.9/5", label: "satisfacción de sus clientes" },
    ],
    testimonial:
      "El módulo de fórmulas me cambió la vida. Empecé a calcular automáticamente honorarios, tiempo invertido y rentabilidad por cliente. Subí mis precios 40% porque pude demostrar el valor que entrego.",
    person: "Valentina Cruz",
    role: "Diseñadora UX Freelancer",
    avatar: "VC",
    color: "from-green-400 to-emerald-600",
    rating: 5,
  },
  {
    id: 6,
    company: "Distribuidora Alimentos Regionales",
    industry: "Distribución / FMCG",
    country: "Perú",
    flag: "🇵🇪",
    teamSize: "18 personas",
    category: "templates",
    product: "Template Sistema Financiero + CRM",
    duration: "Implementado en 1 semana",
    challenge:
      "Empresa de distribución con 18 empleados, 200+ clientes y control financiero en papel. El gerente no sabía el margen real de ganancia ni cuáles rutas eran rentables hasta el cierre mensual.",
    solution:
      "Combinación de Template Financiero PyME + CRM WhatsApp. Dashboard en tiempo real con ingresos por ruta, márgenes por producto y pipeline de clientes nuevos. Todo desde el celular.",
    results: [
      { metric: "Visibilidad", label: "financiera en tiempo real por primera vez" },
      { metric: "3 rutas", label: "no rentables identificadas y eliminadas" },
      { metric: "+22%", label: "margen neto en primer trimestre" },
      { metric: "$75 USD", label: "inversión en templates → $15k recuperados" },
    ],
    testimonial:
      "Pagué $75 por dos templates y descubrí que 3 de mis rutas de distribución eran un hoyo negro de dinero. En el primer mes recuperé 200 veces lo invertido.",
    person: "Andrés Quispe",
    role: "Gerente General",
    avatar: "AQ",
    color: "from-yellow-400 to-amber-600",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "empresas atendidas", icon: Users },
  { value: "15", label: "países en LATAM", icon: TrendingUp },
  { value: "$2M+", label: "valor generado", icon: DollarSign },
  { value: "4.9/5", label: "satisfacción promedio", icon: Star },
];

export default function CasosExitoPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = cases.filter(
    (c) => activeCategory === "all" || c.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-notion-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-notion-blue/10 text-notion-blue text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Casos de Éxito Reales
            </div>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-5 tracking-tight leading-tight">
              Empresas que{" "}
              <span className="gradient-text">transformaron</span>
              <br />
              su operación con Notion
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto">
              Resultados reales y medibles de empresas en México, Chile, Argentina, Colombia, Perú y más.
            </p>
          </FadeInSection>

          {/* Stats */}
          <FadeInSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white dark:bg-notion-gray-800 rounded-2xl p-5 notion-shadow"
                >
                  <s.icon className="w-5 h-5 text-notion-blue mb-2 mx-auto" />
                  <div className="text-2xl font-bold text-notion-blue mb-0.5">
                    {s.value}
                  </div>
                  <div className="text-xs text-notion-text-secondary">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-16 z-20 bg-white/80 dark:bg-notion-gray-900/80 backdrop-blur-xl border-b border-notion-border dark:border-notion-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2">
          <Filter className="w-4 h-4 text-notion-text-secondary mr-1" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-notion-blue text-white shadow-sm"
                  : "text-notion-text-secondary hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cases */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {filtered.map((c, i) => (
            <FadeInSection key={c.id} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white dark:bg-notion-gray-800 rounded-3xl notion-shadow hover:notion-shadow-lg transition-all overflow-hidden"
              >
                {/* Top color bar */}
                <div className={`h-1.5 bg-gradient-to-r ${c.color}`} />

                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left — Company info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold`}>
                          {c.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold text-notion-text-primary dark:text-notion-text-dark">
                            {c.company}
                          </h3>
                          <p className="text-sm text-notion-text-secondary">
                            {c.flag} {c.country} · {c.industry}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-5">
                        {[
                          { label: "Equipo", value: c.teamSize },
                          { label: "Producto", value: c.product },
                          { label: "Tiempo", value: c.duration },
                        ].map((item) => (
                          <div key={item.label} className="flex justify-between text-sm">
                            <span className="text-notion-text-secondary">{item.label}</span>
                            <span className="font-medium text-notion-text-primary dark:text-notion-text-dark">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-notion-gray-50 dark:bg-notion-gray-700 rounded-xl p-4">
                        <div className="flex gap-0.5 mb-2">
                          {[...Array(c.rating)].map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary italic leading-relaxed mb-3">
                          "{c.testimonial}"
                        </p>
                        <p className="text-xs font-semibold text-notion-text-primary dark:text-notion-text-dark">
                          {c.person} · {c.role}
                        </p>
                      </div>
                    </div>

                    {/* Middle — Challenge & Solution */}
                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-red-400" />
                          <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                            El desafío
                          </span>
                        </div>
                        <p className="text-sm text-notion-text-secondary leading-relaxed">
                          {c.challenge}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-notion-blue" />
                          <span className="text-xs font-bold text-notion-blue uppercase tracking-wider">
                            La solución
                          </span>
                        </div>
                        <p className="text-sm text-notion-text-secondary leading-relaxed">
                          {c.solution}
                        </p>
                      </div>
                    </div>

                    {/* Right — Results */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <BarChart2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                          Resultados medibles
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {c.results.map((r) => (
                          <div
                            key={r.label}
                            className="bg-emerald-50 dark:bg-emerald-900/15 rounded-xl p-3 text-center"
                          >
                            <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">
                              {r.metric}
                            </div>
                            <div className="text-xs text-notion-text-secondary leading-tight">
                              {r.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-notion-border dark:border-notion-border-dark">
                        <span className={cn(
                          "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium",
                          c.category === "consultoria" && "bg-notion-blue/10 text-notion-blue",
                          c.category === "templates" && "bg-violet-100 text-violet-600",
                          c.category === "curso" && "bg-green-100 text-green-600",
                        )}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {c.category === "consultoria" && "Consultoría"}
                          {c.category === "templates" && "Templates Premium"}
                          {c.category === "curso" && "Curso Completo"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-notion-blue/10 via-purple-500/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
              ¿Tu empresa será el próximo caso?
            </h2>
            <p className="text-xl text-notion-text-secondary mb-8">
              Agenda una llamada gratuita y te mostramos exactamente cómo transformar tu operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-notion-blue hover:bg-notion-blue/90 text-white shadow-lg hover:shadow-xl transition-all text-lg px-8"
              >
                Quiero Mi Caso de Éxito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Ver Templates
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
