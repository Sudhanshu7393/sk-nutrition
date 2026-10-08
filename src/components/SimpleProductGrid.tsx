"use client";

import React from "react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface SimpleProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

export const SimpleProductGrid: React.FC<SimpleProductGridProps> = ({
  products,
  onQuickView,
}) => {
  return (
    <section className="py-10 bg-[#FAF7F1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
