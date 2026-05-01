import React from "react";
import Image from "next/image";

export default function MaritimeHero() {
  return (
    <section className="w-full px-6  pb-12 lg:px-20 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative h-[180px] sm:h-[220px] lg:h-[300px] overflow-hidden sm:overflow-visible flex justify-end">
          {" "}
          {/* Image */}
          <Image
            src="/images/blog/Rectangle.png"
            alt="Maritime ship"
            width={990}
            height={300}
            priority
            // className="object-cover object-center w-full h-full"
          />
          {/* Heading - Top Left */}
          <div className="absolute top-1 sm:top-0 left-2 sm:left-6 lg:left-12 z-10 mt-0 sm:mt-[-0.05rem] pl-0 sm:pl-2 leading-[1.05] sm:leading-[1.1]">
            <h1 className="max-w-[calc(100vw-1rem)] sm:max-w-[500px] lg:max-w-[750px] text-lg sm:text-2xl md:text-4xl lg:text-6xl  font-bold tracking-[-0.03em] text-[#464646]">
              Maritime Knowledge. Industry Trends. Expert Insights.
            </h1>
          </div>
          {/* Description Card - Bottom Right */}
          <div className="absolute bottom-0 sm:-bottom-1 right-1 sm:right-[-20] md:right-[-35] lg:right-[-50] z-10 max-w-[calc(100vw-2rem)] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[480px]  px-2 sm:px-4 py-1 sm:py-0 bg-white/90 sm:bg-transparent rounded-md sm:rounded-none">
            <p className="text-[10px] sm:text-sm leading-snug sm:leading-relaxed text-gray-700">
              Stay updated with the latest in ship management, global logistics,
              and maritime innovation—curated by Clio experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
