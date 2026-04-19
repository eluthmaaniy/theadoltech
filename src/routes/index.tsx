import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adoltech — Shopify Developer & Store Optimization Specialist" },
      {
        name: "description",
        content:
          "Adebisi Olamide (Adoltech) is a Shopify developer helping brands launch, migrate, and optimize high-converting stores.",
      },
      { property: "og:title", content: "Adoltech — Shopify Developer" },
      {
        property: "og:description",
        content:
          "Shopify store setup, theme customization, migration, speed and conversion optimization.",
      },
    ],
  }),
  component: AboutPage,
});

const services = [
  { icon: "ri-store-2-line", title: "Shopify Store Setup", desc: "End-to-end launch — products, payments, shipping, taxes." },
  { icon: "ri-paint-brush-line", title: "Theme Customization", desc: "Pixel-precise Liquid + Shopify 2.0 sections that scale." },
  { icon: "ri-arrow-left-right-line", title: "Platform Migration", desc: "WooCommerce, Magento, BigCommerce → Shopify Plus." },
  { icon: "ri-speed-up-line", title: "Speed Optimization", desc: "Core Web Vitals, asset trimming, theme refactors." },
  { icon: "ri-puzzle-2-line", title: "App Integration", desc: "Klaviyo, Recharge, Rebuy, custom Shopify apps." },
  { icon: "ri-line-chart-line", title: "Conversion Optimization", desc: "PDP, cart, checkout audits with measurable lift." },
];

const stats = [
  { value: "70+", label: "Projects delivered" },
  { value: "40+", label: "Stores launched" },
  { value: "6 yrs", label: "Shopify experience" },
  { value: "$8M+", label: "Client GMV influenced" },
];

function AboutPage() {
  const featured = projects.slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" aria-hidden />
            Available for new Shopify projects
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Shopify Developer &<br />
            <span className="text-muted-foreground">Store Optimization Specialist.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-medium">Adebisi Olamide</span> — founder of
            Adoltech. I help D2C brands launch, migrate, and optimize Shopify stores
            that load fast, look sharp, and convert.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View portfolio
              <i className="ri-arrow-right-line" aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20 grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">About</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Built for Shopify, focused on outcomes.</h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              For six years I've shipped Shopify storefronts for indie brands and 8-figure
              merchants — from clean theme builds to high-stakes Plus migrations. I treat
              every store like a product: opinionated, measured, and quietly fast.
            </p>
            <p>
              My work focuses on three things: an honest brand expression, friction-free
              checkout, and a codebase the next developer can actually read.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Services</p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">What I help brands with.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-px bg-border border border-border rounded-lg overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-6 md:p-8 hover:bg-secondary transition-colors">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background">
                  <i className={`${s.icon} text-lg`} aria-hidden />
                </span>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 grid gap-8 grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Selected work</p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Recent Shopify projects.</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-medium underline-offset-4 hover:underline">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to="/portfolio"
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
                    <span>{p.category}</span>
                    <span>{p.result}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
          <div className="border border-border rounded-lg p-8 md:p-14 bg-primary text-primary-foreground flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                Have a Shopify project in mind?
              </h2>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/70 max-w-xl">
                Tell me about your store, your goals, and your timeline. I'll send back a
                clear plan within 48 hours.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors self-start"
            >
              Start a project
              <i className="ri-arrow-right-up-line" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
