import Image from "next/image";
import celebrationBg from "../../public/images/blog/celebration.png"; 
import celebrationTitle from "../../public/images/blog/title.png"; 

export default function BlogCelebration() {
  return (
    <section className="w-full px-6 pb-14 lg:px-34 lg:pb-16 mt-20">
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Heading */}
        <h2 className="text-4xl leading-[1.5] font-bold tracking-[-0.03em] text-[#901027]">
          Celebrating World Maritime Day
        </h2>

        {/* Card */}
        <div
          tabIndex={0}
          className="group relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-[20px] outline-none sm:aspect-[16/9] sm:rounded-[24px] lg:aspect-[1464/622] lg:rounded-[30px]"
        >
          {/* Layer 1: background photo */}
          <Image
            src={celebrationBg}
            alt="CLIO team celebrating World Maritime Day"
            fill
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="object-cover object-bottom transition-transform duration-500 sm:object-center sm:group-hover:scale-[1.02]"
          />

          {/* Layer 2: title image, fixed position at the top centre */}
          <Image
            src={celebrationTitle}
            alt=""
            aria-hidden="true"
            sizes="(max-width: 640px) 90vw, 60vw"
            className="pointer-events-none absolute left-1/2 top-[7%] h-auto w-[90%] -translate-x-1/2 sm:top-[6%] sm:w-[60%]"
          />

          {/* Layer 3: text. Always visible on mobile, hover/focus on sm and up */}
          <div
            className="
              absolute inset-0 flex items-end
              bg-[linear-gradient(180deg,rgba(0,0,0,0)_14.32%,rgba(22,22,22,0.85)_100%)]
              p-4 opacity-100 transition-opacity duration-300
              sm:p-8 sm:opacity-0
              sm:group-hover:opacity-100 sm:group-focus:opacity-100 sm:group-focus-within:opacity-100
              lg:p-[50px]
            "
          >
            <div className="flex max-w-full flex-col gap-2 font-poppins text-white sm:gap-3 lg:max-w-[1000px] lg:gap-[10px]">
              {/* Badge */}
              <span className="inline-flex h-[23px] w-fit items-center gap-[5px] rounded-[20px] border border-[#FF4040] bg-[#FF404096] px-[10px] py-px text-[10px] font-semibold leading-none sm:text-xs">
                <span className="size-[5px] shrink-0 rounded-full bg-white" />
                Ship Management Company
              </span>

              {/* Title */}
              <h3 className="text-base font-semibold leading-tight text-white sm:text-xl lg:text-[25px] lg:leading-none">
                World Maritime Day Celebration | CLIO Ship Management & Operation
              </h3>

              {/* Description */}
              <p className="text-xs font-normal leading-snug text-white sm:text-sm lg:text-[18px]">
                CLIO celebrates World Maritime Day by recognising its dedicated
                team and the importance of teamwork, safety and excellence in
                ship management and maritime operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}