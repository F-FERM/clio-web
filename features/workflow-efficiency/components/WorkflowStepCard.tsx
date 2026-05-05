import Image from "next/image";
import yellowPattern from "../../../public/images/patterns/yellow-pattern.jpg";
import maroonPattern from "../../../public/images/patterns/maroonpattern.jpg";
import grayPattern from "../../../public/images/patterns/graypattern.jpg";

type WorkflowStepCardProps = {
  id: string;
  title: string;
  description: string;
  variant: "maroon" | "blue" | "yellow";
};

const cardVariantStyles: Record<WorkflowStepCardProps["variant"], string> = {
  maroon: "bg-[#901027]",
  blue: "bg-[#E0EFFA]",
  yellow: "bg-[#FAE651]",
};

const numVariantStyles: Record<WorkflowStepCardProps["variant"], string> = {
  maroon: "text-white",
  blue: "text-[#1f2937]",
  yellow: "text-[#1f2937]",
};

const titleVariantStyles: Record<WorkflowStepCardProps["variant"], string> = {
  maroon: "text-white",
  blue: "text-[#901027]",
  yellow: "text-[#901027]",
};

const descVariantStyles: Record<WorkflowStepCardProps["variant"], string> = {
  maroon: "text-white/85",
  blue: "text-[#374151]",
  yellow: "text-[#374151]",
};

const patternImages = {
  maroon: maroonPattern,
  blue: grayPattern,
  yellow: yellowPattern,
};

export function WorkflowStepCard({
  id,
  title,
  description,
  variant,
}: WorkflowStepCardProps) {
  return (
    <article
      className={`
        relative overflow-hidden rounded-[16px] sm:rounded-[22px]
        p-4 sm:p-5 md:p-7 h-full
        ${cardVariantStyles[variant]}
      `}
    >
      <Image
        src={patternImages[variant]}
        alt="Pattern"
        fill
        className="absolute inset-0 object-cover opacity-20 mix-blend-multiply pointer-events-none"
      />

      <p
        className={`relative z-10 text-[24px]  sm:text-[30px] md:text-[36px] font-medium leading-none tracking-[-0.02em] ${numVariantStyles[variant]}`}
      >
        {id}
      </p>
      <h3
        className={`relative z-10 mt-3 sm:mt-4 md:mt-5 text-[14px] sm:text-[16px] md:text-[20px] font-semibold leading-[1.2] tracking-[-0.015em] ${titleVariantStyles[variant]}`}
      >
        {title}
      </h3>
      <p
        className={`relative z-10 mt-2 md:mt-3  font-normal sm:text-[12px] md:text-[14px] leading-[1.6] ${descVariantStyles[variant]}`}
      >
        {description}
      </p>
    </article>
  );
}
