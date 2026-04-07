"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale();

  const navItems = [
    {
      name: t('templates'),
      href: `/${locale}/templates`,
      description: "50+ plantillas profesionales",
    },
    {
      name: t('course'),
      href: `/${locale}/curso`,
      description: "Aprende Notion desde cero",
    },
    {
      name: t('consulting'),
      href: `/${locale}/consultoria`,
      description: "Tu sistema operativo en Notion",
    },
    {
      name: t('bot'),
      href: `/${locale}/saas`,
      description: "Automatiza con IA",
    },
    {
      name: "Bot Waitlist",
      href: `/${locale}/bot`,
      description: "Early bird — 40% OFF",
      badge: "Nuevo",
    },
    {
      name: t('successCases'),
      href: `/${locale}/casos-exito`,
      description: "500+ empresas satisfechas",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-notion-gray-900/90 backdrop-blur-xl shadow-sm border-b border-notion-border/50 dark:border-notion-border-dark/50"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-notion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md">
              <span className="text-white font-bold text-base leading-none">N</span>
            </div>
            <span className="font-bold text-xl text-notion-text-primary dark:text-notion-text-dark tracking-tight">
              Notion <span className="text-notion-blue">LATAM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                    isActive
                      ? "text-notion-blue bg-notion-blue/8"
                      : "text-notion-text-secondary dark:text-notion-text-dark-secondary hover:text-notion-text-primary dark:hover:text-notion-text-dark hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-notion-blue/8 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons + Language Switcher */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              className="text-notion-text-secondary hover:text-notion-text-primary"
            >
              {t('login')}
            </Button>
            <Button
              size="sm"
              className="bg-notion-blue hover:bg-notion-blue/90 text-white shadow-md hover:shadow-lg transition-all duration-200 font-medium"
            >
              {t('getStarted')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-1 border-t border-notion-border/50 dark:border-notion-border-dark/50 mt-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex flex-col px-4 py-3 rounded-xl transition-all",
                        pathname === item.href
                          ? "bg-notion-blue/8 text-notion-blue"
                          : "hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800 text-notion-text-primary dark:text-notion-text-dark"
                      )}
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-notion-text-secondary mt-0.5">
                        {item.description}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <div className="flex items-center justify-between pt-4 px-1">
                  <LanguageSwitcher />
                </div>
                <div className="flex flex-col gap-2 pt-2 px-1">
                  <Button variant="outline" className="w-full">
                    {t('login')}
                  </Button>
                  <Button className="w-full bg-notion-blue hover:bg-notion-blue/90">
                    {t('getStarted')}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
