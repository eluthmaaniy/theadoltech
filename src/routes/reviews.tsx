import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Stars } from "@/components/stars";
import { reviewSummary, featuredReviews } from "@/lib/reviews-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Adoltech Shopify Expert" },
      {
        name: "description",
        content:
          "218+ five-star reviews for Adoltech. See what Shopify merchants say about working with Adebisi Olamide.",
      },
      { property: "og:title", content: "Client Reviews — Adoltech" },
      {
        property: "og:description",
        content: "Real testimonials from Shopify brands worldwide.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="md:flex md:gap-8">
        {/* Summary */}
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            {reviewSummary.total} Reviews
          </h2>

          <div className="mt-4 flex items-start gap-4">
            <div>
              <div className="text-3xl font-bold text-foreground">
                {reviewSummary.avg.toFixed(1)}
              </div>
              <Stars count={5} className="mt-1" />
            </div>

            <div className="ml-2 text-sm text-muted-foreground flex-1">
              {reviewSummary.breakdown.map((b) => (
                <div key={b.stars} className="flex items-center gap-2 mt-2 first:mt-0">
                  <span className="w-16 text-foreground">{b.stars} Stars</span>
                  <div className="flex-1 bg-secondary h-2 rounded overflow-hidden">
                    <div
                      className="bg-foreground h-2"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                  <span className="w-12 text-right">({b.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality metrics */}
          <div className="mt-6 text-sm space-y-2">
            {reviewSummary.metrics.map((m) => (
              <div key={m.label} className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground">{m.label}</span>
                <span className="text-foreground inline-flex items-center gap-1">
                  <i className="ri-star-fill" aria-hidden /> {m.value.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Reviews */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h3 className="text-lg font-semibold text-foreground mb-3">Featured Reviews</h3>

          <div className="flex md:block gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 md:pb-0 md:space-y-4">
            {featuredReviews.slice(0, 3).map((r) => (
              <article
                key={r.username}
                className="bg-background rounded-lg p-4 border border-border min-w-[85%] md:min-w-0 snap-center"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={`https://i.pravatar.cc/60?img=${r.avatarSeed}`}
                      alt=""
                      className="w-10 h-10 rounded-full grayscale"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground truncate">{r.username}</p>
                        <img
                          src={`https://flagcdn.com/24x18/${r.countryCode}.png`}
                          alt={r.country}
                          className="inline-block"
                          width={24}
                          height={18}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{r.country}</p>
                    </div>
                  </div>
                  <div className="text-sm text-foreground inline-flex items-center gap-1 shrink-0">
                    <Stars count={r.rating} />
                    <span className="ml-1">{r.rating}</span>
                  </div>
                </div>

                <p className="mt-3 text-sm text-foreground/80 leading-relaxed line-clamp-3">
                  {r.text}
                </p>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={r.gigImage}
                      alt=""
                      className="w-[72px] h-12 object-cover rounded-md grayscale shrink-0"
                    />
                    <div className="text-xs text-muted-foreground truncate">
                      {r.price} · {r.duration}
                    </div>
                  </div>
                  <Link
                    to="/full-reviews"
                    className="text-xs text-foreground font-medium hover:underline shrink-0"
                  >
                    See full review
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/full-reviews"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
            >
              See all {reviewSummary.total} reviews
              <i className="ri-arrow-right-line" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
