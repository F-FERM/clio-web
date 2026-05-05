"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ListSafetyApi } from "@/app/api/safety/safety";
import yellowPattern from "../../public/images/patterns/yellow-pattern.jpg";
import maroonPattern from "../../public/images/patterns/maroonpattern.jpg";
import grayPattern from "../../public/images/patterns/graypattern.jpg";


const pillarCardsFallback = [
  {
    title: "Prepared for Every Situation",
    description:
      "Our crews are trained to respond effectively to emergencies through structured protocols and regular drills. We maintain strict emergency response systems to ensure quick action and minimal impact.",
    bg: "#901027",
    textColor: "#fff",
    descColor: "rgba(255,255,255,0.85)",
    variant: "maroon"
  },
  {
    title: "Smart Safety Monitoring",
    description:
      "We leverage modern technology to enhance safety through real-time tracking, predictive maintenance, and performance analytics. This ensures early detection of issues and minimizes operational risks.",
    bg: "#E0EFFA",
    textColor: "#901027",
    descColor: "#2f3440",
    variant: "blue"
  },
  {
    title: "Safe & Efficient Operations",
    description:
      "Our operations are supported by advanced monitoring systems and regular inspections to ensure vessels perform at optimal safety levels. From navigation to cargo handling, every process is carefully controlled and evaluated.",
    bg: "#FAE651",
    textColor: "#901027",
    descColor: "#2f3440",
    variant: "yellow"
  },
];

const CARD_WIDTH_DEFAULT = 360;
const CARD_WIDTH_EXPANDED = 440;
const CARD_OVERLAP = 85;

function PillarCard({ card }: { card: any }) {
  // Determine pattern based on variant or bg color
  let pattern = grayPattern;
  if (card.variant === "maroon" || card.bg?.toLowerCase() === "#901027" || card.bg?.toLowerCase() === "#9e1f3a") {
    pattern = maroonPattern;
  } else if (card.variant === "yellow" || card.bg?.toLowerCase() === "#fae651" || card.bg?.toLowerCase() === "#f1df3f") {
    pattern = yellowPattern;
  } else if (card.variant === "blue" || card.bg?.toLowerCase() === "#e0effa" || card.bg?.toLowerCase() === "#d6e1eb") {
    pattern = grayPattern;
  }

  return (
    <div
      className="w-full h-full px-7 py-7 flex flex-col justify-end gap-3 relative overflow-hidden"
      style={{
        backgroundColor: card.bg,
        color: card.textColor,
        borderRadius: 18,
      }}
    >
      <Image
        src={pattern}
        alt="Pattern"
        fill
        className="absolute inset-0 object-cover opacity-20 mix-blend-multiply pointer-events-none"
      />

      <h3 className="text-3xl font-medium leading-[1.20] relative z-10">
        {card.title}
      </h3>

      <p
        className="text-sm leading-[1.45] relative z-10"
        style={{ color: card.descColor }}
      >
        {card.description}
      </p>
    </div>
  );
}

export function CoreSafetyPillarsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["safety-page"],
    queryFn: () => ListSafetyApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 pb-16 lg:px-28 lg:pb-20 animate-pulse">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-12" />
          <div className="flex flex-col gap-3 md:flex-row md:justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 w-full md:w-64 bg-gray-200 rounded-[18px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching core safety pillars:", error);
  }

  const safetyData = Array.isArray(data) ? data[0] : data;
  const pillarHeading = safetyData?.pillarHeading || "Core Safety Pillars";
  const pillarDescription = safetyData?.pillarDescription || "Our safety framework is built on three key pillars that ensure consistent protection, compliance, and operational excellence across every voyage.";
  const pillarCards = safetyData?.pillarCards || pillarCardsFallback;
  const CARD_COUNT = pillarCards.length;

  const totalWidthBase =
    CARD_COUNT * (CARD_WIDTH_DEFAULT - CARD_OVERLAP) + CARD_OVERLAP;

  const totalWidthExpanded =
    totalWidthBase + (CARD_WIDTH_EXPANDED - CARD_WIDTH_DEFAULT);

  const getLeft = (index: number): number => {
    const base = index * (CARD_WIDTH_DEFAULT - CARD_OVERLAP);
    if (hovered === null || index <= hovered) return base;
    return base + (CARD_WIDTH_EXPANDED - CARD_WIDTH_DEFAULT);
  };

  const getWidth = (index: number): number =>
    hovered === index ? CARD_WIDTH_EXPANDED : CARD_WIDTH_DEFAULT;

  const getZIndex = (index: number): number => {
    if (hovered === index) return 10;
    return CARD_COUNT - index;
  };

  return (
    <section className="w-full px-6 pb-16 lg:px-28 lg:pb-20">
      <div className="mx-auto w-full max-w-[1240px]">
        {/* TITLE */}
        <h2 className="text-center text-3xl font-bold tracking-[-0.02em] text-[#901027] sm:text-5xl pt-8">
          {pillarHeading}
        </h2>

        {/* SUBTEXT */}
        <p className="mx-auto mt-4 max-w-[760px] text-center text-sm text-[#303742]">
          {pillarDescription}
        </p>

        {/* MOBILE */}
        <div className="mx-auto mt-10 flex max-w-[980px] flex-col gap-3 md:hidden">
          {pillarCards.map((card: any, idx: number) => (
            <PillarCard key={card._id || idx} card={card} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="mt-16 hidden justify-center md:flex">
          <div
            className="relative h-[280px]"
            style={{
              width: hovered !== null ? totalWidthExpanded : totalWidthBase,
              transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {pillarCards.map((card: any, index: number) => (
              <div
                key={card._id || index}
                className="absolute top-0 h-full"
                style={{
                  left: getLeft(index),
                  width: getWidth(index),
                  zIndex: getZIndex(index),
                  transition:
                    "left 0.4s cubic-bezier(0.4,0,0.2,1), width 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <PillarCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
