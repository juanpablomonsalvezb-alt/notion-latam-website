"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Download, Check, Filter, Search, Zap, Users, BarChart2, ShoppingCart, Settings, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FadeInSection from "@/components/animations/FadeInSection";
import Link from "next/link";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const MONDAY_COLOR = "#FF3D57";

const categories = [
  { id: "all", label: "Todos", count: 5 },
  { id: "ventas", label: "Ventas", count: 1 },
  { id: "proyectos", label: "Proyectos", count: 1 },
  { id: "marketing", label: "Marketing", count: 1 },
  { id: "producto", label: "Producto", count: 1 },
  { id: "operaciones", label: "Operaciones", count: 1 },
];

const templates = [
  {
    id: "pipeline-ventas-b2b",
    name: "Pipeline Ventas B2B",
    description: "Sistema completo de ventas con boards de Leads, Opportunities y Clientes. Automatizaciones de seguimiento y forecast mensual incluidos.",
    price: 47,
    originalPrice: 70,
    category: "ventas",
    gradient: "from-[#FF3D57] to-rose-700",
    icon: ShoppingCart,
    downloads: "280+",
    rating: 4.9,
    reviews: 31,
    badge: "Más vendido",
    tags: ["Pipeline", "CRM", "Forecast"],
    features: ["3 boards conectados", "Dashboard de ventas", "Automatizaciones listas", "Forecast mensual"],
  },
  {
    id: "gestion-proyectos-cliente",
    name: "Gestión de Proyectos Cliente",
    description: "Coordina múltiples proyectos con vista Gantt, control de presupuesto, time tracking y reportes automáticos para clientes.",
    price: 52,
    originalPrice: null,
    category: "proyectos",
    gradient: "from-violet-500 to-purple-700",
    icon: BarChart2,
    downloads: "190+",
    rating: 4.8,
    reviews: 24,
    badge: null,
    tags: ["Gantt", "Time tracking", "Agencias"],
    features: ["Vista Gantt integrada", "Time tracking", "Reporte cliente automático", "Control de budget"],
  },
  {
    id: "marketing-campaigns",
    name: "Marketing Campaigns",
    description: "Gestiona campañas, contenido y métricas en un solo lugar. ROI automático, calendario editorial y tracking de KPIs por canal.",
    price: 42,
    originalPrice: 60,
    category: "marketing",
    gradient: "from-orange-400 to-amber-600",
    icon: Zap,
    downloads: "170+",
    rating: 4.7,
    reviews: 19,
    badge: "Oferta",
    tags: ["Campañas", "ROI", "KPIs"],
    features: ["ROI automático", "Calendario editorial", "Dashboard multi-canal", "Tracking diario"],
  },
  {
    id: "product-roadmap",
    name: "Product Roadmap",
    description: "Sistema ágil para equipos de producto. Backlog priorizado, sprints con burndown, gestión de bugs y roadmap por Quarter.",
    price: 47,
    originalPrice: null,
    category: "producto",
    gradient: "from-sky-400 to-cyan-600",
    icon: Settings,
    downloads: "140+",
    rating: 4.8,
    reviews: 17,
    badge: "Nuevo",
    tags: ["Ágil", "Sprints", "Bugs"],
    features: ["Roadmap visual", "Sprints con burndown", "Alerta bugs críticos", "Velocity tracking"],
  },
  {
    id: "operaciones-empresariales",
    name: "Operaciones Empresariales",
    description: "Hub multi-departamental para HR, IT, Finanzas y Compras. Workflows de aprobación automáticos y dashboard ejecutivo unificado.",
    price: 57,
    originalPrice: null,
    category: "operaciones",
    gradient: "from-emerald-400 to-teal-600",
    icon: Users,
    downloads: "120+",
    rating: 4.9,
    reviews: 14,
    badge: "Premium",
    tags: ["HR", "IT", "Finanzas", "Multi-board"],
    features: ["5 boards departamentales", "Dashboard ejecutivo", "Workflows aprobación", "SLA tracking"],
  },
];

