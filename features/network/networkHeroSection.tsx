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
          <div className="absolute top-12 left-12 w-[420px] bg-white/30 backdrop-blur-md text-white p-8 rounded-[16px] shadow-lg border border-white/20 z-20">
            <h3 className="font-bold text-2xl mb-4">OUR GLOBAL PRESENCE</h3>
            <p className="text-sm mb-6 leading-relaxed">
              From major ports to strategic maritime hubs, our network ensures
              uninterrupted operations and reliable support across international
              waters.
            </p>

            <div className="grid grid-cols-2 text-sm gap-x-4 gap-y-3">
              <span className="flex items-center">
                <span className="mr-2">•</span>Middle East
              </span>
              <span className="flex items-center">
                <span className="mr-2">•</span>Asia-Pacific
              </span>
              <span className="flex items-center">
                <span className="mr-2">•</span>Europe
              </span>
              <span className="flex items-center">
                <span className="mr-2">•</span>Americas
              </span>
            </div>
          </div>

          {/* FLOATING IMAGE CARD */}
          <div className="absolute top-20 left-[340px] backdrop-blur-lg p-3 rounded-2xl shadow-lg">
            <Image
              src="/ship-small.jpg"
              alt="Ship"
              width={220}
              height={130}
              className="rounded-xl object-cover"
            />
          </div>

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
