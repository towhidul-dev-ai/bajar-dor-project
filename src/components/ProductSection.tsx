import React from "react";
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    slug: string;
    nameBn: string;
    unit: string;
    image: string;
    today: number;
    change: {
      dir: "up" | "down" | "flat";
      pct: number;
  };
}

interface ProductSectionProps {
    title: string;
    icon: string;
    products: Product[];
    subtitle?: string;
}

const ProductSection = ({
  title,
  icon,
  products,
  subtitle,
}: ProductSectionProps) => {
  return (
    <section className="mt-10">

      {/* Section Heading */}
      <div className="mb-5">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 md:text-3xl">
        <span>{icon}</span>
        <span>{title}</span>
        </h2>

        {subtitle && (
        <p className="mt-1 text-sm text-gray-500 md:text-base">
        {subtitle}
        </p>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
        <ProductCard
        key={product.id}
        product={product}
          />
        ))}
      </div>

    </section>
  );
};

export default ProductSection;