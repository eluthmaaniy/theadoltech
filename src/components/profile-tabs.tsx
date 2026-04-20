import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function ProfileTabs() {
  const location = useLocation();

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    if (to === "/portfolio") return location.pathname.startsWith("/portfolio");
    if (to === "/reviews") return location.pathname.startsWith("/reviews") || location.pathname === "/full-reviews";
    return location.pathname === to;
  };

  return (
    <nav
      aria-label="Profile sections"
      className="flex overflow-x-auto space-x-6 md:space-x-8 text-foreground font-medium text-sm md:text-base whitespace-nowrap border-b border-border pb-4"
    >
      {tabs.map((t) => (
        <Link
          key={t.to}
          to={t.to}
          className={cn(
            "transition-colors pb-1 -mb-[17px] border-b-2",
            isActive(t.to)
              ? "border-foreground text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground",
          )}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
