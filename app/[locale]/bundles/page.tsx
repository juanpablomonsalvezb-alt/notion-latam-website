"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Zap, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import Link from "next/link";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const MONDAY_COLOR = "#FF3D57";
const NOTION_COLOR = "#2383E2";

const bundles = [
  {
    id: "starter",
    name: "Bundle Starter",
    tagline: "Para freelancers y equipos pequeños",
    price: 120,
    originalPrice: 150,
    savings: 20,
    color: "from-blue-400 to-indigo-600",
    border: "border-notion-border dark:border-notion-border-dark",
    badge: null,
    notion: ["Sistema Financiero PyME", "CRM WhatsApp"],
    monday: ["Pipeline Ventas B2B", "Marketing Campaigns"],
    extras: [],
    cta: "Empezar con Starter",
  },
  {
    id: "professional",
    name: "Bundle Professional",
    tagline: "Para startups y equipos medianos",
    price: 250,
    originalPrice: 333,
    savings: 25,
    color: `from-[${MONDAY_COLOR}] to-rose-700`,
    border: `border-[${MONDAY_COLOR}]`,
    badge: "Más popular",
    notion: ["Sistema Financiero PyME", "CRM WhatsApp", "Control de Inventario", "Gestión de Proyectos", "Planificador de Contenido"],
    monday: ["Pipeline Ventas B2B", "Gestión Proyectos Cliente", "Marketing Campaigns", "Product Roadmap", "Operaciones Empresariales"],
    extras: ["Acceso a ambos cursos (Notion + Monday)", "Soporte premium 60 días"],
    cta: "Elegir Professional",
  },
  {
    id: "complete",
    name: "Bundle Complete",
    tagline: "Para empresas que quieren el stack completo",
    price: 450,
    originalPrice: 650,
    savings: 30,
    color: "from-emerald-400 to-teal-600",
    border: "border-notion-border dark:border-notion-border-dark",
    badge: "Mejor valor",
    notion: ["Todos los templates Notion (10)"],
    monday: ["Todos los templates Monday (5)"],
    extras: ["Curso Notion + Curso Monday", "1 hora de consultoría (Notion o Monday)", "Soporte VIP 90 días", "Acceso a nuevos templates 6 meses"],
    cta: "Quiero el stack completo",
  },
];

const comparison = [
  { feature: "Templates Notion", starter: "2", professional: "5", complete: "10 (todos)" },
  { feature: "Templates Monday", starter: "2", professional: "5", complete: "5 (todos)" },
  { feature: "Cursos incluidos", starter: "—", professional: "Notion + Monday", complete: "Notion + Monday" },
  { feature: "Consultoría", starter: "—", professional: "—", complete: "1 hora" },
  { feature: "Soporte", starter: "Email", professional: "Email prioritario 60d", complete: "VIP 90 días" },
  { feature: "Nuevos templates", starter: "—", professional: "—", complete: "6 meses gratis" },
  { feature: "Garantía", starter: "30 días", professional: "30 días", complete: "30 días" },
];

