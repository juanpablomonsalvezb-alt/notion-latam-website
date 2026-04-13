import { templates } from "@/lib/templates";
import { TemplateDetailClient } from "./TemplateDetailClient";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TemplateDetailClient slug={slug} />;
}
