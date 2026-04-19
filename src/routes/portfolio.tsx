import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio · Adoltech – Shopify Expert" },
      {
        name: "description",
        content:
          "Selected Shopify projects, video testimonials and sales proof from Adoltech – top-rated Shopify expert.",
      },
      { property: "og:title", content: "Portfolio · Adoltech" },
      {
        property: "og:description",
        content: "Selected Shopify work, video testimonials and verified sales proof.",
      },
    ],
  }),
  component: PortfolioPage,
});

const galleryImages = [
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609506/IMG-20250921-WA0092_ieopxm.jpg",
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609504/IMG-20250921-WA0090_g6lmty.jpg",
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609505/IMG-20250921-WA0091_ymtuvy.jpg",
];

const videoTestimonials = [
  "https://www.youtube.com/embed/4AaRXoHlzYQ",
  "https://www.youtube.com/embed/ka8aQcefM8w",
  "https://www.youtube.com/embed/yH-HEV22moE",
  "https://www.youtube.com/embed/5OUaT8n-OoE",
];

const salesProof = [
  { label: "View Proof 1", url: "https://drive.google.com/file/d/1K4alYhBd3o9ThZjyOC2gXPyGf211btSf/view?usp=sharing" },
  { label: "View Proof 2", url: "https://drive.google.com/file/d/1J15GTYTyGMmvlPSDb19RD7Oz1kKfiWL6/view?usp=sharing" },
  { label: "View Proof 3", url: "https://drive.google.com/file/d/1mxpbCc1AW-IFWrAtbgj2RnVSCJP26dmB/view?usp=drivesdk" },
];

function PortfolioPage() {
  return (
    <SiteLayout>
      <section>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Portfolio</h2>

        {/* Featured Item */}
        <article className="mt-6 bg-card border border-border rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609405/IMG-20250921-WA0043_pdhfii.jpg"
              alt="Email marketing campaign showcase"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4 bg-foreground/80 text-background px-2 py-1 rounded-full flex items-center text-sm">
              <i className="ri-image-line mr-1" aria-hidden /> 5
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-foreground text-xl">Email Marketing</h3>
            <p className="text-muted-foreground mt-2">
              Email marketing is a powerful marketing channel, a form of direct marketing as well as
              digital marketing, that uses email to promote your business's products or services.
            </p>
            <span className="bg-secondary text-foreground px-4 py-2 rounded-full mt-4 inline-block">
              Email Marketing
            </span>
          </div>
        </article>

        {/* Gallery */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`Project ${i + 1}`}
                className="w-full h-48 md:h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-6 text-center">
        <Link
          to="/portfolio/full"
          className="bg-primary text-primary-foreground px-5 py-2 rounded-md inline-block hover:opacity-90 transition-opacity font-medium"
        >
          View +50 All Projects
        </Link>
      </div>

      {/* Video Testimonials */}
      <section className="mt-12">
        <h3 className="text-lg md:text-xl font-bold text-foreground text-center">
          Satisfied Client Video Testimonial
        </h3>
        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible">
            {videoTestimonials.map((src, i) => (
              <div key={i} className="relative aspect-[9/16] min-w-[260px] snap-center">
                <iframe
                  src={src}
                  title={`Client testimonial ${i + 1}`}
                  className="absolute inset-0 w-full h-full rounded-lg border border-border"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Proof */}
      <section className="mt-12">
        <h3 className="text-lg md:text-xl font-bold text-foreground text-center">Sales Proof</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          {salesProof.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90 transition-opacity font-medium"
            >
              {p.label}
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
