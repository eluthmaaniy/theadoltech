import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { projects, type Category } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Adoltech Shopify Projects" },
      {
        name: "description",
        content: "Selected Shopify projects: theme builds, platform migrations, and conversion optimization sprints.",
      },
      { property: "og:title", content: "Shopify Portfolio — Adoltech" },
      { property: "og:description", content: "Theme, migration, and optimization case studies." },
    ],
  }),
  component: PortfolioPage,
});

const filters: Array<"All" | Category> = ["All", "Theme", "Migration", "Optimization"];

function PortfolioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Portfolio</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Shopify projects, shipped.
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
            A focused selection of recent work — each link opens a deeper case study.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md border transition-colors",
                  active === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:bg-secondary hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
            <Link
              to="/portfolio/full"
              className="ml-auto inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Read full case studies
              <i className="ri-arrow-right-line" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to="/portfolio/full"
                hash={p.slug}
                className="group block border border-border rounded-lg overflow-hidden bg-background hover:bg-secondary transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground" aria-hidden />
                      {p.category}
                    </span>
                    <span className="font-medium text-foreground">{p.result}</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{p.tech.slice(0, 2).join(" · ")}</span>
                    <span className="text-xs font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Case study <i className="ri-arrow-right-line" aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-12">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
