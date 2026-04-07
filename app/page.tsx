"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Bot } from "lucide-react";
import Link from "next/link";
import AnimatedGradient from "@/components/animations/AnimatedGradient";
import FadeInSection from "@/components/animations/FadeInSection";
import { Button } from "@/components/ui/button";
import TemplatesShowcase from "@/components/sections/TemplatesShowcase";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import SocialProof from "@/components/sections/SocialProof";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - ADN Notion */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Animated Background Gradient */}
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
                El ecosistema completo de Notion para LATAM
              </span>
            </motion.div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="block text-notion-text-primary dark:text-notion-text-dark">
                Potencia tu negocio
              </span>
              <span className="block mt-2">
                <span className="gradient-text">con Notion</span>
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <p className="text-xl md:text-2xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
              Templates profesionales, cursos completos y servicios premium diseñados específicamente para empresas latinoamericanas
            </p>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="group text-lg px-8 py-6 bg-notion-blue hover:bg-notion-blue/90 shadow-lg hover:shadow-xl transition-all-smooth"
              >
                Explorar Templates
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800 transition-all-smooth"
              >
                Ver Demo
              </Button>
            </div>
          </FadeInSection>

          {/* Floating Cards Preview */}
          <FadeInSection delay={0.6}>
            <div className="mt-20 relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                {/* Main Preview Card */}
                <div className="glass notion-shadow-lg rounded-2xl p-8 max-w-4xl mx-auto">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Mini Cards */}
                    {[
                      { icon: Zap, title: "Templates", count: "50+" },
                      { icon: Users, title: "Consultoría", count: "1-1" },
                      { icon: Bot, title: "WhatsApp Bot", count: "Beta" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="bg-white dark:bg-notion-gray-900 rounded-xl p-6 notion-shadow hover-lift cursor-pointer"
                      >
                        <item.icon className="w-8 h-8 text-notion-blue mb-3" />
                        <h3 className="font-semibold text-notion-text-primary dark:text-notion-text-dark mb-1">
                          {item.title}
                        </h3>
                        <p className="text-2xl font-bold text-notion-blue">
                          {item.count}
                        </p>
                      </motion.div>
                    ))}
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
