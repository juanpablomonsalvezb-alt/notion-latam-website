"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight, BookOpen, TrendingUp, Zap, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import Link from "next/link";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Todos" },
  { id: "tutoriales", label: "Tutoriales" },
  { id: "productividad", label: "Productividad" },
  { id: "casos-de-uso", label: "Casos de uso" },
  { id: "comparativas", label: "Comparativas" },
  { id: "guias", label: "Guías" },
];

const posts = [
  {
    slug: "como-usar-notion-como-crm",
    title: "Cómo usar Notion como CRM: Guía completa para LATAM",
    excerpt: "Aprende a convertir Notion en un CRM poderoso para gestionar tus clientes y ventas. Guía paso a paso con ejemplos reales de empresas latinoamericanas.",
    category: "tutoriales",
    readTime: "12 min",
    date: "3 de abril, 2026",
    image: null,
    gradient: "from-blue-400 to-indigo-600",
    featured: true,
    tags: ["CRM", "Ventas", "Tutorial"],
  },
  {
    slug: "notion-vs-trello-vs-asana-2026",
    title: "Notion vs Trello vs Asana 2026: Comparativa honesta",
    excerpt: "¿Cuál es la mejor herramienta de productividad para tu empresa en LATAM? Comparamos precios, funciones y casos de uso para ayudarte a decidir.",
    category: "comparativas",
    readTime: "10 min",
    date: "1 de abril, 2026",
    image: null,
    gradient: "from-violet-400 to-purple-600",
    featured: false,
    tags: ["Comparativa", "Herramientas", "Productividad"],
  },
  {
    slug: "mejores-bases-de-datos-notion-empresa",
    title: "Las 10 mejores estructuras de bases de datos en Notion",
    excerpt: "Las bases de datos son el corazón de Notion. Descubre las 10 estructuras más poderosas para optimizar tu empresa y cómo implementarlas.",
    category: "tutoriales",
    readTime: "15 min",
    date: "28 de marzo, 2026",
    image: null,
    gradient: "from-emerald-400 to-teal-600",
    featured: false,
    tags: ["Bases de datos", "Tutorial", "Avanzado"],
  },
  {
    slug: "notion-para-startups-latinoamericanas",
    title: "Notion para Startups Latinoamericanas: Guía definitiva",
    excerpt: "Cómo las startups más exitosas de LATAM usan Notion para escalar sus operaciones. Casos reales de México, Colombia, Argentina y Chile.",
    category: "casos-de-uso",
    readTime: "18 min",
    date: "25 de marzo, 2026",
    image: null,
    gradient: "from-orange-400 to-red-500",
    featured: true,
    tags: ["Startups", "LATAM", "Casos de uso"],
  },
  {
    slug: "automatizaciones-notion-pymes",
    title: "5 automatizaciones de Notion que ahorran 10 horas a la semana",
    excerpt: "Las automatizaciones más útiles para PyMEs latinoamericanas. Desde recordatorios automáticos hasta reportes semanales sin esfuerzo manual.",
    category: "productividad",
    readTime: "8 min",
    date: "20 de marzo, 2026",
    image: null,
    gradient: "from-yellow-400 to-orange-500",
    featured: false,
    tags: ["Automatización", "Productividad", "PyME"],
  },
  {
    slug: "notion-gestion-equipos-remotos",
    title: "Cómo gestionar equipos remotos en LATAM con Notion",
    excerpt: "La guía definitiva para coordinar equipos distribuidos en diferentes zonas horarias y países de América Latina usando Notion.",
    category: "guias",
    readTime: "14 min",
    date: "15 de marzo, 2026",
    image: null,
    gradient: "from-sky-400 to-cyan-600",
    featured: false,
    tags: ["Trabajo remoto", "Equipos", "Guía"],
  },
  {
    slug: "notion-ai-funciones-empresas",
    title: "Notion AI: Todas las funciones que tu empresa necesita saber",
    excerpt: "Notion AI llegó para cambiar cómo trabajamos. Descubre las funciones más potentes y cómo usarlas en el contexto empresarial latinoamericano.",
    category: "tutoriales",
    readTime: "11 min",
    date: "10 de marzo, 2026",
    image: null,
    gradient: "from-pink-400 to-rose-600",
    featured: false,
    tags: ["Notion AI", "Inteligencia Artificial", "Productividad"],
  },
  {
    slug: "notion-vs-monday-equipos-comerciales",
    title: "Notion vs Monday.com para equipos comerciales: ¿Cuál conviene?",
    excerpt: "Comparativa detallada entre Notion y Monday.com para equipos de ventas y marketing en América Latina. Precios, funciones y veredicto final.",
    category: "comparativas",
    readTime: "9 min",
    date: "5 de marzo, 2026",
    image: null,
    gradient: "from-lime-400 to-green-600",
    featured: false,
    tags: ["Comparativa", "Monday.com", "Ventas"],
  },
  {
    slug: "notion-vs-monday-2026",
    title: "Notion vs Monday.com 2026: La comparativa definitiva para LATAM",
    excerpt: "¿Notion o Monday.com? Comparativa honesta con tabla de features, precios y casos de uso reales en Latinoamérica. Descubre cuál necesita tu empresa.",
    category: "comparativas",
    readTime: "14 min",
    date: "7 de abril, 2026",
    image: null,
    gradient: "from-[#FF3D57] to-rose-700",
    featured: true,
    tags: ["Monday.com", "Comparativa", "LATAM"],
  },
  {
    slug: "stack-productividad-notion-monday",
    title: "El Stack Perfecto: Notion + Monday.com para empresas LATAM",
    excerpt: "Por qué las empresas más productivas de LATAM usan Notion y Monday juntos. Casos reales y guía de adopción en 8 semanas.",
    category: "productividad",
    readTime: "11 min",
    date: "6 de abril, 2026",
    image: null,
    gradient: "from-violet-500 to-[#FF3D57]",
    featured: false,
    tags: ["Notion", "Monday.com", "Stack"],
  },
  {
    slug: "monday-gestion-proyectos-latam",
    title: "Monday.com para gestión de proyectos en LATAM: Guía 2026",
    excerpt: "Cómo las empresas latinoamericanas usan Monday.com para gestionar proyectos complejos. Features clave, precios y 4 casos de uso reales.",
    category: "casos-de-uso",
    readTime: "12 min",
    date: "5 de abril, 2026",
    image: null,
    gradient: "from-orange-400 to-[#FF3D57]",
    featured: false,
    tags: ["Monday.com", "Proyectos", "LATAM"],
  },
  {
    slug: "5-workflows-monday-mejor-que-notion",
    title: "5 Workflows donde Monday supera a Notion (con ejemplos)",
    excerpt: "Análisis honesto de 5 casos donde Monday.com es la mejor opción. Gestión de proyectos complejos, sprints ágiles y más.",
    category: "guias",
    readTime: "10 min",
    date: "4 de abril, 2026",
    image: null,
    gradient: "from-red-400 to-[#FF3D57]",
    featured: false,
    tags: ["Monday.com", "Workflows", "Guía"],
  },
  {
    slug: "migrar-notion-monday-guia",
    title: "Migrar de Notion a Monday (o usar ambos): Guía completa 2026",
    excerpt: "Cuándo migrar, cuándo usar los dos juntos y cómo integrarlos. Checklist completo y timeline por tamaño de empresa.",
    category: "guias",
    readTime: "13 min",
    date: "3 de abril, 2026",
    image: null,
    gradient: "from-slate-500 to-[#FF3D57]",
    featured: false,
    tags: ["Migración", "Monday.com", "Notion"],
  },
];

