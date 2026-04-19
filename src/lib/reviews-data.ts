export type Review = {
  username: string;
  country: string;
  countryCode: string; // ISO 2-letter
  avatarSeed: number;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  gigImage: string;
  price: string;
  duration: string;
  repeatedClient?: boolean;
};

const ph = (seed: string) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=400&q=70&sat=-100`;

export const reviewSummary = {
  total: 218,
  avg: 5.0,
  breakdown: [
    { stars: 5, count: 207, pct: 95 },
    { stars: 4, count: 8, pct: 4 },
    { stars: 3, count: 2, pct: 1 },
    { stars: 2, count: 1, pct: 1 },
    { stars: 1, count: 0, pct: 0 },
  ],
  metrics: [
    { label: "Communication", value: 5.0 },
    { label: "Quality of delivery", value: 5.0 },
    { label: "Value of delivery", value: 4.9 },
  ],
};

export const featuredReviews: Review[] = [
  {
    username: "nybestseller",
    country: "France",
    countryCode: "fr",
    avatarSeed: 11,
    rating: 5,
    text: "Working with Adoltech was a game-changer. Our Shopify theme is faster, conversion jumped 38%, and the codebase is finally maintainable.",
    gigImage: ph("photo-1483985988355-763728e1935b"),
    price: "$1,200 – $1,800",
    duration: "14 days",
  },
  {
    username: "keyurkaneria",
    country: "India",
    countryCode: "in",
    avatarSeed: 32,
    rating: 5,
    text: "Migrated our 12k SKU store from WooCommerce with zero downtime. Honest timelines, sharp execution.",
    gigImage: ph("photo-1495474472287-4d71bcdd2085"),
    price: "$2,500",
    duration: "21 days",
    repeatedClient: true,
  },
  {
    username: "design_queen",
    country: "United States",
    countryCode: "us",
    avatarSeed: 5,
    rating: 5,
    text: "Excellent communication, clean Liquid, and a PDP that actually converts. Will hire again.",
    gigImage: ph("photo-1556228720-195a672e8a03"),
    price: "$850",
    duration: "7 days",
  },
  {
    username: "bright_seller",
    country: "United Kingdom",
    countryCode: "gb",
    avatarSeed: 15,
    rating: 5,
    text: "He treated our store like he owned the brand. Speed score jumped from 38 to 92.",
    gigImage: ph("photo-1469854523086-cc02fe5d8800"),
    price: "$650",
    duration: "10 days",
  },
];

export const allReviews: Review[] = [
  ...featuredReviews,
  {
    username: "harborline_co",
    country: "Canada",
    countryCode: "ca",
    avatarSeed: 22,
    rating: 5,
    text: "Modular theme that our merchandisers can ship pages with — no developer required for routine work.",
    gigImage: ph("photo-1493663284031-b7e3aefcae8e"),
    price: "$1,500",
    duration: "18 days",
  },
  {
    username: "ember_outdoors",
    country: "Australia",
    countryCode: "au",
    avatarSeed: 42,
    rating: 5,
    text: "Subscription onboarding finally clicks. LTV up 33% within the first 60 days.",
    gigImage: ph("photo-1469854523086-cc02fe5d8800"),
    price: "$2,000",
    duration: "20 days",
    repeatedClient: true,
  },
  {
    username: "noir_eyewear",
    country: "Germany",
    countryCode: "de",
    avatarSeed: 18,
    rating: 5,
    text: "Magento → Shopify replatform was the smoothest we've ever done. Recommend without hesitation.",
    gigImage: ph("photo-1508296695146-257a814070b4"),
    price: "$3,500",
    duration: "30 days",
  },
  {
    username: "verde_living",
    country: "Netherlands",
    countryCode: "nl",
    avatarSeed: 27,
    rating: 5,
    text: "Quiz-based product discovery doubled our engaged sessions. Beautiful and fast.",
    gigImage: ph("photo-1466692476868-aef1dfb1e735"),
    price: "$1,100",
    duration: "12 days",
  },
  {
    username: "kindle_stone",
    country: "Ireland",
    countryCode: "ie",
    avatarSeed: 9,
    rating: 5,
    text: "Klaviyo flows finally make sense. ROAS is up 4.2x and abandoned cart recovers daily.",
    gigImage: ph("photo-1515378791036-0648a3ef77b2"),
    price: "$750",
    duration: "9 days",
  },
  {
    username: "bloomroot",
    country: "Spain",
    countryCode: "es",
    avatarSeed: 51,
    rating: 5,
    text: "PDP and cart drawer feel native to Shopify but completely on-brand. AOV +21%.",
    gigImage: ph("photo-1556228720-195a672e8a03"),
    price: "$900",
    duration: "8 days",
    repeatedClient: true,
  },
  {
    username: "atlas_coffee",
    country: "Italy",
    countryCode: "it",
    avatarSeed: 37,
    rating: 4,
    text: "Great migration work. A small post-launch redirect issue was fixed within hours.",
    gigImage: ph("photo-1495474472287-4d71bcdd2085"),
    price: "$2,800",
    duration: "25 days",
  },
  {
    username: "northwind",
    country: "Sweden",
    countryCode: "se",
    avatarSeed: 7,
    rating: 5,
    text: "Editorial product storytelling executed perfectly. Brand finally matches our ambition.",
    gigImage: ph("photo-1483985988355-763728e1935b"),
    price: "$1,800",
    duration: "16 days",
  },
];
