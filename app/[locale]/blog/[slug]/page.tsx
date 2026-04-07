"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import Link from "next/link";
import { useLocale } from "next-intl";

const ARTICLES: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  content: { type: "h2" | "h3" | "p" | "ul" | "highlight"; text?: string; items?: string[] }[];
  relatedSlugs: string[];
}> = {
  "como-usar-notion-como-crm": {
    title: "Cómo usar Notion como CRM: Guía completa para LATAM",
    excerpt: "Aprende a convertir Notion en un CRM poderoso para gestionar tus clientes y ventas en LATAM. Guía paso a paso con ejemplos reales.",
    date: "3 de abril, 2026",
    readTime: "12 min",
    category: "Tutoriales",
    gradient: "from-blue-400 to-indigo-600",
    content: [
      { type: "p", text: "¿Estás pagando por HubSpot o Salesforce y solo usas el 20% de sus funciones? No estás solo. Miles de empresas latinoamericanas descubren cada año que Notion puede reemplazar su CRM por una fracción del costo — y con más flexibilidad." },
      { type: "h2", text: "¿Por qué Notion funciona como CRM?" },
      { type: "p", text: "Notion no es un CRM convencional, pero sus bases de datos relacionales son increíblemente poderosas. Puedes crear exactamente el pipeline que tu equipo necesita, sin pagar por funciones que nunca vas a usar." },
      { type: "ul", items: ["Bases de datos relacionales entre contactos, empresas y oportunidades", "Vistas Kanban para visualizar tu pipeline de ventas", "Propiedades personalizadas para cada campo que necesites", "Automatizaciones nativas con Notion Automations", "Colaboración en tiempo real sin costo extra"] },
      { type: "h2", text: "Estructura recomendada para tu CRM en Notion" },
      { type: "p", text: "Un CRM bien construido en Notion tiene al menos 3 bases de datos que se conectan entre sí:" },
      { type: "h3", text: "1. Base de Datos de Contactos" },
      { type: "p", text: "Esta es la columna vertebral. Cada contacto tiene: nombre, empresa, email, WhatsApp, país, cargo, fuente de origen y estado en el pipeline." },
      { type: "h3", text: "2. Base de Datos de Oportunidades" },
      { type: "p", text: "Cada oportunidad de venta está relacionada con un contacto. Incluye: valor estimado, probabilidad de cierre, fecha límite, etapa y propietario." },
      { type: "h3", text: "3. Base de Datos de Actividades" },
      { type: "p", text: "Registro de todas las interacciones: llamadas, emails, reuniones, mensajes de WhatsApp. Relacionada con el contacto y la oportunidad correspondiente." },
      { type: "highlight", text: "Tip de experto: Usa la vista Kanban de Oportunidades con las etapas como columnas. Así tienes un pipeline visual que puedes actualizar con drag & drop." },
      { type: "h2", text: "Pipeline de ventas en Kanban" },
      { type: "p", text: "Las etapas que recomendamos para empresas latinoamericanas son: Prospecto → Contactado → Calificado → Propuesta enviada → Negociación → Ganado/Perdido. Cada columna puede tener un color diferente para mayor claridad visual." },
      { type: "h2", text: "Comparativa: Notion CRM vs alternativas" },
      { type: "ul", items: ["Notion CRM: $0-16/mes (plan Notion) vs HubSpot: $45-800/mes", "Notion CRM: Setup personalizado vs Salesforce: Setup complejo y costoso", "Notion CRM: Flexibilidad total vs Pipedrive: Pipeline rígido predefinido", "Notion CRM: En español vs Monday CRM: Limitado en español"] },
      { type: "h2", text: "Casos de uso reales en LATAM" },
      { type: "p", text: "Una agencia digital en Colombia con 8 personas de ventas migró de Pipedrive a Notion CRM. Resultado: $480/año de ahorro y mejor adopción del equipo porque podían personalizarlo." },
      { type: "p", text: "Un e-commerce en México con ventas B2B implementó nuestro template CRM WhatsApp. En el primer mes registraron el 40% más de seguimientos porque el proceso era más simple." },
    ],
    relatedSlugs: ["notion-vs-trello-vs-asana-2026", "automatizaciones-notion-pymes", "mejores-bases-de-datos-notion-empresa"],
  },
  "notion-vs-trello-vs-asana-2026": {
    title: "Notion vs Trello vs Asana 2026: Comparativa honesta",
    excerpt: "¿Cuál es mejor para tu empresa en LATAM? Comparamos precios, funciones y casos de uso para ayudarte a decidir.",
    date: "1 de abril, 2026",
    readTime: "10 min",
    category: "Comparativas",
    gradient: "from-violet-400 to-purple-600",
    content: [
      { type: "p", text: "La pregunta más común que recibimos en Notion LATAM: '¿Debo moverme de Trello/Asana a Notion?' La respuesta honesta: depende. Pero para la mayoría de PyMEs latinoamericanas, Notion gana." },
      { type: "h2", text: "Resumen ejecutivo" },
      { type: "ul", items: ["Notion: Mejor para empresas que necesitan un sistema centralizado flexible", "Trello: Mejor para equipos pequeños con flujos simples de tareas", "Asana: Mejor para organizaciones medianas con proyectos complejos y múltiples dependencias"] },
      { type: "h2", text: "Comparativa de precios (abril 2026)" },
      { type: "ul", items: ["Notion Free: Ilimitado para uso individual, $10/usuario para equipos", "Trello Free: 10 boards, $5/usuario para estándar", "Asana Free: 15 usuarios máximo, $10.99/usuario para premium"] },
      { type: "h2", text: "¿Por qué Notion gana para PyMEs LATAM?" },
      { type: "p", text: "Notion no es solo gestión de proyectos — es una plataforma de trabajo completa. En el mismo workspace puedes tener tu CRM, tu wiki de empresa, tus proyectos, tus documentos y tus procesos." },
      { type: "highlight", text: "Una empresa latinoamericana que migra a Notion típicamente elimina 3-5 herramientas separadas, ahorrando $200-500/mes en suscripciones." },
      { type: "h2", text: "Cuándo NO elegir Notion" },
      { type: "p", text: "Notion tiene una curva de aprendizaje más alta. Si tu equipo no tiene tiempo de aprender o si necesitas una herramienta de proyectos muy específica (como gestión de recursos avanzada), Asana puede ser mejor opción." },
    ],
    relatedSlugs: ["como-usar-notion-como-crm", "notion-para-startups-latinoamericanas", "mejores-bases-de-datos-notion-empresa"],
  },
  "automatizaciones-notion-pymes": {
    title: "5 automatizaciones de Notion que ahorran 10 horas a la semana",
    excerpt: "Las automatizaciones más útiles para PyMEs latinoamericanas.",
    date: "20 de marzo, 2026",
    readTime: "8 min",
    category: "Productividad",
    gradient: "from-yellow-400 to-orange-500",
    content: [
      { type: "p", text: "Notion Automations es una de las funciones menos aprovechadas por los usuarios hispanohablantes. Con las automatizaciones correctas, puedes ahorrar entre 8 y 12 horas por semana en tareas repetitivas." },
      { type: "h2", text: "1. Asignación automática de tareas al cambiar estado" },
      { type: "p", text: "Cuando una oportunidad pasa a 'Propuesta enviada', automáticamente se crea una tarea de seguimiento asignada al vendedor responsable para 3 días después." },
      { type: "h2", text: "2. Notificaciones de fechas límite" },
      { type: "p", text: "24 horas antes de que venza una tarea, el responsable recibe una notificación. Elimina los 'se me olvidó' del vocabulario de tu equipo." },
      { type: "h2", text: "3. Reporte semanal automático" },
      { type: "p", text: "Cada lunes, Notion genera automáticamente una página con las tareas completadas la semana anterior y las pendientes para la semana actual. Sin que nadie tenga que hacerlo manualmente." },
      { type: "h2", text: "4. Creación de tickets desde formulario" },
      { type: "p", text: "Conecta tu formulario de contacto web con Notion y cada solicitud se convierte automáticamente en un ticket en tu base de datos de soporte." },
      { type: "h2", text: "5. Actualización de estado por inactividad" },
      { type: "p", text: "Si un lead no ha tenido actividad en 7 días, su estado cambia automáticamente a 'Requiere seguimiento'. Nunca más pierdas un cliente por falta de contacto." },
      { type: "highlight", text: "Estas 5 automatizaciones juntas ahorran en promedio 9.5 horas semanales a los equipos de nuestros clientes en LATAM." },
    ],
    relatedSlugs: ["como-usar-notion-como-crm", "mejores-bases-de-datos-notion-empresa", "notion-ai-funciones-empresas"],
  },
};

