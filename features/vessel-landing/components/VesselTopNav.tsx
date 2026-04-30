"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

type VesselTopNavProps = {
  brand: string;
  navItems: readonly NavItem[];
  contactLabel: string;
  contactHref: string;
};

export function VesselTopNav({
  brand,
  navItems,
  contactLabel,
  contactHref,
}: VesselTopNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-[42px] left-[48px] right-[48px] z-50 flex items-center justify-between h-[73px] rounded-[20px] bg-[#c8d9e2]/80 px-[17px] py-[18px] gap-[10px]">
      <p className="text-5xl font-bold tracking-tight text-[#101114]">
        {brand}
      </p>
      <nav className="hidden items-center gap-[40px] xl:flex">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`font-medium text-[16px] leading-none tracking-normal text-right transition-colors ${
              isActive(item.href)
                ? "text-[#9b1033]"
                : "text-white/80 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href={contactHref}
        className="rounded-xl bg-[#f1df3f] px-8 py-4 text-[18px] font-semibold text-[#111217]"
      >
        {contactLabel}
      </Link>
    </header>
  );
}
