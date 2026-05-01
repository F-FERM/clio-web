import Image from "next/image";
import GlobalReach from "../../public/images/contact/GlobalReach.jpg";

export function GlobalReachSection() {
  return (
    <section className="w-full px-6 py-12 lg:px-28 lg:py-14">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-8 md:grid-cols-[0.92fr_1.08fr]">
        <div>
          <h2 className="text-[50px] leading-none font-bold tracking-[-0.03em] text-[#8f1131]">
            OUR GLOBAL REACH
          </h2>
          <p className="mt-5 max-w-[470px] text-[14px] leading-normal text-[#444b54]">
            With operations spanning key maritime regions, Clio ensures seamless
            communication and support wherever your vessels operate.
          </p>
        </div>

        <div className="relative h-[250px] overflow-hidden rounded-[20px]">
          <Image
            src={GlobalReach}
            alt="Global maritime reach"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