const DEFAULT_ARTICLE = ARTICLES["como-usar-notion-como-crm"];

const RELATED_META: Record<string, { title: string; readTime: string; gradient: string }> = {
  "como-usar-notion-como-crm": { title: "Cómo usar Notion como CRM", readTime: "12 min", gradient: "from-blue-400 to-indigo-600" },
  "notion-vs-trello-vs-asana-2026": { title: "Notion vs Trello vs Asana 2026", readTime: "10 min", gradient: "from-violet-400 to-purple-600" },
  "mejores-bases-de-datos-notion-empresa": { title: "Las 10 mejores estructuras de bases de datos", readTime: "15 min", gradient: "from-emerald-400 to-teal-600" },
  "notion-para-startups-latinoamericanas": { title: "Notion para Startups Latinoamericanas", readTime: "18 min", gradient: "from-orange-400 to-red-500" },
  "automatizaciones-notion-pymes": { title: "5 automatizaciones que ahorran 10 horas", readTime: "8 min", gradient: "from-yellow-400 to-orange-500" },
  "notion-ai-funciones-empresas": { title: "Notion AI: todas las funciones", readTime: "11 min", gradient: "from-pink-400 to-rose-600" },
};

export default function BlogPost() {
  const params = useParams();
  const locale = useLocale();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const article = ARTICLES[slug] || DEFAULT_ARTICLE;

  const renderBlock = (block: typeof article.content[0], i: number) => {
    if (block.type === "h2") return <h2 key={i} className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mt-10 mb-4">{block.text}</h2>;
    if (block.type === "h3") return <h3 key={i} className="text-xl font-bold text-notion-text-primary dark:text-notion-text-dark mt-6 mb-3">{block.text}</h3>;
    if (block.type === "p") return <p key={i} className="text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed mb-4 text-lg">{block.text}</p>;
    if (block.type === "ul") return (
      <ul key={i} className="space-y-2 mb-6">
        {block.items?.map((item, j) => (
          <li key={j} className="flex items-start gap-3 text-notion-text-secondary dark:text-notion-text-dark-secondary">
            <Check className="w-5 h-5 text-notion-blue flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
    if (block.type === "highlight") return (
      <div key={i} className="border-l-4 border-notion-blue bg-notion-blue/5 rounded-r-xl px-6 py-4 my-6">
        <p className="text-notion-text-primary dark:text-notion-text-dark font-medium leading-relaxed">{block.text}</p>
      </div>
    );
    return null;
  };

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-20">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${article.gradient} py-20 px-6 mb-12`}>
        <div className="max-w-3xl mx-auto">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-semibold">{article.category}</span>
              <span className="text-white/70 text-sm flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
              <span className="text-white/70 text-sm flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{article.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">{article.excerpt}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        {/* Article body */}
        <FadeInSection>
          <article>
            {article.content.map((block, i) => renderBlock(block, i))}
          </article>
        </FadeInSection>

        {/* CTA after article */}
        <FadeInSection>
          <div className="bg-notion-blue rounded-2xl p-8 text-white text-center my-12">
            <BookOpen className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">¿Quieres implementarlo en tu empresa?</h3>
            <p className="text-blue-100 mb-6">Tenemos templates listos para usar y consultoría personalizada para empresas de LATAM.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`/${locale}/templates`}>
                <Button className="bg-white text-notion-blue hover:bg-blue-50 font-semibold">
                  Ver templates <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href={`/${locale}/consultoria`}>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Consultoría
                </Button>
              </Link>
            </div>
          </div>
        </FadeInSection>

        {/* Related posts */}
        {article.relatedSlugs.length > 0 && (
          <FadeInSection>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {article.relatedSlugs.map((rs) => {
                  const meta = RELATED_META[rs];
                  if (!meta) return null;
                  return (
                    <Link key={rs} href={`/${locale}/blog/${rs}`}>
                      <motion.div whileHover={{ y: -3 }} className="group rounded-xl overflow-hidden border border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-800 cursor-pointer">
                        <div className={`h-20 bg-gradient-to-br ${meta.gradient}`} />
                        <div className="p-4">
                          <p className="text-sm font-semibold text-notion-text-primary dark:text-notion-text-dark group-hover:text-notion-blue transition-colors leading-snug mb-1">{meta.title}</p>
                          <p className="text-xs text-notion-text-secondary flex items-center gap-1"><Clock className="w-3 h-3" />{meta.readTime}</p>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </FadeInSection>
        )}

        {/* Back to blog */}
        <div className="mt-12 pt-8 border-t border-notion-border dark:border-notion-border-dark">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-notion-blue hover:gap-3 transition-all font-medium">
            <ArrowLeft className="w-4 h-4" /> Volver al blog
          </Link>
        </div>
      </div>
    </div>
  );
}
