import { InsightsImageBand } from "@/features/maritime-insights/components/InsightsImageBand";
import { maritimeInsightsContent } from "@/features/maritime-insights/maritimeInsights.constants";

export function MaritimeInsightsSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-7 py-9">
      <h1 className="max-w-[930px] text-[74px] leading-[1.05] font-bold tracking-[-0.02em] text-[#47494f]">
        {maritimeInsightsContent.heading}
      </h1>
      <InsightsImageBand description={maritimeInsightsContent.description} />
    </section>
  );
}