export default function Bundles() {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <FadeInSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-notion-blue/10 to-[#FF3D57]/10 border border-notion-border dark:border-notion-border-dark mb-6">
            <Sparkles className="w-4 h-4 text-notion-blue" />
            <span className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark">Notion + Monday juntos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6 tracking-tight">
            El stack completo de<br />
            <span className="text-notion-blue">Notion</span>
            <span className="text-notion-text-secondary dark:text-notion-text-dark-secondary"> + </span>
            <span style={{ color: MONDAY_COLOR }}>Monday</span>
          </h1>
          <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto">
            Ahorra hasta 30% comprando templates de ambas plataformas juntos. La combinación perfecta para empresas que necesitan documentación y gestión de proyectos.
          </p>
        </FadeInSection>
      </section>

      {/* Bundles grid */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bundles.map((bundle, i) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white dark:bg-notion-gray-800 rounded-2xl border-2 ${bundle.id === "professional" ? "" : "border-notion-border dark:border-notion-border-dark"} flex flex-col overflow-hidden`}
              style={bundle.id === "professional" ? { borderColor: MONDAY_COLOR } : {}}
            >
              {bundle.badge && (
                <div className="absolute top-0 left-0 right-0 py-2 text-center text-white text-xs font-bold" style={{ backgroundColor: bundle.id === "professional" ? MONDAY_COLOR : "#10B981" }}>
                  {bundle.badge}
                </div>
              )}

              {/* Header */}
              <div className={`h-28 bg-gradient-to-br ${bundle.color} ${bundle.badge ? "pt-8" : ""} p-6 flex flex-col justify-end`}>
                <h3 className="font-bold text-xl text-white">{bundle.name}</h3>
                <p className="text-white/80 text-sm">{bundle.tagline}</p>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark">${bundle.price}</span>
                  <span className="text-notion-text-secondary text-sm">USD</span>
                  <span className="text-notion-text-secondary line-through text-sm">${bundle.originalPrice}</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold mb-6 w-fit">
                  Ahorra {bundle.savings}%
                </div>

                {/* Notion section */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 bg-[#191919] rounded flex items-center justify-center text-white font-bold" style={{ fontSize: "10px" }}>N</span>
                    <span className="text-xs font-bold text-notion-text-secondary uppercase tracking-wider">Notion</span>
                  </div>
                  <div className="space-y-1">
                    {bundle.notion.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-notion-text-primary dark:text-notion-text-dark">
                        <Check className="w-3.5 h-3.5 text-notion-blue flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Monday section */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded flex items-center justify-center text-white font-bold" style={{ backgroundColor: MONDAY_COLOR, fontSize: "10px" }}>M</span>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: MONDAY_COLOR }}>Monday</span>
                  </div>
                  <div className="space-y-1">
                    {bundle.monday.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-notion-text-primary dark:text-notion-text-dark">
                        <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: MONDAY_COLOR }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extras */}
                {bundle.extras.length > 0 && (
                  <div className="mb-4 p-3 bg-notion-gray-50 dark:bg-notion-gray-900 rounded-lg">
                    <p className="text-xs font-bold text-notion-text-secondary uppercase tracking-wider mb-2">Extras incluidos</p>
                    <div className="space-y-1">
                      {bundle.extras.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-notion-text-primary dark:text-notion-text-dark">
                          <Zap className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto">
                  <Button
                    className={cn("w-full font-semibold py-5", bundle.id === "professional" ? "text-white" : "")}
                    style={bundle.id === "professional" ? { backgroundColor: MONDAY_COLOR } : bundle.id === "complete" ? { backgroundColor: "#10B981" } : {}}
                    variant={bundle.id === "starter" ? "outline" : "default"}
                  >
                    {bundle.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <p className="text-xs text-center text-notion-text-secondary mt-2">Garantía 30 días · 1 pago único</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark text-center mb-8">Comparar planes</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark overflow-hidden">
              <thead>
                <tr className="border-b border-notion-border dark:border-notion-border-dark bg-notion-gray-50 dark:bg-notion-gray-900">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-notion-text-secondary">Incluye</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-notion-text-primary dark:text-notion-text-dark">Starter<br /><span className="text-notion-blue font-bold">$120</span></th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-white rounded-none" style={{ backgroundColor: MONDAY_COLOR }}>Professional<br /><span className="font-bold">$250</span></th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-notion-text-primary dark:text-notion-text-dark">Complete<br /><span className="text-emerald-600 font-bold">$450</span></th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={cn(i < comparison.length - 1 ? "border-b border-notion-border dark:border-notion-border-dark" : "")}>
                    <td className="px-6 py-3.5 text-sm text-notion-text-primary dark:text-notion-text-dark">{row.feature}</td>
                    <td className="px-4 py-3.5 text-center text-sm text-notion-text-secondary">{row.starter}</td>
                    <td className="px-4 py-3.5 text-center text-sm font-medium text-notion-text-primary dark:text-notion-text-dark">{row.professional}</td>
                    <td className="px-4 py-3.5 text-center text-sm text-notion-text-secondary">{row.complete}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </FadeInSection>

      {/* Why Notion + Monday */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark text-center mb-4">¿Por qué Notion + Monday juntos?</h2>
          <p className="text-notion-text-secondary text-center mb-8 max-w-2xl mx-auto">Notion y Monday se complementan perfectamente. Las empresas que usan ambas herramientas tienen el stack más completo de productividad.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#191919] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <div>
                  <p className="font-bold text-notion-text-primary dark:text-notion-text-dark">Notion es mejor para</p>
                </div>
              </div>
              {["Documentación y wikis de empresa", "Bases de conocimiento", "CRM simple y flexible", "Notas y documentos", "Templates de procesos"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-notion-text-secondary mb-2">
                  <Check className="w-4 h-4 text-notion-blue flex-shrink-0" />{item}
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-notion-gray-800 rounded-2xl border-2 rounded-2xl p-6" style={{ borderColor: MONDAY_COLOR }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: MONDAY_COLOR }}>
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <p className="font-bold text-notion-text-primary dark:text-notion-text-dark">Monday es mejor para</p>
                </div>
              </div>
              {["Gestión de proyectos complejos", "Workflows con automatizaciones", "Gestión de equipos grandes", "Dashboards visuales de KPIs", "Integraciones con 200+ apps"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-notion-text-secondary mb-2">
                  <Check className="w-4 h-4 flex-shrink-0" style={{ color: MONDAY_COLOR }} />{item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-notion-blue/10 to-[#FF3D57]/10 rounded-3xl p-10 border border-notion-border dark:border-notion-border-dark">
            <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">¿No sabes cuál elegir?</h2>
            <p className="text-notion-text-secondary mb-6">Escríbenos y te ayudamos a elegir el bundle correcto para el tamaño y tipo de tu empresa.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`/${locale}/contacto`}>
                <Button className="bg-notion-blue hover:bg-notion-blue/90">
                  Hablar con un experto <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href={`/${locale}/recomendador`}>
                <Button variant="outline">Usar el recomendador</Button>
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
