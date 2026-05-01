import MaritimeNetwork from "@/features/network/networkHeroSection";
import { SmartGlobalOperations } from "@/features/network/SmartGlobalOperations";
import { StrategicPortCoverage } from "@/features/network/StrategicPortCoverage";
import { TechnologyDrivenConnectivity } from "@/features/network/TechnologyDrivenConnectivity";

const page = () => {
  return (
    <div className="mt-40">
      <MaritimeNetwork />
      <SmartGlobalOperations />

      <section className="w-full px-6 py-12 lg:px-36 lg:py-16">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-2">
          <StrategicPortCoverage />
          <TechnologyDrivenConnectivity />
        </div>
      </section>
    </div>
  );
};

export default page;
