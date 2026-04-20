import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SiteLayout } from "@/components/site-layout";
import { Stars } from "@/components/stars";
import { allReviews, reviewSummary } from "@/lib/reviews-data";

export const Route = createFileRoute("/full-reviews")({
  head: () => ({
    meta: [
      { title: "All Reviews — Adoltech Shopify Expert" },
      {
        name: "description",
        content:
          "Read every client review for Adoltech — 218+ genuine testimonials from Shopify brands worldwide.",
      },
      { property: "og:title", content: "All Reviews — Adoltech" },
      {
        property: "og:description",
        content: "218+ verified client testimonials.",
      },
    ],
  }),
  component: FullReviewsPage,
});

function FullReviewsPage() {
  const [filter, setFilter] = useState<"all" | "5" | "4" | "repeat">("all");

  const filtered = allReviews.filter((r) => {
    if (filter === "all") return true;
    if (filter === "repeat") return r.repeatedClient;
    return r.rating === Number(filter);
  });

  return (
    <SiteLayout>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            All reviews · {reviewSummary.total}
          </h2>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <Stars count={5} />
            <span className="font-medium text-foreground">{reviewSummary.avg.toFixed(1)}</span>
            <span className="text-muted-foreground">({reviewSummary.total} reviews)</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All" },
            { id: "5", label: "5 stars" },
            { id: "4", label: "4 stars" },
            { id: "repeat", label: "Repeated clients" },
          ].map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id as typeof filter)}
              className={
                filter === f.id
                  ? "bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium"
                  : "bg-background border border-border px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              }
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {filtered.map((r) => (
          <article
            key={r.username + r.text.slice(0, 12)}
            className="bg-background rounded-lg p-5 border border-border"
          >
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <img
                  src={`https://i.pravatar.cc/60?img=${r.avatarSeed}`}
                  alt=""
                  className="w-12 h-12 rounded-full grayscale"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-foreground">{r.username}</p>
                    <img
                      src={`https://flagcdn.com/24x18/${r.countryCode}.png`}
                      alt={r.country}
                      width={24}
                      height={18}
                    />
                    {r.repeatedClient && (
                      <span className="bg-secondary border border-border text-foreground text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        Repeated client
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{r.country}</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 text-sm text-foreground">
                <Stars count={r.rating} />
                <span className="ml-1 font-medium">{r.rating}</span>
              </div>
            </div>

            <p className="mt-4 text-sm text-foreground/85 leading-relaxed">{r.text}</p>

            <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={r.gigImage}
                  alt=""
                  className="w-[72px] h-12 object-cover rounded-md grayscale"
                />
                <div className="text-xs text-muted-foreground">
                  {r.price} · {r.duration}
                </div>
              </div>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-12">
            No reviews match this filter.
          </p>
        )}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
        >
          Be the next happy client
          <i className="ri-arrow-right-up-line" aria-hidden />
        </Link>
      </div>
    </SiteLayout>
  );
}
