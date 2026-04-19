import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { projects, type Category } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio/full")({
  head: () => ({
    meta: [
      { title: "Full Portfolio — Adoltech Shopify Case Studies" },
      {
        name: "description",
        content:
          "Browse Adoltech's complete portfolio of Shopify stores, migrations, and conversion projects with detailed case studies.",
      },
      { property: "og:title", content: "Full Shopify Portfolio — Adoltech" },
      {
        property: "og:description",
        content: "Long-form case studies of selected Shopify projects.",
      },
    ],
  }),
  component: FullPortfolioPage,
});

const filters: Array<"All" | Category> = ["All", "Theme", "Migration", "Optimization", "Marketing"];

function FullPortfolioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          Full Portfolio · {projects.length}+ projects
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Filter by category or click any project to read the case study.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-6">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {filtered.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="group bg-background rounded-lg border border-border overflow-hidden block hover:bg-secondary transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.category}</span>
                  <span className="text-foreground font-medium">{p.result}</span>
                </div>
                <h4 className="mt-1 font-semibold text-foreground">{p.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-12">
            No projects in this category yet.
          </p>
        )}

        {/* Detailed Case Studies */}
        <section className="mt-16">
          <h3 className="text-xl font-bold text-foreground border-t border-border pt-8">
            Detailed case studies
          </h3>
          <div className="mt-8 space-y-16">
            {projects.slice(0, 4).map((p, idx) => (
              <article key={p.slug} id={p.slug} className="scroll-mt-24">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-mono">{String(idx + 1).padStart(2, "0")}</span>
                  <span>·</span>
                  <span>{p.category}</span>
                </div>
                <h4 className="mt-2 text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {p.title}
                </h4>
                <p className="mt-2 text-muted-foreground max-w-2xl">{p.description}</p>

                <div className="mt-5 aspect-[16/9] overflow-hidden border border-border rounded-lg bg-secondary">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                <div className="mt-5 grid sm:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
                  {[
                    { label: "Result", value: p.result },
                    { label: "Timeline", value: "6–10 weeks" },
                    { label: "Stack", value: p.tech.slice(0, 2).join(", ") },
                  ].map((m) => (
                    <div key={m.label} className="bg-background p-4">
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        {m.label}
                      </div>
                      <div className="mt-1 text-base font-semibold text-foreground">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Challenge
                    </h5>
                    <p className="mt-2 text-sm text-foreground/85 leading-relaxed">
                      {p.category === "Migration"
                        ? "Legacy platform was slow, fragile, and bleeding SEO equity on every release."
                        : p.category === "Theme"
                        ? "Existing theme couldn't keep up with merchandising experiments and brand evolution."
                        : p.category === "Marketing"
                        ? "Email and paid channels were under-instrumented and ROAS was inconsistent."
                        : "Conversion was flat despite strong traffic — friction lived in PDP, cart, and checkout."}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Approach
                    </h5>
                    <ul className="mt-2 space-y-1.5 text-sm text-foreground/85">
                      <li className="flex gap-2">
                        <i className="ri-check-line text-foreground mt-0.5" aria-hidden />
                        Audit data, content model, and merchandising workflow.
                      </li>
                      <li className="flex gap-2">
                        <i className="ri-check-line text-foreground mt-0.5" aria-hidden />
                        Architect Shopify 2.0 sections and metaobjects.
                      </li>
                      <li className="flex gap-2">
                        <i className="ri-check-line text-foreground mt-0.5" aria-hidden />
                        Ship in vertical slices with weekly previews.
                      </li>
                      <li className="flex gap-2">
                        <i className="ri-check-line text-foreground mt-0.5" aria-hidden />
                        Instrument Web Vitals and funnel events from day one.
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">Like what you see?</p>
          <Link
            to="/contact"
            className="mt-3 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Start a project
            <i className="ri-arrow-right-up-line" aria-hidden />
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
