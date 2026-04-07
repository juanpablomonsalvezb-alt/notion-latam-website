"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Search, BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  { label: "Explorar Templates", href: "/templates", icon: Search },
  { label: "Ver el Curso", href: "/curso", icon: BookOpen },
  { label: "Consultoría", href: "/consultoria", icon: MessageSquare },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.span
              className="text-[180px] font-bold text-notion-gray-100 dark:text-notion-gray-800 leading-none select-none"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              404
            </motion.span>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
            >
              <div className="w-20 h-20 bg-notion-blue rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-3xl">N</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">
            Página no encontrada
          </h1>
          <p className="text-xl text-notion-text-secondary mb-10 max-w-md mx-auto">
            Parece que esta página se mudó a Notion... o nunca existió. Vamos a llevarte a algún lugar útil.
          </p>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-3 mb-8"
        >
          {suggestions.map((s, i) => (
            <motion.div key={s.label} whileHover={{ scale: 1.05, y: -2 }}>
              <Link
                href={s.href}
                className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-notion-gray-800 rounded-xl notion-shadow hover:notion-shadow-lg transition-all group"
              >
                <div className="w-10 h-10 bg-notion-blue/10 rounded-lg flex items-center justify-center group-hover:bg-notion-blue group-hover:text-white transition-all">
                  <s.icon className="w-5 h-5 text-notion-blue group-hover:text-white" />
                </div>
                <span className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark text-center">
                  {s.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Home button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <Button
              size="lg"
              className="bg-notion-blue hover:bg-notion-blue/90 text-white shadow-lg gap-2"
            >
              <Home className="w-5 h-5" />
              Volver al inicio
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
