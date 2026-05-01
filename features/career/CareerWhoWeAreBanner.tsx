import Image from "next/image";
import { OverlayInfoCard } from "@/features/transport-maritime/components/OverlayInfoCard";
import MainImage from "../../public/images/career/Carrer1.jpg";
import RightImage from "../../public/images/career/Career2.jpg";
import { careerContent } from "./career.constants";

export function CareerWhoWeAreBanner() {
  return (
    <section className="w-full px-6 py-12 lg:px-20 lg:py-16">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="group relative h-[300px] md:h-[350px] lg:h-[380px] w-full overflow-hidden rounded-[24px]">
          {/* MAIN IMAGE */}
          <Image
            src={MainImage}
            alt="Main background"
            fill
            priority
            className="object-cover object-center"
          />

          {/* RIGHT SIDE CARD - expands on hover */}
          <div
            className="
              absolute right-0 top-0 h-full
              w-[50%] md:w-[45%] lg:w-[40%]
              transition-all duration-500 ease-out
              group-hover:w-[70%] md:group-hover:w-[60%] lg:group-hover:w-[55%]
              rounded-l-[24px] overflow-hidden
              bg-white/95 backdrop-blur-sm
            "
          >
            <Image
              src={RightImage}
              alt="Side image"
              fill
              className="object-cover object-right"
            />

            {/* OVERLAY CARD */}
            <div className="absolute inset-0 flex items-center justify-start p-8 md:p-10 lg:p-12">
              <OverlayInfoCard
                title={careerContent.cardTitle}
                description={careerContent.cardDescription}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
