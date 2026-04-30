import Image from "next/image";

export function FleetHeroSection() {
  return (
    <section className="w-full px-6 pt-10 lg:px-12 lg:pt-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative h-[420px] overflow-hidden rounded-[18px]">
          <Image
            src="/images/home.jpg"
            alt="Modern fleet"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1f2d3f]/58 via-[#1f2d3f]/22 to-transparent" />

          <div className="absolute left-6 top-6 max-w-[620px] lg:left-8 lg:top-8">
            <h1 className="text-[76px] leading-[0.95] font-bold tracking-[-0.03em] text-white">
              Modern Fleet Built for Performance & Reliability
            </h1>
            <p className="mt-5 max-w-[560px] text-[14px] leading-normal text-white/90">
              Clio operates a world-class fleet of vessels engineered for
              precision, safety, and efficiency - navigating global trade routes
              with unmatched dependability across every ocean.
            </p>
            <button
              type="button"
              className="mt-6 rounded-[8px] bg-[#f1df3f] px-8 py-2.5 text-[13px] font-semibold text-[#1d2735]"
            >
              View Fleet
            </button>
          </div>

          <div className="absolute right-8 bottom-10 w-full max-w-[285px] rounded-[14px] bg-[#b8c8d3]/62 p-4 backdrop-blur-[1.5px]">
            <h2 className="text-[25px] leading-none font-semibold text-white">
              Fleet Overview
            </h2>
            <div className="mt-3 space-y-2 text-white/95">
              <p className="text-[13px]">Vessels 48+</p>
              <p className="text-[13px]">Global Routes 120+</p>
              <p className="text-[13px]">Fleet Uptime 99.7%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
