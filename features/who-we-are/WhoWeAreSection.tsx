"use client";

import { useQuery } from "@tanstack/react-query";
import { ListAboutHeroSectionApi } from "@/app/api/about/herosection";
import { PurposeTile } from "@/features/who-we-are/components/PurposeTile";
import { WhoWeAreHero } from "@/features/who-we-are/components/WhoWeAreHero";
import { whoWeAreContent } from "@/features/who-we-are/whoWeAre.constants";

export function WhoWeAreSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["about-hero"], // Sharing the same key as GlobalLeadersSection for cached data
    queryFn: () => ListAboutHeroSectionApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 py-10 lg:px-35 lg:py-14 animate-pulse">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="h-[220px] sm:h-[340px] bg-gray-200 rounded-[16px] mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-40 bg-gray-200 rounded-[12px]" />
            <div className="h-40 bg-gray-200 rounded-[12px]" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching who we are data:", error);
  }

  const heroData = Array.isArray(data) ? data[0] : data;

  const whoTitle = heroData?.whoWeAre?.title || whoWeAreContent.title;
  const whoDescription = heroData?.whoWeAre?.description || whoWeAreContent.heroDescription;
  const whoImage = heroData?.whoImage;
  
  const missionTitle = heroData?.mission?.title || whoWeAreContent.missionTitle;
  const missionDescription = heroData?.mission?.description || whoWeAreContent.missionDescription;
  
  const visionTitle = heroData?.vision?.title || whoWeAreContent.visionTitle;
  const visionDescription = heroData?.vision?.description || whoWeAreContent.visionDescription;

  return (
    <section className="w-full px-6 py-10 lg:px-35 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px]">
        <WhoWeAreHero
          title={whoTitle}
          description={whoDescription}
          image={whoImage}
        />

        <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 pt-5">
          <PurposeTile
            title={missionTitle}
            description={missionDescription}
            variant="blue"
          />
          <PurposeTile
            title={visionTitle}
            description={visionDescription}
            variant="yellow"
          />
        </div>
      </div>
    </section>
  );
}
