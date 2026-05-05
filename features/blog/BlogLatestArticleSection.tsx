"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ListBlogApi } from "@/app/api/blog/blog";
import { latestArticleContent } from "@/features/latest-article/latestArticle.constants";

const tagColors = ["bg-[#FF4040]", "bg-[#4069FF]", "bg-[#4C7823]"] as const;

export function BlogLatestArticleSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog-home"],
    queryFn: () => ListBlogApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 pb-14 lg:px-34 lg:pb-16 mt-20 animate-pulse">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="h-10 w-64 bg-gray-200 rounded mb-8" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[370px] bg-gray-200 rounded-[14px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching blog latest articles:", error);
  }

  const blogData = Array.isArray(data) ? data[0] : data;
  const cards = blogData?.cards || latestArticleContent.cards;
  const heading = blogData?.heading || latestArticleContent.heading;

  return (
    <section className="w-full px-6 pb-14 lg:px-34 lg:pb-16 mt-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2 className="text-4xl leading-none font-bold tracking-[-0.03em] text-[#901027]">
          {heading}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card: any, index: number) => (
            <article
              key={card._id || card.title}
              className="group relative h-[370px] overflow-hidden rounded-[14px] cursor-pointer"
            >
              <Image
                src={card.image || "/images/blog/Blog2.jpg"}
                alt={card.title}
                fill
                className="object-cover object-center"
              />

              {/* Default dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-60" />

              {/* Hover overlay with Read More button */}
              <div className="absolute inset-0 bg-[rgba(30,20,60,0.55)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-[#d4d8dc]/70  text-[#1a1a2e] text-[15px] font-semibold px-9 py-3 rounded-full">
                  Read More
                </button>
              </div>

              {/* Bottom content: date + badge + title + desc + tags */}
              <div className="absolute left-4 right-4 bottom-4">
                {/* Date and badge row */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1 text-[9px] font-medium text-white/90 text-[12px]">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <rect
                        x="1"
                        y="2"
                        width="8"
                        height="7"
                        rx="1"
                        stroke="rgba(255,255,255,0.9)"
                        strokeWidth="1"
                      />
                      <path
                        d="M3 1v2M7 1v2M1 5h8"
                        stroke="rgba(255,255,255,0.9)"
                        strokeWidth="1"
                      />
                    </svg>
                    {new Date(card.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }) || card.date}
                  </span>
                  <span
                    className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[12px] font-semibold text-white ${tagColors[index % tagColors.length]}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white inline-block" />
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-[18px] leading-tight font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-1 text-[16px] leading-[1.35] text-[#D7D7D7]">
                  {card.description}
                </p>
                {card.tags && card.tags.length > 0 && (
                  <p className="mt-1 text-[14px] font-medium text-white">
                    Tags: {Array.isArray(card.tags) ? card.tags.join(", ") : card.tags}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
