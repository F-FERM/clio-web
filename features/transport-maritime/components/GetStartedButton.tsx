"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

type GetStartedButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export function GetStartedButton({ label, onClick, className }: GetStartedButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else {
      router.push("/contact-us");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group inline-flex items-center gap-2 rounded-full cursor-pointer bg-[#901027] px-7 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#f8d11a] hover:text-[#901027] ${className || ""}`}
    >
      <span>{label}</span>

      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f8d11a] text-[#901027] transition-all duration-300 group-hover:bg-[#901027] group-hover:text-[#f8d11a]">
        <ArrowUpRight size={14} strokeWidth={2.5} />
      </span>
    </button>
  );
}
