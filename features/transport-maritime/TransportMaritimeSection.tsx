import { GetStartedButton } from "@/features/transport-maritime/components/GetStartedButton";
import { TransportHeroImage } from "@/features/transport-maritime/components/TransportHeroImage";
import { transportMaritimeContent } from "@/features/transport-maritime/transportMaritime.constants";

export function TransportMaritimeSection() {
  return (
    <section className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-14">
      
      {/* TEXT CONTENT */}
      <div className="mx-auto max-w-[820px] text-center">
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[#8f1131] leading-snug">
          {transportMaritimeContent.heading}
        </h1>

        <p className="mx-auto mt-4 sm:mt-5 max-w-[760px] text-sm sm:text-base text-[#3f3f46]">
          {transportMaritimeContent.description}
        </p>

        <div className="mt-5 sm:mt-6">
          <GetStartedButton label={transportMaritimeContent.cta} />
        </div>
      </div>

      {/* IMAGE */}
      <TransportHeroImage
        cardTitle={transportMaritimeContent.cardTitle}
        cardDescription={transportMaritimeContent.cardDescription}
      />
    </section>
  );
}