import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const POSTS = [
  {
    slug: "how-to-build-a-second-brain-in-notion",
    category: "Productivity",
    title: "How to Build a Second Brain in Notion (2025 Guide)",
    excerpt: "Learn how to organize every thought, task, and project using a simple system built entirely inside Notion.",
    date: "Apr 2, 2025",
    readTime: "6 min read",
    color: "#d3e3fd",
  },
  {
    slug: "best-notion-templates-for-freelancers",
    category: "Freelancing",
    title: "The 5 Best Notion Templates for Freelancers",
    excerpt: "Save hours every week with these pre-built Notion workspaces designed specifically for independent workers.",
    date: "Mar 18, 2025",
    readTime: "4 min read",
    color: "#fde8d3",
  },
  {
    slug: "track-your-finances-in-notion",
    category: "Finance",
    title: "How to Track Your Finances in Notion (Step-by-Step)",
    excerpt: "A beginner-friendly guide to setting up income, expense, and savings tracking all in one Notion workspace.",
    date: "Mar 5, 2025",
    readTime: "5 min read",
    color: "#d3fde8",
  },
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ padding: "72px 24px 56px", borderBottom: "1px solid #e6e6e6", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Nebbuler
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            fontWeight: 700,
            color: "#000",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 14,
          }}>
            {t("Blog.title")}
          </h1>
          <p style={{ fontSize: 17, color: "#6b6b6b", lineHeight: 1.6, maxWidth: 500 }}>
            {t("Blog.subtitle")}
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: "56px 24px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}` as never}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  style={{
                    background: "#fff",
                    border: "1px solid #e6e6e6",
                    borderRadius: 16,
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s ease",
                  }}
                  className="hover:shadow-md transition-shadow"
                >
                  {/* Image placeholder */}
                  <div
                    style={{
                      height: 180,
                      background: `linear-gradient(135deg, ${post.color} 0%, ${post.color}88 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 40,
                    }}
                  >
                    {post.category === "Productivity" ? "🧠" : post.category === "Freelancing" ? "💼" : "💰"}
                  </div>

                  <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#484848",
                      background: "#f0f0f0",
                      borderRadius: 100,
                      padding: "2px 10px",
                      alignSelf: "flex-start",
                      letterSpacing: "0.03em",
                    }}>
                      {post.category}
                    </span>

                    <h2 style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#111",
                      lineHeight: 1.35,
                      flex: 1,
                    }}>
                      {post.title}
                    </h2>

                    <p style={{ fontSize: 13, color: "#6b6b6b", lineHeight: 1.6 }}>
                      {post.excerpt}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
                      <span style={{ fontSize: 12, color: "#888" }}>{post.date}</span>
                      <span style={{ fontSize: 12, color: "#ccc" }}>·</span>
                      <span style={{ fontSize: 12, color: "#888" }}>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