export default function Blog() {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterState("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail, source: "blog" }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setNewsletterState("error");
        setNewsletterMsg(data.error || "Error al suscribirte. Intenta de nuevo.");
      } else {
        setNewsletterState("success");
        setNewsletterMsg(data.alreadySubscribed ? "¡Ya estás suscrito!" : "¡Listo! Revisa tu email para confirmar.");
        setNewsletterEmail("");
      }
    } catch {
      setNewsletterState("error");
      setNewsletterMsg("Error de red. Intenta de nuevo.");
    }
  };

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = filtered.filter((p) => !p.featured || search || activeCategory !== "all");

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <FadeInSection>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-notion-blue/10 border border-notion-blue/20 mb-6">
              <BookOpen className="w-4 h-4 text-notion-blue" />
              <span className="text-sm font-medium text-notion-blue">Blog Notion LATAM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
              Aprende a dominar Notion
            </h1>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto">
              Guías, tutoriales y casos de uso escritos para empresas latinoamericanas.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-lg mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-notion-text-secondary" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar artículos..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-800 text-notion-text-primary dark:text-notion-text-dark placeholder:text-notion-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-notion-blue/30 focus:border-notion-blue transition-colors shadow-sm"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setSearch(""); }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat.id && !search
                    ? "bg-notion-blue text-white"
                    : "bg-white dark:bg-notion-gray-800 border border-notion-border dark:border-notion-border-dark text-notion-text-secondary hover:border-notion-blue hover:text-notion-blue"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeInSection>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Featured post */}
        {!search && activeCategory === "all" && featuredPost && (
          <FadeInSection>
            <Link href={`/${locale}/blog/${featuredPost.slug}`}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl overflow-hidden mb-12 cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${featuredPost.gradient} p-10 md:p-16 min-h-80 flex flex-col justify-end`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-semibold uppercase tracking-wider">Destacado</span>
                      <span className="text-white/70 text-sm flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:underline">{featuredPost.title}</h2>
                    <p className="text-white/80 text-lg max-w-2xl mb-4">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-white font-semibold">
                      Leer artículo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </FadeInSection>
        )}

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {(search || activeCategory !== "all" ? filtered : regularPosts).map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={`/${locale}/blog/${post.slug}`}>
                <motion.div whileHover={{ y: -4 }} className="group bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark overflow-hidden h-full flex flex-col cursor-pointer transition-shadow hover:shadow-md">
                  {/* Card header */}
                  <div className={`h-32 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                    <BookOpen className="w-10 h-10 text-white/60" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-notion-blue/10 text-notion-blue text-xs font-semibold rounded-full">
                        {categories.find((c) => c.id === post.category)?.label}
                      </span>
                      <span className="text-xs text-notion-text-secondary flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-2 group-hover:text-notion-blue transition-colors leading-snug">{post.title}</h3>
                    <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-notion-border dark:border-notion-border-dark">
                      <span className="text-xs text-notion-text-secondary">{post.date}</span>
                      <span className="text-xs text-notion-blue font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Leer <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <FadeInSection>
          <div className="bg-notion-blue rounded-3xl p-10 md:p-14 text-center text-white">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Recibe artículos en tu email</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">Un artículo semanal sobre productividad y Notion para empresas latinoamericanas. Sin spam.</p>
            {newsletterState === "success" ? (
              <div className="flex items-center justify-center gap-2 text-white font-semibold text-lg">
                <CheckCircle className="w-6 h-6" />
                {newsletterMsg}
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button
                  type="submit"
                  disabled={newsletterState === "loading"}
                  className="bg-white text-notion-blue hover:bg-blue-50 font-semibold px-6"
                >
                  {newsletterState === "loading" ? "Enviando..." : "Suscribirme"}
                </Button>
              </form>
            )}
            {newsletterState === "error" && (
              <p className="text-red-200 text-sm mt-2">{newsletterMsg}</p>
            )}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
