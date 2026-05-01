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
    <section className="w-full px-6 pt-10 lg:px-40 lg:pt-12">
      <div className="mx-auto grid w-full items-start gap-8 md:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          {/* HEADER */}
          <h1 className=" text-6xl leading-[1.17] font-bold tracking-[-0.03em] text-[#45474d] ">
            Championing Safety in Maritime Operations
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[440px] text-sm  text-[#3b4149]">
            At Clio Ship Management &amp; Operation, safety is at the core of
            everything we do, guiding every decision across our maritime
            operations. We are committed to protecting life at sea, safeguarding
            vessels, and preserving the environment through strict safety
            protocols, advanced systems, and continuous monitoring - ensuring
            reliable, secure, and compliant operations at all times.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-[600px] h-[340px] overflow-hidden rounded-[18px] right-[185px]">
          <Image
            src="/images/safety/Subtract.png"
            alt="Safety in maritime operations"
            fill
            priority
            className="object-cover object-center"
          />

          {/* OVERLAY CARD */}
          <div className="absolute right-4 bottom-4 w-full max-w-[290px] rounded-[14px] bg-[#9ca8b0]/65 p-4 backdrop-blur-[1.5px]">
            <h3 className="text-lg leading-none font-semibold text-white">
              Global Compliance &amp; Certifications
            </h3>

            <p className="mt-2 text-sm leading-normal text-white/90">
              We strictly follow international maritime regulations and best
              practices to ensure all vessels operate safely and responsibly.
            </p>

            <ul className="mt-3 space-y-1.5">
              {compliancePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-white"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#72e045]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
