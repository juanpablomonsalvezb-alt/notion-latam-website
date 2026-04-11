export interface Product {
  slug: string;
  name: string;
  level: "Core" | "System" | "Atelier";
  audience: "Personal" | "Freelance" | "Student" | "Creator";
  price: number;
  screenshots: number; // count of screenshots available
  subtitleEN: string;
  subtitleES: string;
  subtitleFR: string;
  buyUrl: string;
}

export const catalog: Product[] = [
  {
    slug: "system-personal",
    name: "System Personal",
    level: "System",
    audience: "Personal",
    price: 89,
    screenshots: 8,
    subtitleEN: "Eight connected databases. One clear way to start each day.",
    subtitleES: "Ocho bases conectadas. Una manera clara de empezar cada día.",
    subtitleFR: "Huit bases connectées. Une façon claire de commencer chaque journée.",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/85d9f50d-f333-469b-a73a-15e21825609e",
  },
  {
    slug: "system-freelance",
    name: "System Freelance",
    level: "System",
    audience: "Freelance",
    price: 89,
    screenshots: 10,
    subtitleEN: "Client work, projects, and income — all connected in one system.",
    subtitleES: "Trabajo de clientes, proyectos e ingresos — todo conectado en un sistema.",
    subtitleFR: "Travail client, projets et revenus — tout connecté en un seul système.",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/37fb93f0-aa51-4ee1-9918-27a1e8a5ec67",
  },
  {
    slug: "system-creator",
    name: "System Creator",
    level: "System",
    audience: "Creator",
    price: 89,
    screenshots: 6,
    subtitleEN: "Content, ideas, revenue, and collaborators — in one coherent system.",
    subtitleES: "Contenido, ideas, ingresos y colaboradores — en un sistema coherente.",
    subtitleFR: "Contenu, idées, revenus et collaborateurs — dans un système cohérent.",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/81301614-c319-4642-8a88-b945836a1d2b",
  },
  {
    slug: "system-student",
    name: "System Student",
    level: "System",
    audience: "Student",
    price: 89,
    screenshots: 8,
    subtitleEN: "Notes, courses, deadlines, and long-term work — carefully organized.",
    subtitleES: "Notas, cursos, plazos y trabajo a largo plazo — cuidadosamente organizados.",
    subtitleFR: "Notes, cours, délais et travail à long terme — soigneusement organisés.",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/9476b200-8227-483e-a21c-a53dda55a8ee",
  },
  {
    slug: "core-personal",
    name: "Core Personal",
    level: "Core",
    audience: "Personal",
    price: 39,
    screenshots: 4,
    subtitleEN: "The smallest Notion system that actually works.",
    subtitleES: "El sistema de Notion más pequeño que realmente funciona.",
    subtitleFR: "Le plus petit système Notion qui fonctionne vraiment.",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/29011bde-c112-4c5a-aa7e-145b9024ac22",
  },
  {
    slug: "core-freelance",
    name: "Core Freelance",
    level: "Core",
    audience: "Freelance",
    price: 39,
    screenshots: 5,
    subtitleEN: "Projects, clients, and income. Nothing else.",
    subtitleES: "Proyectos, clientes e ingresos. Nada más.",
    subtitleFR: "Projets, clients et revenus. Rien de plus.",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/cb7d37a6-bb93-410e-a497-fa2c38643068",
  },
  {
    slug: "core-student",
    name: "Core Student",
    level: "Core",
    audience: "Student",
    price: 29,
    screenshots: 6,
    subtitleEN: "Courses, notes, and deadlines — focused on what the semester demands.",
    subtitleES: "Cursos, notas y plazos — enfocados en lo que el semestre exige.",
    subtitleFR: "Cours, notes et délais — centrés sur ce que le semestre exige.",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/15badd47-2527-41b6-8e5b-d9f091444b21",
  },
  {
    slug: "atelier-personal",
    name: "Atelier Personal",
    level: "Atelier",
    audience: "Personal",
    price: 179,
    screenshots: 7,
    subtitleEN: "A method-driven system that goes beyond what Notion alone can be.",
    subtitleES: "Un sistema basado en método que va más allá de lo que Notion puede ser solo.",
    subtitleFR: "Un système orienté méthode qui dépasse ce que Notion peut être seul.",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/98f8a675ead-a77d-314feb4c906e",
  },
  {
    slug: "atelier-freelance",
    name: "Atelier Freelance",
    level: "Atelier",
    audience: "Freelance",
    price: 179,
    screenshots: 6,
    subtitleEN: "A complete practice for independent professionals.",
    subtitleES: "Una práctica completa para profesionales independientes.",
    subtitleFR: "Une pratique complète pour les professionnels indépendants.",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/86f28e3b-a769-48c7-8fb8-dc1e38361ab3",
  },
  {
    slug: "atelier-creator",
    name: "Atelier Creator",
    level: "Atelier",
    audience: "Creator",
    price: 179,
    screenshots: 7,
    subtitleEN: "An operating system for serious creative work.",
    subtitleES: "Un sistema operativo para el trabajo creativo serio.",
    subtitleFR: "Un système d'exploitation pour le travail créatif sérieux.",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/83b2651f-f862-46c5-8062-368d08d47eda",
  },
];

/* ── Bundles (by audience) ─────────────────────────────────────────────────── */
export interface Bundle {
  slug: string;
  name: string;
  audience: string;
  buyUrl: string;
}

export const bundles: Bundle[] = [
  {
    slug: "bundle-personal",
    name: "Personal Bundle",
    audience: "Personal",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/8361d4e1-654c-476e-b451-68d3ca851883",
  },
  {
    slug: "bundle-freelance",
    name: "Freelance Bundle",
    audience: "Freelance",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/4b41e6e0-a31c-4ea7-975b-12c56e4c39d0",
  },
  {
    slug: "bundle-creator",
    name: "Creator Bundle",
    audience: "Creator",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/b72e67ae-b094-40ea-b9d8-60f92eff2ce5",
  },
  {
    slug: "bundle-student",
    name: "Student Bundle",
    audience: "Student",
    buyUrl: "https://jpmb1975.lemonsqueezy.com/checkout/buy/2057cda0-f89d-4807-8cc6-2b429a68b22e",
  },
];

// 6 featured products for the homepage
export const featuredSlugs = [
  "system-personal",
  "system-freelance",
  "atelier-personal",
  "atelier-creator",
  "core-personal",
  "core-student",
];

export function getFeatured(): Product[] {
  return featuredSlugs.map(s => catalog.find(p => p.slug === s)!);
}
