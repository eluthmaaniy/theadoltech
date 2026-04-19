import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <i className="ri-shopping-bag-3-fill text-base" aria-hidden />
            </span>
            <span className="text-base font-semibold tracking-tight">Adoltech</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Shopify Developer & Store Optimization Specialist helping brands launch
            faster, convert better, and scale with confidence.
          </p>
          <div className="mt-5 flex items-center gap-2">
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
                aria-label={s.icon}
              >
                <i className={s.icon} aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/reviews" className="text-muted-foreground hover:text-foreground">Reviews</Link></li>
            <li><Link to="/portfolio" className="text-muted-foreground hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/portfolio/full" className="text-muted-foreground hover:text-foreground">Case studies</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-muted-foreground">hello@adoltech.dev</li>
            <li className="text-muted-foreground">Lagos, Nigeria · Remote</li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-foreground" aria-hidden />
              Available for new projects
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Adebisi Olamide · Adoltech. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Built with care, no gradients.</p>
        </div>
      </div>
    </footer>
  );
}
