"use client";

import { useQuery } from "@tanstack/react-query";
import { GetStartedButton } from "@/features/transport-maritime/components/GetStartedButton";
import { TransportHeroImage } from "@/features/transport-maritime/components/TransportHeroImage";
import { transportMaritimeContent } from "@/features/transport-maritime/transportMaritime.constants";
import { ListTransportMaritimeApi } from "@/app/api/home/transportmaritime";

export function TransportMaritimeSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["transport-maritime"],
    queryFn: () => ListTransportMaritimeApi({}),
  });

  if (isLoading) {
    return (
      <section className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10 xl:px-20 py-10 sm:py-14 animate-pulse">
        <div className="mx-auto max-w-[820px] text-center flex flex-col items-center">
          <div className="h-10 w-3/4 bg-gray-200 rounded mb-6" />
          <div className="h-10 w-1/2 bg-gray-200 rounded mb-8" />
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-2/3 bg-gray-200 rounded mb-10" />
          <div className="h-12 w-40 bg-gray-200 rounded-full" />
        </div>
        <div className="mt-8 sm:mt-10 h-[280px] md:h-[400px] w-full bg-gray-200 rounded-[22px]" />
      </section>
    );
  }

  if (error) {
    console.error("Error fetching transport maritime data:", error);
  }

  const transportData = Array.isArray(data) ? data[0] : data;

  const heading = transportData?.heading || transportMaritimeContent.heading;
  const description = transportData?.description || transportMaritimeContent.description;
  const cta = transportData?.cta || transportMaritimeContent.cta;
  const cardTitle = transportData?.cardTitle || transportMaritimeContent.cardTitle;
  const cardDescription = transportData?.cardDescription || transportMaritimeContent.cardDescription;
  const leftImage = transportData?.leftImage;
  const rightImage = transportData?.rightImage;

  return (
    <section className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10 xl:px-20 py-10 sm:py-14">
      {/* TEXT CONTENT */}
      <div className="mx-auto max-w-[820px] text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[#8f1131] leading-snug">
          {heading}
        </h1>

        <p className="mx-auto mt-4 sm:mt-5 max-w-[760px] text-sm sm:text-base text-[#3f3f46]">
          {description}
        </p>

        <div className="mt-5 sm:mt-6">
          <GetStartedButton label={cta} />
        </div>
      </div>

      {/* IMAGE */}
      <TransportHeroImage
        cardTitle={cardTitle}
        cardDescription={cardDescription}
        mainImage={leftImage}
        sideImage={rightImage}
      />
    </section>
  );
}
