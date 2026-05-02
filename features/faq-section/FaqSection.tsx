import { FaqContactButton } from "@/features/faq-section/components/FaqContactButton";
import { FaqRow } from "@/features/faq-section/components/FaqRow";
import { faqSectionContent } from "@/features/faq-section/faqSection.constants";
import Link from "next/link";

export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-[1480px] px-3 sm:px-4 md:px-8 lg:px-28 py-8 sm:py-10 md:py-14 lg:py-20">
      <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-[1fr_1.6fr]">
        {/* Left column */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#8f1131] max-w-full sm:max-w-[380px] mb-2 sm:mb-4 leading-[1.70]">
            {faqSectionContent.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-[1.45] text-[#171a20] max-w-full sm:max-w-[420px]">
            {faqSectionContent.description}
          </p>
          <div className="mt-4 sm:mt-6 md:mt-16">
            <Link href="/contact-us">
                        <FaqContactButton label={faqSectionContent.cta} />

            </Link>
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
