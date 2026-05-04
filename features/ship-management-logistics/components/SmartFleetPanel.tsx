import Image, { StaticImageData } from "next/image";
import Fleet from "../../../public/images/fleet/Fleet.jpg";

type SmartFleetPanelProps = {
  title: string;
  description: string;
  image?: string | StaticImageData;
};

export function SmartFleetPanel({
  title,
  description,
  image,
}: SmartFleetPanelProps) {
  
  return (
    <div className="relative h-full min-h-[300px] sm:min-h-[380px] w-full overflow-hidden rounded-xl">
      {/* Background Image */}
      <Image
        src={image || Fleet}
        alt="Top view of docked ship logistics"
        fill
        priority
        className="object-cover object-center lg:object-right"
      />

      {/* Overlay Card */}
      <div className="absolute top-5 left-5 right-5  sm:max-w-[360px] rounded-[20px] bg-[#F4F4F4]/40 p-4 sm:p-5 backdrop-blur-[2px] shadow-md transition-transform duration-300 hover:-translate-y-2">
        <h3 className="text-base sm:text-lg font-semibold tracking-[-0.02em] text-[#8f1131]">
          {title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-[#3a3c43]">{description}</p>
      </div>
    </div>
  );
}
