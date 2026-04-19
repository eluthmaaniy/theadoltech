import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Adoltech Shopify Expert" },
      {
        name: "description",
        content:
          "Shopify services by Adoltech: store setup, theme customization, migration, speed and conversion optimization, app integration, and email marketing.",
      },
      { property: "og:title", content: "Adoltech Services" },
      {
        property: "og:description",
        content: "End-to-end Shopify services for D2C brands.",
      },
    ],
  }),
  component: ServicesPage,
});

const ph = (seed: string) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=800&q=70&sat=-100`;

const services = [
  {
    icon: "ri-store-2-line",
    title: "Shopify Store Setup",
    rating: 5.0,
    reviews: 88,
    price: "From $450",
    cover: ph("photo-1556742044-3c52d6e88c62"),
  },
  {
    icon: "ri-paint-brush-line",
    title: "Theme Customization",
    rating: 5.0,
    reviews: 64,
    price: "From $250",
    cover: ph("photo-1559028012-481c04fa702d"),
  },
  {
    icon: "ri-arrow-left-right-line",
    title: "Platform Migration",
    rating: 5.0,
    reviews: 32,
    price: "From $1,200",
    cover: ph("photo-1551288049-bebda4e38f71"),
  },
  {
    icon: "ri-speed-up-line",
    title: "Speed Optimization",
    rating: 5.0,
    reviews: 41,
    price: "From $185",
    cover: ph("photo-1551288049-48fb388c7d7c"),
  },
  {
    icon: "ri-puzzle-2-line",
    title: "App Integration",
    rating: 5.0,
    reviews: 27,
    price: "From $150",
    cover: ph("photo-1517694712202-14dd9538aa97"),
  },
  {
    icon: "ri-line-chart-line",
    title: "Conversion Optimization",
    rating: 4.9,
    reviews: 22,
    price: "From $350",
    cover: ph("photo-1460925895917-afdab827c52f"),
  },
  {
    icon: "ri-mail-send-line",
    title: "Klaviyo Email Flows",
    rating: 5.0,
    reviews: 19,
    price: "From $220",
    cover: ph("photo-1554200876-56c2f25224fa"),
  },
  {
    icon: "ri-search-eye-line",
    title: "Shopify SEO",
    rating: 5.0,
    reviews: 15,
    price: "From $180",
    cover: ph("photo-1432888622747-4eb9a8efeb07"),
  },
  {
    icon: "ri-google-fill",
    title: "Google Merchant Fix",
    rating: 5.0,
    reviews: 12,
    price: "From $80",
    cover: ph("photo-1611926653458-09294b3142bf"),
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">My Services</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          End-to-end Shopify services. Click any service to start a conversation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/contact"
              className="group bg-background border border-border rounded-lg overflow-hidden hover:bg-secondary transition-colors block"
            >
              <div className="aspect-[16/10] bg-secondary overflow-hidden">
                <img
                  src={s.cover}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <i className={`${s.icon} text-foreground`} aria-hidden />
                  {s.title}
                </h3>
                <div className="flex items-center text-sm mt-2 gap-1">
                  <i className="ri-star-fill text-foreground" aria-hidden />
                  <span className="text-foreground font-medium">{s.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground">({s.reviews})</span>
                </div>
                <p className="text-sm text-foreground mt-1 font-medium">{s.price}</p>
                <p className="text-xs text-muted-foreground">Offers video consultations</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
