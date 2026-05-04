import BlogHeroSection from "@/features/blog/BlogHeroSection";
import { BlogInsightsSection } from "@/features/blog/BlogInsightsSection";
import { BlogLatestArticleSection } from "@/features/blog/BlogLatestArticleSection";

const page = () => {
  return (
    <div className="mt-40">
      <BlogHeroSection />
      <BlogLatestArticleSection />
      <BlogInsightsSection />
    </div>
  );
};

export default page;
