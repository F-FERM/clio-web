import Image from "next/image";
import { WhatWeDoCta } from "@/features/what-we-do/components/WhatWeDoCta";
import Link from "next/link";
type NetworkImage = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

const networkImages: NetworkImage[] = [
  {
    src: "/images/network/Network1.jpg",
    alt: "Global operations 1",
    title: "Global Network",
    description: "Connecting ports across the world.",
  },
  {
    src: "/images/network/Network2.jpg",
    alt: "Global operations 2",
    title: "Fleet Management",
    description: "Real-time vessel tracking.",
  },
  {
    src: "/images/network/Network3.jpg",
    alt: "Global operations 3",
    title: "Port Operations",
    description: "Efficient cargo handling.",
  },
  {
    src: "/images/network/Network4.jpg",
    alt: "Global operations 4",
    title: "Logistics",
    description: "End-to-end supply chain.",
  },
];
export function SmartGlobalOperations() {
  return (
    <section className="w-full px-6 py-12 lg:px-28 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 items-center lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Column */}
        <div>
          <h2 className="text-5xl lg:text-6xl leading-[1.70] font-semibold tracking-[-0.03em] text-[#a62e2e]">
            SMART GLOBAL OPERATIONS
          </h2>
          <p className="mt-6 max-w-[470px] text-[14px] leading-normal text-[#3b3f45]">
            We combine local expertise with global coordination to ensure
            efficient vessel management across all regions.
          </p>
          <div className="mt-8">
            <Link href='/contact-us'>
            <WhatWeDoCta label="Contact Us" />
            </Link>
          </div>
        </div>

        {/* Right Column - Stacked Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {networkImages.map((image, i) => (
            <div
              key={i}
              className="relative h-[220px] overflow-hidden rounded-[16px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#d4d8dc]/80 p-4 backdrop-blur">
                <h3 className="text-base font-semibold text-[#901027]">
                  {image.title}
                </h3>
                <p className="text-xs text-[#3a3d43] mt-1">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Desktop Layout — vertical accordion, exact WhatWeDoGallery pattern */}
        <div className="hidden md:flex flex-col gap-3 lg:gap-4 h-[360px] md:h-[420px] lg:h-[500px] group">
          {networkImages.map((image, i) => (
            <div
              key={i}
              className={`group/card relative overflow-hidden rounded-[18px]
        transition-all duration-500 ease-in-out
        ${
          i === 0
            ? // First card: expanded by default, shrinks when group is hovered (another card is hovered)
              "flex-[2.5] group-hover:flex-[0.7] hover:!flex-[2.5]"
            : // Other cards: collapsed by default, expand on hover
              "flex-[0.7] group-hover:flex-[0.7] hover:!flex-[2.5]"
        }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-black/25 transition-all duration-300 group-hover/card:bg-black/10" />

              {/* Overlay */}
              {/* Overlay */}
              <div
                className={`
    absolute
    left-4 right-4 bottom-4
    sm:left-6 sm:bottom-6 sm:max-w-[320px]
    rounded-[12px]
    bg-[#d4d8dc]/75
    px-4 py-3
    backdrop-blur-[2px]
    transition-all duration-300 delay-150
    ${
      i === 0
        ? `opacity-100 translate-y-0
           group-hover:opacity-0 group-hover:translate-y-3
           group-hover/card:!opacity-100 group-hover/card:!translate-y-0`
        : `opacity-0 translate-y-3
           group-hover/card:opacity-100 group-hover/card:translate-y-0`
    }
  `}
              >
                <h3 className="text-lg lg:text-xl font-semibold text-[#901027] leading-tight">
                  {image.title}
                </h3>
                <p className="mt-1 text-xs lg:text-sm text-[#3a3d43] leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
