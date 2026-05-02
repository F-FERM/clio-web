import MaritimeHero from "@/features/global-leaders/GlobalLeadersSection";
import { WhatWeDoSection } from "@/features/what-we-do/WhatWeDoSection";
import { WhoWeAreSection } from "@/features/who-we-are/WhoWeAreSection";
import { WhyChooseClioSection } from "@/features/why-choose-clio/WhyChooseClioSection";

const page = () => {
  return (
    <div className="mt-33 lg:mt-45">
      <section className="w-full px-6 lg:px-34">
        <div className="mx-auto w-full max-w-[1240px]">
          <MaritimeHero />
        </div>
      </section>
      <WhoWeAreSection />
      <WhatWeDoSection />
      <WhyChooseClioSection />
    </div>
  );
};

export default page;
