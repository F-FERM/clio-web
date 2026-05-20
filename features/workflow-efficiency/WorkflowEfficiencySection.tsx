"use client";

import { useQuery } from "@tanstack/react-query";
import { workflowEfficiencyContent } from "@/features/workflow-efficiency/workflowEfficiency.constants";
import { GetStartedButton } from "../transport-maritime/components/GetStartedButton";
import { WorkflowStackedCards } from "./components/WorkFlowStackedCards";
import { ListWorkFlowEfficiencyApi } from "@/app/api/home/workflowefficiency";

export function WorkflowEfficiencySection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["workflow-efficiency"],
    queryFn: () => ListWorkFlowEfficiencyApi({}),
  });

  if (isLoading) {
    return (
      <section className="mx-auto w-full max-w-[1480px] overflow-hidden px-4 sm:px-8 md:px-10 lg:px-24 xl:px-32 py-10 sm:py-12 md:py-14 lg:py-16 animate-pulse">
        <div className="grid gap-6 md:gap-10 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.4fr_1fr] md:items-start">
          <div className="h-24 w-full bg-gray-200 rounded mb-6" />

          <div className="space-y-4">
            <div className="h-6 w-full bg-gray-200 rounded" />
            <div className="h-6 w-3/4 bg-gray-200 rounded" />
            <div className="h-12 w-40 bg-gray-200 rounded-full mt-4" />
          </div>
        </div>

        {/* Loading Cards */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-10">
          {/* Mobile + Tablet */}
          <div className="flex flex-col gap-4 lg:hidden">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[260px] w-full rounded-[22px] bg-gray-200"
              />
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-[1200px] h-[420px]">
              {[1, 2, 3].map((i, index) => (
                <div
                  key={i}
                  className={`absolute top-0 h-[380px] w-[360px] rounded-[22px] bg-gray-200 ${
                    index === 0
                      ? "left-[8%] z-30"
                      : index === 1
                      ? "left-[34%] z-20"
                      : "left-[60%] z-10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching workflow efficiency data:", error);
  }

  const workflowData = Array.isArray(data) ? data[0] : data;

  const heading =
    workflowData?.heading || workflowEfficiencyContent.heading;

  const description =
    workflowData?.description ||
    workflowEfficiencyContent.description;

  const cta =
    workflowData?.cta || workflowEfficiencyContent.cta;

  const steps = workflowData?.steps;

  return (
    <section className="mx-auto w-full max-w-[1480px] overflow-hidden px-4 sm:px-8 md:px-10 lg:px-24 xl:px-32 py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="grid gap-6 md:gap-10 md:grid-cols-[1fr] lg:grid-cols-[1.4fr_1fr] md:items-start">
        {/* Left col */}
        <div className="flex flex-col">
          <h1 className="text-balance text-3xl sm:text-4xl md:text-[42px] lg:text-5xl leading-[1.35] md:leading-[1.45] lg:leading-[1.70] font-bold tracking-[-0.02em] text-[#8f1131]">
            {heading}
          </h1>
        </div>

        {/* Right col */}
        <div className="mt-2 md:mt-2 lg:mt-0 max-w-[700px]">
          <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.8] text-[#202229]">
            {description}
          </p>

          <div className="mt-5">
            <GetStartedButton label={cta} />
          </div>
        </div>
      </div>

      {/* Cards Section */}
    <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-10">
  {/* Mobile + Tablet */}
  <div className="flex flex-col gap-4 lg:hidden">
    {steps?.map((step: any, index: number) => (
      <div key={index}>
        <WorkflowStackedCards steps={[step]} />
      </div>
    ))}
  </div>

  {/* Desktop */}
  <div className="hidden lg:block">
    <WorkflowStackedCards steps={steps} />
  </div>
</div>
    </section>
  );
}