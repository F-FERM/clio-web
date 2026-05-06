"use client";

import { useQuery } from "@tanstack/react-query";
import { ListGlobalNetworkApi } from "@/app/api/network/network";
import { networkContent } from "@/features/network/network.constant";
import MaritimeNetwork from "@/features/network/networkHeroSection";
import { SmartGlobalOperations } from "@/features/network/SmartGlobalOperations";
import { PurposeTile } from "@/features/who-we-are/components/PurposeTile";

const NetworkPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["global-network"],
    queryFn: () => ListGlobalNetworkApi({}),
  });

  if (isLoading) {
    return (
      <div className="mt-40 animate-pulse">
        <div className="h-[400px] w-full bg-gray-200 mb-10" />
        <div className="h-[400px] w-full bg-gray-200 mb-10" />
        <section className="w-full px-6 py-12 lg:px-28 lg:py-16">
          <div className="mx-auto w-full max-w-[1240px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-60 bg-gray-200 rounded" />
              <div className="h-60 bg-gray-200 rounded" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    console.error("Error fetching global network page data:", error);
  }

  const networkData = Array.isArray(data) ? data[0] : data;
  const features = networkData?.features || [];

  // Map features to blue and yellow tiles
  const blueFeature = features.find((f: any) => f.variant === "blue") || {
    title: networkContent.missionTitle,
    points: [
      networkContent.missionDescription,
      ...networkContent.missionPoints,
    ],
  };
  const yellowFeature = features.find((f: any) => f.variant === "yellow") || {
    title: networkContent.visionTitle,
    points: [networkContent.visionDescription, ...networkContent.visionPoints],
  };

  return (
    <div className="mt-40">
      <MaritimeNetwork />
      <SmartGlobalOperations />
      <section className="w-full px-6 py-12 lg:px-28 lg:py-16">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <PurposeTile
              title={blueFeature.title}
              description={blueFeature.description}
              points={blueFeature.points}
              variant="blue"
            />
            <PurposeTile
              title={yellowFeature.title}
              description={yellowFeature.description}
              points={yellowFeature.points}
              variant="yellow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkPage;
