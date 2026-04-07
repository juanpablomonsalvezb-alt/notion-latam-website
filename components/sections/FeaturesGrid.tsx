"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Sparkles, Users, TrendingUp } from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";

const featureIcons = [Zap, Users, Globe, Shield, Sparkles, TrendingUp];
const featureGradients = [
  "from-yellow-400 to-orange-500",
  "from-blue-400 to-cyan-500",
  "from-purple-400 to-pink-500",
  "from-green-400 to-emerald-500",
  "from-indigo-400 to-purple-500",
  "from-rose-400 to-red-500",
];
const featureKeys = ["templates", "consulting", "course", "whatsapp", "support", "updates"] as const;

export default function FeaturesGrid() {
  const t = useTranslations('features');

  return (
    <section className="py-24 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
              {t('title.line1')}
              <span className="block mt-2 gradient-text">
                {t('title.line2')}
              </span>
            </h2>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureKeys.map((key, index) => {
            const Icon = featureIcons[index];
            const gradient = featureGradients[index];
            return (
              <FadeInSection key={key} delay={0.1 * index}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-white dark:bg-notion-gray-800 rounded-2xl p-8 notion-shadow hover:notion-shadow-lg transition-all-smooth cursor-pointer overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-notion-text-primary dark:text-notion-text-dark mb-2 group-hover:text-notion-blue transition-colors">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed">
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                </motion.div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
