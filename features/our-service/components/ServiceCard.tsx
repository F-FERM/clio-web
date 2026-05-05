import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  tag: string;
  tagColor?: string;
  image: string | StaticImageData;
  imagePosition?: "left" | "center" | "right";
  hoverText: string;
};

const imagePositionClasses: Record<"left" | "center" | "right", string> = {
  left: "object-left",
  center: "object-center",
  right: "object-right",
};

export function ServiceCard({
  title,
  tag,
  image,
  imagePosition = "center",
  tagColor = "bg-[#8f1131]",
  hoverText,
}: ServiceCardProps) {
  return (
    <article className="w-full ">
      <div className="group relative h-[280px] w-full overflow-hidden rounded-[24px] shadow-lg transition-all duration-300 hover:shadow-xl">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-110 ${imagePositionClasses[imagePosition]}`}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Arrow Button */}
        <button
          type="button"
          className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/50 text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#1f2937]"
          aria-label={`Learn more about ${title}`}
        >
          <ArrowRight className="h-6 w-6" />
        </button>

        {/* Tag Badge - Always visible */}
        <div className="absolute bottom-4 left-4">
          <span
            className={`${tagColor} inline-block rounded-full px-4 py-2 text-[16px] font-semibold text-white shadow-md`}
          >
            {tag}
          </span>

          {/* Text appears below badge on hover */}
          <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-32 group-hover:mt-3">
            <p className="text-base text-white leading-relaxed">{hoverText}</p>
          </div>
        </div>
      </div>

      <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.01em] text-[#8f1131]">
        {title}
      </h3>
    </article>
  );
}
