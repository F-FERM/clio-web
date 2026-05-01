import { CircleCheck } from "lucide-react";
import Image from "next/image";
import shipMini from "../../../public/images/home/HeroVessel.jpg";

export function VesselOperationsCard() {
  return (
    <aside className="w-full sm:max-w-[320px] lg:w-[341px] h-[350px] rounded-xl px-9 lg:rounded-2xl bg-white/10 p-4 lg:p-4 space-y-4 text-white backdrop-blur-md border border-white/20 shadow-xl">
      <h3 className="text-[17px] sm:text-[19px] lg:text-[22px] font-semibold">
        Vessel Operations
      </h3>

      <p className="mt-1.5 lg:mt-2 text-[12px] lg:text-sm text-white/80">
        Real-time fleet monitoring & management
      </p>

      <ul className="mt-2.5 lg:mt-4 space-y-1.5 lg:space-y-2">
        <li className="flex items-center gap-2 text-[12px] lg:text-sm">
          <CircleCheck className="h-3.5 w-3.5 lg:h-4 lg:w-4 flex-shrink-0" />
          Global Coverage
        </li>
        <li className="flex items-center gap-2 text-[12px] lg:text-sm">
          <CircleCheck className="h-3.5 w-3.5 lg:h-4 lg:w-4 flex-shrink-0" />
          Smart Solutions
        </li>
      </ul>

      {/* Bottom image */}
      <div className="mt-2.5 lg:mt-4 relative h-[100px] lg:h-[150px] w-full overflow-hidden rounded-lg lg:rounded-xl">
        <Image
          src={shipMini}
          alt="Vessel overview"
          fill
          className="object-cover"
        />
      </div>
    </aside>
  );
}
