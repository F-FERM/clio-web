"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import GlobalReach from "../../public/images/contact/GlobalReach.jpg";
import { ListContactApi } from "@/app/api/contact/contact";

export function GlobalReachSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["contact-section"],
    queryFn: () => ListContactApi({}),
  });

  const contactData = Array.isArray(data) ? data[0] : data;

  if (isLoading) {
    return (
      <section className="w-full px-6 py-12 lg:px-28 lg:py-14 animate-pulse">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-8 md:grid-cols-[0.92fr_1.08fr]">
          <div className="h-40 bg-gray-200 rounded" />
          <div className="h-60 bg-gray-200 rounded-[20px]" />
        </div>
      </section>
    );
  }

  const bottomTitle = contactData?.bottomTitle || "OUR GLOBAL REACH";
  const bottomDescription =
    contactData?.bottomDescription ||
    "With operations spanning key maritime regions, Clio ensures seamless communication and support wherever your vessels operate.";
  const bottomImage = contactData?.bottomImage || GlobalReach;

  return (
    <section className="w-full px-6 py-12 lg:px-28 lg:py-14">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-8 md:grid-cols-[0.92fr_1.08fr]">
        <div>
          <h2 className="text-[50px] leading-none font-semibold tracking-[-0.03em] text-[#8f1131]">
            {bottomTitle}
          </h2>
          <p className="mt-5 max-w-[470px] text-[16px] leading-normal text-[#444b54]">
            {bottomDescription}
          </p>
        </div>

        <div className="relative h-[250px] overflow-hidden rounded-[20px]">
          <Image
            src={bottomImage}
            alt="Global maritime reach"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
