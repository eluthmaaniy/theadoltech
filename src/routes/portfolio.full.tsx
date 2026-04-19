import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio/full")({
  head: () => ({
    meta: [
      { title: "Full Case Studies — Adoltech Shopify Portfolio" },
      {
        name: "description",
        content: "Detailed Shopify case studies: challenge, approach, and measurable results for each project.",
      },
      { property: "og:title", content: "Full Shopify Case Studies — Adoltech" },
      { property: "og:description", content: "Long-form breakdowns of selected Shopify projects." },
    ],
  }),
  component: FullPortfolioPage,
});

const studies = projects.map((p) => ({
  ...p,
  challenge:
    p.category === "Migration"
      ? "Legacy platform was slow, fragile, and bleeding SEO equity on every release."
      : p.category === "Theme"
      ? "Existing theme couldn't keep up with merchandising experiments and brand evolution."
      : "Conversion was flat despite strong traffic — friction lived in PDP, cart, and checkout.",
  approach: [
    "Discovery: audit data, content model, and merchandising workflows.",
    "Architecture: design Shopify 2.0 sections, metaobjects, and a clean Liquid foundation.",
    "Build: ship in vertical slices with weekly preview environments.",
    "Measure: instrument Web Vitals and funnel events from day one.",
  ],
  metrics: [
    { label: "Result", value: p.result },
    { label: "Timeline", value: "6–10 weeks" },
    { label: "Stack", value: p.tech.slice(0, 2).join(", ") },
  ],
  testimonial: {
    quote: `Working with Adoltech on ${p.client} was exactly what we needed — calm, sharp, and on-time.`,
    author: `${p.client} team`,
  },
}));

function FullPortfolioPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Case studies</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            The full breakdown.
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
            Long-form case studies covering the challenge, the approach, and the numbers.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16 grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* Sticky index */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Projects</p>
              <ul className="mt-4 space-y-2">
                {studies.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`#${s.slug}`}
                      className="block text-sm text-muted-foreground hover:text-foreground border-l border-border pl-3 py-1 hover:border-foreground transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Studies */}
          <div className="space-y-20">
            {studies.map((s, idx) => (
              <article key={s.slug} id={s.slug} className="scroll-mt-24">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-mono">{String(idx + 1).padStart(2, "0")}</span>
                  <span>·</span>
                  <span>{s.category}</span>
                </div>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl">{s.description}</p>

                <div className="mt-6 aspect-[16/9] overflow-hidden border border-border rounded-lg bg-secondary">
                  <img src={s.cover} alt={s.title} loading="lazy" className="h-full w-full object-cover grayscale" />
                </div>

                {/* Metrics */}
                <div className="mt-6 grid gap-px bg-border border border-border rounded-lg overflow-hidden grid-cols-1 sm:grid-cols-3">
                  {s.metrics.map((m) => (
                    <div key={m.label} className="bg-background p-5">
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{m.label}</div>
                      <div className="mt-2 text-lg font-semibold">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge / Approach */}
                <div className="mt-10 grid gap-10 md:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Challenge
                    </h3>
                    <p className="mt-3 text-base leading-relaxed">{s.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Approach
                    </h3>
                    <ul className="mt-3 space-y-2 text-base leading-relaxed">
                      {s.approach.map((a) => (
                        <li key={a} className="flex gap-3">
                          <i className="ri-check-line mt-1 text-foreground" aria-hidden />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stack */}
                <div className="mt-10">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Stack</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-md border border-border bg-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="mt-10 border-l-2 border-foreground pl-5 py-2">
                  <p className="text-lg italic">“{s.testimonial.quote}”</p>
                  <footer className="mt-2 text-sm text-muted-foreground">— {s.testimonial.author}</footer>
                </blockquote>
              </article>
            ))}

            <div className="border-t border-border pt-10 flex flex-wrap gap-3 items-center justify-between">
              <p className="text-sm text-muted-foreground">Like what you see?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start a project
                <i className="ri-arrow-right-up-line" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
