"use client";
import Image from "next/image";
import styles from "../global-leaders/marine.module.css";

export default function HeroSection() {
  return (
    <div className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
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
          <div
            className="relative h-[420px] w-full rounded-[30px] overflow-hidden"
            // style={{ clipPath: "url(#waveClip)" }}
          >
            <Image
              src={"images/network/Union.png"}
              alt="Ship"
              fill
              className="object-cover"
            />

            {/* LEFT GRADIENT FADE */}
            <div className="absolute inset-0 " />

            {/* Title - On Top of Image */}
            <h1 className="absolute top-[-12] left-20 text-[52px] font-bold text-black z-10">
              Global Maritime Net<span className={styles.outline}>work</span>
            </h1>
          </div>

          {/* LEFT CARD */}
          <div
            className="absolute top-1/2 left-8 -translate-y-1/2 w-[480px] z-20
                      bg-white/20 backdrop-blur-md border border-white/25
                      rounded-2xl shadow-xl text-white
                      pr-[205px] pl-6 py-2"
          >
            <h3 className="text-sm font-extrabold uppercase tracking-widest mb-3">
              Our Global Presence
            </h3>
            <p className="text-xs text-white/85 leading-relaxed mb-4 max-w-[240px]">
              From major ports to strategic maritime hubs, our network ensures
              uninterrupted operations and reliable support across international
              waters.
            </p>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs font-medium text-white/90">
              {["Middle East", "Asia-Pacific", "Europe", "Americas"].map(
                (r) => (
                  <span key={r} className="flex items-center gap-1.5">
                    <span className="text-base leading-none text-white/60">
                      •
                    </span>
                    {r}
                  </span>
                ),
              )}
            </div>

            {/* Inner ship card */}
            <div
              className="absolute top-1/2 -translate-y-1/2 right-1.5
                        w-[185px] h-[150px] bg-white/10 
                        border border-white/25 rounded-2xl p-2 shadow-lg"
            >
              <Image
                src="/images/network/Rectangle.png"
                alt="Ship at sea"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* FLOATING IMAGE CARD */}

          {/* RIGHT BOTTOM CARD */}
          <div className="absolute top-78 bottom-6 left-167 w-[406px] p-6 ">
            <p className="text-sm text-gray-600">
              Clio Ship Management operates across key global shipping routes,
              delivering seamless vessel management, logistics coordination, and
              technical support wherever your fleet operates.
            </p>
          </div>

          {/* SCROLL BUTTON */}
          <div className="absolute bottom-4 right-4 translate-x-14">
            <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
              ↑
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
