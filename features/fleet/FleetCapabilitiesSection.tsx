"use client";
import { useState } from "react";

const whatWeDoContent = {
  benefits: [
    {
      title: "Advanced Engineering",
      description:
        "We leverage cutting-edge engineering solutions to optimize vessel performance, fuel efficiency, and operational reliability across our entire fleet.",
    },
    {
      title: "Global Reach",
      description:
        "With an extensive international network, we operate seamlessly across major ports and shipping lanes worldwide, ensuring timely and efficient delivery.",
    },
    {
      title: "Safety & Compliance",
      description:
        "Our operations adhere to the highest international maritime safety standards and regulatory requirements, ensuring full compliance on every voyage.",
    },
  ],
};

export function FleetCapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 pb-16 lg:px-20 lg:pb-20 mt-20">
      <div className="mx-auto grid w-full max-w-[1400px] gap-8 md:grid-cols-[0.86fr_1.14fr]">
        <div>
          <h2 className="max-w-[340px] text-4xl leading-[1.52] font-semibold tracking-[-0.03em] text-[#8f1131]">
            Powering Global Maritime Operations
          </h2>
          <p className="mt-5 max-w-[500px] text-xl leading-normal text-[#323842]">
            Our fleet capabilities are built to deliver consistent performance
            across every voyage, combining advanced technology, global
            operational reach, and strict safety standards. We ensure efficient,
            reliable, and compliant maritime solutions tailored to meet evolving
            industry demands.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 pt-6 md:pt-20">
          {whatWeDoContent.benefits.map((item, index) => {
            const isActive = activeIndex === index;

            return (
             <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`group relative cursor-pointer overflow-hidden rounded-[14px] border border-[#c8ced6] px-4 py-4 sm:px-5 transition-all duration-300 lg:hover:bg-white lg:hover:shadow-md ${
                  isActive ? "bg-white shadow-md" : ""
                }`}
              >
                {/* Top Row */}
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#901027] text-[#901027] text-sm font-bold transition-opacity duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 lg:group-hover:opacity-100"
                    }`}
                  >
                    ✓
                  </div>

                  {/* Title */}
                  <h3 className="text-[14px] sm:text-[15px] lg:text-[18px] font-semibold text-[#901027]">
                    {item.title}
                  </h3>
                </div>

                {/* Description — mobile: toggled by click; desktop: shown on hover */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "max-h-[200px] opacity-100 mt-2"
                      : "max-h-0 opacity-0 mt-0 lg:group-hover:max-h-[200px] lg:group-hover:opacity-100 lg:group-hover:mt-2"
                  }`}
                >
                  <p className="pl-9 text-[13px] sm:text-[14px] text-[#24272d]">
                    {item.description}
                  </p>
                </div>
              </div>  
            );
          })}
        </div>
      </div>
    </section>
  );
}
