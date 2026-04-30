import { ArrowUpRight } from "lucide-react";

type WhatWeDoCtaProps = {
  label: string;
};

export function WhatWeDoCta({ label }: WhatWeDoCtaProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full bg-[#9c1034] px-5 py-2.5 text-sm font-semibold text-white"
    >
      <span>{label}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f8d11a] text-[#9c1034]">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </button>
  );
}
