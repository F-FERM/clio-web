import { ArrowUpRight } from "lucide-react";

type GetStartedButtonProps = {
  label: string;
};

export function GetStartedButton({ label }: GetStartedButtonProps) {
  return (
    <button
      type="button"
      className="group inline-flex items-center gap-2 rounded-full cursor-pointer bg-[#901027] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#f8d11a] hover:text-[#901027]"
    >
      <span>{label}</span>

      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f8d11a] text-[#901027] transition-all duration-300 group-hover:bg-[#901027] group-hover:text-[#f8d11a]">
        <ArrowUpRight size={14} strokeWidth={2.5} />
      </span>
    </button>
  );
}