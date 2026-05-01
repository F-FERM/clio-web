import Image from "next/image";
import HeroPillShip from "../../../public/images/home/HeroPillShip.jpg";

export function VesselInfoPill() {
  return (
    <div
      className="flex items-center gap-2.5 sm:gap-3 lg:gap-5 rounded-lg lg:rounded-2xl 
      bg-white/10 border border-white/20 
      px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-4 shadow-lg 
      w-full sm:max-w-[420px] lg:w-[380px]"
    >
      <p className="text-sm sm:text-[14px] lg:text-sm leading-[1.3] text-white flex-1">
        Efficient vessel operations across international waters
      </p>

      <div className="relative h-[50px] sm:h-[55px] lg:h-[70px] w-[100px] sm:w-[130px] lg:w-[180px] flex-shrink-0 overflow-hidden rounded-md lg:rounded-xl">
        <Image src={HeroPillShip} alt="Ship" fill className="object-cover" />
      </div>
    </div>
  );
}
