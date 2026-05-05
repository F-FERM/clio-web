"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ListFleetApi } from "@/app/api/fleet/fleet";

export function FleetCapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["fleet-page"],
    queryFn: () => ListFleetApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 pb-16 lg:px-20 lg:pb-20 mt-20 animate-pulse">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 md:grid-cols-[0.86fr_1.14fr]">
          <div>
            <div className="h-12 w-64 bg-gray-200 rounded mb-6" />
            <div className="h-24 w-full bg-gray-200 rounded" />
          </div>
          <div className="space-y-4 pt-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gray-200 rounded-[14px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching fleet capabilities:", error);
  }

  const fleetData = Array.isArray(data) ? data[0] : data;

  const bottomTitle = fleetData?.bottomTitle || "Powering Global Maritime Operations";
  const bottomDescription = fleetData?.bottomDescription || "Our fleet capabilities are built to deliver consistent performance across every voyage, combining advanced technology, global operational reach, and strict safety standards. We ensure efficient, reliable, and compliant maritime solutions tailored to meet evolving industry demands.";
  const benefits = fleetData?.benefits || [
    {
      title: "Advanced Engineering",
      description: "Our vessels are built with cutting-edge technology to ensure safety, durability and peak performance.",
    },
    {
      title: "Global Reach",
      description: "Operating across major international routes, enabling seamless logistics worldwide.",
    },
    {
      title: "Safety & Compliance",
      description: "Strict adherence to international maritime regulations and environmental standards.",
    },
  ];

  return (
    <section className="w-full px-6 pb-16 lg:px-20 lg:pb-20 mt-20">
      <div className="mx-auto grid w-full max-w-[1400px] gap-8 md:grid-cols-[0.86fr_1.14fr]">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="max-w-[340px] text-4xl leading-[1.2] font-semibold tracking-[-0.03em] text-[#901027]">
            {bottomTitle}
          </h2>
          <p className="mt-5 max-w-[500px] text-xl leading-normal text-[#323842]">
            {bottomDescription}
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-3 sm:space-y-4 pt-6 md:pt-20">
          {benefits.map((item: any, index: number) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item._id || index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`group relative cursor-pointer overflow-hidden rounded-[14px] border border-[#c8ced6] px-4 py-4 sm:px-5 transition-all duration-300 lg:hover:bg-white lg:hover:shadow-md ${
                  isActive ? "bg-white shadow-md" : ""
                }`}
              >
                {/* Top Row */}
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#901027] text-[#901027] text-sm font-bold transition-opacity duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 lg:group-hover:opacity-100"
                    }`}
                  >
                    ✓
                  </div>

                  {/* Title */}
                  <h3 className="text-[14px] sm:text-[15px] lg:text-[18px] font-semibold text-[#901027]">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "max-h-[200px] opacity-100 mt-2"
                      : "max-h-0 opacity-0 mt-0 lg:group-hover:max-h-[200px] lg:group-hover:opacity-100 lg:group-hover:mt-2"
                  }`}
                >
                  <p className="pl-9 text-[13px] sm:text-[14px] text-[#24272d]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
