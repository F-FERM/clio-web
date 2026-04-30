import { GlobalLeadersImageCard } from "./components/GlobalLeadersImageCard";
import { globalLeadersContent } from "./globalLeaders.constants";

export function GlobalLeadersSection() {
  return (
    <section className="w-full px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1570px]">

        <div className="relative">

          {/* IMAGE */}
          <div className="relative ml-auto w-full max-w-[900px]">
            <GlobalLeadersImageCard heading={globalLeadersContent.overlayText} />
          </div>

          {/* MAIN HEADING (LEFT SIDE) */}
          <h1 className="
            relative z-20
            max-w-[900px]
            text-[40px] font-bold leading-[1] tracking-[-0.03em] text-[#3a3c42]
            sm:text-[52px]
            md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2
            md:text-[64px]
            lg:text-[72px]
            xl:text-[80px]
          ">
            Global Leaders in S<span className="
  text-transparent 
  [-webkit-text-stroke:1px_#3a3c42] 
  md:[-webkit-text-stroke:1px_white]
">
  hip
</span><br />
            Management & Ma<span className="
  text-transparent 
  [-webkit-text-stroke:1px_#3a3c42] 
  md:[-webkit-text-stroke:1px_white]
">
  ritime
</span><br />
            Operations
          </h1>

         

        </div>

        {/* DESCRIPTION */}
        <p className="mt-10 max-w-[1000px] text-sm leading-[1.65] text-[#464646] sm:text-[15px] md:text-base font-normal">
          {globalLeadersContent.description}
        </p>

      </div>
    </section>
  );
}