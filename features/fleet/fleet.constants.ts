import fleet1 from "../../public/images/fleet/Fleet1.jpg";
import fleet2 from "../../public/images/fleet/Fleet2.jpg";
import fleet3 from "../../public/images/fleet/Fleet3.jpg";
import fleet4 from "../../public/images/fleet/Fleet4.jpg";

export const ourFleetContent = {
  title: "Our Diverse & High-Performance Fleet",
  description:
    "From oil tankers to support vessels, every ship in the Clio fleet is built to the highest maritime standards, delivering performance across all ocean conditions.",

  cards: [
    {
      title: "Gas Trust",
      tag: "High Capacity",
      tagColor: "bg-[#B16E03]",
      image: fleet1,
      imagePosition: "left" as const,
      hoverText:
        "Gas Trust is a high-performance LPG tanker built for safe, efficient transport of liquefied petroleum gas, ensuring reliable operations and global delivery.",
    },
    {
      title: "Gas Diamond",
      tag: "Heavy Load",
      tagColor: "bg-[#86172B]",
      image: fleet2,
      imagePosition: "center" as const,
      hoverText:
        "Gas Diamond is a next-gen LPG tanker designed for durability and efficiency, ensuring safe, reliable delivery across global routes.",
    },
    {
      title: "Ocean Carrier",
      tag: "Fast Transit",
      tagColor: "bg-[#7A6C00]",
      image: fleet3,
      imagePosition: "right" as const,
      hoverText:
        "Ocean Carrier is a versatile cargo vessel built for strength and efficiency, ensuring smooth bulk transport across global trade routes.",
    },
    {
      title: "Blue Horizon",
      tag: "Offshore Ready",
      tagColor: "bg-[#236A28]",
      image: fleet4,
      imagePosition: "right" as const,
      hoverText:
        "Blue Horizon is built for long-distance voyages, offering fuel efficiency, stability, and reliable performance in all sea conditions.",
    },
  ],
};
