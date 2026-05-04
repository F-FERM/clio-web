"use client";

import { useQuery } from "@tanstack/react-query";
import { FaqContactButton } from "@/features/faq-section/components/FaqContactButton";
import { FaqRow } from "@/features/faq-section/components/FaqRow";
import { faqSectionContent } from "@/features/faq-section/faqSection.constants";
import { ListFaqsectionApi } from "@/app/api/home/faqsection";
import Link from "next/link";

export function FaqSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["faq-section"],
    queryFn: () => ListFaqsectionApi({}),
  });

  if (isLoading) {
    return (
      <section className="mx-auto w-full max-w-[1480px] px-3 sm:px-4 md:px-8 lg:px-28 py-8 sm:py-10 md:py-14 lg:py-20 animate-pulse">
        <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-full max-w-[380px] bg-gray-200 rounded mb-4" />
            <div className="h-20 w-full max-w-[420px] bg-gray-200 rounded mb-16" />
            <div className="h-12 w-48 bg-gray-200 rounded-full" />
          </div>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 w-full bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching FAQ data:", error);
  }

  const faqData = Array.isArray(data) ? data[0] : data;

  const title = faqData?.title || faqSectionContent.title;
  const description = faqData?.description || faqSectionContent.description;
  const cta = faqData?.cta || faqSectionContent.cta;
  const items = faqData?.items || faqSectionContent.items;

  return (
    <section className="mx-auto w-full max-w-[1480px] px-3 sm:px-4 md:px-8 lg:px-28 py-8 sm:py-10 md:py-14 lg:py-20">
      <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-[1fr_1.6fr]">
        {/* Left column */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#8f1131] max-w-full sm:max-w-[380px] mb-2 sm:mb-4 leading-[1.70]">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-[1.45] text-[#171a20] max-w-full sm:max-w-[420px]">
            {description}
          </p>
          <div className="mt-4 sm:mt-6 md:mt-16">
            <Link href="/contact-us">
              <FaqContactButton label={cta} />
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div>
          {items.map((item: any) => (
            <FaqRow
              key={typeof item === "string" ? item : item._id || item.question}
              question={typeof item === "string" ? item : item.question}
              answer={typeof item === "object" ? item.answer : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
