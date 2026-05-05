"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ListBlogApi } from "@/app/api/blog/blog";

export default function MaritimeHero() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog-home"],
    queryFn: () => ListBlogApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-4 sm:px-6 pb-10 sm:pb-12 lg:px-20 lg:py-14 animate-pulse">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="relative h-[200px] sm:h-[300px] bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute top-6 left-6 h-12 w-3/4 bg-gray-300 rounded" />
            <div className="absolute bottom-6 right-6 h-16 w-1/3 bg-gray-300 rounded" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching blog hero data:", error);
  }

  const blogData = Array.isArray(data) ? data[0] : data;

  const heroTitle = blogData?.heroTitle || "Maritime Knowledge. Industry Trends. Expert Insights.";
  const heroSubtitle = blogData?.heroSubtitle || "Stay updated with the latest in ship management, global logistics, and maritime innovation—curated by Clio experts.";
  const heroImage = blogData?.heroImage || "/images/blog/Rectangle.png";

  return (
    <section className="w-full px-4 sm:px-6 pb-10 sm:pb-12 lg:px-20 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative h-[200px] sm:h-[220px] lg:h-[300px] overflow-hidden sm:overflow-visible flex justify-end">
          {/* Mobile-only dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent sm:hidden z-[1]" />

          {/* Image */}
          <Image
            src={heroImage}
            alt="Maritime ship"
            width={990}
            height={300}
            priority
            className="h-full w-auto object-cover sm:h-auto sm:w-auto"
          />

          {/* Heading - Top Left */}
          <div className="absolute top-1 sm:top-0 left-2 sm:left-6 lg:left-12 z-10 mt-0 sm:mt-[-0.05rem] pl-0 sm:pl-2 leading-[1.05] sm:leading-[1.1]">
            <h1 className="max-w-[calc(100vw-1rem)] sm:max-w-[500px] lg:max-w-[750px] text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold tracking-[-0.03em] text-white sm:text-[#464646]">
              {heroTitle}
            </h1>
          </div>

          {/* Description Card - Bottom Right */}
          <div className="absolute bottom-2 sm:-bottom-1 right-2 sm:right-[-20] md:right-[-35] lg:right-[-50] z-10 max-w-[calc(100vw-3rem)] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[480px] px-2 sm:px-4 py-1 sm:py-0 bg-white/80 sm:bg-transparent rounded-md sm:rounded-none">
            <p className="text-[10px] sm:text-sm leading-snug sm:leading-relaxed text-gray-700">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
