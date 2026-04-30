import Image from "next/image";
import { OverlayInfoCard } from "@/features/transport-maritime/components/OverlayInfoCard";
import Transport from "../../../public/images/fleet/transport.png";
import RightImage from "../../../public/images/fleet/RightImage.jpg"

type TransportHeroImageProps = {
  cardTitle: string;
  cardDescription: string;
};

export function TransportHeroImage({
  cardTitle,
  cardDescription,
}: TransportHeroImageProps) {
  return (
    <div className="group relative mt-8 sm:mt-10 h-[260px] sm:h-[320px] lg:h-[380px] w-full overflow-hidden rounded-[22px]">

      {/* MAIN IMAGE */}
      <Image
        src={Transport}
        alt="Main background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* RIGHT SIDE IMAGE */}
      <div className="absolute right-0 top-0 h-full w-[40%] sm:w-[35%] lg:w-[30%]">
        <Image
          src={RightImage}
          alt="Side image"
          fill
          className="object-cover"
        />

        {/* OVERLAY CARD */}
        <div className="absolute top-4 right-4 bottom-4 flex items-start">
          <div
            className="
              h-full
            "
          >
            <OverlayInfoCard
              title={cardTitle}
              description={cardDescription}
            />
          </div>
        </div>
      </div>
    </div>
  );
}