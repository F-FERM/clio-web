"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ListGlobalNetworkApi } from "@/app/api/network/network";
import styles from "../global-leaders/marine.module.css";

export default function HeroSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["global-network"],
    queryFn: () => ListGlobalNetworkApi({}),
  });

  if (isLoading) {
    return (
      <div className="sm:pt-32 lg:pt-10 px-6 lg:px-20 animate-pulse">
        <div className="w-full max-w-[1240px] mx-auto">
          <div className="relative h-[300px] md:h-[420px] bg-gray-200 rounded-[20px] md:rounded-[30px]" />
          <div className="mt-6 h-20 w-full bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  if (error) {
    console.error("Error fetching global network hero:", error);
  }

  const networkData = Array.isArray(data) ? data[0] : data;

  const headingText = networkData?.heading || "Global Maritime Network";
  const mainImage = networkData?.mainImage || "/images/network/Union.png";
  const overlay = networkData?.overlay || {
    title: "Our Global Presence",
    description: "From major ports to strategic maritime hubs, our network ensures uninterrupted operations and reliable support across international waters.",
    points: ["Middle East", "Asia-Pacific", "Europe", "Americas"],
    image: "/images/network/Rectangle.png"
  };
  const sideText = networkData?.sideText || "Clio Ship Management operates across key global shipping routes, delivering seamless vessel management, logistics coordination, and technical support wherever your fleet operates.";

  // Split heading for outline effect if possible
  const headingParts = headingText.split(" ");
  const lastWord = headingParts.pop();
  const restOfHeading = headingParts.join(" ");

  return (
    <div className="sm:pt-32 lg:pt-10 px-6 lg:px-20">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="relative">
          <div className="relative left-0 h-[200px] w-full sm:left-8 sm:h-[300px] sm:w-[1090px] md:h-[420px] rounded-[16px] sm:rounded-[20px] md:rounded-[30px] overflow-hidden">
            <Image
              src={mainImage}
              alt="Ship"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10 sm:bg-transparent" />

            {/* Title - On Top of Image */}
            <h1 className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-[-5] md:left-1 text-lg sm:text-3xl md:text-5xl lg:text-[59px] font-bold text-[#464646] z-10 whitespace-normal sm:whitespace-nowrap">
              {restOfHeading} <span className={styles.outline}>{lastWord}</span>
            </h1>
          </div>

          {/* LEFT CARD */}
          <div
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-15 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[480px] z-20
            bg-white/20 backdrop-blur-md border border-white/25
            rounded-lg sm:rounded-2xl shadow-xl text-white
            px-2.5 sm:px-4 md:px-6 py-2 sm:py-3 md:py-2 pr-2.5 sm:pr-4 md:pr-[205px]"
          >
            <h3 className="text-[9px] sm:text-xs md:text-sm font-extrabold uppercase tracking-widest mb-1.5 sm:mb-2 md:mb-3">
              {overlay.title}
            </h3>
            <p className="text-[8px] sm:text-[10px] md:text-xs text-white/90 leading-relaxed mb-2 sm:mb-3 md:mb-4 max-w-full md:max-w-[280px]">
              {overlay.description}
            </p>

            <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-1.5 text-[8px] sm:text-[10px] md:text-xs font-medium text-white/90">
              {overlay.points?.map((r: string) => (
                <span key={r} className="flex items-center gap-1 sm:gap-1.5">
                  <span className="text-xs sm:text-sm leading-none text-white/60">
                    •
                  </span>
                  {r}
                </span>
              ))}
            </div>

            {/* Inner ship card */}
            <div
              className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-1.5
              w-[185px] h-[150px] bg-white/10 
              border border-white/25 rounded-2xl p-2 shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={overlay.image}
                  alt="Ship at sea"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT BOTTOM CARD */}
          <div className="relative sm:absolute mt-2 sm:mt-0 sm:top-78 sm:bottom-6 sm:left-186 w-full sm:w-[406px] p-2 rounded-lg sm:rounded-2xl md:rounded-none shadow-md sm:shadow-md md:shadow-none bg-white/85 sm:bg-white/80 md:bg-transparent right-0 sm:right-0 md:right-20">
            <p className="text-xs sm:text-sm text-gray-800 md:text-gray-600">
              {sideText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
