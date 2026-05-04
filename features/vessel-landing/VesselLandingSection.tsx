"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import HeaderMainShip from "../../public/images/home/HeroShip.png";
import { VesselOperationsCard } from "./components/VesselOperationsCard";
import { VesselInfoPill } from "./components/VesselInfoPill";
import { ListVesselLandingApi } from "@/app/api/home/page";

export function VesselLandingSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["vessel-landing"],
    queryFn: () => ListVesselLandingApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full">
        <div className="relative h-[700px] sm:h-[580px] md:h-[600px] lg:h-[820px] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gray-200 animate-pulse">
          <div className="relative z-10 h-full px-4 sm:px-6 md:px-8 lg:px-25 pt-[130px] sm:pt-36 lg:py-10 flex flex-col justify-between lg:block">
            <div className="lg:mt-30 max-w-[1400px]">
              <div className="h-16 sm:h-24 lg:h-32 w-3/4 bg-gray-300 rounded-lg mb-6" />
              <div className="h-16 sm:h-24 lg:h-32 w-1/2 bg-gray-300 rounded-lg" />
            </div>
            <div className="hidden lg:block absolute right-19 top-40 h-[450px] w-[380px] bg-gray-300 rounded-[28px]" />
            <div className="lg:absolute lg:bottom-12 lg:left-25 mt-auto lg:mt-0 pb-6 lg:pb-0">
               <div className="h-10 w-48 bg-gray-300 rounded-full mb-4" />
               <div className="h-4 w-64 bg-gray-300 rounded mb-2" />
               <div className="h-4 w-48 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching vessel landing data:", error);
  }

  // Handle case where data might be an array or a single object
  const vesselData = Array.isArray(data) ? data[0] : data;

  const heading = vesselData?.heading || "MOST RELIABLE WAY TO MANAGE YOUR VESSELS";
  const summary = vesselData?.summary || "From fleet management to compliance and global coordination, we ensure smooth, secure, and cost-effective shipping operations worldwide.";
  const backgroundImage = vesselData?.backgroundImage || HeaderMainShip;

  return (
    <section className="w-full">
      <div className="relative h-[700px] sm:h-[580px] md:h-[600px] lg:h-[820px] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Vessel"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5f8598]/80 via-[#7ea8bb]/40 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 h-full px-4 sm:px-6 md:px-8 lg:px-25 pt-[130px] sm:pt-36 lg:py-10 flex flex-col justify-between lg:block">
          {/* MAIN HEADING */}
          <div className="lg:mt-30 max-w-[1400px]">
            <h1 className="lg:mt-10 text-[28px] sm:text-[38px] md:text-[48px] lg:text-[75px] leading-[1.1] sm:leading-[1.18] font-extrabold text-white max-w-[820px] drop-shadow-lg">
              {heading.split("YOUR").map((part: string, index: number, array: string[]) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <>
                      Y<span className="stroke-text">OUR</span>
                    </>
                  )}
                </span>
              ))}
            </h1>
          </div>

          {/* RIGHT CARD - Desktop only */}
          <div className="hidden lg:block absolute right-19 ">
            <VesselOperationsCard
              title={vesselData?.rightTitle}
              description={vesselData?.rightDescription}
              bullets={vesselData?.rightBullets}
              image={vesselData?.cardImage}
            />
          </div>

          {/* BOTTOM SECTION - Mobile & Tablet (Relative in flex) vs Desktop (Absolute) */}
          <div className="lg:absolute lg:bottom-12 lg:left-25 lg:right-auto mt-auto lg:mt-0 pb-6 lg:pb-0">
            {/* Mobile/Tablet: Stacked Layout */}
            <div className="lg:hidden flex flex-col gap-4">
              {/* Pill and Paragraph */}
              <div className="space-y-2">
                <VesselInfoPill
                  info={vesselData?.leftInfo}
                  image={vesselData?.pillImage}
                />
                <p className="text-[12px] sm:text-[15px] leading-relaxed text-white/95 max-w-[90vw]">
                  {summary}
                </p>
              </div>

              {/* Card below */}
              <div className="transform scale-90 origin-left sm:scale-100">
                <VesselOperationsCard
                  title={vesselData?.rightTitle}
                  description={vesselData?.rightDescription}
                  bullets={vesselData?.rightBullets}
                  image={vesselData?.cardImage}
                />
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block max-w-[950px]">
              <div className="mb-6">
                <VesselInfoPill
                  info={vesselData?.leftInfo}
                  image={vesselData?.pillImage}
                />
              </div>
              <p className="text-md  text-white/90 max-w-[600px]">{summary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
