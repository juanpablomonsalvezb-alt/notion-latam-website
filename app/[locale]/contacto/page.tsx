"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@notionlatam.com", href: "mailto:hello@notionlatam.com" },
    { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 000-0000", href: "https://wa.me/15550000000" },
    { icon: MapPin, label: "Ubicación", value: "LATAM — 100% remoto", href: null },
    { icon: Clock, label: "Horario de respuesta", value: "Lunes a Viernes, 9am–6pm (GMT-5)", href: null },
  ];

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">Estamos para ayudarte</h1>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-xl mx-auto">
              ¿Tienes preguntas sobre nuestros productos? ¿Necesitas ayuda con un template? Escríbenos.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <FadeInSection delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="bg-white dark:bg-notion-gray-900 rounded-xl border border-notion-border dark:border-notion-border-dark p-5 flex items-start gap-4">
                  <div className="p-2 bg-notion-blue/10 rounded-lg flex-shrink-0">
                    <Icon className="w-5 h-5 text-notion-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-notion-text-secondary dark:text-notion-text-dark-secondary uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-medium text-notion-text-primary dark:text-notion-text-dark hover:text-notion-blue transition-colors">{value}</a>
                    ) : (
                      <p className="font-medium text-notion-text-primary dark:text-notion-text-dark">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-notion-blue rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">¿Necesitas ayuda urgente?</h3>
                <p className="text-blue-100 text-sm mb-4">Para soporte inmediato, escríbenos por WhatsApp. Respondemos en menos de 2 horas en días hábiles.</p>
                <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-notion-blue hover:bg-blue-50 w-full font-semibold">
                    <MessageCircle className="mr-2 w-4 h-4" /> Abrir WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Form */}
          <FadeInSection delay={0.2} className="lg:col-span-3">
            <div className="bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark p-8">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-2">¡Mensaje enviado!</h3>
                  <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary">Te responderemos en menos de 24 horas hábiles.</p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6">Envíanos un mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-notion-text-primary dark:text-notion-text-dark mb-1">Nombre *</label>
                        <input required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-notion-border dark:border-notion-border-dark bg-notion-gray-50 dark:bg-notion-gray-800 text-notion-text-primary dark:text-notion-text-dark placeholder:text-notion-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-notion-blue/30 focus:border-notion-blue transition-colors"
                          placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-notion-text-primary dark:text-notion-text-dark mb-1">Email *</label>
                        <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-notion-border dark:border-notion-border-dark bg-notion-gray-50 dark:bg-notion-gray-800 text-notion-text-primary dark:text-notion-text-dark placeholder:text-notion-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-notion-blue/30 focus:border-notion-blue transition-colors"
                          placeholder="tu@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-notion-text-primary dark:text-notion-text-dark mb-1">Asunto</label>
                      <select value={form.asunto} onChange={e => setForm({ ...form, asunto: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-notion-border dark:border-notion-border-dark bg-notion-gray-50 dark:bg-notion-gray-800 text-notion-text-primary dark:text-notion-text-dark focus:outline-none focus:ring-2 focus:ring-notion-blue/30 focus:border-notion-blue transition-colors">
                        <option value="">Seleccionar asunto</option>
                        <option>Consulta sobre templates</option>
                        <option>Información del curso</option>
                        <option>Consultoría personalizada</option>
                        <option>Soporte técnico</option>
                        <option>Facturación y pagos</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-notion-text-primary dark:text-notion-text-dark mb-1">Mensaje *</label>
                      <textarea required rows={5} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-notion-border dark:border-notion-border-dark bg-notion-gray-50 dark:bg-notion-gray-800 text-notion-text-primary dark:text-notion-text-dark placeholder:text-notion-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-notion-blue/30 focus:border-notion-blue transition-colors resize-none"
                        placeholder="Cuéntanos en qué podemos ayudarte..." />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-notion-blue hover:bg-notion-blue/90 py-6 text-base font-semibold">
                      {loading ? "Enviando..." : <><Send className="mr-2 w-4 h-4" /> Enviar mensaje</>}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
