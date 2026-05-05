"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ListSafetyApi } from "@/app/api/safety/safety";

export function SafetyComplianceHeroSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["safety-page"],
    queryFn: () => ListSafetyApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 sm:pt-32 lg:pt-12 lg:px-28 animate-pulse">
        <div className="mx-auto grid w-full max-w-[1240px] items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="h-20 w-3/4 bg-gray-200 rounded mb-6" />
            <div className="h-24 w-full bg-gray-200 rounded" />
          </div>
          <div className="h-[340px] w-full bg-gray-200 rounded-[18px]" />
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching safety hero:", error);
  }

  const safetyData = Array.isArray(data) ? data[0] : data;

  const heading = safetyData?.heading || "Championing Safety in Maritime Operations";
  const description = safetyData?.description || "At Clio Ship Management & Operation, safety is at the core of everything we do, guiding every decision across our maritime operations. We are committed to protecting life at sea, safeguarding vessels, and preserving the environment through strict safety protocols, advanced systems, and continuous monitoring - ensuring reliable, secure, and compliant operations at all times.";
  const heroImage = safetyData?.heroImage || "/images/safety/Subtract.png";
  const overlayTitle = safetyData?.overlayTitle || "Global Compliance & Certifications";
  const overlayDescription = safetyData?.overlayDescription || "We strictly follow international maritime regulations and best practices to ensure all vessels operate safely and responsibly.";
  const complianceItems = safetyData?.complianceItems || [
    { text: "IMO standards" },
    { text: "SOLAS safety regulations" },
    { text: "ISM Code compliance" },
    { text: "MARPOL environmental standards" },
  ];

  return (
    <section className="w-full px-6 sm:pt-32 lg:pt-12 lg:px-28">
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.17] font-bold tracking-[-0.03em] text-[#45474d]">
            {heading}
          </h1>
          <p className="mt-6 max-w-[440px] text-sm text-[#3b4149]">
            {description}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[280px] sm:h-[340px] overflow-hidden rounded-[18px]">
          <Image
            src={heroImage}
            alt="Safety in maritime operations"
            fill
            priority
            className="object-cover object-center"
          />

          {/* OVERLAY CARD */}
          <div className="absolute right-4 bottom-4 w-[calc(100%-32px)] sm:max-w-[290px] rounded-[14px] bg-gray-600/40 p-4 backdrop-blur-[2px] shadow-lg">
            <h3 className="text-base sm:text-lg leading-[1.50] font-semibold text-white">
              {overlayTitle}
            </h3>

            <p className="mt-2 text-[10px] sm:text-sm leading-normal text-white/95">
              {overlayDescription}
            </p>

            <ul className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1.5 sm:block sm:space-y-1.5">
              {complianceItems.map((item: any, index: number) => (
                <li
                  key={item._id || index}
                  className="flex items-center gap-2 text-[10px] sm:text-sm text-white"
                >
                  <span className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 rounded-full bg-[#72e045]" />
                  <span className="truncate">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
