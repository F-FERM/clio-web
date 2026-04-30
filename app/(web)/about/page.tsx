import { GlobalLeadersSection } from "@/features/global-leaders/GlobalLeadersSection";
import { WhatWeDoSection } from "@/features/what-we-do/WhatWeDoSection";
import { WhoWeAreSection } from "@/features/who-we-are/WhoWeAreSection";
import { WhyChooseClioSection } from "@/features/why-choose-clio/WhyChooseClioSection";

const page = () => {
  return (
    <div className="mt-30">
      <GlobalLeadersSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <WhyChooseClioSection />
    </div>
  );
};

export default page;
