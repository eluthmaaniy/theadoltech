import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Adoltech Shopify Projects" },
      {
        name: "description",
        content:
          "Selected Shopify projects by Adoltech: theme builds, platform migrations, and conversion optimization sprints.",
      },
      { property: "og:title", content: "Shopify Portfolio — Adoltech" },
      {
        property: "og:description",
        content: "Theme, migration, and optimization case studies.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const featured = projects[0];
  const gallery = projects.slice(1, 4);

  return (
    <SiteLayout>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Portfolio</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A focused selection of recent Shopify work.
        </p>

        {/* Featured Item */}
        <div className="mt-6 bg-background rounded-lg border border-border overflow-hidden">
          <div className="relative">
            <img
              src={featured.cover}
              alt={featured.title}
              className="w-full h-64 md:h-80 object-cover grayscale"
            />
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center text-sm font-medium">
              <i className="ri-image-line mr-1" aria-hidden /> 5
            </div>
            <div className="absolute top-4 left-4 bg-background/95 text-foreground px-3 py-1 rounded-full text-xs font-medium border border-border">
              Featured
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{featured.category}</span>
              <span className="text-foreground font-medium">{featured.result}</span>
            </div>
            <h3 className="font-bold text-foreground text-xl mt-1">{featured.title}</h3>
            <p className="text-muted-foreground mt-2">{featured.description}</p>
            <Link
              to="/portfolio/full"
              hash={featured.slug}
              className="bg-secondary text-foreground border border-border px-4 py-2 rounded-full mt-4 inline-flex items-center gap-2 hover:bg-accent text-sm font-medium"
            >
              Read case study
              <i className="ri-arrow-right-line" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
          {gallery.map((p) => (
            <Link
              key={p.slug}
              to="/portfolio/full"
              hash={p.slug}
              className="group bg-background rounded-lg border border-border overflow-hidden block hover:bg-secondary transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.category}</span>
                  <span className="text-foreground font-medium">{p.result}</span>
                </div>
                <h4 className="mt-1 font-semibold text-foreground">{p.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/portfolio/full"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-sm font-medium"
          >
            View all {projects.length}+ projects
            <i className="ri-arrow-right-line" aria-hidden />
          </Link>
        </div>

        {/* Sales Proof */}
        <div className="mt-12">
          <h3 className="text-lg md:text-xl font-bold text-foreground text-center">Sales Proof</h3>
          <p className="text-center text-sm text-muted-foreground mt-1">
            Verified screenshots & reports from past Shopify projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            {[1, 2, 3].map((n) => (
              <a
                key={n}
                href="#"
                className="bg-background border border-border text-foreground px-5 py-2.5 rounded-full hover:bg-secondary transition-colors text-sm font-medium inline-flex items-center gap-2"
              >
                <i className="ri-file-chart-line" aria-hidden />
                View Proof {n}
              </a>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
