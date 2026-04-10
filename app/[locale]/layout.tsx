import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    es: "Nebbuler — Plantillas de Notion con oficio",
    en: "Nebbuler — Notion templates with craft",
    fr: "Nebbuler — Modèles Notion, conçus avec soin",
  };

  const descriptions: Record<string, string> = {
    es: "Un estudio de diseño que hace sistemas de trabajo en Notion con el cuidado de un mueble. Tres niveles de oficio — Core, System, Atelier — en cinco audiencias.",
    en: "A design studio that makes Notion work systems with craft. Three levels — Core, System, Atelier — across five audiences.",
    fr: "Un studio de design qui conçoit des systèmes de travail Notion avec le soin d'un meuble. Trois niveaux — Core, System, Atelier — pour cinq publics.",
  };

  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    icons: { icon: "/favicon.svg" },
    alternates: {
      languages: {
        es: "/es",
        en: "/en",
        fr: "/fr",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "es" | "en" | "fr")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Geist:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
