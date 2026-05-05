"use client";

import { useQuery } from "@tanstack/react-query";
import { ServiceCard } from "@/features/our-service/components/ServiceCard";
import { ourServiceContent } from "@/features/our-service/ourService.constants";
import { ListOurServicesApi } from "@/app/api/home/service";

export function OurServiceSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["our-services"],
    queryFn: () => ListOurServicesApi({}),
  });

  if (isLoading) {
    return (
      <section className="mx-auto w-full max-w-[1280px] lg:px-4 py-20 sm:px-2 sm:py-20 animate-pulse">
        <div className="flex flex-col items-center">
          <div className="h-12 w-3/4 max-w-[400px] bg-gray-200 rounded pt-8 mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[400px] bg-gray-200 rounded-[24px]" />
            ))}
          </div>
          <div className="h-6 w-full max-w-[800px] bg-gray-200 rounded mt-12 mb-2" />
          <div className="h-6 w-2/3 max-w-[500px] bg-gray-200 rounded" />
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching our services:", error);
  }

  const serviceData = Array.isArray(data) ? data[0] : data;

  const title = serviceData?.title || ourServiceContent.title;
  const description = serviceData?.description || ourServiceContent.description;
  const cards = serviceData?.cards || ourServiceContent.cards;

  return (
    <section className="mx-auto w-full max-w-[1280px] lg:px-4 py-20 sm:px-2 sm:py-20">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold tracking-[-0.02em] text-[#8f1131] sm:text-5xl pt-8">
        {title}
      </h1>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-5 pt-9 pb-7 lg:px-15 px-3">
        {cards.map((card: any, index: number) => {
          const fallbackColors = ["bg-[#79BED7]", "bg-[#10A31A]", "bg-[#86172B]"];
          return (
            <ServiceCard
              key={card._id || card.title}
              title={card.title}
              tag={card.tag}
              image={card.image}
              imagePosition={card.imagePosition || "center"}
              tagColor={card.tagColor || fallbackColors[index % fallbackColors.length]}
              hoverText={card.hoverText}
            />
          );
        })}
      </div>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-[860px] px-4 text-center font-normal text-[18px] sm:mt-12 sm:text-lg">
        {description}
      </p>
    </section>
  );
}
