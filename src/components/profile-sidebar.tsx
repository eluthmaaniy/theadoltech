import profilePic from "@/assets/adoltech-profile.jpg";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

function OnlinePill() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Africa/Lagos",
        }),
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10">
      <span className="relative flex h-2.5 w-2.5" aria-hidden>
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-70 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
        <span className="text-primary text-sm font-semibold">Online</span>
        <span className="text-muted-foreground text-xs tabular-nums" suppressHydrationWarning>
          {time ? `· ${time} WAT` : ""}
        </span>
    </div>
  );
}

export function ProfileSidebar() {
  return (
    <aside className="md:col-span-3 relative md:sticky md:top-4 md:self-start">
      <div className="absolute -top-16 left-0 md:static md:top-0">
        <img
          src={profilePic}
          alt="Adebisi Olamide profile"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full border-4 border-primary bg-background shadow-md object-cover"
        />
      </div>
      <div className="pt-20 md:pt-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center flex-wrap gap-x-1.5">
          <span>Adebisi Olamide</span>
          <span className="text-muted-foreground font-semibold">(Adoltech)</span>
          <i
            className="ri-verified-badge-fill text-[#1DA1F2] text-xl"
            aria-label="Verified"
            title="Verified"
          />
        </h1>
        <p className="text-sm text-muted-foreground -mt-0.5">@adoltech</p>

        <div className="flex items-center text-sm mt-2 flex-wrap gap-1.5">
          <i className="ri-star-fill text-gold" aria-hidden />
          <span className="text-foreground font-medium">4.8</span>
          <Link to="/reviews" className="text-muted-foreground hover:underline">
            (218)
          </Link>
          <span className="ml-1 bg-pink/15 text-pink border border-pink/40 px-2 py-1 rounded-full flex items-center text-xs font-medium">
            <i className="ri-award-fill mr-1" aria-hidden /> Top Rated Expert
          </span>
        </div>

        <p className="text-foreground font-medium mt-2">
          He'll bring your idea to reality
        </p>

        <div className="flex items-center text-sm text-muted-foreground mt-2 flex-wrap gap-x-4 gap-y-1">
          <span className="inline-flex items-center">
            <i className="ri-map-pin-line mr-1" aria-hidden /> Lagos, Nigeria
          </span>
        </div>

        <OnlinePill />

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
