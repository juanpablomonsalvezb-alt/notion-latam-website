import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const meta = (messages as Record<string, Record<string, string>>).metadata;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { 'es': '/es', 'en': '/en', 'fr': '/fr' },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: ["/og-image.svg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased bg-notion-bg dark:bg-notion-bg-dark text-notion-text-primary dark:text-notion-text-dark">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Analytics />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
