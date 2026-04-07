interface OrganizationSchemaProps {
  url?: string;
}

export function OrganizationSchema({ url = "https://notionlatam.com" }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name: "Notion LATAM",
    url,
    logo: {
      "@type": "ImageObject",
      url: `${url}/logo.svg`,
      width: 200,
      height: 40,
    },
    description: "El ecosistema líder de Notion para empresas latinoamericanas. Templates premium, cursos completos y consultoría personalizada.",
    foundingDate: "2024",
    areaServed: {
      "@type": "GeoShape",
      name: "Latin America",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@notionlatam.com",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      "https://instagram.com/notionlatam",
      "https://twitter.com/notionlatam",
      "https://linkedin.com/company/notionlatam",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductSchemaProps {
  name: string;
  description: string;
  price: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  url: string;
  image?: string;
}

export function ProductSchema({
  name,
  description,
  price,
  currency = "USD",
  rating,
  reviewCount,
  url,
  image,
}: ProductSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    brand: {
      "@type": "Brand",
      name: "Notion LATAM",
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Notion LATAM",
      },
    },
  };

  if (image) schema.image = image;

  if (rating && reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CourseSchemaProps {
  name: string;
  description: string;
  price: number;
  url: string;
  instructor?: string;
}

export function CourseSchema({ name, description, price, url, instructor = "Notion LATAM" }: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    inLanguage: "es",
    provider: {
      "@type": "Organization",
      name: "Notion LATAM",
      url: "https://notionlatam.com",
    },
    instructor: {
      "@type": "Person",
      name: instructor,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    educationalLevel: "beginner to advanced",
    teaches: ["Notion", "Productivity", "Business Management", "Database Design"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  url: string;
  image?: string;
}

export function ArticleSchema({ title, description, datePublished, url, image }: ArticleSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    url,
    inLanguage: "es",
    author: {
      "@type": "Organization",
      name: "Notion LATAM",
      url: "https://notionlatam.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Notion LATAM",
      logo: {
        "@type": "ImageObject",
        url: "https://notionlatam.com/logo.svg",
      },
    },
  };

  if (image) schema.image = image;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
