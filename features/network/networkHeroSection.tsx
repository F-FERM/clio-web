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
  const mainImage = networkData?.mainImage || "/images/network/Union1.png";
  const overlay = networkData?.overlay || {
    title: "Our Global Presence",
    description:
      "From major ports to strategic maritime hubs, our network ensures uninterrupted operations and reliable support across international waters.",
    points: ["Middle East", "Asia-Pacific", "Europe", "Americas"],
    image: "/images/network/Rectangle.png",
  };
  const sideText =
    networkData?.sideText ||
    "Clio Ship Management operates across key global shipping routes, delivering seamless vessel management, logistics coordination, and technical support wherever your fleet operates.";

  const headingParts = headingText.split(" ");
  const lastWord = headingParts.pop();
  const restOfHeading = headingParts.join(" ");

  return (
    <div className="sm:pt-32 lg:pt-10 px-6 lg:px-20">
      <div className="w-full max-w-[1240px] mx-auto">

        {/*
         * OUTER WRAPPER — relative so the right-bottom card can be
         * absolutely positioned outside the image but still inside this box.
         * pb-28 on sm/md reserves space below the image for the right card.
         */}
        <div className="relative pb-0 sm:pb-28 lg:pb-0">

          {/*
           * ── IMAGE + ALL OVERLAYS WRAPPER ──────────────────────────────
           * Everything (heading, left card, image) lives inside this single
           * relative container so z-layering and absolute offsets are local.
           *
           * Width:
           *   mobile  → full width, no offset
           *   sm      → pull right a bit (left-8) but cap width so it doesn't
           *              overflow: calc(100% - 2rem)
           *   md      → same calc, slightly taller
           *   lg+     → restore original 1090px cap
           *
           * NOTE: heading and left-card are INSIDE this wrapper so they
           * always stay on top of the image, never above it in the DOM flow.
           */}
          <div
            className="
              relative
              left-0    h-[200px]  w-full
              sm:left-8 sm:h-[300px] sm:w-[calc(100%-2rem)]
              md:h-[420px]
              lg:w-[1090px]
              rounded-[16px] sm:rounded-[20px] md:rounded-[30px]
              overflow-visible
            "
          >
            {/* Actual image — overflow:hidden only on this inner div */}
            <div className="absolute inset-0 rounded-[16px] sm:rounded-[20px] md:rounded-[30px] overflow-hidden">
              <Image
                src={mainImage}
                alt="Ship"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/10 sm:bg-transparent" />
            </div>

            {/* ── HEADING — inside image wrapper, always overlaid ──────────
             * Sits top-left of the image at every breakpoint.
             * md:text-4xl fills the 834-1194 gap between sm:text-3xl and lg:text-5xl.
             */}
            <h1
              className="
                absolute top-2 left-2 z-10
                sm:top-4 sm:left-4
                md:top-4 md:left-8
                lg:top-3 lg:left-20
                text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-[59px]
                font-bold text-[#464646]
                whitespace-normal sm:whitespace-nowrap
              "
            >
              {restOfHeading}{" "}
              <span className={styles.outline}>{lastWord}</span>
            </h1>

            {/* ── LEFT OVERLAY CARD ─────────────────────────────────────────
             * Centred vertically on the image.
             *
             * Width ladder:
             *   mobile  → nearly full width (card fills phone screen)
             *   sm      → calc(100% - 2rem) — matches image width
             *   md      → fixed 320px, no inner thumbnail, smaller padding
             *   lg+     → 480px with thumbnail and full pr-[205px]
             *
             * Left offset follows the image offset so it never bleeds outside.
             */}
            <div
              className="
                absolute top-1/2 -translate-y-1/2 z-20
                left-2
                sm:left-4
                md:left-6
                lg:left-15
                w-[calc(100%-1rem)]
                sm:w-[280px]
                md:w-[300px]
                lg:w-[480px]
                bg-white/20 backdrop-blur-md border border-white/25
                rounded-lg sm:rounded-2xl shadow-xl text-white
                px-3 sm:px-4 md:px-5 lg:px-6
                py-2 sm:py-3 md:py-3 lg:py-2
                pr-3 sm:pr-4 md:pr-4 lg:pr-[205px]
              "
            >
              <h3 className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-extrabold uppercase tracking-widest mb-1.5 sm:mb-2 md:mb-3">
                {overlay.title}
              </h3>
              <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-white/90 leading-relaxed mb-2 sm:mb-3 md:mb-4 max-w-full lg:max-w-[280px]">
                {overlay.description}
              </p>

              <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-1.5 text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-white/90">
                {overlay.points?.map((r: string) => (
                  <span key={r} className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[13px] sm:text-sm leading-none text-white/60">
                      •
                    </span>
                    {r}
                  </span>
                ))}
              </div>

              {/* Inner ship thumbnail — only at lg+ where card is wide enough */}
              <div
                className="
                  hidden lg:block
                  absolute top-1/2 -translate-y-1/2 right-1.5
                  w-[185px] h-[150px]
                  bg-white/10 border border-white/25 rounded-2xl p-2 shadow-lg overflow-hidden
                "
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

          </div>
          {/* end image+overlays wrapper */}

          {/* ── RIGHT BOTTOM CARD ────────────────────────────────────────────
           * This card sits OUTSIDE the image wrapper (in the flow of the
           * outer relative div) so it can poke below the image boundary.
           *
           * Breakpoint strategy:
           *   mobile  → normal flow, small top margin
           *   sm/md   → absolute, anchored to bottom-right of outer wrapper;
           *             sm:right-0 keeps it within viewport.
           *             Width 320-340px so it doesn't collide with left card.
           *   lg+     → restore original left-[744px] / top positioning.
           *
           * The outer wrapper has sm:pb-28 to reserve the space this card
           * occupies so the section below doesn't overlap it.
           */}
          <div
            className="
              relative mt-3
              sm:absolute sm:mt-0
              sm:bottom-0 sm:right-0
              md:bottom-2 md:right-2
              lg:top-[312px] lg:bottom-auto lg:left-[744px] lg:right-auto
              w-full sm:w-[300px] md:w-[320px] lg:w-[406px]
              px-3 py-2 sm:p-3
              rounded-lg sm:rounded-2xl
              shadow-sm sm:shadow-md lg:shadow-none
              bg-white/85 sm:bg-white/80 md:bg-white/90 lg:bg-transparent
            "
          >
            <p className="text-xs sm:text-sm text-gray-800 md:text-gray-700 lg:text-gray-600 leading-[1.70]">
              {sideText}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}