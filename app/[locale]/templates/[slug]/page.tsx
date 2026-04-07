"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Star, Download, Check, ArrowRight, ArrowLeft, Shield, Zap,
  DollarSign, MessageSquare, Package, Calendar, BarChart2,
  FileText, Briefcase, Users, TrendingUp, Globe, Heart, ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FadeInSection from "@/components/animations/FadeInSection";
import Link from "next/link";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const TEMPLATES: Record<string, {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number | null;
  category: string;
  color: string;
  icon: React.ElementType;
  downloads: string;
  rating: number;
  reviews: number;
  badge: string | null;
  tags: string[];
  features: string[];
  includes: string[];
  forWho: string[];
  faq: { q: string; a: string }[];
  testimonials: { name: string; company: string; country: string; text: string }[];
}> = {
  "sistema-financiero-pyme": {
    id: "sistema-financiero-pyme",
    name: "Sistema Financiero PyME",
    tagline: "Control total de tus finanzas en Notion",
    description: "El sistema financiero más completo para PyMEs latinoamericanas. Control de ingresos, gastos, flujo de caja y proyecciones — todo en un solo lugar, en tu idioma.",
    price: 40,
    originalPrice: 60,
    category: "Finanzas",
    color: "from-emerald-400 to-teal-600",
    icon: DollarSign,
    downloads: "520+",
    rating: 4.9,
    reviews: 47,
    badge: "Más vendido",
    tags: ["Dashboard", "Reportes", "Flujo de caja", "PyME"],
    features: ["Dashboard financiero en tiempo real", "Tracking de ingresos y gastos", "Proyecciones a 3 y 6 meses", "Reportes mensuales automáticos", "Categorización por tipo de gasto", "Alertas de flujo de caja negativo", "Vista anual consolidada", "Compatible con plan Free de Notion"],
    includes: ["Template principal con 6 vistas", "Guía de configuración (PDF)", "Video tutorial de 45 minutos", "Plantilla de categorías sugeridas", "Soporte por email 30 días"],
    forWho: ["PyMEs con 1-50 empleados", "Freelancers y consultores independientes", "Startups en etapa temprana", "Negocios de e-commerce", "Agencias y estudios creativos"],
    faq: [
      { q: "¿Necesito saber de contabilidad?", a: "No. El template está diseñado para dueños de negocio, no contadores. Todo está explicado en lenguaje simple con instrucciones paso a paso." },
      { q: "¿Puedo conectarlo con mi banco?", a: "Notion no tiene integración directa con bancos, pero el template incluye instrucciones para importar datos desde tu banco con un proceso simple de 5 minutos." },
      { q: "¿Funciona para múltiples monedas?", a: "Sí. Puedes configurar tu moneda local o USD. El template incluye una propiedad de moneda que puedes personalizar según tu país." },
    ],
    testimonials: [
      { name: "Carolina M.", company: "Agencia Digital", country: "Colombia", text: "Antes perdía 3 horas a la semana en Excel. Con este template lo tengo todo en 20 minutos. Increíble." },
      { name: "Rodrigo S.", company: "E-commerce", country: "Chile", text: "Por fin entiendo el flujo de caja de mi negocio. Simple, visual y funciona perfecto." },
    ],
  },
  "crm-whatsapp": {
    id: "crm-whatsapp",
    name: "CRM WhatsApp",
    tagline: "Gestiona tus clientes donde ya estás",
    description: "El CRM diseñado para empresas que venden por WhatsApp. Pipeline visual, historial de clientes, seguimiento de conversaciones y automatización de tareas — sin salir de Notion.",
    price: 35,
    originalPrice: null,
    category: "Ventas & CRM",
    color: "from-blue-400 to-indigo-600",
    icon: MessageSquare,
    downloads: "780+",
    rating: 4.8,
    reviews: 63,
    badge: null,
    tags: ["CRM", "WhatsApp", "Pipeline", "Ventas"],
    features: ["Pipeline Kanban de ventas visual", "Base de datos de clientes completa", "Historial de conversaciones", "Tareas y seguimientos automáticos", "Scoring de leads", "Reportes de conversión", "Integración con WhatsApp Business", "Plantillas de mensajes incluidas"],
    includes: ["CRM principal con 8 vistas", "Base de contactos pre-configurada", "50+ plantillas de mensajes WhatsApp", "Guía de implementación", "Video curso de 60 minutos", "Soporte premium 30 días"],
    forWho: ["Equipos de ventas B2B y B2C", "Negocios que venden por WhatsApp", "Consultores y coaches", "Agencias con múltiples clientes", "Startups con fuerza de ventas"],
    faq: [
      { q: "¿Necesito WhatsApp Business?", a: "No es estrictamente necesario, pero el template está optimizado para WhatsApp Business (gratuito). Te incluimos la guía de configuración de WhatsApp Business." },
      { q: "¿Cuántos vendedores pueden usar el CRM?", a: "La licencia cubre un workspace de Notion, que puede tener múltiples usuarios. Con el plan gratuito de Notion puedes tener hasta 10 colaboradores." },
    ],
    testimonials: [
      { name: "Luis A.", company: "Inmobiliaria", country: "México", text: "Pasamos de perder leads a tener un seguimiento perfecto. Las ventas mejoraron 30% en el primer mes." },
      { name: "Valentina G.", company: "Consultora RRHH", country: "Argentina", text: "Exactamente lo que necesitaba. Simple, potente y en español. 10/10." },
    ],
  },
  "control-inventario": {
    id: "control-inventario",
    name: "Control de Inventario",
    tagline: "Nunca más quedes sin stock",
    description: "Sistema completo de gestión de inventario para negocios físicos y e-commerce. Tracking en tiempo real, alertas de reposición y reportes de movimiento.",
    price: 45,
    originalPrice: null,
    category: "Operaciones",
    color: "from-violet-400 to-purple-600",
    icon: Package,
    downloads: "310+",
    rating: 4.7,
    reviews: 28,
    badge: null,
    tags: ["Inventario", "Stock", "E-commerce", "Operaciones"],
    features: ["Dashboard de stock en tiempo real", "Alertas automáticas de reposición", "Historial de entradas y salidas", "Reportes de rotación de inventario", "Gestión de proveedores", "Valorización del inventario", "Códigos de producto y SKU", "Multi-almacén"],
    includes: ["Sistema de inventario completo", "Módulo de proveedores", "Plantilla de etiquetas", "Guía de implementación", "Video tutorial 50 minutos"],
    forWho: ["Tiendas físicas y online", "Importadores y distribuidores", "Restaurantes y cafeterías", "Farmacias y veterinarias", "Negocios de manufactura"],
    faq: [
      { q: "¿Funciona para productos con variantes (tallas, colores)?", a: "Sí. El template incluye soporte para variantes con propiedades múltiples. Puedes gestionar hasta cientos de SKUs sin problemas." },
      { q: "¿Puedo hacer ajustes de inventario?", a: "Absolutamente. Hay una vista específica para ajustes y mermas, con campo de motivo y registro de quién hizo el ajuste." },
    ],
    testimonials: [
      { name: "Ana F.", company: "Tienda de Ropa", country: "Perú", text: "Antes tenía el inventario en 3 hojas de Excel diferentes. Ahora todo está en un lugar y los reportes son automáticos." },
    ],
  },
  "gestion-proyectos": {
    id: "gestion-proyectos",
    name: "Gestión de Proyectos",
    tagline: "Del caos a la claridad en tu equipo",
    description: "Sistema completo de gestión de proyectos para equipos de hasta 50 personas. Roadmap visual, sprints, tareas, recursos y reportes de avance.",
    price: 38,
    originalPrice: 55,
    category: "Productividad",
    color: "from-orange-400 to-red-600",
    icon: BarChart2,
    downloads: "450+",
    rating: 4.8,
    reviews: 41,
    badge: "Nuevo",
    tags: ["Proyectos", "Sprints", "Equipo", "Roadmap"],
    features: ["Roadmap visual por trimestres", "Sistema de sprints 2 semanas", "Gestión de tareas con prioridades", "Control de recursos del equipo", "Reportes de avance automáticos", "Gestión de riesgos", "Dashboard de KPIs del proyecto", "Integración con calendarios"],
    includes: ["Template de proyectos completo", "Módulo de sprints", "Dashboard de equipo", "Guías de metodología ágil en español", "Video tutorial 55 minutos"],
    forWho: ["Gerentes de proyectos", "Equipos de tecnología", "Agencias creativas", "Consultoras", "Startups con equipos pequeños"],
    faq: [
      { q: "¿Soporta metodología ágil/Scrum?", a: "Sí. El template incluye vistas específicas para sprints, backlog y retrospectivas, adaptadas a la metodología Scrum." },
    ],
    testimonials: [
      { name: "Sebastián V.", company: "Agencia Digital", country: "Uruguay", text: "Por fin un sistema de proyectos que mi equipo realmente usa. La visibilidad que da es increíble." },
    ],
  },
};

