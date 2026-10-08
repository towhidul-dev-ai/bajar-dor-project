// import Banner from "@/components/Banner";
// import Marquee from "@/components/Marquee";
// import Image from "next/image";

// const getProducts = async() => {
//   const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
//   const data = await res.json();
//   return data;
// }

// export default async function Home() {
//   const products = await getProducts()
//   // console.log(products)
//   const upProducts = products.filter(p=> p.change.dir == 'up' );
//   console.log(upProducts);
//   return (
//     <div>
//       <Marquee></Marquee>
//       <Banner></Banner>
//      {/* up products */}
//      <div>
//       <p>আজ দাম বেড়েছে</p>
//      </div>
//     </div>
//   );
// }

import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import ProductSection from "@/components/ProductSection";

interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  image: string;
  unit: string;
  lastMonth: number;
  lastWeek: number;
  today: number;
  yesterday: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];
}

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data;
};

export default async function Home() {
  const products = await getProducts();

  // Top 6 products whose prices increased
  const upProducts = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  // Top 6 products whose prices decreased
  const downProducts = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <main className="bg-[#F3F8F4]">

      {/* Marquee */}
      <Marquee />

      {/* Banner */}
      <Banner />

      {/* Product Sections */}
      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-8">

        {/* Section A - Price Increased */}
        <ProductSection
          title="আজ দাম বেড়েছে"
          icon="▲"
          products={upProducts}
        />

        {/* Section B - Price Decreased */}
        <ProductSection
          title="আজ দাম কমেছে"
          icon="▼"
          products={downProducts}
        />

        {/* Section C - All Products */}
        <ProductSection
          title="সব পণ্য"
          icon="🛒"
          subtitle="সকল পণ্যের আজকের বাজারদর এক নজরে দেখুন"
          products={products}
        />

      </div>

    </main>
  );
}
