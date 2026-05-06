import { Cog } from "lucide-react";
import Image from "next/image";

import yellowPattern from "../../../public/images/patterns/yellow-pattern.jpg";
import maroonPattern from "../../../public/images/patterns/maroonpattern.jpg";
import grayPattern from "../../../public/images/patterns/graypattern.jpg";

type FeatureTagProps = {
  label: string;
  variant: "gray" | "yellow" | "maroon";
};

function FeatureTag({ label, variant }: FeatureTagProps) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-[5px] text-xs sm:text-[13px] ${
        variant === "maroon"
          ? "border-white/30 text-white"
          : "border-[#2f3137] text-[#2f3137]"
      }`}
    >
      {label}
    </span>
  );
}

type FeatureInfoCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  variant: "gray" | "yellow" | "maroon";
};

const cardVariantStyles: Record<FeatureInfoCardProps["variant"], string> = {
  gray: "bg-[#E0EFFA]",
  yellow: "bg-[#FAE651]",
  maroon: "bg-[#901027]",
};

const titleVariantStyles: Record<FeatureInfoCardProps["variant"], string> = {
  gray: "text-[#901027]",
  yellow: "text-[#901027]",
  maroon: "text-white",
};

const descVariantStyles: Record<FeatureInfoCardProps["variant"], string> = {
  gray: "text-[#464646]",
  yellow: "text-[#464646]",
  maroon: "text-white/85",
};

const patternImages = {
  gray: grayPattern,
  yellow: yellowPattern,
  maroon: maroonPattern,
};
const shadowVariantStyles: Record<FeatureInfoCardProps["variant"], string> = {
  gray: "hover:shadow-[0_0_30px_4px_rgba(0,0,0,0.12)]",
  yellow: "hover:shadow-[0_0_30px_4px_rgba(250,230,81,0.6)]",
  maroon: "hover:shadow-[0_0_30px_4px_rgba(144,16,39,0.5)]",
};
export function FeatureInfoCard({
  title,
  description,
  tags,
  variant,
}: FeatureInfoCardProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[22px] p-5 sm:p-6  min-h-[200px] sm:min-h-[230px] transition-transform duration-300 ease-out hover:-translate-y-2 ${cardVariantStyles[variant]} ${shadowVariantStyles[variant]}`}
    >
      <Image
        src={patternImages[variant]}
        alt="Pattern"
        fill
        className="absolute inset-0 object-cover opacity-20 mix-blend-multiply pointer-events-none"
      />

      <div className="relative z-10">
        <Cog
          className={`w-6 h-6 sm:w-7 sm:h-7 ${
            variant === "maroon" ? "text-white" : "text-[#1f2937]"
          }`}
          strokeWidth={1.7}
        />
        <h3
          className={`mt-5 sm:mt-7 mb-2 text-[17px] sm:text-[19px] font-medium tracking-[-0.02em] ${titleVariantStyles[variant]}`}
        >
          {title}
        </h3>
        <p
          className={`mb-4 text-xs sm:text-sm font-medium leading-relaxed ${descVariantStyles[variant]}`}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <FeatureTag key={tag} label={tag} variant={variant} />
          ))}
        </div>
      </div>
    </article>
  );
}
