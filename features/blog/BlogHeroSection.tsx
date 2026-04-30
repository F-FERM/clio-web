import React from "react";

export default function MaritimeHero() {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto relative">

        {/* SVG ClipPath */}
        <svg width="0" height="0">
          <defs>
            <clipPath id="customClip" clipPathUnits="objectBoundingBox">
              <path d="
                M0.04,0 
                H0.96 
                Q1,0 1,0.1 
                V0.4 
                Q1,0.5 0.9,0.5 
                H0.5 
                Q0.45,0.5 0.45,0.65 
                V0.8 
                Q0.45,0.9 0.35,0.9 
                H0.04 
                Q0,0.9 0,0.8 
                V0.1 
                Q0,0 0.04,0 Z
              " />
            </clipPath>
          </defs>
        </svg>

        {/* Image */}
        <img
          src="/images/blog/blog1.jpg"
          alt="Ship"
          className="w-full h-[380px] object-cover"
          style={{ clipPath: "url(#customClip)" }}
        />

        {/* Heading */}
        <div className="absolute top-6 left-6 space-y-3">
          <div className="bg-white px-6 py-3 rounded-xl inline-block">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Maritime Knowledge.
            </h1>
          </div>

          <div className="bg-white px-6 py-3 rounded-xl inline-block">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Industry Trends. Expert
            </h1>
          </div>

          <div className="bg-white px-6 py-3 rounded-xl inline-block">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Insights.
            </h1>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-xl max-w-xs shadow">
          <p className="text-sm text-gray-600">
            Stay updated with the latest in ship management, global logistics,
            and maritime innovation—curated by Clio experts.
          </p>
        </div>

      </div>
    </div>
  );
}