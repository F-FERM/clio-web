import { CircleCheck } from "lucide-react";
import Image from "next/image";
import shipMini from "../../../public/images/home/HeroVessel.jpg";

interface VesselOperationsCardProps {
  title?: string;
  description?: string;
  bullets?: string[];
  image?: string;
}

export function VesselOperationsCard({
  title,
  description,
  bullets,
  image,
}: VesselOperationsCardProps) {
  return (
    <aside className="w-full sm:max-w-[320px] lg:w-[341px] h-[350px] rounded-xl px-9 lg:rounded-2xl bg-white/10 p-4 lg:p-4 space-y-4 text-white backdrop-blur-md border border-blue-100 shadow-xl">
      <h3 className="text-[17px] sm:text-[19px] lg:text-[22px] font-semibold">
        {title || "Vessel Operations"}
      </h3>

      <p className="mt-1.5 lg:mt-2 text-[12px] lg:text-sm text-white/80">
        {description || "Real-time fleet monitoring & management"}
      </p>

      <ul className="mt-2.5 lg:mt-4 space-y-1.5 lg:space-y-2">
        {bullets && bullets.length > 0 ? (
          bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-[12px] lg:text-sm"
            >
              <CircleCheck className="h-3.5 w-3.5 lg:h-4 lg:w-4 flex-shrink-0" />
              {bullet}
            </li>
          ))
        ) : (
          <>
            <li className="flex items-center gap-2 text-[12px] lg:text-sm">
              <CircleCheck className="h-3.5 w-3.5 lg:h-4 lg:w-4 flex-shrink-0" />
              Global Coverage
            </li>
            <li className="flex items-center gap-2 text-[12px] lg:text-sm">
              <CircleCheck className="h-3.5 w-3.5 lg:h-4 lg:w-4 flex-shrink-0" />
              Smart Solutions
            </li>
          </>
        )}
      </ul>

      {/* Bottom image */}
      <div className="mt-2.5 lg:mt-4 relative h-[100px] lg:h-[150px] w-full overflow-hidden rounded-lg lg:rounded-xl">
        <Image
          src={image || shipMini}
          alt="Vessel overview"
          fill
          className="object-cover"
        />
      </div>
    </aside>
  );
}
