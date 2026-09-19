import BlogHeroSection from "@/features/blog/BlogHeroSection";
import { BlogInsightsSection } from "@/features/blog/BlogInsightsSection";
import { BlogLatestArticleSection } from "@/features/blog/BlogLatestArticleSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted Maritime Transport and Logistics Solutions in UAE",
  description:
    "Trusted maritime transport and logistics solutions in UAE, offering reliable vessel support, cargo handling, port services, and efficient marine logistics.",
  alternates: {
    canonical: "https://clio-maritime.com/blog",
  },
};

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
