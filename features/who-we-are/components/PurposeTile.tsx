
type PurposeTileProps = {
  title: string;
  description: string;
  variant: "blue" | "yellow";
};

export function PurposeTile({
  title,
  description,
  variant,
}: PurposeTileProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[20px] p-5 sm:p-6 min-h-[180px] sm:min-h-[200px]
      ${variant === "blue" ? "bg-[#d5e2ec]" : "bg-[#f1df3f]"}
      transition-transform duration-300 ease-out hover:-translate-y-2`}
    >
      {/* SVG Background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#a8c4d8" strokeWidth="1.2" fill="none">
            <path d="M-50 320 C80 280 160 120 280 80 S420 40 500 20" />
            <path d="M-50 260 C80 220 160 60 280 20 S420 -20 500 -40" />
            <path d="M-50 200 C80 160 160 0 280 -40 S420 -80 500 -100" />
            <path d="M-50 350 C80 310 160 150 280 110 S420 70 500 50" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center text-center">
        <h3 className="mb-2 text-[16px] sm:text-[18px] font-bold tracking-[-0.02em] text-[#901027]">
          {title}
        </h3>

        <p className="text-[14px] sm:text-[15px] text-[#464646] leading-relaxed max-w-[90%] mx-auto">
          {description}
        </p>
      </div>
    </article>
  );
}