import MaritimeHero from "@/features/global-leaders/GlobalLeadersSection";
import { WhatWeDoSection } from "@/features/what-we-do/WhatWeDoSection";
import { WhoWeAreSection } from "@/features/who-we-are/WhoWeAreSection";
import { WhyChooseClioSection } from "@/features/why-choose-clio/WhyChooseClioSection";

const page = () => {
  return (
    <div className="mt-20 lg:mt-30">
      <main style={{ padding: "5px", maxWidth: "1251px", margin: "0 auto" }}>
        <MaritimeHero />
      </main>
      <WhoWeAreSection />
      <WhatWeDoSection />
      <WhyChooseClioSection />
    </div>
  );
};

export default page;
