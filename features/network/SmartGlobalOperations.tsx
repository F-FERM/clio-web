import Image from "next/image";
import { WhatWeDoCta } from "@/features/what-we-do/components/WhatWeDoCta";

export function SmartGlobalOperations() {
  return (
    <section className="w-full px-6 py-12 lg:px-36 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 items-center lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Column */}
        <div>
          <h2 className="text-5xl lg:text-6xl leading-[1.1] font-bold tracking-[-0.03em] text-[#a62e2e]">
            SMART GLOBAL OPERATIONS
          </h2>
          <p className="mt-6 max-w-[470px] text-[14px] leading-normal text-[#3b3f45]">
            We combine local expertise with global coordination to ensure
            efficient vessel management across all regions.
          </p>
          <div className="mt-8">
            <WhatWeDoCta label="Contact Us" />
          </div>
        </div>

        {/* Right Column - Stacked Images */}
        <div className="space-y-4">
          <div className="relative h-[234px] overflow-hidden rounded-[12px]">
            <Image
              src="/images/network/Frame1.png"
              alt="Global operations 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[47px] overflow-hidden rounded-[12px]">
            <Image
              src="/images/network/Frame220.png"
              alt="Global operations 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[47px] overflow-hidden rounded-[12px]">
            <Image
              src="/images/network/Frame221.png"
              alt="Global operations 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[47px] overflow-hidden rounded-[12px]">
            <Image
              src="/images/network/Frame220.png"
              alt="Global operations 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
