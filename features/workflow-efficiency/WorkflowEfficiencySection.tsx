import { workflowEfficiencyContent } from "@/features/workflow-efficiency/workflowEfficiency.constants";
import { GetStartedButton } from "../transport-maritime/components/GetStartedButton";
import { WorkflowStackedCards } from "./components/WorkFlowStackedCards";

export function WorkflowEfficiencySection() {
  return (
    <section className="mx-auto w-full max-w-[1480px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 sm:py-12 md:py-16">
      <div className="grid gap-6 md:gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">

        {/* Left col */}
        <div className="flex flex-col">
          <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.70] font-bold tracking-[-0.02em] text-[#8f1131]">
            {workflowEfficiencyContent.heading}
          </h1>
          
        </div>

        {/* Right col */}
        <div className="mt-2 md:mt-0">
          <p className="text-[18px] font-normal text-[#202229]">
            {workflowEfficiencyContent.description}
          </p>
          <div className="mt-5">
            <GetStartedButton label={workflowEfficiencyContent.cta} />
          </div>
        </div>

      </div>
      <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
            <WorkflowStackedCards />
          </div>
    </section>
  );
}