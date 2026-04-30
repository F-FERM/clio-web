"use client";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

type FaqRowProps = {
  question: string;
  answer?: string;
};

export function FaqRow({ question, answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." }: FaqRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#b7bcc4]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-xl font-medium tracking-[-0.01em] text-[#14171c] pr-4">
          {question}
        </span>
        {isOpen
          ? <Minus className="h-7 w-7 shrink-0 text-[#8f1131] transition-all duration-300" />
          : <Plus className="h-7 w-7 shrink-0 text-[#14171c] transition-all duration-300" />
        }
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base leading-relaxed text-[#4a5260]">{answer}</p>
      </div>
    </div>
  );
}