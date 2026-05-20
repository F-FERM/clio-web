"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ListCareerApi } from "@/app/api/career/career";
import {
  BriefcaseBusiness,
  Globe,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import { GetStartedButton } from "../transport-maritime/components/GetStartedButton";

const icons = [Globe, BriefcaseBusiness, ShieldCheck, Users, Rocket];

export function CareerHeroSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["career-page"],
    queryFn: () => ListCareerApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 sm:pt-32 lg:pt-12 lg:px-20 animate-pulse">
        <div className="mx-auto grid w-full max-w-[1240px] items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="h-20 w-3/4 bg-gray-200 rounded mb-6" />
            <div className="h-10 w-full bg-gray-200 rounded mb-4" />
            <div className="h-12 w-40 bg-gray-200 rounded mt-8" />
          </div>
          <div className="h-[400px] bg-gray-200 rounded-[18px]" />
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching career hero:", error);
  }

  const careerData = Array.isArray(data) ? data[0] : data;

  const heading =
    careerData?.heading || "Build Your Future in Maritime Excellence";
  const description =
    careerData?.description ||
    "Join a team that's redefining global ship management. At Clio, we combine innovation, expertise, and opportunity to help you grow in a dynamic maritime environment.";
  const cta = careerData?.cta || "Get Started";
  const heroImage = careerData?.heroImage || "/images/career/career.png";
  const whyItems = careerData?.whyItems || [];

  return (
    <section className="w-full px-6 sm:pt-32 lg:pt-12 lg:px-20">
      <div
        className="
          mx-auto w-full max-w-[1240px]
          grid items-start gap-6
          grid-cols-1
          md:grid-cols-[1fr_1fr]
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-8
        "
      >
        {/* ── LEFT: Text content ───────────────────────────────────────────── */}
        <div className="relative z-20 pt-1">
          <h1
            className="
              max-w-[950px] font-bold tracking-[-0.03em] text-[#45474d]
              text-3xl leading-[1.2]
              sm:text-4xl sm:leading-[1.25]
              md:text-[42px] md:leading-[1.22]
              lg:text-[56px] lg:leading-[1.2]
              xl:text-[64px]
            "
          >
            {heading}
          </h1>
          <p
            className="
              mt-4 text-[#3b3f45] leading-normal
              text-xs max-w-full
              sm:text-sm sm:mt-5 sm:max-w-[390px]
              md:text-[15px] md:mt-5
              lg:text-[17px] lg:mt-6
            "
          >
            {description}
          </p>
          <div className="mt-6 sm:mt-7">
            <GetStartedButton label={cta} />
          </div>
        </div>

        {/* ── RIGHT: Image + overlay card ──────────────────────────────────── */}
        <div
          className="
            relative z-10
            min-h-[280px]
            sm:min-h-[350px]
            md:min-h-[380px]
            lg:min-h-[395px]
            mt-6
            sm:mt-10
            md:mt-0
            lg:ml-6 lg:mt-0
          "
        >
          {/* Hero image */}
          <div className="absolute inset-0 overflow-hidden rounded-[18px]">
            <Image
              src={heroImage}
              alt="Maritime careers"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* ── WHY WORK WITH CLIO overlay card ──────────────────────────────
           *
           * Breakpoint strategy for the card position:
           *
           * mobile  → normal flow below image (relative, not absolute)
           *           using negative margin to overlap bottom of image slightly
           *
           * sm      → absolute, anchored to bottom of image, left edge
           *           NO negative left — stays within the image bounds
           *
           * md      → absolute, left-[-80px] (smaller bleed than original -150px)
           *           sits at bottom of image
           *
           * lg+     → restore original sm:left-[-150px] sm:top-[200px] behaviour
           *
           * Width ladder keeps card from being wider than the image at every size.
           */}
          <div
            className="
              relative z-10 mt-2
              sm:absolute sm:mt-0
              sm:bottom-[-12px] sm:left-0 sm:top-auto
              md:bottom-auto md:top-[180px] md:left-[-80px]
              lg:top-[200px] lg:left-[-150px] lg:bottom-auto
              w-full
              sm:max-w-[300px]
              md:max-w-[320px]
              lg:max-w-[350px]
              rounded-[12px] bg-[#8f9397]/78 p-4 text-white backdrop-blur-[1.5px] shadow-lg
            "
          >
            <h2
              className="
                font-semibold leading-none
                text-base sm:text-xl lg:text-[28px]
              "
            >
              WHY WORK WITH CLIO
            </h2>
            <p
              className="
                mt-1.5 text-white/70
                text-[10px] sm:text-[11px] lg:text-[12px]
              "
            >
              We don&apos;t just offer jobs—we build careers.
            </p>

            <div
              className="
                mt-3
                grid grid-cols-2 gap-3
                sm:block sm:space-y-2.5
              "
            >
              {whyItems.map((item: any, index: number) => {
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={item._id || index}
                    className="flex items-start gap-3"
                  >
                    <Icon
                      className="
                        mt-0.5 shrink-0 text-white/90
                        h-3 w-3
                        sm:h-3.5 sm:w-3.5
                        lg:h-4 lg:w-4
                      "
                    />
                    <div>
                      <p
                        className="
                          leading-none font-medium text-white
                          text-[10px]
                          sm:text-[13px]
                          lg:text-[15px]
                        "
                      >
                        {item.title}
                      </p>
                      <p
                        className="
                          mt-1.5 leading-tight text-white/85
                          text-[8px]
                          sm:text-[11px]
                          lg:text-[12px]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}