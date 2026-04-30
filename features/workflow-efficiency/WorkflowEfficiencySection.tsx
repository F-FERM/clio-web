import { WorkflowCtaButton } from "@/features/workflow-efficiency/components/WorkflowCtaButton";
import { workflowEfficiencyContent } from "@/features/workflow-efficiency/workflowEfficiency.constants";
import { WorkflowStackedCards } from "./components/WorkFlowStackedCards";
import { GetStartedButton } from "../transport-maritime/components/GetStartedButton";

export function WorkflowEfficiencySection() {
  return (
    <section className="mx-auto w-full max-w-[1480px] px-32 py-16">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">

        {/* Left col: heading with cards sitting directly underneath */}
        <div className="flex flex-col">
          <h1 className="text-balance text-5xl leading-[1.15] font-bold tracking-[-0.02em] text-[#8f1131]">
            {workflowEfficiencyContent.heading}
          </h1>
          <div className="mt-10 flex justify-center items-center">
            <WorkflowStackedCards />

          </div>
        </div>

        {/* Right col: description + CTA */}
        <div>
          <p className="text-sm text-[#202229]">
            {workflowEfficiencyContent.description}
          </p>
          <div className="mt-5">
            <GetStartedButton label={workflowEfficiencyContent.cta} />
          </div>
        </div>

      </div>
    </section>
  );
}