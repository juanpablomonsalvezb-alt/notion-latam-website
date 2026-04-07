"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Star,
  Filter,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  DollarSign,
  BarChart2,
  Package,
  Calendar,
  MessageSquare,
  FileText,
  Briefcase,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FadeInSection from "@/components/animations/FadeInSection";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Todos", count: 18 },
  { id: "finanzas", label: "Finanzas", count: 4 },
  { id: "ventas", label: "Ventas & CRM", count: 4 },
  { id: "operaciones", label: "Operaciones", count: 3 },
  { id: "productividad", label: "Productividad", count: 4 },
  { id: "marketing", label: "Marketing", count: 3 },
];

const templates = [
  {
    id: 1,
    name: "Sistema Financiero PyME",
    description: "Control completo de ingresos, gastos y flujo de caja. Incluye dashboard con métricas clave, categorización automática y reportes mensuales.",
    price: 40,
    originalPrice: 60,
    category: "finanzas",
    color: "from-emerald-400 to-teal-600",
    iconColor: "text-emerald-500",
    icon: DollarSign,
    downloads: "520+",
    rating: 4.9,
    reviews: 47,
    badge: "Más vendido",
    tags: ["Dashboard", "Reportes", "Flujo de caja"],
    features: ["Dashboard financiero", "Tracking de gastos", "Proyecciones", "Reportes PDF"],
  },
  {
    id: 2,
    name: "CRM WhatsApp",
    description: "Gestión de clientes integrada con WhatsApp. Pipeline de ventas visual, seguimiento de conversaciones y automatización de tareas.",
    price: 35,
    originalPrice: null,
    category: "ventas",
    color: "from-blue-400 to-indigo-600",
    iconColor: "text-blue-500",
    icon: MessageSquare,
    downloads: "780+",
    rating: 4.8,
    reviews: 63,
    badge: null,
    tags: ["CRM", "WhatsApp", "Pipeline"],
    features: ["Pipeline visual", "Historial clientes", "Tareas automáticas", "Reportes ventas"],
  },
  {
    id: 3,
    name: "Control de Inventario",
    description: "Tracking de stock en tiempo real, alertas de reposición, historial de movimientos y reportes automáticos para tu negocio.",
    price: 45,
    originalPrice: null,
    category: "operaciones",
    color: "from-violet-400 to-purple-600",
    iconColor: "text-violet-500",
    icon: Package,
    downloads: "340+",
    rating: 4.9,
    reviews: 29,
    badge: "Nuevo",
    tags: ["Inventario", "Stock", "Alertas"],
    features: ["Control stock", "Alertas reposición", "Historial mov.", "Multi-almacén"],
  },
  {
    id: 4,
    name: "Gestión de Proyectos",
    description: "Kanban, timeline y recursos en un solo lugar. Ideal para equipos que manejan múltiples proyectos simultáneamente.",
    price: 30,
    originalPrice: null,
    category: "productividad",
    color: "from-orange-400 to-red-600",
    iconColor: "text-orange-500",
    icon: BarChart2,
    downloads: "920+",
    rating: 4.7,
    reviews: 88,
    badge: "Popular",
    tags: ["Kanban", "Timeline", "Equipo"],
    features: ["Board Kanban", "Timeline Gantt", "Recursos", "Time tracking"],
  },
  {
    id: 5,
    name: "Plan de Marketing",
    description: "Calendario editorial, seguimiento de campañas, métricas de redes sociales y planning mensual para tu estrategia digital.",
    price: 38,
    originalPrice: 50,
    category: "marketing",
    color: "from-pink-400 to-rose-600",
    iconColor: "text-pink-500",
    icon: TrendingUp,
    downloads: "410+",
    rating: 4.8,
    reviews: 36,
    badge: null,
    tags: ["Editorial", "Campañas", "Social"],
    features: ["Calendario editorial", "Métricas", "Campañas", "Contenido"],
  },
  {
    id: 6,
    name: "Onboarding de Empleados",
    description: "Sistema completo para incorporar nuevos colaboradores: checklist, recursos, documentos y seguimiento del proceso.",
    price: 28,
    originalPrice: null,
    category: "operaciones",
    color: "from-cyan-400 to-sky-600",
    iconColor: "text-cyan-500",
    icon: Users,
    downloads: "290+",
    rating: 4.6,
    reviews: 22,
    badge: null,
    tags: ["RRHH", "Checklist", "Equipo"],
    features: ["Checklist incorporación", "Recursos", "Docs", "Seguimiento"],
  },
  {
    id: 7,
    name: "Sistema de Facturas",
    description: "Genera y rastrea facturas, gestiona cuentas por cobrar y mantén un historial completo de transacciones.",
    price: 42,
    originalPrice: null,
    category: "finanzas",
    color: "from-lime-400 to-green-600",
    iconColor: "text-lime-500",
    icon: FileText,
    downloads: "380+",
    rating: 4.9,
    reviews: 31,
    badge: null,
    tags: ["Facturas", "Cobros", "Contabilidad"],
    features: ["Generador facturas", "Cuentas por cobrar", "Historial", "Recordatorios"],
  },
  {
    id: 8,
    name: "Agenda Personal",
    description: "Organiza tu semana, gestiona tareas, hábitos y objetivos. Sistema de productividad personal basado en GTD.",
    price: 22,
    originalPrice: null,
    category: "productividad",
    color: "from-yellow-400 to-amber-600",
    iconColor: "text-yellow-500",
    icon: Calendar,
    downloads: "650+",
    rating: 4.7,
    reviews: 54,
    badge: null,
    tags: ["GTD", "Hábitos", "Objetivos"],
    features: ["Weekly review", "Hábitos tracker", "OKRs", "Inbox"],
  },
  {
    id: 9,
    name: "Portal de Clientes",
    description: "Área exclusiva para clientes con documentos compartidos, actualizaciones de proyecto y comunicación centralizada.",
    price: 55,
    originalPrice: 75,
    category: "ventas",
    color: "from-indigo-400 to-violet-600",
    iconColor: "text-indigo-500",
    icon: Briefcase,
    downloads: "180+",
    rating: 5.0,
    reviews: 15,
    badge: "Premium",
    tags: ["Portal", "Clientes", "Comunicación"],
    features: ["Portal privado", "Docs compartidos", "Updates", "Mensajería"],
  },
];

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filtered = templates
    .filter((t) => {
      const matchCat = activeCategory === "all" || t.category === activeCategory;
      const matchSearch =
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return parseInt(b.downloads) - parseInt(a.downloads); // popular
    });

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-notion-blue/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-notion-blue/10 text-notion-blue text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Templates Premium para LATAM
            </div>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-5 tracking-tight">
              Listos para usar{" "}
              <span className="gradient-text">en minutos</span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto">
              {templates.length}+ templates profesionales diseñados para las necesidades reales
              de empresas latinoamericanas. Descarga y personaliza al instante.
            </p>
          </FadeInSection>

          {/* Stats row */}
          <FadeInSection delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-10 text-sm">
              {[
                { value: "2,500+", label: "descargas" },
                { value: "4.9/5", label: "rating promedio" },
                { value: "18", label: "templates activos" },
                { value: "24h", label: "soporte" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="font-bold text-notion-blue text-lg">{s.value}</span>
                  <span className="text-notion-text-secondary">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-16 z-30 bg-white/80 dark:bg-notion-gray-900/80 backdrop-blur-xl border-b border-notion-border dark:border-notion-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
                    activeCategory === cat.id
                      ? "bg-notion-blue text-white shadow-md"
                      : "bg-notion-gray-100 dark:bg-notion-gray-800 text-notion-text-secondary hover:bg-notion-gray-200 dark:hover:bg-notion-gray-700"
                  )}
                >
                  {cat.label}
                  <span
                    className={cn(
                      "text-xs px-1.5 py-0.5 rounded-full",
                      activeCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-notion-gray-200 dark:bg-notion-gray-700 text-notion-text-secondary"
                    )}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search + Sort */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-56">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-notion-text-secondary" />
                <Input
                  placeholder="Buscar templates..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 border-notion-border dark:border-notion-border-dark bg-transparent"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-lg border border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-800 text-sm text-notion-text-primary dark:text-notion-text-dark focus:outline-none focus:ring-2 focus:ring-notion-blue"
              >
                <option value="popular">Más populares</option>
                <option value="rating">Mejor valorados</option>
                <option value="price-asc">Precio: menor</option>
                <option value="price-desc">Precio: mayor</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-notion-text-secondary"
              >
                <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg">No se encontraron templates con esos filtros.</p>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((template, index) => (
                  <motion.div
                    key={template.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <TemplateCard template={template} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
              ¿Necesitas algo más específico?
            </h2>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary mb-8">
              Creamos templates a medida para tu negocio. Consulta nuestros paquetes de consultoría.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-notion-blue hover:bg-notion-blue/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Pedir Template Personalizado
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Ver Consultoría
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

function TemplateCard({ template }: { template: (typeof templates)[0] }) {
  const Icon = template.icon;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white dark:bg-notion-gray-800 rounded-2xl overflow-hidden notion-shadow hover:notion-shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      {/* Gradient header */}
      <div className={`relative h-36 bg-gradient-to-br ${template.color} p-5 flex items-end justify-between`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" />
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          {template.badge && (
            <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-notion-text-primary">
              {template.badge}
            </span>
          )}
          <div className="flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full">
            <Download className="w-3 h-3 text-notion-text-secondary" />
            <span className="text-xs font-semibold text-notion-text-secondary">{template.downloads}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg text-notion-text-primary dark:text-notion-text-dark group-hover:text-notion-blue transition-colors leading-tight">
            {template.name}
          </h3>
        </div>

        <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed mb-4 flex-1">
          {template.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {template.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-notion-gray-100 dark:bg-notion-gray-700 text-notion-text-secondary text-xs rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3.5 h-3.5",
                  i < Math.floor(template.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-notion-gray-200 text-notion-gray-200"
                )}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-notion-text-primary dark:text-notion-text-dark">
            {template.rating}
          </span>
          <span className="text-xs text-notion-text-secondary">
            ({template.reviews} reviews)
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-notion-border dark:border-notion-border-dark">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-notion-blue">
              ${template.price} USD
            </span>
            {template.originalPrice && (
              <span className="text-sm text-notion-text-secondary line-through">
                ${template.originalPrice}
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="group/btn bg-notion-blue hover:bg-notion-blue/90 text-white shadow-sm"
          >
            Obtener
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
