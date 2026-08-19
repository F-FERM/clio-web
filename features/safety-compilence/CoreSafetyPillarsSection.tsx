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
    variant: "maroon",
  },
  {
    title: "Smart Safety Monitoring",
    description:
      "We leverage modern technology to enhance safety through real-time tracking, predictive maintenance, and performance analytics. This ensures early detection of issues and minimizes operational risks.",
    bg: "#E0EFFA",
    textColor: "#901027",
    descColor: "#2f3440",
    variant: "blue",
  },
  {
    title: "Safe & Efficient Operations",
    description:
      "Our operations are supported by advanced monitoring systems and regular inspections to ensure vessels perform at optimal safety levels. From navigation to cargo handling, every process is carefully controlled and evaluated.",
    bg: "#FAE651",
    textColor: "#901027",
    descColor: "#2f3440",
    variant: "yellow",
  },
];

const CARD_WIDTH = 370;
const CARD_OVERLAP = 85;
const CARD_HEIGHT = 280;

const SLIDE_LEFT = 75;

function PillarCard({ card }: { card: any }) {
  let pattern = grayPattern;

  if (
    card.variant === "maroon" ||
    card.bg?.toLowerCase() === "#901027" ||
    card.bg?.toLowerCase() === "#9e1f3a"
  ) {
    pattern = maroonPattern;
  } else if (
    card.variant === "yellow" ||
    card.bg?.toLowerCase() === "#fae651" ||
    card.bg?.toLowerCase() === "#f1df3f"
  ) {
    pattern = yellowPattern;
  } else if (
    card.variant === "blue" ||
    card.bg?.toLowerCase() === "#e0effa" ||
    card.bg?.toLowerCase() === "#d6e1eb"
  ) {
    pattern = grayPattern;
  }

  return (
    <div
      className="relative flex h-full w-full flex-col justify-end gap-3 overflow-hidden px-7 py-7"
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
        className="pointer-events-none absolute inset-0 object-cover opacity-20 mix-blend-multiply"
      />

      <h3 className="relative z-10 text-3xl font-medium leading-[1.20]">
        {card.title}
      </h3>

      <p
        className="relative z-10 text-sm leading-[1.45]"
        style={{
          color: card.descColor,
        }}
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
      <section className="w-full px-6 pb-16 animate-pulse lg:px-28 lg:pb-20">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="mx-auto mb-12 h-10 w-64 rounded bg-gray-200" />

          <div className="flex flex-col gap-3 md:flex-row md:justify-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-64 w-full rounded-[18px] bg-gray-200 md:w-64"
              />
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

  const pillarDescription =
    safetyData?.pillarDescription ||
    "Our safety framework is built on three key pillars that ensure consistent protection, compliance, and operational excellence across every voyage.";

  const pillarCards = safetyData?.pillarCards || pillarCardsFallback;

  const CARD_COUNT = pillarCards.length;

  const totalWidth = CARD_COUNT * (CARD_WIDTH - CARD_OVERLAP) + CARD_OVERLAP;

  const getLeft = (index: number): number => {
    return index * (CARD_WIDTH - CARD_OVERLAP);
  };

  const getTransform = (index: number): string => {
    if ((index === 0 || index === 1) && hovered === index) {
      return `translateX(-${SLIDE_LEFT}px)`;
    }

    return "translateX(0)";
  };

  const getZIndex = (index: number): number => {
    return index + 1;
  };

  return (
    <section className="w-full px-6 pb-16 lg:px-28 lg:pb-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2 className="pt-8 text-center text-3xl font-bold tracking-[-0.02em] text-[#901027] sm:text-5xl">
          {pillarHeading}
        </h2>
        <p className="mx-auto mt-4 max-w-[760px] text-center text-sm text-[#303742]">
          {pillarDescription}
        </p>

        <div className="mx-auto mt-10 flex max-w-[980px] flex-col gap-3 md:hidden">
          {pillarCards.map((card: any, idx: number) => (
            <PillarCard key={card._id || idx} card={card} />
          ))}
        </div>
        <div className="mt-16 hidden justify-center overflow-visible md:flex">
          <div
            className="relative"
            style={{
              width: totalWidth,
              height: CARD_HEIGHT,
            }}
          >
            {pillarCards.map((card: any, index: number) => {
              const isAnimatedCard = index === 0 || index === 1;

              return (
                <div
                  key={card._id || index}
                  className="absolute top-0 h-full"
                  style={{
                    left: getLeft(index),
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    zIndex: getZIndex(index),
                    transform: getTransform(index),
                    transition: isAnimatedCard
                      ? "transform 350ms cubic-bezier(0.4, 0, 0.2, 1)"
                      : "none",

                    willChange: isAnimatedCard ? "transform" : "auto",
                  }}
                  onMouseEnter={() => {
                    if (isAnimatedCard) {
                      setHovered(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (isAnimatedCard) {
                      setHovered(null);
                    }
                  }}
                >
                  <PillarCard card={card} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
