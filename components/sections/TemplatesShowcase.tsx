"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import FadeInSection from "@/components/animations/FadeInSection";
import { Button } from "@/components/ui/button";

const templates = [
  {
    name: "Sistema Financiero PyME",
    description: "Control completo de ingresos, gastos y flujo de caja",
    price: "$40 USD",
    category: "Finanzas",
    color: "from-green-400 to-emerald-600",
    downloads: "500+",
  },
  {
    name: "CRM WhatsApp",
    description: "Gestión de clientes integrada con WhatsApp",
    price: "$35 USD",
    category: "Ventas",
    color: "from-blue-400 to-cyan-600",
    downloads: "750+",
  },
  {
    name: "Control de Inventario",
    description: "Tracking de stock, alertas y reportes automáticos",
    price: "$45 USD",
    category: "Operaciones",
    color: "from-purple-400 to-pink-600",
    downloads: "320+",
  },
  {
    name: "Gestión de Proyectos",
    description: "Kanban, timeline y recursos en un solo lugar",
    price: "$30 USD",
    category: "Productividad",
    color: "from-orange-400 to-red-600",
    downloads: "890+",
  },
];

export default function TemplatesShowcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-notion-blue/10 text-notion-blue text-sm font-semibold mb-4">
              Templates Premium
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
              Listos para usar en minutos
            </h2>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto">
              Templates profesionales diseñados para las necesidades reales de empresas latinoamericanas
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {templates.map((template, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white dark:bg-notion-gray-800 rounded-2xl overflow-hidden notion-shadow hover:notion-shadow-lg transition-all-smooth cursor-pointer"
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${template.color} relative`}>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold">
                    {template.category}
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm">
                    <Download className="w-3.5 h-3.5" />
                    <span className="text-sm font-semibold">{template.downloads}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-2 group-hover:text-notion-blue transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary mb-4">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-notion-blue">
                      {template.price}
                    </span>
                    <Button 
                      size="sm" 
                      className="group/btn bg-notion-blue hover:bg-notion-blue/90"
                    >
                      Ver Detalles
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="text-center">
            <Link href="/templates">
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 hover:border-notion-blue hover:text-notion-blue"
              >
                Ver Todos los Templates
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
