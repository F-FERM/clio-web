"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ListFooterApi } from "@/app/api/footer/footer";
import { FooterColumn } from "@/features/footer-dark/components/FooterColumn";
import { FooterSocials } from "@/features/footer-dark/components/FooterSocials";
import { footerDarkContent } from "@/features/footer-dark/footerDark.constants";

export function FooterDarkSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["footer-data"],
    queryFn: () => ListFooterApi({}),
  });

  if (error) {
    console.error("Error fetching footer data:", error);
  }

  const footerData = Array.isArray(data) ? data[0] : data;

  const brand = footerData?.brand || footerDarkContent.brand;
  const copyright = footerData?.copyright || footerDarkContent.copyright;
  const sections = footerData?.sections || footerDarkContent.columns.map(col => ({
    title: col.title,
    links: col.items.map(item => ({ label: item.label, url: item.href }))
  }));
  const address = footerData?.officeAddress || footerDarkContent.address;
  const email = footerData?.email || footerDarkContent.email;
  const phone = footerData?.phone || footerDarkContent.phone;
  const ctaText = footerData?.ctaText || footerDarkContent.cta;
  const ctaLink = footerData?.ctaLink || "/contact-us";
  const policies = [
    { label: "Privacy Policy", url: footerData?.privacyPolicy || "/privacy-policy" },
    { label: "Terms & Conditions", url: footerData?.terms || "/terms" },
  ];

  return (
    <section className="w-full flex justify-center mt-10">
      <div className="w-full relative overflow-hidden bg-[#49494b] px-6 sm:px-10 lg:px-14 py-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[420px] font-bold tracking-[-0.03em] text-white/[0.04]">
          {brand.toLowerCase()}
        </div>

        <div className="relative z-10">
          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {sections.map((section: any, idx: number) => (
              <FooterColumn
                key={section._id || idx}
                title={section.title}
                items={section.links.map((link: any) => ({ label: link.label, href: link.url }))}
              />
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-10 sm:mt-14 flex flex-col gap-5 lg:grid lg:grid-cols-[1.2fr_1fr_auto] lg:items-center lg:gap-8">
            <div>
              <p className="text-[36px] sm:text-[48px] leading-none font-bold tracking-[-0.03em] text-white">
                {brand}
              </p>
              <p className="mt-3 text-sm text-white/85">
                {copyright}
              </p>
            </div>
            <p className="max-w-[620px] text-xl sm:text-2xl leading-[1.12] font-semibold tracking-[-0.02em] text-white">
              {ctaText}
            </p>
            <Link href={ctaLink}>
              <button
                type="button"
                className="h-[48px] w-full lg:w-auto rounded-xl bg-[#f1df3f] px-12 text-[16px] font-semibold text-[#181a1f] cursor-pointer hover:bg-[#f3e45c] transition-colors"
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Bottom info row */}
          <div className="mt-10 border-t border-white/28 pt-8">
            <div className="flex flex-col gap-5 text-sm sm:text-base leading-[1.45] text-white/95 lg:grid lg:grid-cols-[1.2fr_0.8fr_1fr_auto]">
              <p className="max-w-[660px]">{address}</p>
              <div>
                <p className="cursor-pointer hover:text-white transition-colors">
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
                <p className="cursor-pointer hover:text-white transition-colors">
                  <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                </p>
              </div>
              <div>
                {policies.map((policy, idx) => (
                  <p key={idx} className="cursor-pointer hover:text-white transition-colors">
                    <Link href={policy.url}>{policy.label}</Link>
                  </p>
                ))}
              </div>
              <div className="flex items-center lg:items-end justify-start lg:justify-end">
                <FooterSocials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
