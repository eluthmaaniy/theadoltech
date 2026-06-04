import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Adoltech — Start your Shopify project" },
      {
        name: "description",
        content:
          "Contact Adebisi Olamide (Adoltech) for Shopify development, migration, or optimization. Average response time: 1 hour.",
      },
      { property: "og:title", content: "Contact Adoltech" },
      {
        property: "og:description",
        content: "Start a Shopify project — average response time 1 hour.",
      },
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
  "Email marketing (Klaviyo)",
  "Other",
];

const budgetRanges = [
  "Under $200",
  "$200 – $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const type = String(data.get("type") || "");
    const budget = String(data.get("budget") || "");
    const message = String(data.get("message") || "");

    const text = `Hi Adoltech, I'd like to start a project.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Project type:* ${type}%0A*Budget:* ${budget}%0A%0A*Message:*%0A${message}`;
    const url = `https://wa.me/2349029628089?text=${encodeURI(text).replace(/#/g, "%23")}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Contact</h2>
        <p className="mt-3 text-muted-foreground">
          Get in touch via the form below or message me directly on{" "}
          <a
            href="https://wa.me/2349029628089"
            target="_blank"
            rel="noreferrer"
            className="text-foreground font-medium hover:underline"
          >
            WhatsApp
          </a>
          .
        </p>

        <div className="mt-8 grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="bg-background border border-border rounded-lg p-6 md:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary border border-border">
                  <i className="ri-check-line text-2xl text-foreground" aria-hidden />
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Thanks — message received.
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  I'll get back to you within 1 hour during working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5 max-w-lg mx-auto">
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm" htmlFor="name">
                    <i className="ri-user-line mr-1" aria-hidden /> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm" htmlFor="email">
                    <i className="ri-mail-line mr-1" aria-hidden /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@brand.com"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm" htmlFor="type">
                    <i className="ri-briefcase-line mr-1" aria-hidden /> Project type
                  </label>
                  <select
                    id="type"
                    name="type"
                    defaultValue={projectTypes[0]}
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm" htmlFor="budget">
                    <i className="ri-wallet-3-line mr-1" aria-hidden /> Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue={budgetRanges[2]}
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block text-foreground font-medium mb-2 text-sm"
                    htmlFor="message"
                  >
                    <i className="ri-chat-3-line mr-1" aria-hidden /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell me about your store, what you're trying to achieve, and your timeline."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity flex items-center font-medium"
                >
                  <i className="ri-send-plane-fill mr-2" aria-hidden /> Send Message
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="border border-border rounded-lg p-5 bg-secondary">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="inline-block h-2 w-2 rounded-full bg-foreground" aria-hidden />
                Available for new projects
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Currently booking from the first week of next month.
              </p>
            </div>

            <div className="border border-border rounded-lg p-5">
              <h4 className="text-sm font-semibold text-foreground">Direct</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <i className="ri-whatsapp-line" aria-hidden />
                  <a
                    href="https://wa.me/2349029628089"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-foreground"
                  >
                    +234 902 962 8089
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-map-pin-line" aria-hidden /> Lagos, Nigeria · Remote
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-time-line" aria-hidden /> Reply within 1 hour
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-5">
              <h4 className="text-sm font-semibold text-foreground">Elsewhere</h4>
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
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors text-foreground"
                  >
                    <i className={s.icon} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}
