import Link from "next/link";
import { FooterColumn } from "@/features/footer-dark/components/FooterColumn";
import { FooterSocials } from "@/features/footer-dark/components/FooterSocials";
import { footerDarkContent } from "@/features/footer-dark/footerDark.constants";

export function FooterDarkSection() {
  return (
    <section className="w-full flex justify-center mt-10">
      <div className="w-full relative overflow-hidden bg-[#49494b]  px-14 py-12">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[420px] font-bold tracking-[-0.03em] text-white/[0.04]">
          clio
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {footerDarkContent.columns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                items={column.items}
              />
            ))}
          </div>

          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr_auto]">
            <div>
              <p className="text-[48px] leading-none font-bold tracking-[-0.03em] text-white">
                {footerDarkContent.brand}
              </p>
              <p className="mt-3 text-sm text-white/85">
                {footerDarkContent.copyright}
              </p>
            </div>
            <p className="max-w-[620px] text-2xl leading-[1.12] font-semibold tracking-[-0.02em] text-white">
              {footerDarkContent.cta}
            </p>
            <Link href="/contact-us">
              <button
                type="button"
                className="h-[48px] rounded-xl bg-[#f1df3f] px-12 text-[16px] font-semibold text-[#181a1f] cursor-pointer hover:bg-[#f3e45c] transition-colors"
              >
                {footerDarkContent.ctaButton}
              </button>
            </Link>
          </div>

          <div className="mt-10 border-t border-white/28 pt-9">
            <div className="grid gap-6 text-base leading-[1.45] text-white/95 lg:grid-cols-[1.2fr_0.8fr_1fr_auto]">
              <p className="max-w-[660px]">{footerDarkContent.address}</p>
              <div>
                <p className="cursor-pointer hover:text-white transition-colors">{footerDarkContent.email}</p>
                <p className="cursor-pointer hover:text-white transition-colors">{footerDarkContent.phone}</p>
              </div>
              <div>
                <p className="cursor-pointer hover:text-white transition-colors">{footerDarkContent.policies[0]}</p>
                <p className="cursor-pointer hover:text-white transition-colors">{footerDarkContent.policies[1]}</p>
              </div>
              <div className="flex items-end justify-start lg:justify-end">
                <FooterSocials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
