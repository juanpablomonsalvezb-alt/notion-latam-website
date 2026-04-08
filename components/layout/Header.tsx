"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

const MONDAY_COLOR = "#FF3D57";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const notionItems = [
    { name: "Templates Notion", href: `/${locale}/templates`, desc: "18+ plantillas para empresas" },
    { name: "Curso Notion", href: `/${locale}/curso`, desc: "De cero a experto" },
    { name: "Consultoría Notion", href: `/${locale}/consultoria`, desc: "Implementación personalizada" },
    { name: "Casos de Éxito", href: `/${locale}/casos-exito`, desc: "500+ empresas atendidas" },
  ];

  const mondayItems = [
    { name: "Templates Monday", href: `/${locale}/monday/templates`, desc: "5 templates profesionales", hot: true },
    { name: "Curso Monday", href: `/${locale}/monday/curso`, desc: "Domina Monday.com" },
    { name: "Consultoría Monday", href: `/${locale}/monday/consultoria`, desc: "Setup profesional" },
  ];

  const simpleItems = [
    { name: "Bundles", href: `/${locale}/bundles`, badge: "Ahorra 30%" },
    { name: "Blog", href: `/${locale}/blog` },
    { name: "Bot Waitlist", href: `/${locale}/bot`, badge: "Nuevo" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); setActiveDropdown(null); }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-notion-gray-900/90 backdrop-blur-xl shadow-sm border-b border-notion-border/50 dark:border-notion-border-dark/50"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3.5">
        <div className="flex items-center justify-between" ref={dropdownRef}>
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 bg-notion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md">
              <span className="text-white font-bold text-base leading-none">W</span>
            </div>
            <span className="font-bold text-xl text-notion-text-primary dark:text-notion-text-dark tracking-tight">
              Workspace<span className="text-notion-blue">LATAM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">

            {/* Notion Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "notion" ? null : "notion")}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  activeDropdown === "notion" || pathname.includes("/templates") || pathname.includes("/curso") || pathname.includes("/consultoria")
                    ? "text-notion-blue bg-notion-blue/8"
                    : "text-notion-text-secondary dark:text-notion-text-dark-secondary hover:text-notion-text-primary hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800"
                )}
              >
                <span className="w-4 h-4 bg-[#191919] rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold" style={{ fontSize: "9px" }}>N</span>
                </span>
                Notion
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", activeDropdown === "notion" && "rotate-180")} />
              </button>

              <AnimatePresence>
                {activeDropdown === "notion" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark shadow-xl p-2"
                  >
                    {notionItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-notion-gray-50 dark:hover:bg-notion-gray-800 transition-colors group"
                      >
                        <span className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark group-hover:text-notion-blue transition-colors">{item.name}</span>
                        <span className="text-xs text-notion-text-secondary mt-0.5">{item.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Monday Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "monday" ? null : "monday")}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  activeDropdown === "monday" || pathname.includes("/monday")
                    ? "bg-[#FF3D57]/10 text-[#FF3D57]"
                    : "text-notion-text-secondary dark:text-notion-text-dark-secondary hover:text-notion-text-primary hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800"
                )}
              >
                <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: MONDAY_COLOR }}>
                  <span className="text-white font-bold" style={{ fontSize: "9px" }}>M</span>
                </span>
                Monday
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", activeDropdown === "monday" && "rotate-180")} />
              </button>

              <AnimatePresence>
                {activeDropdown === "monday" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark shadow-xl p-2"
                  >
                    {mondayItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group"
                      >
                        <div>
                          <span className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark group-hover:text-[#FF3D57] transition-colors block">{item.name}</span>
                          <span className="text-xs text-notion-text-secondary">{item.desc}</span>
                        </div>
                        {item.hot && (
                          <span className="px-2 py-0.5 bg-[#FF3D57] text-white text-xs font-bold rounded-full flex-shrink-0">Nuevo</span>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simple items */}
            {simpleItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  pathname === item.href
                    ? "text-notion-blue bg-notion-blue/8"
                    : "text-notion-text-secondary dark:text-notion-text-dark-secondary hover:text-notion-text-primary dark:hover:text-notion-text-dark hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800"
                )}
              >
                {item.name}
                {item.badge && (
                  <span className="px-1.5 py-0.5 bg-notion-blue text-white text-[10px] font-bold rounded-full">{item.badge}</span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons + Language Switcher */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" className="text-notion-text-secondary hover:text-notion-text-primary text-sm">
              {t("login")}
            </Button>
            <Button size="sm" className="bg-notion-blue hover:bg-notion-blue/90 text-white shadow-md hover:shadow-lg transition-all font-medium text-sm">
              {t("getStarted")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
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
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 border-t border-notion-border/50 dark:border-notion-border-dark/50 mt-4 space-y-1">
                {/* Notion section */}
                <p className="px-4 pt-2 pb-1 text-xs font-bold text-notion-text-secondary uppercase tracking-widest">Notion</p>
                {notionItems.map((item, i) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link href={item.href} className="flex flex-col px-4 py-2.5 rounded-xl hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800 text-notion-text-primary dark:text-notion-text-dark transition-colors">
                      <span className="font-medium text-sm">{item.name}</span>
                      <span className="text-xs text-notion-text-secondary">{item.desc}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Monday section */}
                <p className="px-4 pt-4 pb-1 text-xs font-bold uppercase tracking-widest" style={{ color: MONDAY_COLOR }}>Monday.com</p>
                {mondayItems.map((item, i) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (notionItems.length + i) * 0.04 }}>
                    <Link href={item.href} className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 text-notion-text-primary dark:text-notion-text-dark transition-colors">
                      <div>
                        <span className="font-medium text-sm block">{item.name}</span>
                        <span className="text-xs text-notion-text-secondary">{item.desc}</span>
                      </div>
                      {item.hot && <span className="px-2 py-0.5 bg-[#FF3D57] text-white text-xs font-bold rounded-full">Nuevo</span>}
                    </Link>
                  </motion.div>
                ))}

                {/* Simple items */}
                <div className="pt-3 border-t border-notion-border/30 mt-2 space-y-1">
                  {simpleItems.map((item, i) => (
                    <motion.div key={item.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (notionItems.length + mondayItems.length + i) * 0.04 }}>
                      <Link href={item.href} className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-notion-gray-100 dark:hover:bg-notion-gray-800 text-notion-text-primary dark:text-notion-text-dark transition-colors">
                        <span className="font-medium text-sm">{item.name}</span>
                        {item.badge && <span className="px-2 py-0.5 bg-notion-blue text-white text-xs font-bold rounded-full">{item.badge}</span>}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 flex flex-col gap-2 px-2">
                  <LanguageSwitcher />
                  <Button className="w-full bg-notion-blue hover:bg-notion-blue/90 text-white font-medium">
                    {t("getStarted")}
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
