import { Cog } from "lucide-react";

type FeatureTagProps = {
  label: string;
};

function FeatureTag({ label }: FeatureTagProps) {
  return (
    <span className="inline-block rounded-full border border-[#2f3137] px-3 py-[5px] text-xs sm:text-[13px] text-[#2f3137]">
      {label}
    </span>
  );
}

type FeatureInfoCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  variant: "lightBlue" | "yellow";
};

const cardVariantClasses: Record<
  FeatureInfoCardProps["variant"],
  string
> = {
  lightBlue: "bg-[#dce8f0]",
  yellow: "bg-[#f2de49]",
};

export function FeatureInfoCard({
  title,
  description,
  tags,
  variant,
}: FeatureInfoCardProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[22px] p-5 sm:p-6 min-h-[200px] sm:min-h-[230px] ${cardVariantClasses[variant]}
      transition-transform duration-300 ease-out hover:-translate-y-2`}
    >
      {/* SVG Background */}
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#a8c4d8" strokeWidth="1.2" fill="none">
            <path d="M-50 320 C80 280 160 120 280 80 S420 40 500 20" />
            <path d="M-50 290 C80 250 160 90 280 50 S420 10 500 -10" />
            <path d="M-50 260 C80 220 160 60 280 20 S420 -20 500 -40" />
            <path d="M-50 230 C80 190 160 30 280 -10 S420 -50 500 -70" />
            <path d="M-50 200 C80 160 160 0 280 -40 S420 -80 500 -100" />
            <path d="M-50 170 C80 130 160 -30 280 -70 S420 -110 500 -130" />
            <path d="M-50 350 C80 310 160 150 280 110 S420 70 500 50" />
            <path d="M-50 380 C80 340 160 180 280 140 S420 100 500 80" />
            <path d="M-50 410 C80 370 160 210 280 170 S420 130 500 110" />
            <path d="M-50 140 C80 100 160 -60 280 -100 S420 -140 500 -160" />
            <path d="M-50 110 C80 70 160 -90 280 -130 S420 -170 500 -190" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <Cog className="w-6 h-6 sm:w-7 sm:h-7 text-[#1f2937]" strokeWidth={1.7} />

        {/* Title */}
        <h3 className="mt-5 sm:mt-7 mb-2 text-[17px] sm:text-[19px] font-bold tracking-[-0.02em] text-[#8b1a2e]">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-xs sm:text-sm text-[#2f3137] leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <FeatureTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}