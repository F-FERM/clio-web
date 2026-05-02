import Image from "next/image";

export function FleetHeroSection() {
  return (
    <section className="w-full">
      <div className="relative h-[500px] sm:h-[580px] overflow-hidden rounded-[24px]">
        <Image
          src="/images/fleet/Rectangle.png"
          alt="Modern fleet"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f2d3f]/75 via-[#1f2d3f]/30 to-transparent" />

        <div className="absolute left-6 top-8 right-6 sm:left-10 sm:top-12 lg:left-14 lg:top-16 max-w-[680px] z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-[1.1] font-bold tracking-[-0.03em] text-white">
            Modern Fleet Built for Performance & Reliability
          </h1>
          <p className="mt-4 sm:mt-6 max-w-[540px] text-sm sm:text-base lg:text-[16px] leading-relaxed text-white/90 font-medium hidden sm:block">
            Clio operates a world-class fleet of vessels engineered for
            precision, safety, and efficiency - navigating global trade routes
            with unmatched dependability across every ocean.
          </p>
          <button
            type="button"
            className="mt-6 sm:mt-8 rounded-[12px] bg-[#f1df3f] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-[15px] font-bold text-[#1d2735] transition-all hover:scale-105 hover:bg-[#f5e76d] active:scale-95 hidden sm:block"
          >
            View Fleet
          </button>
        </div>

        {/* OVERVIEW CARD */}
        <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-10 w-[calc(100%-32px)] sm:w-[280px] lg:w-[320px] rounded-[24px] border border-white/20 bg-white/20 p-5 lg:p-6 backdrop-blur-[12px] z-10 md:z-30">
          <h2 className="text-xl lg:text-[24px] font-semibold text-white mb-4 lg:mb-6">
            Fleet Overview
          </h2>
          
          <div className="space-y-5">
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-white text-[#901027]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20.51a3.14 3.14 0 0 0-4.96-1.51 3.13 3.13 0 0 0-5 0 3.14 3.14 0 0 0-5 1.5"/><path d="M19 10.14c0 .35-.11.7-.32 1.01L15 17h-6l-3.68-5.85a1.99 1.99 0 0 1-.32-1.01V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path d="M12 3v7"/></svg>
              </div>
              <div className="text-white">
                <p className="text-[16px] opacity-90 leading-tight">Vessels</p>
                <p className="text-[28px] font-semibold leading-tight">48+</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-white text-[#901027]">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div className="text-white">
                <p className="text-[16px] opacity-90 leading-tight">Global Routes</p>
                <p className="text-[28px] font-semibold leading-tight">120+</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-white text-[#901027]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div className="text-white">
                <p className="text-[16px] opacity-90 leading-tight">Fleet Uptime</p>
                <p className="text-[28px] font-semibold leading-tight">99.7%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY DESCRIPTION & BUTTON */}
      <div className="mt-8 sm:hidden">
        <p className="text-sm leading-relaxed text-[#464646] font-medium">
          Clio operates a world-class fleet of vessels engineered for
          precision, safety, and efficiency - navigating global trade routes
          with unmatched dependability across every ocean.
        </p>
        <button
          type="button"
          className="mt-6 w-full rounded-[12px] bg-[#f1df3f] py-4 text-[15px] font-bold text-[#1d2735] active:scale-95"
        >
          View Fleet
        </button>
      </div>
    </section>
  );
}
