"use client";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function Terminos() {
  const locale = useLocale();
  const lastUpdated = "7 de abril de 2026";

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-2">Términos y Condiciones</h1>
          <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary text-sm">Última actualización: {lastUpdated}</p>
        </div>

        <div className="prose prose-notion max-w-none space-y-8 text-notion-text-primary dark:text-notion-text-dark">
          {[
            {
              title: "1. Aceptación de los Términos",
              content: `Al acceder y utilizar los servicios de Notion LATAM (notionlatam.com), usted acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos términos, no debe usar nuestros servicios. Estos términos aplican a todos los usuarios, visitantes y personas que acceden o usan el servicio.`,
            },
            {
              title: "2. Descripción de los Servicios",
              content: `Notion LATAM ofrece:
• Templates de Notion para empresas latinoamericanas
• Cursos de formación sobre el uso de Notion
• Servicios de consultoría e implementación de Notion
• Herramientas y recursos digitales relacionados con Notion
• Bot de WhatsApp para integración con Notion (próximamente)

Notion LATAM es un servicio independiente y no está afiliado, patrocinado ni aprobado por Notion Labs, Inc.`,
            },
            {
              title: "3. Uso de los Productos Digitales",
              content: `Al adquirir un template o acceder al curso:
• Recibirá una licencia de uso personal, no exclusiva e intransferible
• Puede usar el template en un (1) workspace de Notion de su propiedad
• No puede revender, redistribuir ni compartir el template con terceros
• No puede reclamar autoría sobre el template original
• Puede modificar el template para uso personal o empresarial propio
• La licencia no expira pero está sujeta a estos términos`,
            },
            {
              title: "4. Política de Precios y Pagos",
              content: `Los precios están expresados en dólares estadounidenses (USD). El pago se procesa de forma segura a través de nuestros proveedores de pago. Notion LATAM se reserva el derecho de modificar los precios en cualquier momento, sin que esto afecte las compras ya realizadas.`,
            },
            {
              title: "5. Política de Reembolsos",
              content: `Ofrecemos garantía de satisfacción de 30 días en todos nuestros productos digitales. Si no está satisfecho con su compra, puede solicitar un reembolso completo dentro de los 30 días posteriores a la compra enviando un email a hello@notionlatam.com con el asunto "Solicitud de reembolso" y el número de su orden. Los reembolsos se procesan en 5-7 días hábiles.`,
            },
            {
              title: "6. Propiedad Intelectual",
              content: `Todo el contenido de Notion LATAM, incluyendo templates, materiales del curso, textos, gráficos, logos e imágenes, está protegido por leyes de propiedad intelectual. Queda prohibida la reproducción, distribución o modificación sin autorización escrita de Notion LATAM.`,
            },
            {
              title: "7. Limitación de Responsabilidad",
              content: `Notion LATAM no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de usar nuestros servicios. Nuestros templates y recursos son herramientas de productividad; los resultados pueden variar según el uso y la implementación de cada usuario.`,
            },
            {
              title: "8. Modificaciones",
              content: `Notion LATAM se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán notificados a través del sitio web. El uso continuado del servicio después de los cambios constituye la aceptación de los nuevos términos.`,
            },
            {
              title: "9. Contacto",
              content: `Para consultas sobre estos términos, comuníquese con nosotros en hello@notionlatam.com o a través de nuestro formulario de contacto.`,
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="text-xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-3">{title}</h2>
              <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed whitespace-pre-line">{content}</p>
            </section>
          ))}

          <div className="pt-8 border-t border-notion-border dark:border-notion-border-dark">
            <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary">
              Ver también:{" "}
              <Link href={`/${locale}/privacidad`} className="text-notion-blue hover:underline">Política de Privacidad</Link>
              {" · "}
              <Link href={`/${locale}/contacto`} className="text-notion-blue hover:underline">Contacto</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
