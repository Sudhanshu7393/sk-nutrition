export interface NutritionalHighlights {
  protein?: string;
  bcaa?: string;
  calories?: string;
  servings?: string;
  creatine?: string;
  fat?: string;
  carbs?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  category: 'whey-protein' | 'mass-gainer' | 'pre-workout' | 'creatine-amino' | 'vitamins-wellness' | 'healthy-snacks';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  weightOptions: { label: string; priceMultiplier: number }[];
  flavors: string[];
  inStock: boolean;
  description: string;
  nutritionalHighlights: NutritionalHighlights;
  features: string[];
  howToUse: string;
  batchNumberSample: string;
  goal: 'muscle-building' | 'weight-gain' | 'fat-loss' | 'energy-pump' | 'wellness';
}

export interface CartItem {
  id: string;
  product: Product;
  flavor: string;
  weight: string;
  price: number;
  quantity: number;
}

export interface CustomerOrder {
  orderId: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  landmark?: string;
  city: string;
  pincode?: string;
  paymentMethod: 'cod' | 'upi' | 'whatsapp';
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  orderDate: string;
  status: 'confirmed' | 'dispatched' | 'delivered';
}
