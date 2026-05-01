import React from "react";
import Image from "next/image";

export default function MaritimeHero() {
  return (
    <section className="w-full px-6 py-12 lg:px-20 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative h-[300px] overflow-visible flex justify-end">
          {" "}
          {/* Image */}
          <Image
            src="/images/blog/Rectangle.png"
            alt="Maritime ship"
            width={990}
            height={300}
            priority
            className="object-cover object-center w-full h-full"
          />
          {/* Heading - Top Left */}
          <div className="absolute top-0  left-6 lg:left-12 z-10 mt-[-0.05rem] pl-2 leading-[1.1]">
            <h1 className="max-w-[750px] text-4xl lg:text-6xl  font-bold tracking-[-0.03em] text-[#464646]">
              Maritime Knowledge. Industry Trends. Expert Insights.
            </h1>
          </div>
          {/* Description Card - Bottom Right */}
          <div className="absolute -bottom-8 right-10 z-10 max-w-[420px] bg-white rounded-[12px] p-4  shadow-lg">
            <p className="text-sm leading-relaxed text-gray-700">
              Stay updated with the latest in ship management, global logistics,
              and maritime innovation—curated by Clio experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
