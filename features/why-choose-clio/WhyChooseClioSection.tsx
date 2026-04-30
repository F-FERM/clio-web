"use client";

import { useState } from "react";
import { whatWeDoContent } from "@/features/what-we-do/whatWeDo.constants";
import { GetStartedButton } from "../transport-maritime/components/GetStartedButton";

export function WhyChooseClioSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-2 lg:gap-12">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-[#901027]">
            {whatWeDoContent.whyTitle}
          </h2>

          <p className="mt-4 sm:mt-6 max-w-[520px] text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed text-[#24272d]">
            {whatWeDoContent.whyDescription}
          </p>

          <div className="mt-6 sm:mt-8">
            <GetStartedButton label={whatWeDoContent.cta} />
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-3 sm:space-y-4">
          {whatWeDoContent.benefits.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() =>
                  setActiveIndex(isActive ? null : index)
                }
                className="group relative cursor-pointer overflow-hidden rounded-[14px] border border-[#c8ced6] px-4 py-4 sm:px-5 transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                {/* Top Row */}
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#901027] text-[#901027] text-sm">
                    ✓
                  </div>

                  {/* Title */}
                  <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[#901027]">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className={`
                    text-[13px] sm:text-[14px] text-[#24272d] transition-all duration-300
                    ${
                      isActive
                        ? "mt-2 max-h-[120px] opacity-100"
                        : "max-h-0 overflow-hidden opacity-0"
                    }
                    lg:group-hover:mt-2 lg:group-hover:max-h-[120px] lg:group-hover:opacity-100
                  `}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}