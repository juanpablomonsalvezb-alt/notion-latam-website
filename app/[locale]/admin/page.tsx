"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  Users,
  ShoppingCart,
  TrendingUp,
  FileText,
  BookOpen,
  MessageSquare,
  Briefcase,
  Star,
  ArrowRight,
  Download,
  Clock,
  DollarSign,
  Mail,
  Zap,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Ingresos del mes", value: "$4,280", change: "+18%", positive: true, icon: DollarSign, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" },
  { label: "Templates vendidos", value: "47", change: "+12%", positive: true, icon: Download, color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20" },
  { label: "Nuevos usuarios", value: "132", change: "+24%", positive: true, icon: Users, color: "text-violet-500 bg-violet-50 dark:bg-violet-900/20" },
  { label: "Sesiones de consultoría", value: "8", change: "-2%", positive: false, icon: Briefcase, color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20" },
];

const topTemplates = [
  { name: "Gestión de Proyectos", sales: 14, revenue: "$420", trend: "+8%" },
  { name: "CRM WhatsApp", sales: 11, revenue: "$385", trend: "+15%" },
  { name: "Sistema Financiero PyME", sales: 9, revenue: "$360", trend: "+5%" },
  { name: "Agenda Personal", sales: 7, revenue: "$154", trend: "+22%" },
  { name: "Plan de Marketing", sales: 6, revenue: "$228", trend: "-3%" },
];

const recentActivity = [
  { type: "sale", msg: "Nueva venta: CRM WhatsApp — $35", time: "hace 12 min", icon: ShoppingCart },
  { type: "contact", msg: "Nuevo mensaje de contacto recibido", time: "hace 1h", icon: MessageSquare },
  { type: "newsletter", msg: "3 nuevos suscriptores al newsletter", time: "hace 2h", icon: Mail },
  { type: "review", msg: "Nueva reseña 5★ en Sistema Financiero", time: "hace 4h", icon: Star },
  { type: "sale", msg: "Nueva venta: Gestión de Proyectos — $30", time: "hace 6h", icon: ShoppingCart },
];

const quickLinks = [
  { label: "Ver Templates", href: "/templates", icon: FileText },
  { label: "Ver Blog", href: "/blog", icon: BookOpen },
  { label: "Ver Curso", href: "/curso", icon: Zap },
  { label: "Ver Consultoría", href: "/consultoria", icon: Briefcase },
  { label: "Contacto", href: "/contacto", icon: MessageSquare },
  { label: "Casos de Éxito", href: "/casos-exito", icon: TrendingUp },
];

const operationalNotes = [
  "Templates nuevos: agregar en `app/[locale]/templates/page.tsx` en el array `templates[]`.",
  "Blog posts: agregar archivos `.md` en `/blog-content/` y la entrada en `app/[locale]/blog/page.tsx`.",
  "Emails: configurar `RESEND_API_KEY` en las variables de entorno de Vercel.",
  "WhatsApp Bot: deploy en Railway, configurar webhook en Twilio Console.",
  "Newsletter: los suscriptores se guardan en `/data/newsletter-subscribers.json`.",
  "Analytics: GA4 y FB Pixel configurados via `NEXT_PUBLIC_GA_ID` y `NEXT_PUBLIC_FB_PIXEL_ID`.",
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "templates" | "ops">("overview");

  return (
    <div className="min-h-screen bg-notion-gray-50 dark:bg-notion-bg-dark pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark">
              Admin Dashboard
            </h1>
            <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary mt-1">
              Notion LATAM — Panel interno
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Sitio en línea</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-white dark:bg-notion-gray-800 p-1 rounded-xl border border-notion-border dark:border-notion-border-dark w-fit">
          {(["overview", "templates", "ops"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-notion-blue text-white shadow-sm"
                  : "text-notion-text-secondary hover:text-notion-text-primary dark:hover:text-notion-text-dark"
              }`}
            >
              {tab === "overview" ? "Resumen" : tab === "templates" ? "Templates" : "Operaciones"}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${stat.positive ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600" : "bg-red-50 dark:bg-red-900/30 text-red-500"}`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark">{stat.value}</p>
                    <p className="text-xs text-notion-text-secondary dark:text-notion-text-dark-secondary mt-0.5">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent activity */}
              <div className="lg:col-span-2 bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6">
                <h2 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-5 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-notion-blue" />
                  Actividad reciente
                </h2>
                <div className="space-y-3">
                  {recentActivity.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-notion-gray-50 dark:bg-notion-gray-700/50">
                        <div className="w-8 h-8 rounded-lg bg-notion-blue/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-notion-blue" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark truncate">{item.msg}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-notion-text-secondary flex-shrink-0">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6">
                <h2 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-5 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-notion-blue" />
                  Accesos rápidos
                </h2>
                <div className="space-y-2">
                  {quickLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link key={link.label} href={link.href}>
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-notion-gray-50 dark:hover:bg-notion-gray-700 transition-colors group cursor-pointer">
                          <Icon className="w-4 h-4 text-notion-text-secondary group-hover:text-notion-blue transition-colors" />
                          <span className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark group-hover:text-notion-blue transition-colors">{link.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-auto text-notion-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "templates" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <div className="bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6">
              <h2 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-6 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-notion-blue" />
                Templates más vendidos — Abril 2026
              </h2>
              <div className="space-y-3">
                {topTemplates.map((t, i) => (
                  <div key={t.name} className="flex items-center gap-4 p-4 rounded-xl border border-notion-border dark:border-notion-border-dark">
                    <span className="w-7 h-7 rounded-full bg-notion-blue/10 text-notion-blue text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-notion-text-primary dark:text-notion-text-dark">{t.name}</p>
                      <p className="text-xs text-notion-text-secondary">{t.sales} ventas este mes</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-notion-text-primary dark:text-notion-text-dark">{t.revenue}</p>
                      <p className={`text-xs font-semibold ${t.trend.startsWith("+") ? "text-emerald-500" : "text-red-500"}`}>{t.trend}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-notion-border dark:border-notion-border-dark">
                <Link href="/templates">
                  <Button variant="outline" className="w-full gap-2">
                    Ver catálogo completo <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "ops" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <div className="bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6">
              <h2 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-6 flex items-center gap-2">
                <Zap className="w-4 h-4 text-notion-blue" />
                Notas operativas
              </h2>
              <div className="space-y-3">
                {operationalNotes.map((note, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-notion-gray-50 dark:bg-notion-gray-700/50 border border-notion-border dark:border-notion-border-dark">
                    <span className="w-5 h-5 rounded bg-notion-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed font-mono">
                      {note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <h3 className="font-semibold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Variables de entorno requeridas
                </h3>
                <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-300 font-mono">
                  <li>RESEND_API_KEY — Resend.com API key para emails</li>
                  <li>NEXT_PUBLIC_GA_ID — Google Analytics 4 ID</li>
                  <li>NEXT_PUBLIC_FB_PIXEL_ID — Meta Pixel ID</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
