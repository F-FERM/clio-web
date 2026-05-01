"use client";
import Image from "next/image";
import styles from "../global-leaders/marine.module.css";

export default function HeroSection() {
  return (
    <div className=" sm:pt-32 lg:pt-10 px-6 lg:px-20">
      <div className="w-full max-w-[1240px] mx-auto">
        {/* Container */}
        <div className="relative">
          {/* SVG Wave Clip */}
          <svg width="0" height="0">
            <defs>
              <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
                <path
                  d="
                  M0,0 
                  H1 
                  V0.85 
                  C0.75,1 0.55,0.95 0.4,0.9 
                  C0.25,0.85 0.1,0.95 0,0.88 
                  Z
                "
                />
              </clipPath>
            </defs>
          </svg>

          {/* Image Section */}
          <div className="relative h-[300px] w-[1050px] sm:h-[420px] rounded-[20px] sm:rounded-[30px] overflow-hidden">
            <Image
              src="/images/network/Union.png"
              alt="Ship"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 sm:bg-transparent" />

            {/* Title - On Top of Image */}
            <h1 className="absolute top-4 left-4 sm:top-[-5] sm:left-10 text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#464646] sm:text-black z-10 whitespace-normal sm:whitespace-nowrap">
              Global Maritime <br className="sm:hidden" />
              Net<span className={styles.outline}>work</span>
            </h1>
          </div>

          {/* LEFT CARD */}
          {/* LEFT CARD */}
          {/* LEFT CARD */}
          <div
            className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 w-[calc(100%-2rem)] sm:w-[480px] z-20
            bg-white/20 backdrop-blur-md border border-white/25
            rounded-2xl shadow-xl text-white
            px-4 sm:px-6 py-3 sm:py-2 pr-4 sm:pr-[205px]"
          >
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-2 sm:mb-3">
              Our Global Presence
            </h3>
            <p className="text-[10px] sm:text-xs text-white/90 leading-relaxed mb-3 sm:mb-4 max-w-full sm:max-w-[280px]">
              From major ports to strategic maritime hubs, our network ensures
              uninterrupted operations and reliable support across international
              waters.
            </p>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[10px] sm:text-xs font-medium text-white/90">
              {["Middle East", "Asia-Pacific", "Europe", "Americas"].map(
                (r) => (
                  <span key={r} className="flex items-center gap-1.5">
                    <span className="text-sm leading-none text-white/60">
                      •
                    </span>
                    {r}
                  </span>
                ),
              )}
            </div>

            {/* Inner ship card - Hidden on mobile for space */}
            <div
              className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-1.5
              w-[185px] h-[150px] bg-white/10 
              border border-white/25 rounded-2xl p-2 shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/network/Rectangle.png"
                  alt="Ship at sea"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT BOTTOM CARD */}
          <div className="sm:absolute sm:top-78 sm:bottom-6 sm:left-172 w-full sm:w-[406px] p-2 rounded-2xl sm:rounded-none shadow-md sm:shadow-none bg-white/80 sm:bg-transparent right-20">
            <p className="text-sm sm:text-sm text-gray-800 sm:text-gray-600">
              Clio Ship Management operates across key global shipping routes,
              delivering seamless vessel management, logistics coordination, and
              technical support wherever your fleet operates.
            </p>
          </div>

          {/* SCROLL BUTTON */}
          <div className="hidden sm:block absolute bottom-4 right-4 translate-x-14">
            <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
              ↑
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
