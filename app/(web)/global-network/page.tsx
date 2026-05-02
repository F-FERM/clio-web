import { networkContent } from "@/features/network/network.constant";
import MaritimeNetwork from "@/features/network/networkHeroSection";
import { SmartGlobalOperations } from "@/features/network/SmartGlobalOperations";
import { PurposeTile } from "@/features/who-we-are/components/PurposeTile";

const page = () => {
  return (
    <div className="mt-40">
      <MaritimeNetwork />
      <SmartGlobalOperations />
      <section className="w-full px-6 py-12 lg:px-28 lg:py-16">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <PurposeTile
              title={networkContent.missionTitle}
              description={[
                networkContent.missionDescription,
                ...networkContent.missionPoints,
              ]}
              variant="blue"
            />
            <PurposeTile
              title={networkContent.visionTitle}
              description={[
                networkContent.visionDescription,
                ...networkContent.visionPoints,
              ]}
              variant="yellow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
