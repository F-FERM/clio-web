"use client";

import { useQuery } from "@tanstack/react-query";
import { FeatureInfoCard } from "@/features/ship-management-logistics/components/FeatureInfoCard";
import { SmartFleetPanel } from "@/features/ship-management-logistics/components/SmartFleetPanel";
import { shipManagementContent } from "@/features/ship-management-logistics/shipManagement.constants";
import { ListShipManagementApi } from "@/app/api/home/shiplogistics";

export function ShipManagementLogisticsSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ship-management"],
    queryFn: () => ListShipManagementApi({}),
  });

  if (isLoading) {
    return (
      <section className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10 xl:px-20 py-7 pt-16 animate-pulse">
        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-[4fr_1.5fr] items-start">
          <div>
            <div className="h-12 w-3/4 bg-gray-200 rounded mb-6" />
            <div className="h-12 w-1/2 bg-gray-200 rounded mb-8" />
            <div className="h-6 w-full bg-gray-200 rounded mb-4" />
            <div className="h-6 w-5/6 bg-gray-200 rounded mb-10" />
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="h-[230px] bg-gray-200 rounded-[22px]" />
              <div className="h-[230px] bg-gray-200 rounded-[22px]" />
            </div>
          </div>
          <div className="h-[400px] w-full bg-gray-200 rounded-xl" />
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching ship management data:", error);
  }

  const shipData = Array.isArray(data) ? data[0] : data;

  const heading = shipData?.heading || "END - TO - END SHIP MANAGEMENT & LOGISTICS SOLUTIONS";
  const description = shipData?.description || shipManagementContent.description;
  const cards = shipData?.cards || shipManagementContent.cards;
  const sideCardTitle = shipData?.sideCardTitle || shipManagementContent.sideCardTitle;
  const sideCardDescription = shipData?.sideCardDescription || shipManagementContent.sideCardDescription;
  const sideImage = shipData?.sideImage;
console.log(sideImage,'side');

  return (
    <section className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10 xl:px-20 py-7 pt-16">
      <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-[4fr_1.5fr] items-start">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="max-w-[700px] text-balance lg:text-5xl sm:text-5xl leading-snug sm:leading-[1.6] font-medium tracking-[-0.02em] text-[#8f1131]">
            {heading.split("<br />").map((part: string, i: number) => (
              <span key={i}>
                {part}
                {i < heading.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="mt-4 sm:mt-5 max-w-[830px] text-[18px] font-normal sm:text-base text-[#31333a]">
            {description}
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {cards.map((card: any, index: number) => (
              <FeatureInfoCard
                key={card._id || card.title}
                title={card.title}
                description={card.description}
                tags={card.tags}
                variant={index % 2 === 0 ? "lightBlue" : "yellow"}
              />
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <SmartFleetPanel
          title={sideCardTitle}
          description={sideCardDescription}
          image={sideImage}
        />
      </div>
    </section>
  );
}
