"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ListCareerApi } from "@/app/api/career/career";
import { GetStartedButton } from "../transport-maritime/components/GetStartedButton";

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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
        <h2 className="text-center text-4xl leading-none font-bold tracking-[-0.03em] text-[#901027]">
          OPEN POSITIONS
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {positions.length > 0 ? (
            positions.map((position: any) => (
              <article
                key={position._id || position.title}
                className="rounded-[14px] border border-[#cfd4db] px-7 py-6 flex flex-col"
              >
                <h3 className="max-w-[260px] text-3xl leading-[1.1] font-semibold text-[#1f242b]">
                  {position.title}
                </h3>
                <p className="mt-4 max-w-[270px] text-sm leading-[1.45] text-[#4c515a] flex-1">
                  {position.description}
                </p>
                <div className="mt-6">
                  <GetStartedButton label="Apply Now" />
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
