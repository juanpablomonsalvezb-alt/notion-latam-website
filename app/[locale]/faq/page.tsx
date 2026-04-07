"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import Link from "next/link";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const faqCategories = [
  { id: "general", label: "General" },
  { id: "templates", label: "Templates" },
  { id: "curso", label: "Curso" },
  { id: "consultoria", label: "Consultoría" },
  { id: "pagos", label: "Pagos y reembolsos" },
];

const faqs = [
  // General
  {
    category: "general",
    question: "¿Qué es Notion LATAM?",
    answer: "Notion LATAM es el ecosistema líder de Notion para empresas latinoamericanas. Ofrecemos templates premium, cursos completos, consultoría personalizada y recursos en español diseñados específicamente para el contexto empresarial de LATAM.",
  },
  {
    category: "general",
    question: "¿Necesito experiencia previa con Notion?",
    answer: "No. Tenemos recursos para todos los niveles. Nuestros templates incluyen instrucciones detalladas y nuestro curso parte desde cero. Si ya usas Notion, nuestros templates avanzados y consultoría te llevan al siguiente nivel.",
  },
  {
    category: "general",
    question: "¿Funciona Notion para mi tipo de negocio?",
    answer: "Sí. Notion es extremadamente flexible y lo hemos adaptado para PyMEs, agencias, startups, freelancers, equipos de ventas, marketing, operaciones y más. Tenemos templates específicos para más de 10 industrias en LATAM.",
  },
  {
    category: "general",
    question: "¿En qué países operan?",
    answer: "Operamos en toda América Latina: México, Colombia, Argentina, Chile, Perú, Ecuador, Venezuela, Uruguay, Paraguay, Bolivia, Costa Rica, Guatemala, Panamá y más. Somos 100% remotos, así que no hay fronteras geográficas.",
  },
  // Templates
  {
    category: "templates",
    question: "¿Cómo recibo el template después de comprarlo?",
    answer: "Inmediatamente después del pago recibirás un email con el link de duplicación de Notion. Solo tienes que hacer clic en 'Duplicate' en la esquina superior derecha y el template se copiará a tu workspace.",
  },
  {
    category: "templates",
    question: "¿Necesito una cuenta Notion de pago?",
    answer: "La mayoría de nuestros templates funcionan con el plan gratuito de Notion (Free). Algunos templates avanzados con automatizaciones o funciones de equipo requieren el plan Plus ($8/mes). Siempre indicamos los requisitos en cada template.",
  },
  {
    category: "templates",
    question: "¿Puedo personalizar el template para mi empresa?",
    answer: "Completamente. Tienes licencia para modificar, adaptar y personalizar el template según tus necesidades. Puedes cambiar colores, agregar columnas, modificar fórmulas y ajustar todo al flujo de tu negocio.",
  },
  {
    category: "templates",
    question: "¿Funciona el template con mi equipo?",
    answer: "Sí. Los templates están diseñados para uso individual y en equipo. Puedes compartir el workspace con todos los miembros de tu equipo. La licencia cubre un (1) workspace de Notion, sin límite de usuarios dentro de ese workspace.",
  },
  {
    category: "templates",
    question: "¿Los templates tienen actualizaciones?",
    answer: "Sí. Los templates premium incluyen actualizaciones gratuitas de por vida. Cuando publicamos mejoras significativas, notificamos a los compradores por email con el nuevo link de duplicación.",
  },
  // Curso
  {
    category: "curso",
    question: "¿Qué incluye el curso de Notion?",
    answer: "El curso incluye más de 50 videos, materiales descargables, ejercicios prácticos y acceso a nuestra comunidad privada. Cubre desde los fundamentos de Notion hasta implementaciones avanzadas para empresas: bases de datos relacionales, fórmulas, automatizaciones y casos de uso reales.",
  },
  {
    category: "curso",
    question: "¿Cuánto tiempo tengo acceso al curso?",
    answer: "El acceso es de por vida. Una vez que compras el curso, puedes verlo tantas veces como quieras, sin fechas de expiración. También incluyes acceso a actualizaciones futuras del contenido.",
  },
  {
    category: "curso",
    question: "¿Puedo obtener certificado al completar el curso?",
    answer: "Sí. Al completar el 80% del curso recibirás un certificado digital de Notion LATAM que puedes compartir en LinkedIn y tu CV. El certificado valida tus habilidades de implementación de Notion para empresas.",
  },
  {
    category: "curso",
    question: "¿El curso tiene soporte?",
    answer: "Sí. Los alumnos del curso tienen acceso a nuestra comunidad privada donde puedes hacer preguntas, compartir tu progreso y recibir feedback. También hay sesiones grupales de Q&A mensuales en vivo.",
  },
  // Consultoría
  {
    category: "consultoria",
    question: "¿Qué es la consultoría de implementación?",
    answer: "Es un servicio donde nuestros consultores expertos trabajan contigo para implementar Notion en tu empresa. Incluye análisis de tu operación actual, diseño del sistema en Notion, implementación, capacitación del equipo y soporte post-implementación.",
  },
  {
    category: "consultoria",
    question: "¿Cuánto tarda una implementación?",
    answer: "Depende del paquete: la Auditoría Express tarda 5 días, la Implementación Completa 2-3 semanas, y el Sistema Enterprise 4-6 semanas. Siempre con cronograma definido y entregables claros desde el inicio.",
  },
  {
    category: "consultoria",
    question: "¿Cómo empiezo el proceso de consultoría?",
    answer: "Contacta con nosotros a través del formulario o WhatsApp. Agendamos una llamada de discovery gratuita de 30 minutos para entender tu negocio y necesidades. Luego te enviamos una propuesta personalizada.",
  },
  // Pagos
  {
    category: "pagos",
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito/débito internacionales (Visa, Mastercard, American Express), PayPal y otros métodos según tu país. Todos los pagos se procesan de forma segura con encriptación SSL.",
  },
  {
    category: "pagos",
    question: "¿Puedo pagar en mi moneda local?",
    answer: "Los precios están en USD para simplificar la operación regional, pero tu banco o procesador de pago realizará la conversión automáticamente a tu moneda local según la tasa del día.",
  },
  {
    category: "pagos",
    question: "¿Tienen política de reembolso?",
    answer: "Sí. Ofrecemos garantía de satisfacción de 30 días en todos nuestros productos digitales. Si no estás satisfecho por cualquier razón, escríbenos a hello@notionlatam.com dentro de los 30 días y te devolvemos el 100% de tu dinero.",
  },
  {
    category: "pagos",
    question: "¿Emiten facturas?",
    answer: "Sí. Emitimos recibo de pago por cada transacción. Si necesitas factura fiscal específica para tu país, contáctanos indicando los datos fiscales y tipo de comprobante requerido.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-notion-border dark:border-notion-border-dark rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-notion-gray-50 dark:hover:bg-notion-gray-800 transition-colors"
      >
        <span className="font-semibold text-notion-text-primary dark:text-notion-text-dark pr-4">{question}</span>
        <ChevronDown className={cn("w-5 h-5 text-notion-text-secondary flex-shrink-0 transition-transform duration-300", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 pb-5 text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("general");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((f) => {
    const matchCat = f.category === activeCategory;
    const matchSearch = !search || f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase());
    return search ? matchSearch : matchCat;
  });

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 mb-14 text-center">
        <FadeInSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-notion-blue/10 border border-notion-blue/20 mb-6">
            <span className="text-sm font-medium text-notion-blue">Preguntas frecuentes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
            ¿En qué podemos ayudarte?
          </h1>
          <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto mb-8">
            Encuentra respuestas a las dudas más frecuentes sobre nuestros productos y servicios.
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-notion-text-secondary" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar en preguntas frecuentes..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-notion-border dark:border-notion-border-dark bg-white dark:bg-notion-gray-800 text-notion-text-primary dark:text-notion-text-dark placeholder:text-notion-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-notion-blue/30 focus:border-notion-blue transition-colors shadow-sm"
            />
          </div>
        </FadeInSection>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        {/* Category tabs */}
        {!search && (
          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "bg-notion-blue text-white shadow-sm"
                    : "bg-white dark:bg-notion-gray-800 border border-notion-border dark:border-notion-border-dark text-notion-text-secondary hover:border-notion-blue hover:text-notion-blue"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* FAQ items */}
        <div className="space-y-3 mb-16">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-notion-text-secondary py-10">
                No se encontraron resultados para "{search}"
              </motion.p>
            ) : (
              filtered.map((faq, i) => (
                <motion.div key={faq.question} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <FAQItem question={faq.question} answer={faq.answer} />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Still have questions CTA */}
        <FadeInSection>
          <div className="bg-notion-blue rounded-2xl p-10 text-white text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-3">¿No encontraste lo que buscabas?</h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Nuestro equipo está disponible de lunes a viernes para responder cualquier pregunta que tengas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`/${locale}/contacto`}>
                <Button className="bg-white text-notion-blue hover:bg-blue-50 font-semibold">
                  Enviar mensaje <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  WhatsApp directo
                </Button>
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
