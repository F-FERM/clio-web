"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ListWedoChooseClioApi } from "@/app/api/about/wedochooseclio";
import { whatWeDoContent } from "@/features/what-we-do/whatWeDo.constants";
import { GetStartedButton } from "../transport-maritime/components/GetStartedButton";

export function WhyChooseClioSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["what-we-do-choose-clio"],
    queryFn: () => ListWedoChooseClioApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 py-10 lg:px-34 lg:py-16 animate-pulse">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-10 w-64 bg-gray-200 rounded mb-6" />
            <div className="h-6 w-full bg-gray-200 rounded mb-4" />
            <div className="h-6 w-full bg-gray-200 rounded mb-4" />
            <div className="h-12 w-40 bg-gray-200 rounded mt-6" />
          </div>
          <div className="space-y-3 sm:space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-gray-200 rounded-[14px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching why choose clio data:", error);
  }

  const sectionData = Array.isArray(data) ? data[0] : data;

  const whyTitle = sectionData?.whyTitle || whatWeDoContent.whyTitle;
  const whyDescription = sectionData?.whyDescription || whatWeDoContent.whyDescription;
  const cta = sectionData?.cta || whatWeDoContent.cta;
  const benefits = sectionData?.benefits || whatWeDoContent.benefits;

  return (
    <section className="w-full px-6 py-10 lg:px-34 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-2 lg:gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-[#901027]">
            {whyTitle}
          </h2>

          <p className="mt-4 sm:mt-6 max-w-[520px] text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed text-[#24272d]">
            {whyDescription}
          </p>

          <div className="mt-6 sm:mt-12">
            <GetStartedButton label={cta} />
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-3 sm:space-y-4">
          {benefits.map((item: any, index: number) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`group relative cursor-pointer overflow-hidden rounded-[14px] border border-[#c8ced6] px-4 py-4 sm:px-5 transition-all duration-300 lg:hover:bg-white lg:hover:shadow-md ${
                  isActive ? "bg-white shadow-md" : ""
                }`}
              >
                {/* Top Row */}
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#901027] text-[#901027] text-sm font-bold transition-opacity duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 lg:group-hover:opacity-100"
                    }`}
                  >
                    ✓
                  </div>

                  {/* Title */}
                  <h3 className="text-[14px] sm:text-[15px] lg:text-[18px] font-semibold text-[#901027]">
                    {item.title}
                  </h3>
                </div>

                {/* Description — mobile: toggled by click; desktop: shown on hover */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "max-h-[200px] opacity-100 mt-2"
                      : "max-h-0 opacity-0 mt-0 lg:group-hover:max-h-[200px] lg:group-hover:opacity-100 lg:group-hover:mt-2"
                  }`}
                >
                  <p className="pl-9 text-[13px] sm:text-[14px] text-[#24272d]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}