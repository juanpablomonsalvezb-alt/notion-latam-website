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
    buyUrl: "#",
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
    buyUrl: "#",
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
    buyUrl: "#",
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
    buyUrl: "#",
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
    buyUrl: "#",
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
    buyUrl: "#",
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
    buyUrl: "#",
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
    buyUrl: "#",
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
    buyUrl: "#",
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
    buyUrl: "#",
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
