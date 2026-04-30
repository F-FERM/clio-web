import Image from "next/image";

const fleetCards = [
  { name: "Gas Trust", tag: "High Capacity", image: "/images/homeo.jpg" },
  { name: "Gas Diamond", tag: "Heavy Load", image: "/images/home.jpg" },
  { name: "Ocean Carrier", tag: "Fast Transit", image: "/images/image.png" },
  { name: "Blue Horizon", tag: "Offshore Ready", image: "/images/homeo.jpg" },
] as const;

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
          {fleetCards.map((card, index) => (
            <article key={card.name}>
              <div className="relative h-[250px] overflow-hidden rounded-[18px]">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/38 via-transparent to-transparent" />
                <span
                  className={`absolute left-3 bottom-3 rounded-full px-3 py-1 text-[10px] font-semibold text-white ${
                    index === 0
                      ? "bg-[#d78b1f]"
                      : index === 1
                        ? "bg-[#9f2134]"
                        : index === 2
                          ? "bg-[#d1b33b]"
                          : "bg-[#3d7c32]"
                  }`}
                >
                  {card.tag}
                </span>
              </div>
              <h3 className="mt-3 text-[34px] leading-none font-semibold text-[#8f1131]">
                {card.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