const comparison = [
  { aspect: "Tiempo de setup", manual: "5-10 días", template: "30 minutos ✓" },
  { aspect: "Automatizaciones", manual: "Las configuras tú", template: "Ya incluidas ✓" },
  { aspect: "Dashboards", manual: "Desde cero", template: "Listos para usar ✓" },
  { aspect: "Documentación", manual: "Por tu cuenta", template: "Incluida ✓" },
  { aspect: "Soporte", manual: "Solo", template: "30 días email ✓" },
];

export default function MondayTemplates() {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = templates.filter((t) => {
    const matchCat = activeCategory === "all" || t.category === activeCategory;
    const matchSearch = !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ background: `linear-gradient(135deg, ${MONDAY_COLOR}15 0%, #fff 60%)` }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: MONDAY_COLOR, filter: "blur(80px)", transform: "translate(30%, -30%)" }} />
        <div className="max-w-5xl mx-auto text-center relative">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ backgroundColor: `${MONDAY_COLOR}15`, borderColor: `${MONDAY_COLOR}30` }}>
              <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-white font-bold text-xs" style={{ backgroundColor: MONDAY_COLOR }}>M</span>
              <span className="text-sm font-medium" style={{ color: MONDAY_COLOR }}>Templates Monday.com para LATAM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6 tracking-tight">
              Templates Monday.com<br />
              <span style={{ color: MONDAY_COLOR }}>listos en 30 minutos</span>
            </h1>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto mb-8">
              Sistemas pre-configurados con automatizaciones, dashboards y documentación. Sin horas de setup manual.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="text-white shadow-lg" style={{ backgroundColor: MONDAY_COLOR }}>
                Ver los 5 templates <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href={`/${locale}/bundles`}>
                <Button size="lg" variant="outline" className="border-2">
                  Ver bundles — ahorra 30%
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-y border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5", label: "Templates profesionales" },
              { value: "900+", label: "Descargas totales" },
              { value: "4.85/5", label: "Rating promedio" },
              { value: "30 min", label: "Setup promedio" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-1">{value}</div>
                <div className="text-sm text-notion-text-secondary">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter row */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex flex-wrap gap-2 flex-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat.id
                      ? "text-white shadow-sm"
                      : "bg-white dark:bg-notion-gray-800 border border-notion-border dark:border-notion-border-dark text-notion-text-secondary hover:border-[#FF3D57] hover:text-[#FF3D57]"
                  )}
                  style={activeCategory === cat.id ? { backgroundColor: MONDAY_COLOR } : {}}
                >
                  {cat.label}
                  {activeCategory === cat.id && <span className="ml-1.5 bg-white/20 text-xs rounded-full px-1.5 py-0.5">{cat.count}</span>}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-52">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-notion-text-secondary" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar..."
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-800 text-sm focus:outline-none focus:ring-2 focus:border-[#FF3D57] transition-colors"
              />
            </div>
          </div>

          {/* Templates grid */}
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((template, i) => {
                const Icon = template.icon;
                return (
                  <motion.div
                    key={template.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="group bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark overflow-hidden h-full flex flex-col hover:shadow-lg transition-all">
                      {/* Header gradient */}
                      <div className={`relative h-36 bg-gradient-to-br ${template.gradient} p-5 flex items-end justify-between`}>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          {template.badge && (
                            <span className="px-2.5 py-1 bg-white/90 rounded-full text-xs font-bold text-notion-text-primary">{template.badge}</span>
                          )}
                          <div className="flex items-center gap-1 px-2.5 py-1 bg-white/90 rounded-full">
                            <Download className="w-3 h-3 text-notion-text-secondary" />
                            <span className="text-xs font-semibold text-notion-text-secondary">{template.downloads}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-bold text-lg text-notion-text-primary dark:text-notion-text-dark mb-2 group-hover:text-[#FF3D57] transition-colors">{template.name}</h3>
                        <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed mb-3 flex-1">{template.description}</p>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {template.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 bg-notion-gray-100 dark:bg-notion-gray-700 text-notion-text-secondary text-xs rounded-md">{tag}</span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5 mb-4">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={cn("w-3.5 h-3.5", i < Math.floor(template.rating) ? "fill-yellow-400 text-yellow-400" : "fill-notion-gray-200 text-notion-gray-200")} />
                            ))}
                          </div>
                          <span className="text-xs font-semibold text-notion-text-primary dark:text-notion-text-dark">{template.rating}</span>
                          <span className="text-xs text-notion-text-secondary">({template.reviews} reviews)</span>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-notion-border dark:border-notion-border-dark">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold" style={{ color: MONDAY_COLOR }}>${template.price} USD</span>
                            {template.originalPrice && (
                              <span className="text-sm text-notion-text-secondary line-through">${template.originalPrice}</span>
                            )}
                          </div>
                          <Button size="sm" className="text-white" style={{ backgroundColor: MONDAY_COLOR }}>
                            Obtener <ArrowRight className="ml-1 w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Comparison table */}
      <FadeInSection>
        <section className="py-16 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark text-center mb-10">
              ¿Por qué no configurarlo desde cero?
            </h2>
            <div className="overflow-hidden rounded-2xl border border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-800">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-notion-border dark:border-notion-border-dark">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-notion-text-secondary">Aspecto</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-notion-text-secondary">Configurar manual</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-white rounded-tr-2xl" style={{ backgroundColor: MONDAY_COLOR }}>Nuestros templates</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.aspect} className={cn(i < comparison.length - 1 && "border-b border-notion-border dark:border-notion-border-dark")}>
                      <td className="px-6 py-4 text-sm font-medium text-notion-text-primary dark:text-notion-text-dark">{row.aspect}</td>
                      <td className="px-6 py-4 text-sm text-notion-text-secondary">{row.manual}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-emerald-600">{row.template}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Features */}
      <FadeInSection>
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark text-center mb-10">Todos los templates incluyen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Zap, title: "Automatizaciones listas", desc: "Sin configuración adicional. Solo activar y usar." },
                { icon: BarChart2, title: "Dashboards pre-armados", desc: "Widgets con los KPIs más importantes de cada área." },
                { icon: Clock, title: "Setup en 30 minutos", desc: "Guía paso a paso incluida para empezar hoy." },
                { icon: Check, title: "Documentación trilingüe", desc: "EN / ES / FR para equipos internacionales." },
                { icon: Shield, title: "Garantía 30 días", desc: "Si no sirve para tu caso, reembolso completo." },
                { icon: Users, title: "Soporte por email", desc: "Respondemos en menos de 24 horas hábiles." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 p-4 bg-white dark:bg-notion-gray-800 rounded-xl border border-notion-border dark:border-notion-border-dark">
                  <div className="p-2 rounded-lg flex-shrink-0 h-fit" style={{ backgroundColor: `${MONDAY_COLOR}15` }}>
                    <Icon className="w-5 h-5" style={{ color: MONDAY_COLOR }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-notion-text-primary dark:text-notion-text-dark mb-1">{title}</p>
                    <p className="text-xs text-notion-text-secondary leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Bundle CTA */}
      <FadeInSection>
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto rounded-3xl p-10 text-white text-center" style={{ background: `linear-gradient(135deg, ${MONDAY_COLOR}, #c42042)` }}>
            <h2 className="text-3xl font-bold mb-3">¿Quieres Notion + Monday juntos?</h2>
            <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">Nuestros bundles incluyen templates de ambas plataformas. Ahorra hasta 30% con el stack completo.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`/${locale}/bundles`}>
                <Button size="lg" className="bg-white font-semibold" style={{ color: MONDAY_COLOR }}>
                  Ver bundles Notion + Monday <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={`/${locale}/templates`}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Solo Notion
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
