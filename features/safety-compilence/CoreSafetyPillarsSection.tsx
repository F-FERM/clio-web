"use client";

import { useState } from "react";

const pillarCards = [
  {
    title: "Prepared for Every Situation",
    description:
      "Our crews are trained to respond to emergencies through structured drills and regular drills. We maintain robust response systems to ensure safe action with minimal impact.",
    bg: "#9e1f3a",
    backgroundImage:
      "repeating-linear-gradient(145deg,rgba(255,255,255,0.08) 0px,rgba(255,255,255,0.08) 1px,transparent 1px,transparent 10px)",
    textColor: "#fff",
    descColor: "rgba(255,255,255,0.85)",
  },
  {
    title: "Smart Safety Monitoring",
    description:
      "We leverage modern technology to monitor safety through real-time tracking, predictive maintenance, and performance analytics that ensures early detection of potential operational risks.",
    bg: "#d6e1eb",
    backgroundImage:
      "radial-gradient(circle at 22px 22px,rgba(0,0,0,0.06) 1.5px,transparent 1.5px)",
    backgroundSize: "34px 34px",
    textColor: "#8f1131",
    descColor: "#2f3440",
  },
  {
    title: "Safe & Efficient Operations",
    description:
      "Our operations are supported by advanced monitoring systems and regular inspections to ensure vessels perform at optimal safety levels. From navigation to cargo handling, every process is carefully controlled and evaluated.",
    bg: "#f1df3f",
    backgroundImage:
      "radial-gradient(circle at 20px 20px,rgba(0,0,0,0.07) 1.4px,transparent 1.4px)",
    backgroundSize: "30px 30px",
    textColor: "#8f1131",
    descColor: "#2f3440",
  },
] as const;

const CARD_WIDTH_DEFAULT = 360;
const CARD_WIDTH_EXPANDED = 440;
const CARD_OVERLAP = 85;
const CARD_COUNT = pillarCards.length;

const totalWidthBase =
  CARD_COUNT * (CARD_WIDTH_DEFAULT - CARD_OVERLAP) + CARD_OVERLAP;

const totalWidthExpanded =
  totalWidthBase + (CARD_WIDTH_EXPANDED - CARD_WIDTH_DEFAULT);

function PillarCard({ card }: { card: (typeof pillarCards)[number] }) {
  return (
    <div
      className="w-full h-full px-7 py-7 flex flex-col justify-between"
      style={{
        backgroundColor: card.bg,
        backgroundImage: card.backgroundImage,
        backgroundSize:
          "backgroundSize" in card ? card.backgroundSize : undefined,
        color: card.textColor,
        borderRadius: 18,
      }}
    >
      <h3 className="text-3xl font-semibold leading-[1.08] max-w-[220px]">
        {card.title}
      </h3>

      <p
        className="mt-4 text-sm leading-[1.45] line-clamp-4"
        style={{ color: card.descColor }}
      >
        {card.description}
      </p>
    </div>
  );
}

export function CoreSafetyPillarsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

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
        <h2 className="text-center text-4xl font-bold tracking-[-0.03em] text-[#8f1131]">
          Core Safety Pillars
        </h2>

        {/* SUBTEXT */}
        <p className="mx-auto mt-4 max-w-[760px] text-center text-sm text-[#303742]">
          Our safety framework is built on three key pillars that ensure
          consistent protection, compliance, and operational excellence across
          every voyage.
        </p>

        {/* MOBILE */}
        <div className="mx-auto mt-10 flex max-w-[980px] flex-col gap-3 md:hidden">
          {pillarCards.map((card) => (
            <PillarCard key={card.title} card={card} />
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
            {pillarCards.map((card, index) => (
              <div
                key={card.title}
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
