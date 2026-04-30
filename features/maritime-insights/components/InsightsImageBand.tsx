import Image from "next/image";

type InsightsImageBandProps = {
  description: string;
};

export function InsightsImageBand({ description }: InsightsImageBandProps) {
  return (
    <div className="relative mt-6 h-[240px] overflow-hidden rounded-[16px]">
      <Image
        src="/images/maritime-insights.png"
        alt="Maritime industry insights"
        fill
        priority
        className="object-cover object-right"
      />
      <div className="absolute bottom-3 left-3 w-[145px] overflow-hidden rounded-[10px] border border-white/30">
        <Image
          src="/images/maritime-insights.png"
          alt="Maritime thumbnail"
          width={145}
          height={58}
          className="h-[58px] w-full object-cover object-left"
        />
      </div>
      <p className="absolute right-3 bottom-3 max-w-[360px] rounded-[12px] bg-white/88 px-3 py-2 text-xs leading-[1.35] text-[#42464f]">
        {description}
      </p>
    </div>
  );
}
