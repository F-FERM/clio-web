"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ListGlobalNetworkApi } from "@/app/api/network/network";
import { WhatWeDoCta } from "@/features/what-we-do/components/WhatWeDoCta";
import Link from "next/link";

const networkImagesFallback = [
  {
    src: "/images/network/Network1.jpg",
    alt: "Global operations 1",
    title: "🔄",
    description: "24/7 coordination & response.",
  },
  {
    src: "/images/network/Network2.jpg",
    alt: "Global operations 2",
    title: "📡",
    description: "Global communication systems.",
  },
  {
    src: "/images/network/Network3.jpg",
    alt: "Global operations 3",
    title: "⚓",
    description: "Port-to-port operational support.",
  },
  {
    src: "/images/network/Network4.jpg",
    alt: "Global operations 4",
    title: "🌍",
    description: " Real-time fleet monitoring.",
  },
];

export function SmartGlobalOperations() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["global-network"],
    queryFn: () => ListGlobalNetworkApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 py-12 lg:px-28 lg:py-16 animate-pulse">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 items-center lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="h-20 w-3/4 bg-gray-200 rounded mb-6" />
            <div className="h-10 w-full bg-gray-200 rounded mb-4" />
            <div className="h-12 w-40 bg-gray-200 rounded mt-8" />
          </div>
          <div className="h-[500px] bg-gray-200 rounded-[18px]" />
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching smart global operations:", error);
  }

  const networkData = Array.isArray(data) ? data[0] : data;

  const smartTitle = networkData?.smartTitle || "SMART GLOBAL OPERATIONS";
  const smartDescription = networkData?.smartDescription || "We combine local expertise with global coordination to ensure efficient vessel management across all regions.";
  const cta = networkData?.cta || "Contact Us";
  const smartImages = networkData?.smartImages?.map((img: any) => ({
    src: img.image,
    alt: img.title || "Global operations",
    title: img.title || "🔄",
    description: img.description || "Operational support",
  })) || networkImagesFallback;

  return (
    <section className="w-full px-6 py-12 lg:px-28 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 items-center lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Column */}
        <div>
          <h2 className="text-5xl lg:text-6xl leading-[1.70] font-semibold tracking-[-0.03em] text-[#901027]">
            {smartTitle}
          </h2>
          <p className="mt-6 max-w-[470px] text-[19px] leading-normal text-[#3b3f45]">
            {smartDescription}
          </p>
          <div className="mt-8">
            <Link href='/contact-us'>
              <WhatWeDoCta label={cta} />
            </Link>
          </div>
        </div>

        {/* Right Column - Stacked Images (Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {smartImages.map((image: any, i: number) => (
            <div
              key={i}
              className="relative h-[220px] overflow-hidden rounded-[16px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#d4d8dc]/80 p-4 backdrop-blur">
                <h3 className="text-base font-semibold text-[#901027]">
                  {image.title}
                </h3>
                <p className="text-xs text-[#3a3d43] mt-1">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Desktop Layout — vertical accordion */}
        <div className="hidden md:flex flex-col gap-3 lg:gap-4 h-[360px] md:h-[420px] lg:h-[500px] group">
          {smartImages.map((image: any, i: number) => (
            <div
              key={i}
              className={`group/card relative overflow-hidden rounded-[18px]
                transition-all duration-500 ease-in-out
                ${
                  i === 0
                    ? "flex-[2.5] group-hover:flex-[0.7] hover:!flex-[2.5]"
                    : "flex-[0.7] group-hover:flex-[0.7] hover:!flex-[2.5]"
                }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-black/25 transition-all duration-300 group-hover/card:bg-black/10" />

              {/* Overlay */}
              <div
                className={`
                  absolute
                  left-4 right-4 top-4
                  sm:left-6 sm:top-6 sm:max-w-[320px]
                  rounded-[12px]
                  bg-[#d4d8dc]/75
                  px-4 py-3
                  backdrop-blur-[2px]
                  transition-all duration-300 delay-150
                  ${
                    i === 0
                      ? `opacity-100 translate-y-0
                         group-hover:opacity-0 group-hover:-translate-y-3
                         group-hover/card:!opacity-100 group-hover/card:!translate-y-0`
                      : `opacity-0 -translate-y-3
                         group-hover/card:opacity-100 group-hover/card:translate-y-0`
                  }
                `}
              >
                <h3 className="text-lg lg:text-xl font-semibold leading-tight">
                  {image.title}
                </h3>
                <p className="mt-1 text-xs lg:text-base text-[#901027] leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
