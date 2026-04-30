"use client";

import Image from "next/image";
import Blog1 from "../../public/images/blog/Blog2.jpg"

export default function HeroSection() {
  return (
    <div className="bg-[#f3f4f6] py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-[52px] font-bold text-gray-700 mb-6">
          Global Maritime Network
        </h1>

        {/* Container */}
        <div className="relative">

          {/* SVG Wave Clip */}
          <svg width="0" height="0">
            <defs>
              <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
                <path d="
                  M0,0 
                  H1 
                  V0.85 
                  C0.75,1 0.55,0.95 0.4,0.9 
                  C0.25,0.85 0.1,0.95 0,0.88 
                  Z
                " />
              </clipPath>
            </defs>
          </svg>

          {/* Image Section */}
          <div
            className="relative h-[420px] w-full rounded-[30px] overflow-hidden"
            style={{ clipPath: "url(#waveClip)" }}
          >
            <Image
              src={Blog1}
              alt="Ship"
              fill
              className="object-cover"
            />

            {/* LEFT GRADIENT FADE */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          </div>

          {/* LEFT CARD */}
          <div className="absolute top-10 left-10 w-[300px] bg-white/20 backdrop-blur-lg text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-sm mb-2">
              OUR GLOBAL PRESENCE
            </h3>
            <p className="text-xs mb-4 leading-relaxed">
              From major ports to strategic maritime hubs, our network ensures uninterrupted operations.
            </p>

            <div className="grid grid-cols-2 text-xs gap-y-2">
              <span>• Middle East</span>
              <span>• Asia-Pacific</span>
              <span>• Europe</span>
              <span>• Americas</span>
            </div>
          </div>

          {/* FLOATING IMAGE CARD */}
          <div className="absolute top-20 left-[340px] bg-white/20 backdrop-blur-lg p-3 rounded-2xl shadow-lg">
            <Image
              src="/ship-small.jpg"
              alt="Ship"
              width={220}
              height={130}
              className="rounded-xl object-cover"
            />
          </div>

          {/* RIGHT BOTTOM CARD */}
          <div className="absolute bottom-6 right-6 w-[360px] bg-[#f3f4f6] p-6 rounded-2xl shadow-md">
            <p className="text-sm text-gray-600 leading-relaxed">
              Clio Ship Management operates across key global shipping routes,
              delivering seamless vessel management, logistics coordination,
              and technical support wherever your fleet operates.
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