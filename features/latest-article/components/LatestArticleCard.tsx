import Image from "next/image";

type LatestArticleCardProps = {
  date: string;
  title: string;
  description: string;
  tag: string;
  imagePosition: "left" | "center" | "right";
};

const imagePositionClasses: Record<LatestArticleCardProps["imagePosition"], string> = {
  left: "object-left",
  center: "object-center",
  right: "object-right",
};

export function LatestArticleCard({
  date,
  title,
  description,
  tag,
  imagePosition,
}: LatestArticleCardProps) {
  return (
    <article className="relative h-[190px] overflow-hidden rounded-[12px]">
      <Image
        src="/images/latest-article.png"
        alt={title}
        fill
        className={`object-cover ${imagePositionClasses[imagePosition]}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
      <div className="absolute right-3 bottom-3 rounded-full bg-[#2f80ed] px-2 py-0.5 text-[9px] text-white">
        {tag}
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-black/45 px-2 py-0.5 text-[9px] text-white/90">
        {date}
      </div>
      <div className="absolute right-3 left-3 bottom-3">
        <h3 className="text-[13px] leading-[1.25] font-semibold text-white">{title}</h3>
        <p className="mt-1 text-[10px] leading-[1.35] text-white/85">{description}</p>
      </div>
    </article>
  );
}
