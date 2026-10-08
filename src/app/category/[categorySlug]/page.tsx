// import React from 'react';

// const getCategoryProducts = async (categorySlug)=>{
//     const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categorySlug}`)
//     const data = await res.json();
//     return data
// }

// const CategoryProducts = async ({params}) => {
    
//     const {categorySlug} = await params;
//     console.log(categorySlug)

//     const categoryProducts = await getCategoryProducts(categorySlug);
//     console.log(categoryProducts);
//     return (
//         <div>
//             Product of a category
//         </div>
//     );
// };

// export default CategoryProducts;


import Link from "next/link";
import React from "react";

interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
};

interface CategoryProductsProps  {
  params: Promise<{
    categorySlug: string;
  }>;
};

const getCategoryProducts = async (
  categorySlug: string
): Promise<IProduct[]> => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categorySlug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data;
};

const CategoryProducts = async ({
  params,
}: CategoryProductsProps) => {
  const { categorySlug } = await params;

  const categoryProducts =
    await getCategoryProducts(categorySlug);

  // Empty / invalid category
  if (!categoryProducts || categoryProducts.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
          <div className="mb-5 text-6xl">
            😕
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            কোনো পণ্য পাওয়া যায়নি
          </h1>

          <p className="mt-3 text-gray-500">
            এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।
          </p>

          <Link
            href="/"
            className="mt-6 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

  const categoryName =
    categoryProducts[0].categoryNameBn;

  const categoryIcon =
    categoryProducts[0].categoryIcon;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">

        {/* Category Header */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">
            <span className="text-4xl">
              {categoryIcon}
            </span>

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {categoryName}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                {categoryProducts.length}টি পণ্য পাওয়া গেছে
              </p>
            </div>
          </div>

        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Product Image */}
              <div className="flex h-32 items-center justify-center rounded-xl bg-green-50">
                <span className="text-6xl">
                  {product.image}
                </span>
              </div>

              {/* Product Information */}
              <div className="mt-5">

                <h2 className="text-lg font-bold text-gray-900">
                  {product.nameBn}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      ৳{product.today}
                    </span>

                    <span className="ml-1 text-sm text-gray-500">
                      / কেজি
                    </span>
                  </div>

                  {/* Change Badge */}
                  {product.change.dir === "up" && (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                      ↑ {product.change.pct}%
                    </span>
                  )}

                  {product.change.dir === "down" && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                      ↓ {Math.abs(product.change.pct)}%
                    </span>
                  )}

                  {product.change.dir === "flat" && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500">
                      — 0%
                    </span>
                  )}
                </div>

                {/* Yesterday Price */}
                <p className="mt-3 text-sm text-gray-500">
                  গতকাল: ৳{product.yesterday}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default CategoryProducts;