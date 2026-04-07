"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-notion-blue via-purple-500 to-pink-500 opacity-10" />
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(35, 131, 226, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeInSection>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-notion-gray-800 shadow-lg mb-8"
          >
            <Sparkles className="w-4 h-4 text-notion-blue" />
            <span className="text-sm font-medium">
              {t('badge')}
            </span>
          </motion.div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6">
            {t('title.line1')}
            <span className="block mt-2 gradient-text">
              {t('title.line2')}
            </span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary mb-12 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group text-lg px-8 py-6 bg-notion-blue hover:bg-notion-blue/90 shadow-xl hover:shadow-2xl transition-all-smooth"
            >
              {t('getStarted')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-white dark:bg-notion-gray-800 hover:border-notion-blue transition-all-smooth"
            >
              {t('scheduleDemo')}
            </Button>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <p className="mt-8 text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary">
            {t('footer')}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
