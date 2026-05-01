import MaritimeHero from "@/features/global-leaders/GlobalLeadersSection";
import { WhatWeDoSection } from "@/features/what-we-do/WhatWeDoSection";
import { WhoWeAreSection } from "@/features/who-we-are/WhoWeAreSection";
import { WhyChooseClioSection } from "@/features/why-choose-clio/WhyChooseClioSection";

const page = () => {
  return (
    <div className="mt-30">
      <main style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <MaritimeHero />
      </main>
      <WhoWeAreSection />
      <WhatWeDoSection />
      <WhyChooseClioSection />
    </div>
  );
};

export default page;
