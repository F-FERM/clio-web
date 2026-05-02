import Image from "next/image";
import { ServiceCard } from "../our-service/components/ServiceCard";
import { ourFleetContent } from "./fleet.constants";

export function FleetShowcaseSection() {
  return (
    <section className="w-full px-6 py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-16 text-center">
          <h2 className="text-5xl lg:text-6xl leading-[1.1] font-bold tracking-[-0.03em] text-[#8f1131]">
            Fleet
          </h2>
          <p className="mx-auto mt-6 max-w-[900px] text-sm lg:text-base leading-relaxed text-[#3b3f45]">
            From oil tankers to support vessels, every ship in the Clio fleet is
            built to the highest maritime standards, delivering performance
            across all ocean conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 justify-center md:gap-6 lg:gap-8">
          {ourFleetContent.cards?.map((card, index) => (
            <div key={card.title} className="flex-shrink-0">
              <ServiceCard
                title={card.title}
                tag={card.tag}
                image={card.image}
                imagePosition={card.imagePosition}
                tagColor={card.tagColor}
                hoverText={card.hoverText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
