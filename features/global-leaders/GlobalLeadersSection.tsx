"use client";

import { useQuery } from "@tanstack/react-query";
import { ListAboutHeroSectionApi } from "@/app/api/about/herosection";
import styles from "./marine.module.css";
import Image from "next/image";
import { globalLeadersContent } from "./globalLeaders.constants";

export default function GlobalLeadersSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["about-hero"],
    queryFn: () => ListAboutHeroSectionApi({}),
  });

  if (isLoading) {
    return (
      <>
        <section
          className={`${styles.hero} px-4 sm:px-6 md:px-8 lg:px-0 animate-pulse`}
        >
          <div
            className={`${styles.heroImg} rounded-[18px] md:rounded-[24px] overflow-hidden bg-gray-200`}
          />

          <div className="h-20 w-full bg-gray-200 mt-10 rounded" />
        </section>

        <p className="mt-5 sm:mt-6 md:mt-8 max-w-[1200px] px-1 sm:px-0 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.8] md:leading-[1.9] text-[#464646] font-normal">
          &nbsp;
        </p>
      </>
    );
  }

  if (error) {
    console.error("Error fetching about hero data:", error);
  }

  const heroData = Array.isArray(data) ? data[0] : data;

  const heading =
    heroData?.heading ||
    "Global Leaders in Ship Management & Maritime Operations";

  const heroImage =
    heroData?.heroImage || "/images/about/About1.png";

  const description =
    heroData?.description ||
    globalLeadersContent.description;

  const renderHeading = () => {
    if (heroData?.heading) {
      const parts = heading.split(" ");

      return (
        <h1
          className={`${styles.heroTitle} text-center md:text-left px-2 sm:px-0 w-full max-w-full break-words`}
        >
          <span className={`${styles.line} block w-full`}>
            <span className={`${styles.solid} inline whitespace-normal`}>
              {parts.slice(0, 2).join(" ")}&nbsp;
            </span>

            <span className={`${styles.outline} inline whitespace-normal`}>
              {parts.slice(2, 4).join(" ")}
            </span>
          </span>

          <span className={`${styles.line} block w-full`}>
            <span className={`${styles.solid} inline whitespace-normal`}>
              {parts.slice(4, 6).join(" ")}&nbsp;
            </span>

            <span className={`${styles.outline} inline whitespace-normal`}>
              {parts.slice(6, 8).join(" ")}
            </span>
          </span>

          {parts.length > 8 && (
            <span className={`${styles.line} block w-full`}>
              <span className={`${styles.solid} inline whitespace-normal`}>
                {parts.slice(8).join(" ")}
              </span>
            </span>
          )}
        </h1>
      );
    }

    return (
      <h1
        className={`${styles.heroTitle} text-center md:text-left px-2 sm:px-0 w-full max-w-full break-words`}
      >
        <span className={`${styles.line} block w-full`}>
          <span className={`${styles.solid} inline whitespace-normal`}>
            Global Leaders&nbsp;
          </span>

          <span className={`${styles.outline} inline whitespace-normal`}>
            in Ship
          </span>
        </span>

        <span className={`${styles.line} block w-full`}>
          <span className={`${styles.solid} inline whitespace-normal`}>
            Management &amp;&nbsp;
          </span>

          <span className={`${styles.outline} inline whitespace-normal`}>
            Maritime Operations
          </span>
        </span>
      </h1>
    );
  };

  return (
    <>
      <section
        className={`${styles.hero} px-4 sm:px-6 md:px-8 lg:px-0`}
      >
        <div
          className={`${styles.heroImg} rounded-[18px] md:rounded-[24px] overflow-hidden`}
        >
          <Image
            src={heroImage}
            alt="Ship at sea"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {renderHeading()}
      </section>

      <p className="mt-5 sm:mt-6 md:mt-8 max-w-[1200px] px-1 sm:px-0 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.8] md:leading-[1.9] text-[#464646] font-normal">
        {description}
      </p>
    </>
  );
}