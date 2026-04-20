import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import {
  featuredShowcase,
  fullProjects,
  filterCategories,
  type FullCategory,
} from "@/lib/full-portfolio-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/full-portfolio")({
  head: () => ({
    meta: [
      { title: "Full Portfolio · Adoltech – All Shopify Projects" },
      {
        name: "description",
        content:
          "Browse the complete catalogue of 49+ Shopify projects delivered by Adoltech across fashion, beauty, jewelry, food, furniture and more.",
      },
      { property: "og:title", content: "Full Portfolio · Adoltech" },
      {
        property: "og:description",
        content: "All Shopify projects delivered by Adoltech, filterable by category.",
      },
    ],
  }),
  component: FullPortfolioPage,
});

type Filter = FullCategory | "all";

function FullPortfolioPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [order, setOrder] = useState<"recent" | "popular" | "rating" | "category">("recent");

  const projects = useMemo(() => {
    let list = filter === "all" ? fullProjects : fullProjects.filter((p) => p.category === filter);
    if (order === "category") {
      list = [...list].sort((a, b) => a.category.localeCompare(b.category));
    } else if (order === "rating" || order === "popular") {
      list = [...list].reverse();
    }
    return list;
  }, [filter, order]);

  return (
    <SiteLayout>
      <section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Full Portfolio (All Projects)
          </h2>
          <div className="mt-4 md:mt-0">
            <select
              value={order}
              onChange={(e) => setOrder(e.target.value as typeof order)}
              className="bg-card border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Sort projects"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="category">By Category</option>
            </select>
          </div>
        </div>

        {/* Featured Showcase */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Featured Showcase</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredShowcase.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Featured project ${i + 1}`}
                className="rounded-lg border border-border w-full h-48 md:h-64 object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filterCategories.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter(c.value as Filter)}
              className={cn(
                "px-4 py-2 rounded-full border text-sm transition-colors",
                filter === c.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={`${p.title}-${i}`}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-foreground/40 transition-colors"
            >
              <img
                src={p.image}
                alt={p.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Ordered by{" "}
                  <span className="font-medium text-foreground">{p.orderedBy}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No projects in this category yet.
          </p>
        )}
      </section>
    </SiteLayout>
  );
}
