import Image, { StaticImageData } from "next/image";
import { OverlayInfoCard } from "@/features/transport-maritime/components/OverlayInfoCard";
import Transport from "../../../public/images/fleet/transport.png";
import RightImage from "../../../public/images/fleet/RightImage.jpg";

type TransportHeroImageProps = {
  cardTitle: string;
  cardDescription: string;
  mainImage?: string | StaticImageData;
  sideImage?: string | StaticImageData;
};

export function TransportHeroImage({
  cardTitle,
  cardDescription,
  mainImage,
  sideImage,
}: TransportHeroImageProps) {
  return (
    <div className="group relative mt-8 sm:mt-10 h-[280px] xs:h-[320px] sm:h-[280px] md:h-[340px] lg:h-[400px] xl:h-[440px] w-full overflow-hidden rounded-[14px] sm:rounded-[18px] md:rounded-[22px]">
      {/* MAIN IMAGE */}
      <Image
        src={mainImage || Transport}
        alt="Main background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* RIGHT SIDE IMAGE — expands left on hover */}
      <div
        className="
          absolute right-0 top-0 h-full
          w-[48%] sm:w-[42%] md:w-[38%] lg:w-[32%]
          transition-all duration-500 ease-out
          group-hover:w-[62%] sm:group-hover:w-[55%] md:group-hover:w-[50%] lg:group-hover:w-[44%]
          rounded-l-[14px] sm:rounded-l-[18px] md:rounded-l-[22px] overflow-hidden
        "
      >
        <Image
          src={sideImage || RightImage}
          alt="Side image"
          fill
          className="object-cover object-right"
        />

        {/* OVERLAY CARD */}
        <div className="absolute inset-0 flex items-start pt-3 sm:pt-4 md:pt-5 justify-start pl-2 sm:pl-3 md:pl-4 lg:pl-5 pr-4">
          <OverlayInfoCard title={cardTitle} description={cardDescription} />
        </div>
      </div>
    </div>
  );
}