const DEFAULT_TEMPLATE = TEMPLATES["sistema-financiero-pyme"];

export default function TemplateDetail() {
  const params = useParams();
  const locale = useLocale();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const template = TEMPLATES[slug] || DEFAULT_TEMPLATE;
  const Icon = template.icon;

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-notion-text-secondary mb-8">
          <Link href={`/${locale}/templates`} className="hover:text-notion-blue transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Templates
          </Link>
          <span>/</span>
          <span>{template.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Hero card */}
            <FadeInSection>
              <div className={`relative rounded-3xl bg-gradient-to-br ${template.color} p-10 mb-8 overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-64 h-64 rounded-full bg-white/30" />
                  <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-white/20" />
                </div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {template.badge && (
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-notion-text-primary">
                        {template.badge}
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{template.name}</h1>
                  <p className="text-white/80 text-lg">{template.tagline}</p>
                </div>
              </div>
            </FadeInSection>

            {/* Stats row */}
            <FadeInSection delay={0.1}>
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-notion-border dark:border-notion-border-dark">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={cn("w-4 h-4", i < Math.floor(template.rating) ? "fill-yellow-400 text-yellow-400" : "fill-notion-gray-200 text-notion-gray-200")} />
                    ))}
                  </div>
                  <span className="font-bold text-notion-text-primary dark:text-notion-text-dark">{template.rating}</span>
                  <span className="text-notion-text-secondary">({template.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-notion-text-secondary">
                  <Download className="w-4 h-4" />
                  <span>{template.downloads} descargas</span>
                </div>
                <Badge variant="outline">{template.category}</Badge>
              </div>
            </FadeInSection>

            {/* Description */}
            <FadeInSection delay={0.15}>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">Descripción</h2>
                <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary text-lg leading-relaxed">{template.description}</p>
              </div>
            </FadeInSection>

            {/* Features */}
            <FadeInSection delay={0.2}>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6">¿Qué incluye?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {template.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-notion-gray-800 border border-notion-border dark:border-notion-border-dark">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-sm text-notion-text-primary dark:text-notion-text-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* For who */}
            <FadeInSection delay={0.25}>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">¿Para quién es este template?</h2>
                <div className="space-y-2">
                  {template.forWho.map((who) => (
                    <div key={who} className="flex items-center gap-3 text-notion-text-secondary dark:text-notion-text-dark-secondary">
                      <Zap className="w-4 h-4 text-notion-blue flex-shrink-0" />
                      {who}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Testimonials */}
            <FadeInSection delay={0.3}>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6">Lo que dicen nuestros clientes</h2>
                <div className="space-y-4">
                  {template.testimonials.map((t) => (
                    <div key={t.name} className="bg-white dark:bg-notion-gray-800 rounded-xl border border-notion-border dark:border-notion-border-dark p-6">
                      <div className="flex items-center gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary italic mb-4">"{t.text}"</p>
                      <div>
                        <span className="font-semibold text-notion-text-primary dark:text-notion-text-dark">{t.name}</span>
                        <span className="text-notion-text-secondary text-sm"> · {t.company} · {t.country}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* FAQ */}
            <FadeInSection delay={0.35}>
              <div>
                <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6">Preguntas frecuentes</h2>
                <div className="space-y-4">
                  {template.faq.map((item) => (
                    <div key={item.q} className="bg-white dark:bg-notion-gray-800 rounded-xl border border-notion-border dark:border-notion-border-dark p-5">
                      <h3 className="font-semibold text-notion-text-primary dark:text-notion-text-dark mb-2">{item.q}</h3>
                      <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Sidebar / Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6 mb-4"
              >
                {/* Price */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-notion-blue">${template.price} USD</span>
                  {template.originalPrice && (
                    <span className="text-lg text-notion-text-secondary line-through">${template.originalPrice}</span>
                  )}
                </div>
                {template.originalPrice && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                    Ahorra ${template.originalPrice - template.price} USD
                  </div>
                )}

                <Button className="w-full bg-notion-blue hover:bg-notion-blue/90 text-white py-6 text-base font-semibold mb-3">
                  Obtener template <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full mb-6">
                  Ver demo
                </Button>

                {/* What's included */}
                <div className="space-y-2 mb-6">
                  {template.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Guarantee */}
                <div className="flex items-center gap-3 p-3 bg-notion-gray-50 dark:bg-notion-gray-900 rounded-lg">
                  <Shield className="w-5 h-5 text-notion-blue flex-shrink-0" />
                  <p className="text-xs text-notion-text-secondary dark:text-notion-text-dark-secondary">
                    <strong className="text-notion-text-primary dark:text-notion-text-dark">Garantía 30 días.</strong> Si no estás satisfecho, te devolvemos el dinero.
                  </p>
                </div>
              </motion.div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white dark:bg-notion-gray-800 border border-notion-border dark:border-notion-border-dark text-xs text-notion-text-secondary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* More templates */}
        <FadeInSection>
          <div className="mt-20 pt-12 border-t border-notion-border dark:border-notion-border-dark text-center">
            <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">Explorar más templates</h2>
            <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary mb-6">Tenemos 18+ templates para cada área de tu negocio.</p>
            <Link href={`/${locale}/templates`}>
              <Button className="bg-notion-blue hover:bg-notion-blue/90">
                Ver todos los templates <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
