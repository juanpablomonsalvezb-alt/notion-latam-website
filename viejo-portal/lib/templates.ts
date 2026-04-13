export interface Template {
  slug: string;
  name: string;
  category: "Life OS" | "Freelancer OS";
  price: number;
  description: string;
}

export const templates: Template[] = [
  {
    slug: "life-planner",
    name: "Life Planner",
    category: "Life OS",
    price: 0,
    description: "Plan your life, habits and goals in one place.",
  },
  {
    slug: "habit-tracker",
    name: "Habit Tracker",
    category: "Life OS",
    price: 0,
    description: "Track daily habits and build better routines.",
  },
  {
    slug: "finance-tracker",
    name: "Finance Tracker",
    category: "Life OS",
    price: 19,
    description: "Manage income, expenses and savings goals.",
  },
  {
    slug: "second-brain",
    name: "Second Brain",
    category: "Life OS",
    price: 49,
    description: "All-in-one system for tasks, notes and projects.",
  },
  {
    slug: "freelance-dashboard",
    name: "Freelance Dashboard",
    category: "Freelancer OS",
    price: 0,
    description: "Manage your freelance business and clients.",
  },
  {
    slug: "client-crm",
    name: "Client CRM",
    category: "Freelancer OS",
    price: 39,
    description: "Track clients, projects and invoices in Notion.",
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
