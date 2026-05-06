"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ListFleetApi } from "@/app/api/fleet/fleet";
import { ServiceCard } from "../our-service/components/ServiceCard";
import { ourFleetContent } from "./fleet.constants";

export function FleetShowcaseSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["fleet-page"],
    queryFn: () => ListFleetApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 py-9 lg:px-20 lg:py-20 animate-pulse">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-16 text-center">
            <div className="h-12 w-3/4 bg-gray-200 rounded mx-auto mb-6" />
            <div className="h-10 w-2/3 bg-gray-200 rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-80 bg-gray-200 rounded-[22px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching fleet showcase:", error);
  }

  const fleetData = Array.isArray(data) ? data[0] : data;

  const title = fleetData?.title || "Our Diverse & High-Performance Fleet";
  const description = fleetData?.description || "From oil tankers to support vessels, every ship in the Clio fleet is built to the highest maritime standards, delivering performance across all ocean conditions.";
  const cards = fleetData?.cards || ourFleetContent.cards || [];

  const tagColors = ["#B16E03", "#86172B", "#7A6C00", "#236A28"];

  return (
    <section id="fleet-showcase" className="w-full px-6 py-9 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-16 text-center">
          <h2 className="text-5xl lg:text-6xl leading-[1.1] font-bold tracking-[-0.03em] text-[#901027]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-[900px] text-sm lg:text-base leading-relaxed text-[#3b3f45]">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 justify-center">
          {cards.map((card: any, index: number) => (
            <div key={card._id || index} className="flex-shrink-0">
              <ServiceCard
                title={card.title}
                tag={card.tag}
                image={card.image}
                hoverText={card.hoverText}
                tagColor={card.tagColor || tagColors[index % tagColors.length]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
