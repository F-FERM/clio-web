type WorkflowStepCardProps = {
  id: string;
  title: string;
  description: string;
  variant: "maroon" | "blue" | "yellow";
};

const cardVariantStyles: Record<WorkflowStepCardProps["variant"], string> = {
  maroon: "bg-[#9d1839]",
  blue: "bg-[#d5e1ec]",
  yellow: "bg-[#f1df3f]",
};

const numVariantStyles: Record<WorkflowStepCardProps["variant"], string> = {
  maroon: "text-white",
  blue: "text-[#1f2937]",
  yellow: "text-[#1f2937]",
};

const titleVariantStyles: Record<WorkflowStepCardProps["variant"], string> = {
  maroon: "text-white",
  blue: "text-[#9d1839]",
  yellow: "text-[#9d1839]",
};

const descVariantStyles: Record<WorkflowStepCardProps["variant"], string> = {
  maroon: "text-white/85",
  blue: "text-[#374151]",
  yellow: "text-[#374151]",
};

const TopoSVG = ({ stroke }: { stroke: string }) => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <g stroke={stroke} strokeWidth="1.4" fill="none">
      <path d="M0,180 Q80,130 160,180 T320,180" />
      <path d="M0,150 Q80,100 160,150 T320,150" />
      <path d="M0,210 Q80,160 160,210 T320,210" />
      <path d="M0,120 Q80,70 160,120 T320,120" />
      <path d="M0,240 Q80,190 160,240 T320,240" />
      <path d="M0,90 Q80,40 160,90 T320,90" />
      <path d="M0,270 Q80,220 160,270 T320,270" />
    </g>
  </svg>
);

export function WorkflowStepCard({
  id,
  title,
  description,
  variant,
}: WorkflowStepCardProps) {
  return (
    <article
      className={`
        relative overflow-hidden rounded-[22px] p-7 h-full
        ${cardVariantStyles[variant]}
      `}
    >
      {(variant === "maroon" || variant === "yellow") && (
        <TopoSVG stroke={variant === "maroon" ? "white" : "#9d1839"} />
      )}

      <p
        className={`relative z-10 text-[36px] font-medium leading-none tracking-[-0.02em] ${numVariantStyles[variant]}`}
      >
        {id}
      </p>
      <h3
        className={`relative z-10 mt-5 text-[18px] font-bold leading-[1.2] tracking-[-0.015em] ${titleVariantStyles[variant]}`}
      >
        {title}
      </h3>
      <p
        className={`relative z-10 mt-3 text-[13px] leading-[1.6] ${descVariantStyles[variant]}`}
      >
        {description}
      </p>
    </article>
  );
}