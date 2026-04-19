import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Adoltech Shopify Developer" },
      {
        name: "description",
        content: "What clients say about working with Adebisi Olamide on their Shopify stores.",
      },
      { property: "og:title", content: "Client Reviews — Adoltech" },
      { property: "og:description", content: "Real testimonials from Shopify brands." },
    ],
  }),
  component: ReviewsPage,
});

const featured = {
  quote:
    "Adoltech rebuilt our Shopify Plus store from the ground up. Page load dropped by 2.4 seconds and we saw a 38% lift in conversion in the first month.",
  name: "Maya Okonkwo",
  role: "Head of E-commerce",
  store: "Northwind Apparel",
};

const reviews = [
  {
    rating: 5,
    quote:
      "He migrated our 12,000 SKU catalog from WooCommerce with zero downtime. Honest timelines, zero drama.",
    name: "Daniel Hertz",
    role: "Founder",
    store: "Atlas Coffee Co.",
  },
  {
    rating: 5,
    quote:
      "Our PDP and cart drawer feel native to Shopify but completely on-brand. Add to cart jumped 21%.",
    name: "Lila Bloomroot",
    role: "Brand Director",
    store: "Bloomroot Skincare",
  },
  {
    rating: 5,
    quote: "Subscription onboarding finally clicks. LTV up 33% and the dashboard is readable.",
    name: "Owen Park",
    role: "Growth Lead",
    store: "Ember Outdoors",
  },
  {
    rating: 5,
    quote:
      "The Magento → Shopify replatform was the smoothest migration we've ever done. Recommend without hesitation.",
    name: "Priya Nair",
    role: "CTO",
    store: "Noir Eyewear",
  },
  {
    rating: 5,
    quote: "Theme is modular, fast, and our merchandisers can ship pages without touching code.",
    name: "Marcus Lee",
    role: "Director of Digital",
    store: "Harborline Furniture",
  },
  {
    rating: 5,
    quote: "Quiet, sharp, ships on time. He treats our store like he owns the brand.",
    name: "Sade Adeyemi",
    role: "Founder",
    store: "Kindle & Stone",
  },
];

const brands = ["NORTHWIND", "ATLAS", "BLOOMROOT", "EMBER", "NOIR", "HARBORLINE"];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={i < count ? "ri-star-fill text-foreground" : "ri-star-line text-muted-foreground"}
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Reviews</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Trusted by Shopify brands.
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
            A few words from founders, ecommerce leads, and merchandising teams I've shipped with.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20">
          <Stars count={5} />
          <blockquote className="mt-6 text-2xl md:text-4xl font-medium leading-snug tracking-tight max-w-4xl">
            “{featured.quote}”
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-md bg-foreground text-background flex items-center justify-center font-semibold">
              {featured.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold">{featured.name}</div>
              <div className="text-sm text-muted-foreground">{featured.role} · {featured.store}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <article key={r.name} className="border border-border rounded-lg p-6 bg-background hover:bg-secondary transition-colors">
                <Stars count={r.rating} />
                <p className="mt-4 text-sm leading-relaxed text-foreground">“{r.quote}”</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role} · {r.store}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brands strip */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground text-center">
            Brands I've worked with
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {brands.map((b) => (
              <div key={b} className="text-center text-sm font-semibold tracking-[0.2em] text-muted-foreground">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Want to be the next one?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Let's talk about your Shopify store and what's next on your roadmap.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Start a project
            <i className="ri-arrow-right-up-line" aria-hidden />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
