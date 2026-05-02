import Image from "next/image";
import About2 from "../../../public/images/about/About2.jpg";

type WhoWeAreHeroProps = {
  title: string;
  description: string;
};

export function WhoWeAreHero({ title, description }: WhoWeAreHeroProps) {
  return (
    <div className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] overflow-hidden rounded-[16px]">
      <Image
        src={About2}
        alt="Ship at port"
        fill
        priority
        className="object-cover object-center"
      />

      <div
        className="
        absolute 
        left-4 right-4 top-4 
        sm:left-6 sm:top-6 sm:max-w-[80%]
        md:left-8 md:max-w-[520px]
        rounded-[12px] 
        bg-gray-300/60
        px-4 py-4 
        sm:px-6 sm:py-5 
        backdrop-blur-[2px]
      "
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[-0.02em] text-[#901027] leading-tight">
          {title}
        </h2>

        <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] leading-[1.5] text-[#2f3137]">
          {description}
        </p>
      </div>
    </div>
  );
}
