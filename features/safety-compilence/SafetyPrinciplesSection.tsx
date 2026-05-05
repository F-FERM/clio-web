"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ListSafetyApi } from "@/app/api/safety/safety";

export function SafetyPrinciplesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["safety-page"],
    queryFn: () => ListSafetyApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 py-10 lg:px-28 lg:py-16 animate-pulse">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-10 w-64 bg-gray-200 rounded mb-6" />
            <div className="h-20 w-full bg-gray-200 rounded" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-gray-200 rounded-[14px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching safety principles:", error);
  }

  const safetyData = Array.isArray(data) ? data[0] : data;

  const principlesTitle = safetyData?.principlesTitle || "Our Safety Principles";
  const principlesDescription = safetyData?.principlesDescription || "Our safety pillars define the foundation of our operations, guiding every decision to ensure the highest standards of protection, compliance, and operational excellence at sea.";
  const cta = safetyData?.cta || "Contact Us";
  const principles = safetyData?.principles || [
    {
      title: "Zero Harm Commitment",
      description: "We prioritize the safety and well-being of our crew, passengers, and the environment above all else, maintaining a culture where accidents are preventable.",
    },
    {
      title: "Regulatory Compliance",
      description: "Full adherence to international maritime safety standards, including SOLAS, MARPOL, and ISM Code requirements across all operations.",
    },
    {
      title: "Continuous Training",
      description: "Regular safety drills, certifications, and upskilling programs ensure our team remains prepared for any situation at sea.",
    },
    {
      title: "Risk Management",
      description: "Proactive identification and mitigation of potential hazards through comprehensive risk assessments and emergency response planning.",
    },
  ];

  return (
    <section className="w-full px-6 py-10 lg:px-28 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-2 lg:gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-[#901027]">
            {principlesTitle}
          </h2>

          <p className="mt-4 sm:mt-6 max-w-[520px] text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed text-[#24272d]">
            {principlesDescription}
          </p>

          <div className="mt-6 sm:mt-8">
            <Link href="/contact-us">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border cursor-pointer border-[#8f949c] px-5 py-2 text-sm font-semibold text-[#1f242b] transition-all hover:bg-[#901027] hover:text-white hover:border-[#901027]"
              >
                <span>{cta}</span>
                <span className="text-sm">↗</span>
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-3 sm:space-y-4">
          {principles.map((item: any, index: number) => {
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
