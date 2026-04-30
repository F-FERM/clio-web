import { BandImage } from "@/features/latest-article/components/BandImage";
import { LatestArticleCard } from "@/features/latest-article/components/LatestArticleCard";
import { latestArticleContent } from "@/features/latest-article/latestArticle.constants";

export function LatestArticleSection() {
  return (
    <section className="mx-auto w-full max-w-[1260px] px-6 py-12">
      <h1 className="text-6xl font-bold tracking-[-0.02em] text-[#8f1131]">
        {latestArticleContent.heading}
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {latestArticleContent.cards.map((card) => (
          <LatestArticleCard
            key={card.title}
            date={card.date}
            title={card.title}
            description={card.description}
            tag={card.tag}
            imagePosition={card.imagePosition}
          />
        ))}
      </div>

      <div className="mt-12 grid items-end gap-4 md:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="max-w-[420px] text-6xl leading-[1.1] font-bold tracking-[-0.02em] text-[#8f1131]">
            {latestArticleContent.leftTitle}
          </h2>
          <p className="mt-4 max-w-[420px] text-[14px] leading-[1.45] text-[#2e3138]">
            {latestArticleContent.leftText}
          </p>
        </div>
        <BandImage imagePosition="right" />
      </div>

      <div className="mt-4 grid items-end gap-4 md:grid-cols-[1.3fr_1fr]">
        <BandImage imagePosition="left" />
        <div>
          <h2 className="max-w-[420px] text-6xl leading-[1.1] font-bold tracking-[-0.02em] text-[#8f1131]">
            {latestArticleContent.rightTitle}
          </h2>
          <p className="mt-3 text-[14px] leading-[1.45] text-[#2e3138]">
            {latestArticleContent.rightText}
          </p>
        </div>
      </div>
    </section>
  );
}
