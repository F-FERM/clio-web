import { WhatWeDoGallery } from "@/features/what-we-do/components/WhatWeDoGallery";
import { whatWeDoContent } from "@/features/what-we-do/whatWeDo.constants";

export function WhatWeDoSection() {
  return (
    <section className="w-full px-6 py-10 lg:px-34 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px]">
        <h1 className="text-center text-3xl font-bold tracking-[-0.02em] text-[#8f1131] sm:text-5xl pt-8">
          {whatWeDoContent.title}
        </h1>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <WhatWeDoGallery cards={whatWeDoContent.cards} />
        </div>
      </div>
    </section>
  );
}
