type OverlayInfoCardProps = {
  title: string;
  description: string;
};

export function OverlayInfoCard({ title, description }: OverlayInfoCardProps) {
  return (
    <div
      className="
        w-[140px] sm:w-[200px] md:w-[230px] lg:w-[260px] xl:w-[280px]
        rounded-2xl sm:rounded-3xl
        bg-white/70 backdrop-blur-[2px]
        p-3 sm:p-4 lg:p-5
        shadow-sm
        transition-transform duration-500 ease-out
        group-hover:scale-[1.03]
      "
    >
      <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold tracking-[-0.02em] text-[#8f1131]">
        {title}
      </h3>

      <p className="mt-1.5 sm:mt-2 lg:mt-3 text-[11px] sm:text-xs lg:text-sm text-[#3f3f46] leading-snug">
        {description}
      </p>
    </div>
  );
}