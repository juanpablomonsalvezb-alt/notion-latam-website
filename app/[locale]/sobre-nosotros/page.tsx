"use client";
import { motion } from "framer-motion";
import { Users, Target, Globe, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import Link from "next/link";
import { useLocale } from "next-intl";

const stats = [
  { value: "500+", label: "Empresas atendidas" },
  { value: "18", label: "Países de LATAM" },
  { value: "2,500+", label: "Templates vendidos" },
  { value: "4.9/5", label: "Rating promedio" },
];

const values = [
  { icon: Target, title: "Foco en LATAM", desc: "Somos la primera plataforma 100% especializada en Notion para empresas latinoamericanas. Entendemos tu contexto, tu idioma y tus necesidades." },
  { icon: Globe, title: "100% Remoto", desc: "Servimos a empresas en toda América Latina desde una operación 100% digital. Sin fronteras, sin límites geográficos." },
  { icon: Users, title: "Comunidad primero", desc: "Más de 5,000 profesionales en nuestra comunidad. Aprendemos juntos, compartimos experiencias y crecemos como región." },
  { icon: Award, title: "Excelencia sin excusas", desc: "Todo lo que hacemos está diseñado para ser lo mejor en su categoría. Templates premium, cursos completos, consultoría de primer nivel." },
];

const team = [
  { name: "Equipo Notion LATAM", role: "Expertos en Notion para empresas", emoji: "🚀", bio: "Un equipo de consultores y educadores apasionados por la productividad y la organización empresarial en Latinoamérica." },
];

export default function SobreNosotros() {
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <FadeInSection>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-notion-blue/10 border border-notion-blue/20 mb-6">
              <span className="text-sm font-medium text-notion-blue">Sobre Notion LATAM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6 tracking-tight">
              Somos el ecosistema<br />
              <span className="text-notion-blue">Notion de LATAM</span>
            </h1>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto leading-relaxed">
              Creamos templates, cursos y servicios de consultoría para que empresas latinoamericanas puedan implementar Notion correctamente — en español, con casos reales de nuestra región.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Stats */}
      <section className="bg-notion-blue py-16 mb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {stats.map(({ value, label }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="text-4xl font-bold mb-1">{value}</div>
                <div className="text-blue-100 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6">Nuestra historia</h2>
          <div className="space-y-4 text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed">
            <p>Todo empezó con una pregunta simple: ¿Por qué el 90% del contenido sobre Notion está en inglés, si en Latinoamérica hay millones de empresas que podrían beneficiarse de esta herramienta?</p>
            <p>Vimos que las PyMEs latinoamericanas seguían usando Excel, Trello, WhatsApp y decenas de herramientas desconectadas — perdiendo tiempo, dinero y oportunidades. Notion era la solución, pero no había quien lo explicara en nuestro idioma y con nuestros casos de uso.</p>
            <p>Así nació Notion LATAM: con la misión de ser el puente entre esta poderosa herramienta y las empresas de nuestra región. Hoy tenemos 500+ empresas atendidas en 18 países, y apenas estamos empezando.</p>
          </div>
        </FadeInSection>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-notion-text-primary dark:text-notion-text-dark text-center mb-10">Lo que nos mueve</h2>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <FadeInSection key={title} delay={i * 0.1}>
              <div className="bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6 flex gap-4">
                <div className="p-3 bg-notion-blue/10 rounded-xl h-fit flex-shrink-0">
                  <Icon className="w-6 h-6 text-notion-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-2">{title}</h3>
                  <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <FadeInSection>
          <div className="bg-notion-gray-50 dark:bg-notion-gray-800 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">¿Listo para transformar tu empresa?</h2>
            <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary mb-6">Únete a las 500+ empresas latinoamericanas que ya usan Notion LATAM.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`/${locale}/templates`}>
                <Button className="bg-notion-blue hover:bg-notion-blue/90">
                  Explorar Templates <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href={`/${locale}/contacto`}>
                <Button variant="outline">Hablar con nosotros</Button>
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
