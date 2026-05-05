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
      <section className={`${styles.hero} animate-pulse`}>
        <div className={`${styles.heroImg} bg-gray-200`} />
        <div className="h-20 w-full bg-gray-200 mt-10 rounded" />
      </section>
    );
  }

  if (error) {
    console.error("Error fetching about hero data:", error);
  }

  const heroData = Array.isArray(data) ? data[0] : data;

  const heading = heroData?.heading || "Global Leaders in Ship Management & Maritime Operations";
  const heroImage = heroData?.heroImage || "/images/about/About1.png";
  const description = heroData?.description || globalLeadersContent.description;

  const renderHeading = () => {
    if (heroData?.heading) {
      const parts = heading.split(" ");
      return (
        <h1 className={styles.heroTitle}>
          <span className={styles.line}>
             <span className={styles.solid}>{parts.slice(0, 2).join(" ")}&nbsp;</span>
             <span className={styles.outline}>{parts.slice(2, 4).join(" ")}</span>
          </span>
          <span className={styles.line}>
             <span className={styles.solid}>{parts.slice(4, 7).join(" ")}&nbsp;</span>
             <span className={styles.outline}>{parts.slice(7, 8).join(" ")}</span>
          </span>
          {parts.length > 8 && (
            <span className={styles.line}>
              <span className={styles.solid}>{parts.slice(8).join(" ")}</span>
            </span>
          )}
        </h1>
      );
    }

    return (
      <h1 className={styles.heroTitle}>
        <span className={styles.line}>
          <span className={styles.solid}>Global Leaders&nbsp;</span>
          <span className={styles.outline}>in Ship</span>
        </span>
        <span className={styles.line}>
          <span className={styles.solid}>Management &amp;&nbsp;</span>
          <span className={styles.outline}>Maritime</span>
        </span>
        <span className={styles.line}>
          <span className={styles.solid}>Operations</span>
        </span>
      </h1>
    );
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroImg}>
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
      
      <p className="mt-6 max-w-[1200px] text-sm leading-[1.65] text-[#464646] sm:text-[15px] md:text-[17px] font-normal">
        {description}
      </p>
    </>
  );
}
