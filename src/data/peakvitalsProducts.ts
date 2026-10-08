import { Product } from "@/types";

export interface PeakvitalsProduct {
  id: string;
  name: string;
  flavor: string;
  servings: string;
  weight: string;
  price: string;
  numericPrice: number;
  originalPrice: string;
  numericOriginalPrice: number;
  discountBadge?: string;
  dealBadge?: string;
  inStock: boolean;
  image: string;
  tagline: string;
  highlights: {
    caffeine: string;
    citrulline: string;
    arginine: string;
    betaAlanine: string;
  };
}

export const PEAKVITALS_PREWORKOUTS: PeakvitalsProduct[] = [
  {
    id: "peakvitals-green-apple",
    name: "PEAKVITALS PRE-WORKOUT - GREEN APPLE",
    flavor: "Green Apple Flavour",
    servings: "35 Servings",
    weight: "250g",
    price: "₹1,299",
    numericPrice: 1299,
    originalPrice: "₹1,999",
    numericOriginalPrice: 1999,
    discountBadge: "-35%",
    dealBadge: "FLAGSHIP BEST SELLER",
    inStock: true,
    image: "/images/peakvitals_trans/green_apple.png",
    tagline: "Be The Boss of Your Workout - Crisp Green Apple Rush",
    highlights: {
      caffeine: "195mg Natural Caffeine",
      citrulline: "1.5g L-Citrulline Malate",
      arginine: "2g Arginine AAKG",
      betaAlanine: "2g Beta Alanine",
    },
  },
  {
    id: "peakvitals-blue-raspberry",
    name: "PEAKVITALS PRE-WORKOUT - BLUE RASPBERRY",
    flavor: "Blue Raspberry Blast",
    servings: "35 Servings",
    weight: "250g",
    price: "₹1,299",
    numericPrice: 1299,
    originalPrice: "₹1,999",
    numericOriginalPrice: 1999,
    discountBadge: "-35%",
    dealBadge: "HIGH DEMAND FOCUS",
    inStock: true,
    image: "/images/peakvitals_trans/blue_raspberry.png",
    tagline: "Intense Mental Focus & Electrifying Energy",
    highlights: {
      caffeine: "195mg Natural Caffeine",
      citrulline: "1.5g L-Citrulline Malate",
      arginine: "2g Arginine AAKG",
      betaAlanine: "2g Beta Alanine",
    },
  },
  {
    id: "peakvitals-watermelon",
    name: "PEAKVITALS PRE-WORKOUT - WATERMELON PUNCH",
    flavor: "Watermelon Punch",
    servings: "35 Servings",
    weight: "250g",
    price: "₹1,299",
    numericPrice: 1299,
    originalPrice: "₹1,999",
    numericOriginalPrice: 1999,
    discountBadge: "-35%",
    dealBadge: "REFRESHING PUMP",
    inStock: true,
    image: "/images/peakvitals_trans/watermelon.png",
    tagline: "Explosive Nitric Oxide Pump & Hydration",
    highlights: {
      caffeine: "195mg Natural Caffeine",
      citrulline: "1.5g L-Citrulline Malate",
      arginine: "2g Arginine AAKG",
      betaAlanine: "2g Beta Alanine",
    },
  },
  {
    id: "peakvitals-tangy-orange",
    name: "PEAKVITALS PRE-WORKOUT - TANGY ORANGE",
    flavor: "Tangy Orange Rush",
    servings: "35 Servings",
    weight: "250g",
    price: "₹1,299",
    numericPrice: 1299,
    originalPrice: "₹1,999",
    numericOriginalPrice: 1999,
    discountBadge: "-35%",
    dealBadge: "CITRUS BLAST",
    inStock: true,
    image: "/images/peakvitals_trans/tangy_orange.png",
    tagline: "Sustained Endurance & Zero Crash Energy",
    highlights: {
      caffeine: "195mg Natural Caffeine",
      citrulline: "1.5g L-Citrulline Malate",
      arginine: "2g Arginine AAKG",
      betaAlanine: "2g Beta Alanine",
    },
  },
  {
    id: "peakvitals-twin-pack",
    name: "PEAKVITALS TWIN PACK COMBO (2x 250G)",
    flavor: "Green Apple + Blue Raspberry",
    servings: "70 Servings Total",
    weight: "500g (2 Tubs)",
    price: "₹2,399",
    numericPrice: 2399,
    originalPrice: "₹3,999",
    numericOriginalPrice: 3999,
    discountBadge: "-40%",
    dealBadge: "FREE SHAKER BOTTLE",
    inStock: true,
    image: "/images/peakvitals_trans/twin_pack.png",
    tagline: "Double Tub Value Pack + Heavy Duty S.K Shaker Free",
    highlights: {
      caffeine: "195mg Per Scoop",
      citrulline: "1.5g L-Citrulline Malate",
      arginine: "2g Arginine AAKG",
      betaAlanine: "2g Beta Alanine",
    },
  },
  {
    id: "peakvitals-triple-stack",
    name: "PEAKVITALS TRIPLE POWER STACK (3x 250G)",
    flavor: "3 Assorted Flavors",
    servings: "105 Servings Total",
    weight: "750g (3 Tubs)",
    price: "₹3,499",
    numericPrice: 3499,
    originalPrice: "₹5,999",
    numericOriginalPrice: 5999,
    discountBadge: "-42%",
    dealBadge: "MAXIMUM VALUE",
    inStock: true,
    image: "/images/peakvitals_trans/triple_stack.png",
    tagline: "Gym Bro Trio Pack - Complete 3-Month Hardcore Supply",
    highlights: {
      caffeine: "195mg Per Scoop",
      citrulline: "1.5g L-Citrulline Malate",
      arginine: "2g Arginine AAKG",
      betaAlanine: "2g Beta Alanine",
    },
  },
];

