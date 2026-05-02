import { WhatWeDoCta } from "@/features/what-we-do/components/WhatWeDoCta";
import { GetStartedButton } from "../transport-maritime/components/GetStartedButton";

const positions = [
  {
    title: "Fleet Operations Executive",
    description:
      "Coordinate vessel operations, monitor performance, and ensure smooth logistics.",
  },
  {
    title: "HR & Admin Executive",
    description:
      "Handle recruitment, employee management, and administrative tasks.",
  },
  {
    title: "Technical Superintendent",
    description: "Oversee vessel maintenance, inspections, and compliance.",
  },
] as const;

export function OpenPositionsSection() {
  return (
    <section className="w-full px-6  lg:px-28 lg:pb-20 ">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2 className="text-center text-4xl leading-none font-bold tracking-[-0.03em] text-[#8f1131]">
          OPEN POSITIONS
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {positions.map((position) => (
            <article
              key={position.title}
              className="rounded-[14px] border border-[#cfd4db] px-7 py-6 flex flex-col"
            >
              <h3 className="max-w-[260px] text-3xl leading-[1.70] font-semibold text-[#1f242b]">
                {position.title}
              </h3>
              <p className="mt-4 max-w-[270px] text-sm leading-[1.45] text-[#4c515a] flex-1">
                {position.description}
              </p>
              <div className="mt-6">
                <GetStartedButton label="Apply Now" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
