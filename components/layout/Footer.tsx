"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const footerSections = [
    {
      title: "Notion",
      links: [
        { name: "Templates Notion", href: `/${locale}/templates` },
        { name: "Curso Notion", href: `/${locale}/curso` },
        { name: "Consultoría Notion", href: `/${locale}/consultoria` },
      ],
    },
    {
      title: "Monday.com",
      links: [
        { name: "Templates Monday", href: `/${locale}/monday/templates` },
        { name: "Curso Monday", href: `/${locale}/monday/curso` },
        { name: "Consultoría Monday", href: `/${locale}/monday/consultoria` },
        { name: "Bundles Notion + Monday", href: `/${locale}/bundles` },
      ],
    },
    {
      title: t('resources'),
      links: [
        { name: "Blog", href: `/${locale}/blog` },
        { name: "Casos de Éxito", href: `/${locale}/casos-exito` },
        { name: "Calculadora ROI", href: `/${locale}/calculadora-roi` },
        { name: "Recomendador", href: `/${locale}/recomendador` },
        { name: "FAQ", href: `/${locale}/faq` },
        { name: "Empezar Gratis", href: `/${locale}/empezar` },
      ],
    },
    {
      title: t('company'),
      links: [
        { name: "Sobre Nosotros", href: `/${locale}/sobre-nosotros` },
        { name: "Contacto", href: `/${locale}/contacto` },
        { name: "Términos", href: `/${locale}/terminos` },
        { name: "Privacidad", href: `/${locale}/privacidad` },
      ],
    },
  ];

  return (
    <footer className="bg-notion-gray-50 dark:bg-notion-gray-900 border-t border-notion-border dark:border-notion-border-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-notion-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-xl text-notion-text-primary dark:text-notion-text-dark">
                Workspace<span className="text-notion-blue">LATAM</span>
              </span>
            </Link>
            <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-sm mb-6">
              {t('tagline')}
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
            © 2026 Notion LATAM. {t('rights')}.
          </p>
          <div className="flex items-center gap-6 text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary">
            <span>{t('madeWith')} {t('in')}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">{t('poweredBy')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
