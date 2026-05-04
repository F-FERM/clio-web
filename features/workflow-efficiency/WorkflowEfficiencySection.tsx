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
      <section className="mx-auto w-full max-w-[1480px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 sm:py-12 md:py-16 animate-pulse">
        <div className="grid gap-6 md:gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div className="h-24 w-full bg-gray-200 rounded mb-6" />
          <div className="space-y-4">
            <div className="h-6 w-full bg-gray-200 rounded" />
            <div className="h-6 w-3/4 bg-gray-200 rounded" />
            <div className="h-12 w-40 bg-gray-200 rounded-full mt-4" />
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-6 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[300px] w-[360px] bg-gray-200 rounded-[22px] shrink-0" />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching workflow efficiency data:", error);
  }

  const workflowData = Array.isArray(data) ? data[0] : data;

  const heading = workflowData?.heading || workflowEfficiencyContent.heading;
  const description = workflowData?.description || workflowEfficiencyContent.description;
  const cta = workflowData?.cta || workflowEfficiencyContent.cta;
  const steps = workflowData?.steps;

  return (
    <section className="mx-auto w-full max-w-[1480px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 sm:py-12 md:py-16">
      <div className="grid gap-6 md:gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
        {/* Left col */}
        <div className="flex flex-col">
          <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.70] font-bold tracking-[-0.02em] text-[#8f1131]">
            {heading}
          </h1>
        </div>

        {/* Right col */}
        <div className="mt-2 md:mt-0">
          <p className="text-[18px] font-normal text-[#202229]">
            {description}
          </p>
          <div className="mt-5">
            <GetStartedButton label={cta} />
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
        <WorkflowStackedCards steps={steps} />
      </div>
    </section>
  );
}