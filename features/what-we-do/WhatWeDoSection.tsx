"use client";

import { useQuery } from "@tanstack/react-query";
import { ListWedoChooseClioApi } from "@/app/api/about/wedochooseclio";
import { WhatWeDoGallery } from "@/features/what-we-do/components/WhatWeDoGallery";
import { whatWeDoContent } from "@/features/what-we-do/whatWeDo.constants";

export function WhatWeDoSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["what-we-do-choose-clio"],
    queryFn: () => ListWedoChooseClioApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 py-10 lg:px-34 lg:py-14 animate-pulse">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="mx-auto h-12 w-64 bg-gray-200 rounded pt-8 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-12 lg:mt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[400px] bg-gray-200 rounded-[24px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching what we do data:", error);
  }

  const sectionData = Array.isArray(data) ? data[0] : data;

  const title = sectionData?.title || whatWeDoContent.title;
  const cards = sectionData?.cards || whatWeDoContent.cards;

  return (
    <section className="w-full px-6 py-10 lg:px-34 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px]">
        <h1 className="text-center text-3xl font-bold tracking-[-0.02em] text-[#901027] sm:text-5xl pt-8">
          {title}
        </h1>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <WhatWeDoGallery cards={cards} />
        </div>
      </div>
    </section>
  );
}
