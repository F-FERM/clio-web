import Image from "next/image";
import styles from "../global-leaders/marine.module.css";

const compliancePoints = [
  "IMO standards",
  "SOLAS safety regulations",
  "ISM Code compliance",
  "MARPOL environmental standards",
] as const;

export function SafetyComplianceHeroSection() {
  return (
    <section className="w-full px-6  sm:pt-32 lg:pt-12 lg:px-28">
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          {/* HEADER */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.17] font-bold tracking-[-0.03em] text-[#45474d]">
            Championing Safety in Maritime Operations
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[440px] text-sm text-[#3b4149]">
            At Clio Ship Management &amp; Operation, safety is at the core of
            everything we do, guiding every decision across our maritime
            operations. We are committed to protecting life at sea, safeguarding
            vessels, and preserving the environment through strict safety
            protocols, advanced systems, and continuous monitoring - ensuring
            reliable, secure, and compliant operations at all times.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[280px] sm:h-[340px] overflow-hidden rounded-[18px]">
          <Image
            src="/images/safety/Subtract.png"
            alt="Safety in maritime operations"
            fill
            priority
            className="object-cover object-center"
          />

          {/* OVERLAY CARD */}
          <div className="absolute right-4 bottom-4 w-[calc(100%-32px)] sm:max-w-[290px] rounded-[14px] bg-[#9ca8b0]/75 p-4 backdrop-blur-[2px] shadow-lg">
            <h3 className="text-base sm:text-lg leading-none font-semibold text-white">
              Global Compliance &amp; Certifications
            </h3>

            <p className="mt-2 text-[10px] sm:text-sm leading-normal text-white/95">
              We strictly follow international maritime regulations and best
              practices to ensure all vessels operate safely and responsibly.
            </p>

            <ul className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1.5 sm:block sm:space-y-1.5">
              {compliancePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-[10px] sm:text-sm text-white"
                >
                  <span className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 rounded-full bg-[#72e045]" />
                  <span className="truncate">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
