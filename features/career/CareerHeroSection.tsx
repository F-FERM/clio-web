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
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-20 pt-1">
          <h1 className="max-w-[950px] text-4xl sm:text-5xl lg:text-[64px] leading-[1.2] sm:leading-[1.28] font-bold tracking-[-0.03em] text-[#45474d]">
            {heading}
          </h1>
          <p className="mt-4 sm:mt-6 max-w-[390px] text-xs sm:text-[17px] leading-normal text-[#3b3f45]">
            {description}
          </p>
          <div className="mt-6 sm:mt-7">
            <GetStartedButton label={cta} />
          </div>
        </div>

        <div className="relative z-10 min-h-[350px] sm:min-h-[395px] lg:ml-6 mt-12 sm:mt-16 lg:mt-0">
          <div className="absolute inset-0 overflow-hidden rounded-[18px]">
            <Image
              src={heroImage}
              alt="Maritime careers"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -bottom-8 -left-4 right-4 sm:top-[200px] sm:left-[-150px] sm:bottom-auto w-[calc(100%+32px)] sm:max-w-[350px] rounded-[12px] bg-[#8f9397]/78 p-4 text-white backdrop-blur-[1.5px] shadow-lg">
            <h2 className="text-xl sm:text-[28px] leading-none font-semibold">
              WHY WORK WITH CLIO
            </h2>
            <p className="mt-1.5 text-[10px] sm:text-[12px] text-white/70">
              We don&apos;t just offer jobs—we build careers.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:block sm:space-y-2.5">
              {whyItems.map((item: any, index: number) => {
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={item._id || index}
                    className="flex items-start gap-3"
                  >
                    <Icon className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 shrink-0 text-white/90" />
                    <div>
                      <p className="text-[10px] sm:text-[15px] leading-none font-medium text-white">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[8px] sm:text-[12px] leading-tight text-white/85">
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
