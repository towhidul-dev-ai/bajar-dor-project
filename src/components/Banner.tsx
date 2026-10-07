import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from '../../public/bazar-hero.png'

const Banner = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex min-h-[420px] items-center overflow-hidden rounded-3xl border border-base-300 bg-base-100 px-8 py-10 shadow-sm md:px-12 lg:px-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="mb-5 inline-block rounded-full text-[#05893E] bg-success/10 px-4 py-2 text-">
            বুধবার, ৭ অক্টোবর, ২০২৬
          </div>

          <h1 className="text-4xl font-bold leading-tight text-base-content md:text-5xl lg:text-6xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-5 max-w-xl text-bold leading-7 text-base-content/70 md:text-lg">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের
            পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="/products"
            className="btn btn-success bg-green-700 text-bold mt-7 px-6 text-white"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* Right Image */}
        <div className="hidden w-1/2 justify-center lg:flex">
          <Image
            src={Hero}
            alt="Bazar Dor"
            width={500}
            height={400}
            className="h-auto w-full max-w-[500px] object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;