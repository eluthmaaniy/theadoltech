import profilePic from "@/assets/adoltech-profile.jpg";
import { Link } from "@tanstack/react-router";

export function ProfileSidebar() {
  return (
    <aside className="md:col-span-3 relative md:sticky md:top-4 md:self-start">
      <div className="absolute -top-16 left-0 md:static md:top-0">
        <img
          src={profilePic}
          alt="Adebisi Olamide profile"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full border-4 border-foreground bg-background shadow-md object-cover"
        />
      </div>
      <div className="pt-20 md:pt-4">
        <h1 className="text-2xl font-bold text-foreground">Adebisi Olamide</h1>
        <p className="text-sm text-muted-foreground -mt-0.5">@adoltech</p>

        <div className="flex items-center text-sm mt-2 flex-wrap gap-1.5">
          <i className="ri-star-fill text-foreground" aria-hidden />
          <span className="text-foreground font-medium">5.0</span>
          <Link to="/reviews" className="text-muted-foreground hover:underline">
            (218)
          </Link>
          <span className="ml-1 bg-secondary text-foreground border border-border px-2 py-1 rounded-full flex items-center text-xs font-medium">
            <i className="ri-award-fill mr-1" aria-hidden /> Top Rated Expert
          </span>
        </div>

        <p className="text-foreground font-medium mt-2">
          Shopify Developer & Store Optimization Specialist.
        </p>

        <div className="flex items-center text-sm text-muted-foreground mt-2 flex-wrap gap-x-4 gap-y-1">
          <span className="inline-flex items-center">
            <i className="ri-map-pin-line mr-1" aria-hidden /> Lagos, Nigeria
          </span>
          <span className="inline-flex items-center">
            <i className="ri-global-line mr-1" aria-hidden /> English
          </span>
        </div>

        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground mr-2" aria-hidden />
          Available for new projects
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block mt-6">
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity font-medium"
          >
            <i className="ri-send-plane-line mr-2" aria-hidden /> Contact me
          </Link>
          <p className="text-center text-muted-foreground text-sm mt-2">
            Average response time: 1 hour
          </p>
        </div>

        {/* Socials */}
        <div className="hidden md:flex items-center gap-2 mt-5">
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
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <i className={s.icon} aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
