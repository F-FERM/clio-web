"use client";

import { useState } from "react";

const principles = [
  {
    title: "Zero Harm Commitment",
    description:
      "We prioritize the safety and well-being of our crew, passengers, and the environment above all else, maintaining a culture where accidents are preventable.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Full adherence to international maritime safety standards, including SOLAS, MARPOL, and ISM Code requirements across all operations.",
  },
  {
    title: "Continuous Training",
    description:
      "Regular safety drills, certifications, and upskilling programs ensure our team remains prepared for any situation at sea.",
  },
  {
    title: "Risk Management",
    description:
      "Proactive identification and mitigation of potential hazards through comprehensive risk assessments and emergency response planning.",
  },
] as const;

export function SafetyPrinciplesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 py-10 lg:px-28 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-2 lg:gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-[#8f1131]">
            Our Safety Principles
          </h2>

          <p className="mt-4 sm:mt-6 max-w-[520px] text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed text-[#24272d]">
            Our safety pillars define the foundation of our operations, guiding
            every decision to ensure the highest standards of protection,
            compliance, and operational excellence at sea.
          </p>

          <div className="mt-6 sm:mt-8">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#8f949c] px-5 py-2 text-sm font-semibold text-[#1f242b] transition-all hover:bg-[#8f1131] hover:text-white hover:border-[#8f1131]"
            >
              <span>Contact Us</span>
              <span className="text-sm">↗</span>
            </button>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-3 sm:space-y-4">
          {principles.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className="group relative cursor-pointer overflow-hidden rounded-[14px] border border-[#c8ced6] px-4 py-4 sm:px-5 transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                {/* Top Row */}
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
  className={`flex h-6 w-6 items-center justify-center rounded-full border border-[#901027] text-[#901027] text-sm transition-opacity duration-300
    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
  `}
>
  ✓
</div>

                  {/* Title */}
                  <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[#8f1131]">
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
