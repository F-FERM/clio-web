import { FaqContactButton } from "@/features/faq-section/components/FaqContactButton";
import { FaqRow } from "@/features/faq-section/components/FaqRow";
import { faqSectionContent } from "@/features/faq-section/faqSection.constants";

export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-[1480px] px-4 sm:px-8 md:px-16 lg:px-28 py-10 sm:py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
        {/* Left column */}
        <div className="flex flex-col gap-6 md:gap-0">
       <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[#8f1131] max-w-[380px] mb-4 leading-tight">
  {faqSectionContent.title}
</h1>
          <p className="text-base sm:text-lg leading-[1.45] text-[#171a20] max-w-[420px]">
            {faqSectionContent.description}
          </p>
          <div className="md:mt-16">
            <FaqContactButton label={faqSectionContent.cta} />
          </div>
        </div>

        {/* Right column */}
        <div>
          {faqSectionContent.items.map((item) => (
            <FaqRow
              key={typeof item === "string" ? item : item.question}
              question={typeof item === "string" ? item : item.question}
              answer={typeof item === "object" ? item.answer : undefined}
            />
          ))}
        </div>
      </div>  
    </section>
  );
}