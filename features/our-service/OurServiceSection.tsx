import { ServiceCard } from "@/features/our-service/components/ServiceCard";
import { ourServiceContent } from "@/features/our-service/ourService.constants";

export function OurServiceSection() {
  return (
    <section className="mx-auto w-full max-w-[1480px] px-4 py-12 sm:px-6 sm:py-20">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold tracking-[-0.02em] text-[#8f1131] sm:text-4xl pt-8">
        {ourServiceContent.title}
      </h1>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 pt-9 pb-7">
        {ourServiceContent.cards.map((card) => (
          <ServiceCard
            key={card.title}
            title={card.title}
            tag={card.tag}
            image={card.image}
            imagePosition={card.imagePosition}
            tagColor={card.tagColor}
            hoverText={card.hoverText}
          />
        ))}
      </div>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-[860px] px-4 text-center font-normal text-[18px] sm:mt-12 sm:text-lg">
        {ourServiceContent.description}
      </p>
    </section>
  );
}