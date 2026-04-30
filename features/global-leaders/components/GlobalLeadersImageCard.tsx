import Image from "next/image";
import About1 from "../../../public/images/about/About1.png";

export function GlobalLeadersImageCard({ heading }: { heading: string }) {
  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-[14px] sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[400px]">
      
      {/* Image */}
      <Image
        src={About1}
        alt="Ship management vessel"
        fill
        priority
        className="object-cover object-center"
      />
  

    </div>
  );
}