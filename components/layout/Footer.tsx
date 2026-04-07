import Link from "next/link";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Productos",
      links: [
        { name: "Templates", href: "/templates" },
        { name: "Curso Notion", href: "/curso" },
        { name: "Consultoría", href: "/consultoria" },
        { name: "WhatsApp Bot", href: "/saas" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { name: "Casos de Éxito", href: "/casos-exito" },
        { name: "Bot WhatsApp", href: "/bot" },
        { name: "Blog", href: "/blog" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "/sobre-nosotros" },
        { name: "Contacto", href: "/contacto" },
        { name: "Términos", href: "/terminos" },
        { name: "Privacidad", href: "/privacidad" },
      ],
    },
  ];

  return (
    <footer className="bg-notion-gray-50 dark:bg-notion-gray-900 border-t border-notion-border dark:border-notion-border-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-notion-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl text-notion-text-primary dark:text-notion-text-dark">
                Notion <span className="text-notion-blue">LATAM</span>
              </span>
            </Link>
            <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-sm mb-6">
              Potenciamos empresas latinoamericanas con las mejores herramientas y servicios de Notion.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-notion-gray-200 dark:hover:bg-notion-gray-800 transition-colors"
              >
                <Twitter className="w-5 h-5 text-notion-text-secondary dark:text-notion-text-dark-secondary" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-notion-gray-200 dark:hover:bg-notion-gray-800 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-notion-text-secondary dark:text-notion-text-dark-secondary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-notion-gray-200 dark:hover:bg-notion-gray-800 transition-colors"
              >
                <Instagram className="w-5 h-5 text-notion-text-secondary dark:text-notion-text-dark-secondary" />
              </a>
              <a
                href="mailto:hello@notionlatam.com"
                className="p-2 rounded-lg hover:bg-notion-gray-200 dark:hover:bg-notion-gray-800 transition-colors"
              >
                <Mail className="w-5 h-5 text-notion-text-secondary dark:text-notion-text-dark-secondary" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-notion-text-primary dark:text-notion-text-dark mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-notion-text-secondary dark:text-notion-text-dark-secondary hover:text-notion-text-primary dark:hover:text-notion-text-dark transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-notion-border dark:border-notion-border-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary">
            © 2026 Notion LATAM. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary">
            <span>Hecho con ❤️ en LATAM</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">
              Potenciado por Notion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
