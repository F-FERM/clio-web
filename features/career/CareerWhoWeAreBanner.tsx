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
  console.log(whoImage, "who");

  return (
    <section className="w-full px-6 py-12 lg:px-20 lg:py-16">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="group relative h-[300px] md:h-[350px] lg:h-[380px] w-full overflow-hidden rounded-[24px]">
          {/* MAIN IMAGE */}
          <Image
            src={MainImage}
            alt="Main background"
            fill
            priority
            className="object-cover object-center"
          />

          {/* RIGHT SIDE CARD - expands on hover */}
          <div
            className="
              absolute right-0 top-0 h-full
              w-[50%] md:w-[45%] lg:w-[40%]
              transition-all duration-500 ease-out
              group-hover:w-[70%] md:group-hover:w-[60%] lg:group-hover:w-[55%]
              rounded-l-[24px] overflow-hidden
              bg-white/95 backdrop-blur-sm
            "
          >
            <Image
              src={whoImage}
              alt="Who we are"
              fill
              className="object-cover object-right"
            />

            {/* OVERLAY CARD */}
            <div className="absolute inset-0 flex items-center justify-start p-8 md:p-10 lg:p-12">
              <OverlayInfoCard title={whoTitle} description={whoDescription} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
