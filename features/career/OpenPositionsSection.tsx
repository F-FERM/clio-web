"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ListCareerApi } from "@/app/api/career/career";
import { ApplyNow } from "./ApplyNow";

export function OpenPositionsSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["career-page"],
    queryFn: () => ListCareerApi({}),
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 lg:px-28 lg:pb-20 animate-pulse">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-[14px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching open positions:", error);
  }

  const careerData = Array.isArray(data) ? data[0] : data;
  const positions = careerData?.jobs || [];

  return (
    <section className="w-full px-6 lg:px-28 lg:pb-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2
          className="
            text-center font-bold tracking-[-0.03em] text-[#901027] leading-none
            text-2xl
            sm:text-3xl
            md:text-4xl
          "
        >
          OPEN POSITIONS
        </h2>

        {/*
         * Grid column ladder:
         *   mobile  → 1 column (unchanged)
         *   md      → 2 columns (834-1023px) — was 3, cards were too narrow
         *   lg+     → 3 columns (1024px+) — original behaviour, enough room
         *
         * Gap reduced slightly at md so cards breathe without overflowing.
         */}
        <div
          className="
            mt-8 grid gap-5
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {positions.length > 0 ? (
            positions.map((position: any) => (
              <article
                key={position._id || position.title}
                className="
                  rounded-[14px] border border-[#cfd4db] flex flex-col
                  px-5 py-5
                  sm:px-6 sm:py-5
                  md:px-5 md:py-5
                  lg:px-7 lg:py-6
                "
              >
                <h3
                  className="
                    font-semibold text-[#1f242b] leading-[1.1]
                    text-2xl max-w-full
                    sm:text-3xl sm:max-w-[260px]
                    md:text-2xl md:max-w-full
                    lg:text-3xl lg:max-w-[260px]
                  "
                >
                  {position.title}
                </h3>
                <p
                  className="
                    mt-3 leading-[1.45] text-[#4c515a] flex-1 max-w-full
                    text-sm
                    md:text-[13px]
                    lg:text-sm lg:max-w-[270px]
                  "
                >
                  {position.description}
                </p>
                <div className="mt-5 lg:mt-6">
                  <ApplyNow jobTitle={position.title} jobId={position._id} />
                </div>
              </article>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">
              No open positions at the moment. Please check back later!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}