import { ArrowUpRight } from "lucide-react";

type WhatWeDoCtaProps = {
  label: string;
};

export function WhatWeDoCta({ label }: WhatWeDoCtaProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold border"
    >
      <span className="text-black">{label}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full text-black">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </button>
  );
}
