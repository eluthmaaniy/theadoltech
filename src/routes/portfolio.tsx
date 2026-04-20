import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio · Adoltech – Shopify Expert" },
      {
        name: "description",
        content:
          "Selected Shopify projects delivered by Adoltech – a top-rated Shopify developer & store optimization specialist.",
      },
      { property: "og:title", content: "Portfolio · Adoltech" },
      {
        property: "og:description",
        content: "Selected Shopify projects delivered by Adoltech.",
      },
    ],
  }),
  component: PortfolioPage,
});

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609506/IMG-20250921-WA0092_ieopxm.jpg",
    title: "Shopify Store Build",
  },
  {
    src: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609504/IMG-20250921-WA0090_g6lmty.jpg",
    title: "Theme Customization",
  },
  {
    src: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609505/IMG-20250921-WA0091_ymtuvy.jpg",
    title: "Conversion Optimization",
  },
  {
    src: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609488/IMG-20250921-WA0084_wa8sbj.jpg",
    title: "Fashion Store",
  },
  {
    src: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609494/IMG-20250921-WA0085_r0wxvo.jpg",
    title: "Beauty Brand",
  },
];

function PortfolioPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
            <span className="bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 rounded-full mt-4 inline-block text-sm font-medium">
              Email Marketing
            </span>
          </div>
        </article>

        {/* Gallery Slider */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-foreground">Selected Projects</h3>
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                aria-label="Previous project"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
              >
                <i className="ri-arrow-left-s-line text-xl" aria-hidden />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next project"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
              >
                <i className="ri-arrow-right-s-line text-xl" aria-hidden />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {galleryImages.map((g, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[55%] md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-card border border-border rounded-lg overflow-hidden">
                    <img
                      src={g.src}
                      alt={g.title}
                      className="w-full h-56 md:h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="p-3">
                      <p className="font-medium text-foreground text-sm">{g.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === selectedIndex ? "bg-primary w-6" : "bg-border w-2.5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/portfolio/full"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md inline-flex items-center hover:opacity-90 transition-opacity font-medium"
          >
            View +50 All Projects <i className="ri-arrow-right-line ml-2" aria-hidden />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
