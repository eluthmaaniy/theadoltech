import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Adoltech Shopify Developer" },
      {
        name: "description",
        content: "Tell Adebisi Olamide about your Shopify project. Reply within 48 hours.",
      },
      { property: "og:title", content: "Contact Adoltech" },
      { property: "og:description", content: "Start a Shopify project or ask a question." },
    ],
  }),
  component: ContactPage,
});

const projectTypes = [
  "Shopify store setup",
  "Theme customization",
  "Platform migration",
  "Speed optimization",
  "Conversion optimization",
  "App integration",
  "Other",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Let's build something on Shopify.
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
            Share a few details about your store and goals. I reply to every message within 48 hours.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16 grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Form */}
          <div className="border border-border rounded-lg p-6 md:p-8 bg-background">
            {submitted ? (
              <div className="py-12 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border">
                  <i className="ri-check-line text-2xl" aria-hidden />
                </span>
                <h2 className="mt-4 text-2xl font-semibold">Thanks — message received.</h2>
                <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                  I'll get back to you within 48 hours. In the meantime, feel free to browse the{" "}
                  <a href="/portfolio" className="underline underline-offset-4">portfolio</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@brand.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium">Project type</label>
                  <select
                    id="type"
                    name="type"
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    defaultValue={projectTypes[0]}
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell me about your store, what you're trying to achieve, and your timeline."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Send message
                  <i className="ri-send-plane-line" aria-hidden />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-secondary">
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="inline-block h-2 w-2 rounded-full bg-foreground" aria-hidden />
                Available for new projects
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Currently booking starts from the first week of next month.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-sm font-semibold">Direct</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <i className="ri-mail-line" aria-hidden /> hello@adoltech.dev
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <i className="ri-map-pin-line" aria-hidden /> Lagos, Nigeria · Remote
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <i className="ri-time-line" aria-hidden /> Reply within 48 hours
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-sm font-semibold">Elsewhere</h3>
              <div className="mt-3 flex items-center gap-2">
                {[
                  { icon: "ri-twitter-x-line", href: "https://x.com" },
                  { icon: "ri-linkedin-fill", href: "https://linkedin.com" },
                  { icon: "ri-github-fill", href: "https://github.com" },
                  { icon: "ri-dribbble-fill", href: "https://dribbble.com" },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.icon}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-secondary transition-colors"
                  >
                    <i className={s.icon} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
