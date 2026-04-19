export type Category = "Theme" | "Migration" | "Optimization" | "Marketing";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: Category;
  description: string;
  result: string;
  cover: string;
  tech: string[];
};

const ph = (seed: string) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1200&q=70&sat=-100`;

export const projects: Project[] = [
  {
    slug: "northwind-apparel",
    title: "Northwind Apparel",
    client: "Northwind Apparel",
    category: "Theme",
    description: "Custom Shopify 2.0 theme built around editorial product storytelling.",
    result: "+38% conversion",
    cover: ph("photo-1483985988355-763728e1935b"),
    tech: ["Shopify 2.0", "Liquid", "Tailwind"],
  },
  {
    slug: "atlas-coffee-co",
    title: "Atlas Coffee Co.",
    client: "Atlas Coffee Co.",
    category: "Migration",
    description: "Migrated a 12k SKU catalog from WooCommerce to Shopify Plus with zero downtime.",
    result: "0 downtime · 100% SEO retained",
    cover: ph("photo-1495474472287-4d71bcdd2085"),
    tech: ["Shopify Plus", "Matrixify", "Klaviyo"],
  },
  {
    slug: "bloomroot-skincare",
    title: "Bloomroot Skincare",
    client: "Bloomroot",
    category: "Optimization",
    description: "Speed and CRO sprint focused on PDP, cart drawer, and checkout flow.",
    result: "−2.4s LCP · +21% AOV",
    cover: ph("photo-1556228720-195a672e8a03"),
    tech: ["Shopify", "Web Vitals", "A/B testing"],
  },
  {
    slug: "harborline-furniture",
    title: "Harborline Furniture",
    client: "Harborline",
    category: "Theme",
    description: "Modular theme with configurable rooms, swatches and lead-time messaging.",
    result: "+46% add-to-cart",
    cover: ph("photo-1493663284031-b7e3aefcae8e"),
    tech: ["Shopify 2.0", "Metaobjects"],
  },
  {
    slug: "ember-outdoors",
    title: "Ember Outdoors",
    client: "Ember",
    category: "Optimization",
    description: "Conversion audit, bundle builder, and subscription onboarding redesign.",
    result: "+33% subscriber LTV",
    cover: ph("photo-1469854523086-cc02fe5d8800"),
    tech: ["Shopify", "Recharge", "Rebuy"],
  },
  {
    slug: "noir-eyewear",
    title: "Noir Eyewear",
    client: "Noir",
    category: "Migration",
    description: "Replatform from Magento 2 to Shopify with custom virtual try-on integration.",
    result: "−61% page weight",
    cover: ph("photo-1508296695146-257a814070b4"),
    tech: ["Shopify Plus", "Custom app"],
  },
  {
    slug: "kindle-stone",
    title: "Kindle & Stone",
    client: "Kindle & Stone",
    category: "Marketing",
    description: "Klaviyo flows, abandoned-cart automations, and Meta Ads creative testing.",
    result: "+4.2x ROAS",
    cover: ph("photo-1515378791036-0648a3ef77b2"),
    tech: ["Klaviyo", "Meta Ads", "Shopify"],
  },
  {
    slug: "verde-living",
    title: "Verde Living",
    client: "Verde",
    category: "Theme",
    description: "Plant-store theme with quiz-based product discovery and care guides.",
    result: "+58% engaged sessions",
    cover: ph("photo-1466692476868-aef1dfb1e735"),
    tech: ["Shopify 2.0", "Metaobjects"],
  },
];
