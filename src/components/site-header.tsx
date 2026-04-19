import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <i className="ri-shopping-bag-3-fill text-base" aria-hidden />
          </span>
          <span className="text-base font-semibold tracking-tight">Adoltech</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Hire Me
            <i className="ri-arrow-right-up-line" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={cn("text-xl", open ? "ri-close-line" : "ri-menu-line")} aria-hidden />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-3 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              Hire Me
              <i className="ri-arrow-right-up-line" aria-hidden />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
