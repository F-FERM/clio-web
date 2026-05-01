import Image from "next/image";

import HeaderMainShip from "../../public/images/home/HeroShip.png";
import { VesselOperationsCard } from "./components/VesselOperationsCard";
import { VesselInfoPill } from "./components/VesselInfoPill";

export function VesselLandingSection() {
  return (
    <section className="w-full">
      <div className="relative h-[680px] sm:h-[580px] md:h-[600px] lg:h-[620px] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
        {/* Background Image */}
        <Image
          src={HeaderMainShip}
          alt="Vessel"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5f8598]/80 via-[#7ea8bb]/40 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 h-full px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-32 lg:py-10 flex flex-col justify-between lg:block">
          
          {/* MAIN HEADING */}
          <div className="lg:mt-16 max-w-[1400px]">
            <h1 className="lg:mt-10 text-[24px] sm:text-[38px] md:text-[48px] lg:text-[62px] leading-[1.1] sm:leading-[1.18] font-extrabold text-white max-w-[820px] drop-shadow-lg">
              MOST RELIABLE WAY <br className="hidden sm:block" />
              TO MANAGE YOUR <br className="hidden sm:block" />
              VESSELS
            </h1>
          </div>

          {/* RIGHT CARD - Desktop only */}
          <div className="hidden lg:block absolute right-12 top-[300px]">
            <VesselOperationsCard />
          </div>

          {/* BOTTOM SECTION - Mobile & Tablet (Relative in flex) vs Desktop (Absolute) */}
          <div className="lg:absolute lg:bottom-12 lg:left-12 lg:right-auto mt-auto lg:mt-0 pb-6 lg:pb-0">
            
            {/* Mobile/Tablet: Stacked Layout */}
            <div className="lg:hidden flex flex-col gap-5">
              {/* Pill and Paragraph */}
              <div className="space-y-3">
                <VesselInfoPill />
                <p className="text-[12px] sm:text-[15px] leading-relaxed text-white/95">
                  From fleet management to compliance and global coordination, we
                  ensure smooth, secure, and cost-effective shipping operations
                  worldwide.
                </p>
              </div>
              
              {/* Card below */}
              <div className="transform scale-95 origin-left sm:scale-100">
                <VesselOperationsCard />
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block max-w-[950px]">
              <div className="mb-6">
                <VesselInfoPill />
              </div>
              <p className="text-[20px] leading-[1.6] text-white/90 max-w-[900px]">
                From fleet management to compliance and global coordination, we
                ensure smooth, secure, and cost-effective shipping operations
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}