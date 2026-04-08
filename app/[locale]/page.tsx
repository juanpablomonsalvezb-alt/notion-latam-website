"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Bot, FileText, BarChart2, Settings } from "lucide-react";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FadeInSection from "@/components/animations/FadeInSection";
import { Button } from "@/components/ui/button";
import TemplatesShowcase from "@/components/sections/TemplatesShowcase";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import SocialProof from "@/components/sections/SocialProof";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { useLocale } from "next-intl";

const MONDAY_COLOR = "#FF3D57";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <AnimatedGradient />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <FadeInSection delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-notion-gray-800/80 backdrop-blur-sm border border-notion-border dark:border-notion-border-dark mb-8"
            >
              <Sparkles className="w-4 h-4 text-notion-blue" />
              <span className="text-sm font-medium text-notion-text-secondary dark:text-notion-text-dark-secondary">
                Tu stack completo de productividad para LATAM
              </span>
            </motion.div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="block text-notion-text-primary dark:text-notion-text-dark">Templates, cursos y</span>
              <span className="block mt-2">
                <span className="text-notion-blue">Notion</span>
                <span className="text-notion-text-secondary dark:text-notion-text-dark-secondary mx-3 font-light">+</span>
                <span style={{ color: MONDAY_COLOR }}>Monday</span>
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <p className="text-xl md:text-2xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
              El ecosistema de productividad más completo para empresas latinoamericanas. Templates listos, cursos en español, consultoría personalizada.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/templates`}>
                <Button size="lg" className="group text-lg px-8 py-6 bg-notion-blue hover:bg-notion-blue/90 shadow-lg hover:shadow-xl transition-all">
                  Templates Notion <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={`/${locale}/monday/templates`}>
                <Button size="lg" className="text-lg px-8 py-6 text-white shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: MONDAY_COLOR }}>
                  Templates Monday <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={`/${locale}/bundles`}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  Ver bundles — ahorra 30%
                </Button>
              </Link>
            </div>
          </FadeInSection>

          {/* Dual tool cards */}
          <FadeInSection delay={0.6}>
            <div className="mt-20">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {/* Notion card */}
                  <div className="bg-white/80 dark:bg-notion-gray-900/80 backdrop-blur-sm rounded-2xl border border-notion-border dark:border-notion-border-dark p-6 text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#191919] rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">N</span>
                      </div>
                      <div>
                        <p className="font-bold text-notion-text-primary dark:text-notion-text-dark">Notion</p>
                        <p className="text-xs text-notion-text-secondary">Documentación & bases de datos</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: FileText, label: "Templates", val: "18+" },
                        { icon: Users, label: "Consultoría", val: "3 planes" },
                        { icon: Zap, label: "Curso", val: "50 lecciones" },
                      ].map(({ icon: Icon, label, val }) => (
                        <div key={label} className="bg-notion-gray-50 dark:bg-notion-gray-800 rounded-xl p-3 text-center">
                          <Icon className="w-5 h-5 text-notion-blue mx-auto mb-1" />
                          <p className="text-xs font-semibold text-notion-text-primary dark:text-notion-text-dark">{val}</p>
                          <p className="text-xs text-notion-text-secondary">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Monday card */}
                  <div className="bg-white/80 dark:bg-notion-gray-900/80 backdrop-blur-sm rounded-2xl border-2 p-6 text-left" style={{ borderColor: MONDAY_COLOR }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: MONDAY_COLOR }}>
                        <span className="text-white font-bold text-lg">M</span>
                      </div>
                      <div>
                        <p className="font-bold text-notion-text-primary dark:text-notion-text-dark">Monday.com</p>
                        <p className="text-xs text-notion-text-secondary">Project management & workflows</p>
                      </div>
                      <span className="ml-auto px-2.5 py-1 text-white text-xs font-bold rounded-full" style={{ backgroundColor: MONDAY_COLOR }}>Nuevo</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: Settings, label: "Templates", val: "5" },
                        { icon: Users, label: "Consultoría", val: "3 planes" },
                        { icon: BarChart2, label: "Curso", val: "35 lecciones" },
                      ].map(({ icon: Icon, label, val }) => (
                        <div key={label} className="bg-notion-gray-50 dark:bg-notion-gray-800 rounded-xl p-3 text-center">
                          <Icon className="w-5 h-5 mx-auto mb-1" style={{ color: MONDAY_COLOR }} />
                          <p className="text-xs font-semibold text-notion-text-primary dark:text-notion-text-dark">{val}</p>
                          <p className="text-xs text-notion-text-secondary">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Templates Showcase */}
      <TemplatesShowcase />

      {/* Social Proof */}
      <SocialProof />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
