"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ListFleetApi } from "@/app/api/fleet/fleet";
import { Ship, Globe, TrendingUp } from "lucide-react";

const statIcons = [Ship, Globe, TrendingUp];

export function FleetHeroSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["fleet-page"],
    queryFn: () => ListFleetApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full animate-pulse">
        <div className="relative h-[500px] sm:h-[580px] bg-gray-200 rounded-[24px]" />
      </section>
    );
  }

  if (error) {
    console.error("Error fetching fleet hero:", error);
  }

  const fleetData = Array.isArray(data) ? data[0] : data;

  const heroTitle = fleetData?.heroTitle || "Modern Fleet Built for Performance & Reliability";
  const heroDescription = fleetData?.heroDescription || "Clio operates a world-class fleet of vessels engineered for precision, safety, and efficiency - navigating global trade routes with unmatched dependability across every ocean.";
  const heroImage = fleetData?.heroImage || "/images/fleet/Rectangle.png";
  const cta = fleetData?.cta || "View Fleet";
  const stats = fleetData?.stats || [
    { label: "Vessels", value: "48+" },
    { label: "Global Routes", value: "120+" },
    { label: "Fleet Uptime", value: "99.7%" },
  ];

  const handleScroll = () => {
    document.getElementById("fleet-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full">
      <div className="relative h-[500px] sm:h-[580px] overflow-hidden rounded-[24px]">
        <Image
          src={heroImage}
          alt="Modern fleet"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f2d3f]/75 via-[#1f2d3f]/30 to-transparent" />

        <div className="absolute left-6 top-8 right-6 sm:left-10 sm:top-12 lg:left-14 lg:top-16 max-w-[680px] z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-[1.1] font-bold tracking-[-0.03em] text-white">
            {heroTitle}
          </h1>
          <p className="mt-4 sm:mt-6 max-w-[540px] text-sm sm:text-base lg:text-[16px] leading-relaxed text-white/90 font-medium hidden sm:block">
            {heroDescription}
          </p>
          <button
            type="button"
            onClick={handleScroll}
            className="mt-6 sm:mt-8 rounded-[12px] bg-[#f1df3f] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-[15px] font-bold text-[#1d2735] transition-all hover:scale-105 hover:bg-[#f5e76d] active:scale-95 hidden sm:block cursor-pointer"
          >
            {cta}
          </button>
        </div>

        {/* OVERVIEW CARD */}
        <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-10 w-[calc(100%-32px)] sm:w-[280px] lg:w-[320px] rounded-[24px] border border-blue-200 bg-white/20 p-5 lg:p-6 backdrop-blur-[12px] z-10 md:z-30">
          <h2 className="text-xl lg:text-[24px] font-semibold text-white mb-4 lg:mb-6">
            Fleet Overview
          </h2>
          
          <div className="space-y-5">
            {stats.map((stat: any, index: number) => {
              const Icon = statIcons[index % statIcons.length];
              return (
                <div key={stat._id || index} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-white text-[#901027]">
                    <Icon size={30} />
                  </div>
                  <div className="text-white">
                    <p className="text-[16px] opacity-90 leading-tight">{stat.label}</p>
                    <p className="text-[28px] font-semibold leading-tight">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE ONLY DESCRIPTION & BUTTON */}
      <div className="mt-8 sm:hidden">
        <p className="text-sm leading-relaxed text-[#464646] font-medium">
          {heroDescription}
        </p>
        <button
          type="button"
          onClick={handleScroll}
          className="mt-6 w-full rounded-[12px] bg-[#f1df3f] py-4 text-[15px] font-bold text-[#1d2735] active:scale-95 cursor-pointer"
        >
          {cta}
        </button>
      </div>
    </section>
  );
}
