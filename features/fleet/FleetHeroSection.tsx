import Image from "next/image";

export function FleetHeroSection() {
  return (
    <section className="w-full px-6  sm:pt-32 lg:pt-12 lg:px-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative h-[480px] sm:h-[520px] overflow-hidden rounded-[18px]">
          <Image
            src="/images/fleet/Rectangle.png"
            alt="Modern fleet"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1f2d3f]/58 via-[#1f2d3f]/22 to-transparent" />

          <div className="absolute left-4 top-4 right-4 sm:left-6 sm:top-6 lg:left-8 lg:top-8 max-w-[620px]">
            <h1 className="text-3xl sm:text-5xl lg:text-[76px] leading-[1.1] sm:leading-[0.95] font-bold tracking-[-0.03em] text-white">
              Modern Fleet Built for Performance & Reliability
            </h1>
            <p className="mt-3 sm:mt-5 max-w-[560px] text-xs sm:text-[14px] leading-normal text-white/90">
              Clio operates a world-class fleet of vessels engineered for
              precision, safety, and efficiency - navigating global trade routes
              with unmatched dependability across every ocean.
            </p>
            <button
              type="button"
              className="mt-4 sm:mt-6 rounded-[8px] bg-[#f1df3f] px-6 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-[13px] font-semibold text-[#1d2735]"
            >
              View Fleet
            </button>
          </div>

          {/* OVERVIEW CARD - Absolute on desktop, but more space on mobile */}
          <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-10 w-[calc(100%-32px)] sm:w-full sm:max-w-[285px] rounded-[14px] bg-[#b8c8d3]/62 p-4 backdrop-blur-[1.5px]">
            <h2 className="text-lg sm:text-[25px] leading-none font-semibold text-white">
              Fleet Overview
            </h2>
            <div className="mt-2 sm:mt-3 grid grid-cols-3 gap-2 sm:block sm:space-y-2 text-white/95">
              <div>
                <p className="text-[10px] sm:text-[13px] font-bold">48+</p>
                <p className="text-[8px] sm:hidden uppercase opacity-80">Vessels</p>
                <p className="hidden sm:block text-[13px]">Vessels 48+</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-[13px] font-bold">120+</p>
                <p className="text-[8px] sm:hidden uppercase opacity-80">Routes</p>
                <p className="hidden sm:block text-[13px]">Global Routes 120+</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-[13px] font-bold">99.7%</p>
                <p className="text-[8px] sm:hidden uppercase opacity-80">Uptime</p>
                <p className="hidden sm:block text-[13px]">Fleet Uptime 99.7%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
