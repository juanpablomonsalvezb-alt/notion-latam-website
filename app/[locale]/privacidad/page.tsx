"use client";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function Privacidad() {
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-2">Política de Privacidad</h1>
          <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary text-sm">Última actualización: 7 de abril de 2026</p>
        </div>
        <div className="space-y-8 text-notion-text-primary dark:text-notion-text-dark">
          {[
            { title: "1. Información que Recopilamos", content: `Recopilamos la siguiente información cuando usa nuestros servicios:\n\n• Información de contacto: nombre, email, número de WhatsApp (opcional)\n• Información de compra: datos de facturación procesados por nuestros proveedores de pago\n• Datos de uso: páginas visitadas, tiempo en el sitio, interacciones (via Google Analytics)\n• Cookies: para mejorar la experiencia de navegación y medir el rendimiento` },
            { title: "2. Cómo Usamos su Información", content: `Usamos su información para:\n\n• Procesar y entregar sus compras\n• Enviar comunicaciones relacionadas con su cuenta y productos adquiridos\n• Enviar newsletters y contenido de marketing (con su consentimiento)\n• Mejorar nuestros productos y servicios\n• Cumplir con obligaciones legales` },
            { title: "3. Compartir Información", content: `No vendemos ni alquilamos su información personal a terceros. Podemos compartir información con:\n\n• Proveedores de servicios de pago (para procesar transacciones)\n• Plataformas de email marketing (para envío de comunicaciones)\n• Servicios de análisis (Google Analytics, de forma anonimizada)` },
            { title: "4. Cookies", content: `Utilizamos cookies propias y de terceros para:\n\n• Mantener su sesión activa\n• Recordar sus preferencias de idioma\n• Analizar el tráfico del sitio (Google Analytics)\n• Medir la efectividad de nuestras campañas (Facebook Pixel)\n\nPuede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.` },
            { title: "5. Sus Derechos", content: `Usted tiene derecho a:\n\n• Acceder a la información personal que tenemos sobre usted\n• Solicitar la corrección de datos inexactos\n• Solicitar la eliminación de sus datos\n• Oponerse al procesamiento de sus datos\n• Solicitar la portabilidad de sus datos\n\nPara ejercer estos derechos, contáctenos en hello@notionlatam.com` },
            { title: "6. Seguridad", content: `Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información. Sin embargo, ningún método de transmisión por Internet es 100% seguro. Hacemos nuestro mejor esfuerzo para proteger su información personal.` },
            { title: "7. Contacto", content: `Para preguntas sobre privacidad: hello@notionlatam.com` },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="text-xl font-bold mb-3">{title}</h2>
              <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed whitespace-pre-line">{content}</p>
            </section>
          ))}
          <div className="pt-8 border-t border-notion-border dark:border-notion-border-dark">
            <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary">
              Ver también:{" "}
              <Link href={`/${locale}/terminos`} className="text-notion-blue hover:underline">Términos y Condiciones</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
