"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Sparkles, Users, TrendingUp } from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";

const features = [
  {
    icon: Zap,
    title: "Templates Profesionales",
    description: "Sistemas pre-armados y optimizados para PyMEs latinoamericanas. Listos para usar en minutos.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Users,
    title: "Consultoría Personalizada",
    description: "Armamos tu sistema operativo completo en Notion. 100% remoto, 100% a tu medida.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Curso Completo",
    description: "Aprende a dominar Notion desde cero hasta nivel experto. Con casos reales de LATAM.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Shield,
    title: "WhatsApp Integration",
    description: "Conecta Notion con WhatsApp. Automatiza notificaciones y gestión de tareas.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Soporte en Español",
    description: "Atención personalizada en tu idioma. Entendemos las necesidades de LATAM.",
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Actualizaciones Continuas",
    description: "Templates y recursos nuevos cada mes. Mantente siempre actualizado.",
    gradient: "from-rose-400 to-red-500",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
              Todo lo que necesitas para
              <span className="block mt-2 gradient-text">
                potenciar tu negocio
              </span>
            </h2>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto">
              Herramientas, servicios y recursos diseñados específicamente para empresas latinoamericanas
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-white dark:bg-notion-gray-800 rounded-2xl p-8 notion-shadow hover:notion-shadow-lg transition-all-smooth cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-notion-text-primary dark:text-notion-text-dark mb-2 group-hover:text-notion-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
