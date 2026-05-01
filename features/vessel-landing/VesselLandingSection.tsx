import Image from "next/image";

import HeaderMainShip from "../../public/images/home/HeroShip.png";
import { VesselOperationsCard } from "./components/VesselOperationsCard";
import { VesselInfoPill } from "./components/VesselInfoPill";

export function VesselLandingSection() {
  return (
    <section className="w-full">
      <div className="relative h-[600px] sm:h-[580px] md:h-[600px] lg:h-[620px] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
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
        <div className="relative z-10 h-full px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 lg:py-10">
          {/* MAIN HEADING */}
          <div className="mt-4 sm:mt-8 lg:mt-16 max-w-[1400px]">
            <h1 className="mt-2 sm:mt-4 lg:mt-10 text-[28px] sm:text-[38px] md:text-[48px] lg:text-[62px] leading-[1.38] font-extrabold text-white max-w-[820px]">
              MOST RELIABLE WAY <br />
              TO MANAGE YOUR <br />
              VESSELS
            </h1>
          </div>

          {/* RIGHT CARD - Desktop only */}
          <div className="hidden lg:block absolute right-12 top-[300px]">
            <VesselOperationsCard />
          </div>

          {/* BOTTOM SECTION - Mobile & Tablet */}
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-12 left-4 sm:left-6 md:left-8 lg:left-12 right-4 sm:right-6 lg:right-auto">
            {/* Mobile/Tablet: Two Column Layout */}
            <div className="lg:hidden grid grid-cols-1 gap-4 mb-4">
              {/* Left column: Pill and Paragraph */}
              <div className="space-y-3">
                <VesselInfoPill />
                <p className="text-sm sm:text-[15px] text-white/90">
                  From fleet management to compliance and global coordination,
                  we ensure smooth, secure, and cost-effective shipping
                  operations worldwide.
                </p>
              </div>

              {/* Card below on mobile */}
              <div>
                <VesselOperationsCard />
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block max-w-[950px]">
              <div className="mb-6">
                <VesselInfoPill />
              </div>
              <p className="text-sm  text-white/90 max-w-[600px]">
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
