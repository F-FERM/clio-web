import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  tag: string;
  tagColor: string; 
  image: StaticImageData;
  imagePosition: "left" | "center" | "right";
  hoverText: string;
};

const imagePositionClasses: Record<ServiceCardProps["imagePosition"], string> =
  {
    left: "object-left",
    center: "object-center",
    right: "object-right",
  };

export function ServiceCard({
  title,
  tag,
  image,
  imagePosition,
  tagColor,
  hoverText
}: ServiceCardProps) {
  return (
    <article className="w-full sm:w-[467px] ">
      <div className="group relative h-[288px] w-full overflow-hidden rounded-[20px]">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${imagePositionClasses[imagePosition]}`}
        />

        {/* Arrow Button */}
        <button
          type="button"
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-[#1f2937] backdrop-blur-md transition-all duration-300 group-hover:bg-white"
          aria-label={`Learn more about ${title}`}
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        {/* Tag Badge - Always visible */}
        <div className="absolute bottom-4 left-4">
          <span className={`${tagColor} inline-block rounded-full px-3 py-1 text-xs text-white`}>
            {tag}
          </span>
          
          {/* Text appears below badge on hover */}
          <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-20 group-hover:mt-2">
            <span className="inline-block rounded-lg  px-3 py-1.5 text-[18px] text-white ">
              {hoverText}
            </span>
          </div>
        </div>
      </div>

      <h3 className="mt-3 text-lg  font-medium leading-[1.2] tracking-[-0.01em] text-[#8f1131]">
        {title}
      </h3>
    </article>
  );
}