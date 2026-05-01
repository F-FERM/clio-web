import React from "react";
import Image from "next/image";

export default function MaritimeHero() {
  return (
    <section className="w-full px-6 py-12 lg:px-20 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative h-[300px] overflow-hidden rounded-[18px] flex justify-end">
          {/* Image */}
          <Image
            src="/images/blog/Rectangle.png"
            alt="Maritime ship"
            width={990}
            height={300}
            priority
            className="object-cover object-center"
          />

          {/* Heading - Top Left */}
          <div className="absolute top-[-15] left-24 z-10">
            <h1 className="max-w-[750px] text-5xl lg:text-6xl leading-[1.1] font-bold tracking-[-0.03em] text-[#464646]">
              Maritime Knowledge. Industry Trends. Expert Insights.
            </h1>
          </div>

          {/* Description Card - Bottom Right */}
          <div className="absolute bottom-[-10] right-4 z-10  rounded-[12px] max-w-[400px] ">
            <p className="text-sm">
              Stay updated with the latest in ship management, global logistics,
              and maritime innovation—curated by Clio experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
