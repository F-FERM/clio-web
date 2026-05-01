import { latestArticleContent } from "@/features/latest-article/latestArticle.constants";
import Image from "next/image";
import Blog6 from "../../public/images/blog/Blog6.jpg";
import Blog7 from "../../public/images/blog/Blog7.jpg";

export function BlogInsightsSection() {
  return (
    <section className="w-full px-4 pb-12 sm:px-6 sm:pb-16 lg:px-34 lg:pb-20 mt-10 sm:mt-16 lg:mt-20">
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Row 1 */}
        <div className="grid items-center gap-6 sm:gap-4 md:grid-cols-[0.78fr_1.22fr]">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-[1.04] font-bold tracking-[-0.03em] text-[#8f1131] max-w-full md:max-w-[420px]">
              {latestArticleContent.leftTitle}
            </h2>
            <p className="mt-4 sm:mt-6 text-sm leading-[1.45] text-[#3f434b] max-w-full md:max-w-[430px]">
              {latestArticleContent.leftText}
            </p>
          </div>

          <div className="relative h-[220px] sm:h-[260px] md:h-[190px] lg:h-[240px] overflow-hidden rounded-[16px] sm:rounded-[20px]">
            <Image
              src={Blog6}
              alt="Expert maritime perspective"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-6 sm:mt-8 grid items-center gap-6 sm:gap-4 md:grid-cols-[1.1fr_0.9fr]">
          {/* On mobile, show image below text for visual variety; on md+ keep image first */}
          <div className="relative h-[220px] sm:h-[260px] md:h-[190px] lg:h-[240px] overflow-hidden rounded-[16px] sm:rounded-[20px] order-2 md:order-1">
            <Image
              src={Blog7}
              alt="Maritime innovation at sea"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-[#8f1131] max-w-full md:max-w-[460px]">
              {latestArticleContent.rightTitle}
            </h2>
            <p className="mt-4 sm:mt-6 text-sm leading-[1.45] text-[#3f434b]">
              {latestArticleContent.rightText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
