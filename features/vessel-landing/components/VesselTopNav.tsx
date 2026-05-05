"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/images/logo/cliologo.png";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed top-4 left-4 right-9 sm:top-10 sm:left-12 sm:right-12 z-50 flex items-center justify-between h-[100px] sm:h-[88px] rounded-xl sm:rounded-[20px] bg-[#ACACAC66] px-4 sm:px-[17px] py-5 sm:py-[30px] gap-2 sm:gap-[10px] shadow-lg backdrop-blur-sm">
        {/* <p className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101114]">
          {brand}
        </p> */}
        <Link href="/">
          <Image
            src={logo}
            alt="clio logo"
            width={200}
            height={200}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 xl:flex xl:gap-[40px]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-normal text-[16px] leading-none tracking-normal transition-colors cursor-pointer ${
                isActive(item.href)
                  ? "text-[#901027] font-semibold"
                  : "text-white hover:text-[#101114]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={contactHref}
            className="hidden sm:block rounded-xl cursor-pointer bg-[#f1df3f] px-8 py-3.5 text-lg font-semibold text-[#111217] transition-transform hover:scale-105"
          >
            {contactLabel}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="xl:hidden p-2 text-[#101114] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#c8d9e2] pt-36 sm:pt-40 px-8 xl:hidden overflow-y-auto">
          <nav className="flex flex-col gap-6 sm:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-2xl font-bold tracking-tight cursor-pointer ${
                  isActive(item.href) ? "text-[#9b1033]" : "text-[#101114]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={contactHref}
              className="mt-4 rounded-xl cursor-pointer bg-[#f1df3f] px-8 py-4 text-center text-xl font-bold text-[#111217]"
              onClick={() => setIsMenuOpen(false)}
            >
              {contactLabel}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
