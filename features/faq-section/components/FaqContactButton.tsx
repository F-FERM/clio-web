import { ArrowUpRight } from "lucide-react";

type FaqContactButtonProps = {
  label: string;
};

export function FaqContactButton({ label }: FaqContactButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-3 rounded-full border hover:bg-[#8f1131] hover:text-white hover:border-[#8f1131] border-[#1f2937] px-5 py-2.5 text-sm cursor-pointer font-medium text-[#111318]"
    >
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}
