"use client";

import { ListCareerApi } from "@/app/api/career/career";
import { OverlayInfoCard } from "@/features/transport-maritime/components/OverlayInfoCard";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import RightImageFallback from "../../public/images/career/who.jpg";
import MainImage from "../../public/images/career/Carrer1.jpg";
import { careerContent } from "./career.constants";

export function CareerWhoWeAreBanner() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["career-page"],
    queryFn: () => ListCareerApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 py-12 lg:px-20 lg:py-16 animate-pulse">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="h-[300px] md:h-[380px] w-full bg-gray-200 rounded-[24px]" />
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching career who we are banner:", error);
  }

  const careerData = Array.isArray(data) ? data[0] : data;

  const whoTitle = careerData?.whoTitle || careerContent.cardTitle;
  const whoDescription =
    careerData?.whoDescription || careerContent.cardDescription;
  const whoImage = careerData?.whoImage || RightImageFallback;
  const whoImage2 = careerData?.whoImage2 || RightImageFallback;
  console.log(whoImage, "who");

  return (
    <section className="w-full px-6 py-12 lg:px-20 lg:py-16">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="group relative mt-8 sm:mt-10 h-[280px] xs:h-[320px] sm:h-[280px] md:h-[340px] lg:h-[400px] xl:h-[440px] w-full overflow-hidden rounded-[14px] sm:rounded-[18px] md:rounded-[22px]">
          {/* MAIN IMAGE */}
          <Image
            src={whoImage}
            alt="Main background"
            fill
            priority
            className="object-cover object-center"
          />

          {/* RIGHT SIDE CARD - expands on hover */}
          <div
            className="
              absolute right-0 top-0 h-full
              w-[48%] sm:w-[42%] md:w-[38%] lg:w-[32%]
              transition-all duration-500 ease-out
              group-hover:w-[62%] sm:group-hover:w-[55%] md:group-hover:w-[50%] lg:group-hover:w-[44%]
              rounded-l-[14px] sm:rounded-l-[18px] md:rounded-l-[22px] overflow-hidden
            "
          >
            <Image
              src={whoImage2}
              alt="Who we are"
              fill
              className="object-cover object-right"
            />

            {/* OVERLAY CARD */}
            <div className="absolute inset-0 flex items-start pt-3 sm:pt-4 md:pt-5 justify-start pl-2 sm:pl-3 md:pl-4 lg:pl-5 pr-4">
              <OverlayInfoCard title={whoTitle} description={whoDescription} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
