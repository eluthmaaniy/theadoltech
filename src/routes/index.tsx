import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adoltech — Shopify Developer & Store Optimization Specialist" },
      {
        name: "description",
        content:
          "Adebisi Olamide (Adoltech) — Shopify expert helping brands launch, migrate, and optimize high-converting stores.",
      },
      { property: "og:title", content: "Adoltech — Shopify Expert" },
      {
        property: "og:description",
        content:
          "Shopify store setup, theme customization, migration, speed and conversion optimization.",
      },
    ],
  }),
  component: AboutPage,
});

const skillsPrimary = [
  "Shopify Developer",
  "Shopify 2.0 Sections",
  "Liquid Expert",
  "Theme Customization",
  "Store Migration",
];

const skillsExtra = [
  "Speed Optimization",
  "Conversion Optimization",
  "Klaviyo Email Flows",
  "Meta Ads Manager",
  "Google Ads",
  "Recharge Subscriptions",
  "Rebuy Personalization",
  "Hydrogen / Headless",
  "Metaobjects",
  "Shopify Plus",
  "Checkout Extensibility",
  "Web Vitals Tuning",
];

function AboutPage() {
  const [bioOpen, setBioOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);

  return (
    <SiteLayout>
      {/* About */}
      <section id="about">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">About me</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Hi, I'm <span className="font-semibold text-foreground">Adebisi Olamide</span> — founder
          of Adoltech. I have over 6 years of experience building, migrating, and optimizing
          Shopify stores for D2C brands and 8-figure merchants.{" "}
          {!bioOpen && (
            <button
              type="button"
              onClick={() => setBioOpen(true)}
              className="text-foreground font-medium hover:underline"
            >
              Read more
            </button>
          )}
        </p>
        {bioOpen && (
          <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
            <p>
              I've delivered 70+ Shopify projects — from clean theme builds to high-stakes Shopify
              Plus migrations. My focus is honest brand expression, friction-free checkout, and
              codebases the next developer can actually read.
            </p>
            <p>
              Beyond development, I help brands grow through Klaviyo flows, Meta Ads, and
              conversion-optimization sprints rooted in real data — not vanity metrics.
            </p>
            <button
              type="button"
              onClick={() => setBioOpen(false)}
              className="text-foreground font-medium hover:underline"
            >
              Show less
            </button>
          </div>
        )}

        <h3 className="mt-8 text-lg font-bold text-foreground">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {skillsPrimary.map((s) => (
            <span
              key={s}
              className="bg-secondary border border-border rounded-full px-3 py-1 text-sm text-foreground"
            >
              {s}
            </span>
          ))}
          {!skillsOpen && (
            <button
              type="button"
              onClick={() => setSkillsOpen(true)}
              className="bg-secondary border border-border rounded-full px-3 py-1 text-sm text-foreground font-bold hover:bg-accent"
            >
              +{skillsExtra.length}
            </button>
          )}
          {skillsOpen &&
            skillsExtra.map((s) => (
              <span
                key={s}
                className="bg-secondary border border-border rounded-full px-3 py-1 text-sm text-foreground"
              >
                {s}
              </span>
            ))}
          {skillsOpen && (
            <button
              type="button"
              onClick={() => setSkillsOpen(false)}
              className="bg-secondary border border-border rounded-full px-3 py-1 text-sm text-foreground font-bold hover:bg-accent"
            >
              Show less
            </button>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "70+", l: "Projects delivered" },
            { v: "40+", l: "Stores launched" },
            { v: "6 yrs", l: "Shopify experience" },
            { v: "$8M+", l: "Client GMV influenced" },
          ].map((s) => (
            <div
              key={s.l}
              className="border border-border rounded-lg p-5 bg-background hover:bg-secondary transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground">{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages / Education */}
      <section className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-foreground">Languages</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex justify-between border-b border-border pb-2">
              <span className="text-foreground">English</span>
              <span className="text-muted-foreground">Fluent</span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <span className="text-foreground">Yoruba</span>
              <span className="text-muted-foreground">Native</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">Certifications</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start gap-2 border-b border-border pb-2">
              <i className="ri-medal-2-line text-foreground mt-0.5" aria-hidden />
              <span>
                <span className="text-foreground font-medium">Shopify Partner</span>
                <span className="text-muted-foreground"> · 2020 – Present</span>
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-border pb-2">
              <i className="ri-medal-2-line text-foreground mt-0.5" aria-hidden />
              <span>
                <span className="text-foreground font-medium">Klaviyo Product Certified</span>
                <span className="text-muted-foreground"> · 2022</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="border border-border rounded-lg p-6 md:p-10 bg-primary text-primary-foreground flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Have a Shopify project in mind?
            </h3>
            <p className="mt-2 text-sm md:text-base text-primary-foreground/70 max-w-xl">
              Tell me about your store and goals — I'll send back a clear plan within 48 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors self-start"
          >
            Start a project
            <i className="ri-arrow-right-up-line" aria-hidden />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
