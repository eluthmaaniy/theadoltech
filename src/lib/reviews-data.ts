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
    text: "Adoltech redesigned our store and it finally feels premium. The layout is clean, the product pages look amazing, and customers stay longer.",
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
    text: "Fixed a checkout bug that had been costing us sales for weeks. Calm, patient, and explained everything in plain language.",
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
    text: "Beautiful customization work. He matched our brand colors and fonts perfectly and the homepage now tells our story the way we wanted.",
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
    text: "He treated our store like his own. Cleaned up the design, added trust badges, and our mobile experience finally feels smooth.",
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
    text: "Customized our theme so our team can update sections without touching code. Saves us hours every week.",
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
    text: "Set up our subscription page beautifully and made the whole flow easy for shoppers. Repeat orders are climbing.",
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
    text: "Moved our store over and redesigned the product pages. Looks modern, loads fast, and customers compliment it.",
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
    text: "Built us a product quiz and styled it to match our brand. Visitors actually engage with it and we get more sales.",
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
    text: "Troubleshot a discount code issue super fast and then tidied up our cart drawer design while he was at it. Great value.",
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
    text: "Redesigned our product page with cleaner imagery and clearer buy buttons. Shoppers reach checkout much faster now.",
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
    text: "Solid customization work. There was a small layout glitch on launch day and he fixed it within an hour.",
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
    text: "Designed a homepage that finally tells our story. Clean sections, nice spacing, and the brand actually feels premium.",
    gigImage: ph("photo-1483985988355-763728e1935b"),
    price: "$1,800",
    duration: "16 days",
  },
];
