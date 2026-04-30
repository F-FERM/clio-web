import { whoWeAreContent } from "@/features/who-we-are/whoWeAre.constants";
import Image from "next/image";

export function CareerWhoWeAreBanner() {
  return (
    <section className="w-full px-6 pb-14 lg:px-28 lg:pb-16 mt-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="relative h-[260px] overflow-hidden rounded-[18px] md:h-[300px]">
          <Image
            src="/images/home.jpg"
            alt="Who we are at sea"
            fill
            className="object-cover object-center"
          />

          <div className="absolute right-8 top-1/2 w-full max-w-[430px] -translate-y-1/2 rounded-[16px] bg-[#d4d8dc]/74 px-7 py-6 backdrop-blur-[1.5px]">
            <h2 className="text-3xl leading-none font-bold tracking-[-0.03em] text-[#9b102f]">
              {whoWeAreContent.title}
            </h2>
            <p className="mt-4 text-[14px] leading-normal text-[#ffffff]">
              {whoWeAreContent.heroDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
