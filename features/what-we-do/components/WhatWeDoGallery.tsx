"use client";

import Image from "next/image";
import About3 from "../../../public/images/about/About3.jpg";
import About4 from "../../../public/images/about/About4.jpg";
import About5 from "../../../public/images/about/About5.jpg";
import About6 from "../../../public/images/about/About6.jpg";

type CardItem = {
  title: string;
  description: string;
};

type WhatWeDoGalleryProps = {
  cards: readonly CardItem[];
};

const galleryImages = [
  { src: About3, alt: "Vessel management operations", imageClass: "object-cover object-center" },
  { src: About4, alt: "Ship detail at dock", imageClass: "object-cover object-center" },
  { src: About5, alt: "Port operations at sunset", imageClass: "object-cover object-center" },
  { src: About6, alt: "Vessel on water", imageClass: "object-cover object-right" },
] as const;

export function WhatWeDoGallery({ cards }: WhatWeDoGalleryProps) {
  return (
    <>
      {/* Mobile Layout (NO hover) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {galleryImages.map((image, i) => {
          const card = cards[i];
          return (
            <div key={i} className="relative h-[220px] overflow-hidden rounded-[16px]">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#d4d8dc]/80 p-4 backdrop-blur">
                <h3 className="text-base font-semibold text-[#901027] ">{card?.title}</h3>
                <p className="text-xs text-[#3a3d43] mt-1 ">{card?.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-3 lg:gap-4 h-[300px] md:h-[360px] lg:h-[430px] group">
        {galleryImages.map((image, i) => {
          const isFirst = i === 0;
          const card = cards[i];

          return (
            <div
              key={i}
              className={`
                group/card relative overflow-hidden rounded-[18px]
                transition-all duration-500 ease-in-out
                ${isFirst
                  ? "flex-[2.5] group-hover:flex-[0.7] hover:!flex-[2.5]"
                  : "flex-[1] group-hover:flex-[0.7] hover:!flex-[2.5]"
                }
              `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`${image.imageClass} transition-transform duration-500 group-hover/card:scale-105`}
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-black/25 transition-all duration-300 group-hover/card:bg-black/10" />

              {/* Overlay — visible by default on first card, hover-revealed on others */}
              <div
                className={`
                  absolute
                  left-4 right-4 top-4
                  sm:left-6 sm:top-6 sm:max-w-[320px]
                  rounded-[12px]
                          bg-gray-300/60

                  px-4 py-3
                  backdrop-blur-[2px]
                  transition-all duration-300 delay-150
                  ${isFirst
                    ? "opacity-100 translate-y-0 group-hover:opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0"
                    : "opacity-0 translate-y-3 group-hover/card:opacity-100 group-hover/card:translate-y-0"
                  }
                `}
              >
                <h3 className="text-lg lg:text-xl font-semibold text-[#901027] leading-tight">
                  {card?.title}
                </h3>
                <p className="mt-1 text-xs lg:text-sm text-[#3a3d43] leading-relaxed">
                  {card?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}