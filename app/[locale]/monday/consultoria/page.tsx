"use client";
import { motion } from "framer-motion";
import { Check, Clock, Users, ArrowRight, Star, MessageCircle, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import Link from "next/link";
import { useLocale } from "next-intl";

const MONDAY_COLOR = "#FF3D57";

const packages = [
  {
    name: "Monday Express",
    price: 280,
    duration: "1 semana",
    desc: "Análisis de tu operación y configuración de 1 board principal con automatizaciones clave.",
    features: ["Discovery call 30 min", "1 board configurado", "5 automatizaciones", "Dashboard básico", "Video walkthrough", "Soporte 2 semanas"],
    popular: false,
  },
  {
    name: "Implementación Completa",
    price: 720,
    duration: "2-3 semanas",
    desc: "Setup completo de Monday para tu empresa. Todos los boards, automatizaciones, dashboards y capacitación del equipo.",
    features: ["Discovery + auditoría", "Hasta 8 boards", "20+ automatizaciones", "Dashboard ejecutivo", "Capacitación equipo (2h)", "Soporte 1 mes", "Documentación personalizada"],
    popular: true,
  },
  {
    name: "Sistema Enterprise",
    price: 2400,
    duration: "4-6 semanas",
    desc: "Transformación digital completa con Monday como hub operativo. Para empresas medianas con múltiples departamentos.",
    features: ["Todo lo del plan anterior", "Configuración multi-departamental", "Integraciones avanzadas (API)", "Training para líderes", "Soporte prioritario 3 meses", "Revisión mensual 60 días"],
    popular: false,
  },
];

export default function MondayConsultoria() {
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ backgroundColor: `${MONDAY_COLOR}15`, borderColor: `${MONDAY_COLOR}30` }}>
              <span className="w-4 h-4 rounded text-white font-bold text-xs flex items-center justify-center" style={{ backgroundColor: MONDAY_COLOR }}>M</span>
              <span className="text-sm font-medium" style={{ color: MONDAY_COLOR }}>Consultoría Monday.com</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4 tracking-tight">
              Tu empresa lista en Monday<br />
              <span style={{ color: MONDAY_COLOR }}>sin que toques nada</span>
            </h1>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto">
              Nosotros configuramos Monday.com para tu empresa: boards, automatizaciones, dashboards y capacitación. Tú solo empiezas a usarlo.
            </p>
          </div>
        </FadeInSection>

        {/* Process */}
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark text-center mb-8">¿Cómo funciona?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Discovery", desc: "Llamada de 30 min para entender tu operación actual" },
                { step: "2", title: "Propuesta", desc: "Enviamos estructura personalizada y cronograma en 24h" },
                { step: "3", title: "Implementación", desc: "Configuramos todo mientras tú sigues trabajando" },
                { step: "4", title: "Entrega + Training", desc: "Demo del sistema y capacitación de tu equipo" },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center p-5 bg-white dark:bg-notion-gray-800 rounded-xl border border-notion-border dark:border-notion-border-dark">
                  <div className="w-10 h-10 rounded-full text-white font-bold text-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: MONDAY_COLOR }}>{step}</div>
                  <p className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-1">{title}</p>
                  <p className="text-sm text-notion-text-secondary leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Packages */}
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark text-center mb-8">Paquetes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  whileHover={{ y: -4 }}
                  className={`relative bg-white dark:bg-notion-gray-800 rounded-2xl border-2 p-6 flex flex-col ${pkg.popular ? "" : "border-notion-border dark:border-notion-border-dark"}`}
                  style={pkg.popular ? { borderColor: MONDAY_COLOR } : {}}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 text-white text-xs font-bold rounded-full" style={{ backgroundColor: MONDAY_COLOR }}>Más popular</span>
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-notion-text-primary dark:text-notion-text-dark mb-1">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold" style={{ color: MONDAY_COLOR }}>${pkg.price}</span>
                      <span className="text-notion-text-secondary text-sm">USD</span>
                    </div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <Clock className="w-3.5 h-3.5 text-notion-text-secondary" />
                      <span className="text-xs text-notion-text-secondary">{pkg.duration}</span>
                    </div>
                    <p className="text-sm text-notion-text-secondary leading-relaxed">{pkg.desc}</p>
                  </div>
                  <div className="space-y-2 flex-1 mb-6">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-notion-text-primary dark:text-notion-text-dark">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: MONDAY_COLOR }} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Button className={pkg.popular ? "w-full text-white font-semibold" : "w-full font-semibold"} style={pkg.popular ? { backgroundColor: MONDAY_COLOR } : {}} variant={pkg.popular ? "default" : "outline"}>
                    Solicitar propuesta
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Guarantee + CTA */}
        <FadeInSection>
          <div className="rounded-3xl p-10 text-white text-center" style={{ background: `linear-gradient(135deg, ${MONDAY_COLOR}, #c42042)` }}>
            <Shield className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-3">Garantía de resultados</h2>
            <p className="text-white/80 max-w-lg mx-auto mb-6">Si a los 30 días no estás usando Monday activamente en tu empresa, te devolvemos el 100% del dinero. Sin preguntas.</p>
            <Link href={`/${locale}/contacto`}>
              <Button size="lg" className="bg-white font-semibold" style={{ color: MONDAY_COLOR }}>
                Agendar llamada gratuita <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
