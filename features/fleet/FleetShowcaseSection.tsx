import Image from "next/image";
import { ServiceCard } from "../our-service/components/ServiceCard";
import { ourFleetContent } from "./fleet.constants";

export function FleetShowcaseSection() {
  return (
    <section className="w-full px-6 py-14 lg:px-28 lg:py-16 mt-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2 className="text-center text-4xl leading-[1.06] font-bold tracking-[-0.03em] text-[#8f1131]">
          Our Diverse & High-Performance Fleet
        </h2>
        <p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-normal text-[#343943]">
          From oil tankers to support vessels, every ship in the Clio fleet is
          built to the highest maritime standards, delivering performance across
          all ocean conditions.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ourFleetContent.cards?.map((card, index) => (
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
      </div>
    </section>
  );
}
