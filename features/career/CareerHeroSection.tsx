import { WhatWeDoCta } from "@/features/what-we-do/components/WhatWeDoCta";
import {
  BriefcaseBusiness,
  Globe,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import { GetStartedButton } from "../transport-maritime/components/GetStartedButton";

const careerHighlights = [
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Work across international maritime operations",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Growth",
    description: "Continuous learning and advancement opportunities",
  },
  {
    icon: ShieldCheck,
    title: "Industry Leadership",
    description: "Be part of a high-performance maritime team",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with experienced professionals",
  },
  {
    icon: Rocket,
    title: "Innovation Driven",
    description: "Modern tools and smart systems",
  },
] as const;

export function CareerHeroSection() {
  return (
    <section className="w-full px-6  sm:pt-32 lg:pt-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-20 pt-1">
          <h1 className="max-w-[950px] text-4xl sm:text-5xl lg:text-[64px] leading-[1.2] sm:leading-[1.28] font-bold tracking-[-0.03em] text-[#45474d]">
            Build Your Future in Maritime Excellence
          </h1>
          <p className="mt-4 sm:mt-6 max-w-[390px] text-xs sm:text-[14px] leading-normal text-[#3b3f45]">
            Join a team that&apos;s redefining global ship management. At Clio,
            we combine innovation, expertise, and opportunity to help you grow
            in a dynamic maritime environment.
          </p>
          <div className="mt-6 sm:mt-7">
            <GetStartedButton label="Get Started" />
          </div>
        </div>

        <div className="relative z-10 min-h-[350px] sm:min-h-[395px] lg:ml-6 mt-12 sm:mt-16 lg:mt-0">
          <div className="absolute inset-0 overflow-hidden rounded-[18px]">
            <Image
              src="/images/career/career.png"
              alt="Maritime careers"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -bottom-8 -left-4 right-4 sm:top-[200px] sm:left-[-150px] sm:bottom-auto w-[calc(100%+32px)] sm:max-w-[350px] rounded-[12px] bg-[#8f9397]/78 p-4 text-white backdrop-blur-[1.5px] shadow-lg">
            <h2 className="text-xl sm:text-[28px] leading-none font-semibold">
              WHY WORK WITH CLIO
            </h2>
            <p className="mt-1.5 text-[10px] sm:text-[11px] text-white/90">
              We don&apos;t just offer jobs—we build careers.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:block sm:space-y-2.5">
              {careerHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 shrink-0 text-white/90" />
                    <div>
                      <p className="text-[10px] sm:text-[12px] leading-none font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[8px] sm:text-[10px] leading-tight text-white/85">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
