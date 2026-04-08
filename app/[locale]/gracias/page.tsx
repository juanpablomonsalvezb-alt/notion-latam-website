"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, BookOpen, MessageSquare, Users, ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const nextSteps = [
  {
    icon: Download,
    title: "Accede a tu compra",
    description: "Revisa tu email — en minutos recibirás el enlace de acceso a tu template o curso.",
    color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600",
    border: "border-emerald-100 dark:border-emerald-800",
  },
  {
    icon: BookOpen,
    title: "Tutoriales y guías",
    description: "Visita nuestra documentación para sacarle el máximo partido a Notion desde el primer día.",
    href: "/blog",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600",
    border: "border-blue-100 dark:border-blue-800",
  },
  {
    icon: Users,
    title: "Comunidad LATAM",
    description: "Únete a más de 500 empresas que ya usan nuestros productos y comparte tu experiencia.",
    href: "https://wa.me/15550000000",
    color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600",
    border: "border-violet-100 dark:border-violet-800",
  },
  {
    icon: MessageSquare,
    title: "¿Tienes dudas?",
    description: "Nuestro equipo responde en menos de 24 horas. Escríbenos por WhatsApp o email.",
    href: "/contacto",
    color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600",
    border: "border-orange-100 dark:border-orange-800",
  },
];

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto w-full text-center">
        {/* Animated check */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
          className="relative inline-flex items-center justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" strokeWidth={1.8} />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-emerald-300 dark:border-emerald-700"
            initial={{ scale: 0.8, opacity: 1 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-notion-blue/10 text-notion-blue text-sm font-medium mb-5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Compra confirmada
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-4xl md:text-5xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4"
        >
          ¡Gracias por tu compra!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary mb-12 max-w-lg mx-auto"
        >
          Tu pago fue procesado con éxito. Pronto recibirás un email con los detalles de acceso.
        </motion.p>

        {/* Next steps grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left"
        >
          {nextSteps.map((step) => {
            const Icon = step.icon;
            const content = (
              <div
                className={`p-5 rounded-2xl border ${step.border} bg-white dark:bg-notion-gray-800 hover:shadow-md transition-shadow h-full`}
              >
                <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-notion-text-primary dark:text-notion-text-dark mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed">
                  {step.description}
                </p>
                {step.href && (
                  <span className="inline-flex items-center gap-1 mt-3 text-notion-blue text-sm font-medium">
                    Ver más <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            );

            return step.href ? (
              <Link key={step.title} href={step.href}>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
                  {content}
                </motion.div>
              </Link>
            ) : (
              <div key={step.title}>{content}</div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link href="/">
            <Button size="lg" className="bg-notion-blue hover:bg-notion-blue/90 text-white shadow-lg gap-2">
              Volver al inicio
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/templates">
            <Button size="lg" variant="outline" className="border-2 gap-2">
              Ver más templates
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
