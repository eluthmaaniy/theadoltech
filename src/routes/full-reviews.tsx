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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const highlighted = allReviews.filter((r) => r.rating === 5).slice(0, 5);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const filtered = allReviews.filter((r) => {
    if (filter === "all") return true;
    if (filter === "repeat") return r.repeatedClient;
    return r.rating === Number(filter);
  });

  return (
    <SiteLayout>
      {/* Highlighted slider */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground">Highlighted reviews</h3>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous review"
              className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <i className="ri-arrow-left-s-line text-xl" aria-hidden />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next review"
              className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <i className="ri-arrow-right-s-line text-xl" aria-hidden />
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {highlighted.map((r) => (
              <div
                key={r.username + r.text.slice(0, 8)}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2"
              >
                <article className="h-full bg-secondary/40 rounded-lg p-5 border border-border">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/60?img=${r.avatarSeed}`}
                      alt=""
                      className="w-11 h-11 rounded-full grayscale"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{r.username}</p>
                      <p className="text-xs text-muted-foreground">{r.country}</p>
                    </div>
                    <div className="ml-auto">
                      <Stars count={r.rating} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground/85 leading-relaxed line-clamp-4">
                    {r.text}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-1.5 mt-4">
          {highlighted.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to highlight ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === selectedIndex ? "bg-primary w-6" : "bg-border w-2.5"
              }`}
            />
          ))}
        </div>
      </div>

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
