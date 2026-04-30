import { ArrowUpRight } from "lucide-react";

type WorkflowCtaButtonProps = {
  label: string;
};

export function WorkflowCtaButton({ label }: WorkflowCtaButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full bg-[#9c1034] px-5 py-2 text-sm font-semibold text-white"
    >
      <span>{label}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f8d11a] text-[#9c1034]">
        <ArrowUpRight size={14} strokeWidth={2.5} />
      </span>
    </button>
  );
}