export function peakvitalsToProduct(p: PeakvitalsProduct): Product {
  return {
    id: p.id,
    name: p.name,
    brand: "Peakvitals Nutrition",
    tagline: p.tagline,
    category: "pre-workout",
    price: p.numericPrice,
    originalPrice: p.numericOriginalPrice,
    rating: 4.9,
    reviewsCount: 184,
    image: p.image,
    weightOptions: [
      { label: "1 Tub (250g / 35 Servings)", priceMultiplier: 1.0 },
      { label: "2 Tubs (500g / 70 Servings + Free Shaker)", priceMultiplier: 1.85 },
      { label: "3 Tubs (750g / 105 Servings)", priceMultiplier: 2.7 },
    ],
    flavors: [
      "Green Apple Flavour (Original)",
      "Blue Raspberry Blast",
      "Watermelon Punch",
      "Tangy Orange Rush",
    ],
    inStock: p.inStock,
    description: `Official Peakvitals Nutrition Pre-Workout. Formulated with 195mg natural caffeine, 2g beta alanine, 1.5g L-citrulline malate and 2g arginine AAKG. Designed for aggressive energy, extreme vascularity, and laser focus. Sourced directly at S.K Nutrition, Ravi Nagar, Mughalsarai, Chandauli.`,
    nutritionalHighlights: {
      calories: "0 kcal (Zero Sugar)",
      servings: p.servings,
      creatine: "0g",
    },
    features: [
      "195mg Natural Caffeine for Explosive Power & Zero Crash",
      "2g Beta-Alanine for Endurance & Delaying Muscle Fatigue",
      "1.5g L-Citrulline Malate + 2g Arginine AAKG for Skin-Tearing Muscle Pumps",
      "100% Authentic with Batch Verification Code",
      "Same-Day Local Delivery in Mughalsarai & Chandauli",
    ],
    howToUse:
      "Mix 1 scoop with 200-250ml of cold water 20 to 30 minutes before your workout session. Assess tolerance with half a scoop first.",
    batchNumberSample: "PV-NW-" + p.id.substring(11, 16).toUpperCase(),
    goal: "energy-pump",
  };
}
