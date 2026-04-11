import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { JsonLd } from "@/components/JsonLd";
import "../globals.css";

const BASE_URL = "https://nebbuler.com";

/* ── Per-locale SEO copy ────────────────────────────────────────────────────── */
const seo = {
  en: {
    title: "Nebbuler — Notion work systems, made with care",
    description:
      "Core, System, and Atelier. Three levels of Notion templates for personal use, freelance work, students, and creators. Built slowly, on purpose.",
    ogTitle: "Nebbuler — Notion work systems built with real craft",
    ogDescription:
      "A design studio. Three levels of Notion templates — Core, System, Atelier — for personal, freelance, student, and creator audiences. No hype, fixed price.",
    ogLocale: "en_US",
  },
  es: {
    title: "Nebbuler — Sistemas Notion para trabajar mejor",
    description:
      "Tres niveles: Core, System y Atelier. Plantillas Notion para productividad personal, freelance, estudiantes y creadores. Hechas con oficio real.",
    ogTitle: "Nebbuler — Sistemas Notion hechos con oficio",
    ogDescription:
      "Un estudio de diseño. Tres niveles de plantillas Notion para productividad personal, freelance, estudiantes y creadores. Sin descuentos, con precio fijo.",
    ogLocale: "es_ES",
  },
  fr: {
    title: "Nebbuler — Systèmes Notion conçus avec soin",
    description:
      "Core, System et Atelier. Trois niveaux de templates Notion pour la vie personnelle, le freelance, les étudiants et les créateurs. Faits lentement.",
    ogTitle: "Nebbuler — Templates Notion faits avec métier",
    ogDescription:
      "Un studio de design. Trois niveaux de templates Notion pour la vie personnelle, le freelance, les étudiants et les créateurs. Prix fixe, travail réel.",
    ogLocale: "fr_FR",
  },
} as const;

type Locale = keyof typeof seo;

/* ── Organization JSON-LD (locale-independent) ──────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Nebbuler",
  alternateName: "Nebbuler Studio",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/nebbuler-sello.svg`,
    width: 500,
    height: 500,
    caption: "Nebbuler logo",
  },
  image: `${BASE_URL}/nebbuler-sello.svg`,
  description:
    "Nebbuler is a design studio specializing in premium Notion workspace templates. Three tiers of craft — Core, System, Atelier — across five audiences: Personal, Freelance, Student, Creator, and SMB.",
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${BASE_URL}/en/about`,
    availableLanguage: ["Spanish", "English", "French"],
  },
  sameAs: [] as string[],
};

/* ── generateMetadata ────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = (locale as Locale) in seo ? (locale as Locale) : "en";
  const s = seo[l];
  const ogImageUrl = `${BASE_URL}/og?title=${encodeURIComponent(s.ogTitle)}&subtitle=${encodeURIComponent(s.ogDescription)}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: s.title,
      template: `%s — Nebbuler`,
    },
    description: s.description,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/${l}`,
      siteName: "Nebbuler",
      title: s.ogTitle,
      description: s.ogDescription,
      locale: s.ogLocale,
      alternateLocale: (["en_US", "es_ES", "fr_FR"] as const).filter(
        (loc) => loc !== s.ogLocale
      ),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: s.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: s.ogTitle,
      description: s.ogDescription,
      images: [ogImageUrl],
      creator: "@nebbuler",
      site: "@nebbuler",
    },
    alternates: {
      canonical: `${BASE_URL}/${l}`,
      languages: {
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
        fr: `${BASE_URL}/fr`,
        "x-default": `${BASE_URL}/en`,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ── Layout ─────────────────────────────────────────────────────────────────── */
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
        <JsonLd data={organizationSchema} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
