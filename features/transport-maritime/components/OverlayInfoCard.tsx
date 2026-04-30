type OverlayInfoCardProps = {
  title: string;
  description: string;
};

export function OverlayInfoCard({ title, description }: OverlayInfoCardProps) {
  return (
    <div
      className="
        w-full max-w-[260px] sm:max-w-[290px]
        rounded-3xl bg-white/70 p-4 sm:p-6
        shadow-sm backdrop-blur-[2px]

        transition-transform duration-500 ease-out
        group-hover:scale-105
      "
    >
      <h3 className="text-base sm:text-xl font-semibold tracking-[-0.02em] text-[#8f1131]">
        {title}
      </h3>

      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#3f3f46]">
        {description}
      </p>
    </div>
  );
}