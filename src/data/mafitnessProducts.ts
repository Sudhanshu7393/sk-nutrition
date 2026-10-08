export interface MAProduct {
  id: string;
  name: string;
  category: 'pre-workout' | 'protein' | 'creatine' | 'bcaa' | 'gainer' | 'vitamins' | 'fatloss';
  price: string;
  originalPrice?: string;
  discountBadge?: string;
  dealBadge?: string;
  inStock: boolean;
  image: string;
}

export const MA_PRODUCTS: MAProduct[] = [
  // --- ROW 1 ---
  {
    id: "kaged-hydra-charge",
    name: "KAGED HYDRA CHARGE",
    category: "bcaa",
    price: "₹2,499",
    originalPrice: "₹3,199",
    discountBadge: "-20%",
    inStock: true,
    image: "/images/ref_products/kaged-hydra-charge.png",
  },
  {
    id: "kaged-creatine-mono",
    name: "KAGED CREATINE MONO...",
    category: "creatine",
    price: "₹1,999",
    dealBadge: "BUY 2 GET 1 FREE",
    inStock: true,
    image: "/images/ref_products/kaged-creatine-mono.png",
  },
  {
    id: "kaged-pre-workout",
    name: "KAGED PRE-WORKOUT",
    category: "pre-workout",
    price: "₹3,499",
    dealBadge: "BUY 2 GET 1 FREE",
    inStock: true,
    image: "/images/ref_products/kaged-pre-workout.png",
  },
  {
    id: "kaged-pre-kaged",
    name: "KAGED PRE-KAGED",
    category: "pre-workout",
    price: "₹3,799",
    dealBadge: "BUY 2 GET 1 FREE",
    inStock: true,
    image: "/images/ref_products/kaged-pre-kaged.png",
  },

  // --- ROW 2 ---
  {
    id: "iso-whey-zero-black",
    name: "ISO WHEY ZERO BLACK...",
    category: "protein",
    price: "₹5,499",
    inStock: true,
    image: "/images/ref_products/iso-whey-zero-black.png",
  },
  {
    id: "bsn-syntha-6",
    name: "BSN SYNTHA-6...",
    category: "protein",
    price: "₹4,699",
    inStock: false,
    image: "/images/ref_products/bsn-syntha-6.png",
  },
  {
    id: "nitro-tech-whey-protein",
    name: "NITRO TECH WHEY PROTEIN...",
    category: "protein",
    price: "₹5,899",
    inStock: true,
    image: "/images/ref_products/nitro-tech-whey-protein.png",
  },
  {
    id: "1-rule-iso-whey",
    name: "1 RULE ISO WHEY",
    category: "protein",
    price: "₹5,999",
    inStock: true,
    image: "/images/ref_products/1-rule-iso-whey.png",
  },

  // --- ROW 3 ---
  {
    id: "gold-whey-standard",
    name: "GOLD WHEY STANDARD",
    category: "protein",
    price: "₹6,499",
    inStock: true,
    image: "/images/ref_products/gold-whey-standard.png",
  },
  {
    id: "mp-combat-protein",
    name: "MP COMBAT PROTEIN",
    category: "protein",
    price: "₹4,799",
    inStock: true,
    image: "/images/ref_products/mp-combat-protein.png",
  },
  {
    id: "1-rule-100-whey",
    name: "1 RULE 100% WHEY PROTEIN",
    category: "protein",
    price: "₹5,199",
    inStock: true,
    image: "/images/ref_products/1-rule-100-whey.png",
  },
  {
    id: "nutrex-100-whey",
    name: "NUTREX 100% WHEY",
    category: "protein",
    price: "₹4,299",
    inStock: false,
    image: "/images/ref_products/nutrex-100-whey.png",
  },

  // --- ROW 4 ---
  {
    id: "c4-original",
    name: "C4 ORIGINAL",
    category: "pre-workout",
    price: "₹2,299",
    inStock: true,
    image: "/images/ref_products/c4-original.png",
  },
  {
    id: "apesh-pumps",
    name: "APESH PUMPS",
    category: "pre-workout",
    price: "₹2,699",
    inStock: true,
    image: "/images/ref_products/apesh-pumps.png",
  },
  {
    id: "apesh-alpha",
    name: "APESH ALPHA",
    category: "pre-workout",
    price: "₹2,899",
    inStock: true,
    image: "/images/ref_products/apesh-alpha.png",
  },
  {
    id: "c4-extreme",
    name: "C4 EXTREME",
    category: "pre-workout",
    price: "₹3,199",
    inStock: true,
    image: "/images/ref_products/c4-extreme.png",
  },
];

export function maProductToProduct(ma: MAProduct) {
  const numericPrice = parseInt(ma.price.replace(/[^\d]/g, ""), 10) || 2999;
  const originalPrice = ma.originalPrice
    ? parseInt(ma.originalPrice.replace(/[^\d]/g, ""), 10)
    : Math.round(numericPrice * 1.25);

  return {
    id: ma.id,
    name: ma.name,
    brand: ma.name.split(" ")[0] || "SK Nutrition",
    tagline: ma.dealBadge || "100% Authentic Quality Verified",
    category: (ma.category === "pre-workout"
      ? "pre-workout"
      : ma.category === "protein"
      ? "whey-protein"
      : "creatine-amino") as any,
    price: numericPrice,
    originalPrice: originalPrice,
    rating: 4.9,
    reviewsCount: 168,
    image: ma.image,
    weightOptions: [
      { label: "Standard Size", priceMultiplier: 1.0 },
      { label: "Economy Pack (2x)", priceMultiplier: 1.85 },
      { label: "Mega Pack (Bulk)", priceMultiplier: 2.7 },
    ],
    flavors: ["Chocolat Gourmet", "Vanille Intense", "Fraise Sauvage", "Blue Raspberry", "Watermelon Punch"],
    inStock: ma.inStock,
    description: `100% authentic ${ma.name} sourced directly with batch verification & import authenticity. Tested for highest purity and maximum workout performance.`,
    nutritionalHighlights: {
      protein: "28g",
      bcaa: "6.2g",
      calories: "125 kcal",
      servings: "30-60",
    },
    features: [
      "100% Authentic Guaranteed with Verification Scratch Code",
      "Lab Tested for Maximum Purity & Muscle Recovery",
      "Instant Solubility & Amazing Taste",
      "Fast Delivery across Mughalsarai, Chandauli & All India",
    ],
    howToUse:
      "Mix 1 scoop with 250-300 ml of cold water. Consume 20-30 minutes before workout or immediately post-training.",
    batchNumberSample: "SK-IN-" + ma.id.substring(0, 6).toUpperCase(),
    goal: (ma.category === "pre-workout" ? "energy-pump" : "muscle-building") as any,
  };
}
