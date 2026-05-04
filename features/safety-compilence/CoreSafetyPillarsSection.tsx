"use client";

import { useState } from "react";

const pillarCards = [
  {
    title: "Prepared for Every Situation",
    description:
      "Our crews are trained to respond effectively to emergencies through structured protocols and regular drills. We maintain strict emergency response systems to ensure quick action and minimal impact.",
    bg: "#9e1f3a",
    backgroundImage:
      "repeating-linear-gradient(145deg,rgba(255,255,255,0.08) 0px,rgba(255,255,255,0.08) 1px,transparent 1px,transparent 10px)",
    textColor: "#fff",
    descColor: "rgba(255,255,255,0.85)",
  },
  {
    title: "Smart Safety Monitoring",
    description:
      "We leverage modern technology to enhance safety through real-time tracking, predictive maintenance, and performance analytics. This ensures early detection of issues and minimizes operational risks.",
    bg: "#d6e1eb",
    backgroundImage: "none",
    textColor: "#8f1131",
    descColor: "#2f3440",
    useSvg: true,
  },
  {
    title: "Safe & Efficient Operations",
    description:
      "Our operations are supported by advanced monitoring systems and regular inspections to ensure vessels perform at optimal safety levels. From navigation to cargo handling, every process is carefully controlled and evaluated.",
    bg: "#f1df3f",
    backgroundImage: "none",
    textColor: "#8f1131",
    descColor: "#2f3440",
    useYellowSvg: true,
  },
] as const;

const CARD_WIDTH_DEFAULT = 360;
const CARD_WIDTH_EXPANDED = 440;
const CARD_OVERLAP = 85;
const CARD_COUNT = pillarCards.length;

const totalWidthBase =
  CARD_COUNT * (CARD_WIDTH_DEFAULT - CARD_OVERLAP) + CARD_OVERLAP;

const totalWidthExpanded =
  totalWidthBase + (CARD_WIDTH_EXPANDED - CARD_WIDTH_DEFAULT);

function GreyWavesSvg() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#a8c4d8" strokeWidth="0.5" fill="none">
        {/* original lines */}
        <path d="M-50 320 C80 280 160 120 280 80 S420 40 500 20" />
        <path d="M-50 290 C80 250 160 90 280 50 S420 10 500 -10" />
        <path d="M-50 260 C80 220 160 60 280 20 S420 -20 500 -40" />
        <path d="M-50 230 C80 190 160 30 280 -10 S420 -50 500 -70" />
        <path d="M-50 200 C80 160 160 0 280 -40 S420 -80 500 -100" />
        <path d="M-50 170 C80 130 160 -30 280 -70 S420 -110 500 -130" />
        <path d="M-50 350 C80 310 160 150 280 110 S420 70 500 50" />
        <path d="M-50 380 C80 340 160 180 280 140 S420 100 500 80" />
        <path d="M-50 410 C80 370 160 210 280 170 S420 130 500 110" />
        <path d="M-50 140 C80 100 160 -60 280 -100 S420 -140 500 -160" />
        <path d="M-50 110 C80 70 160 -90 280 -130 S420 -170 500 -190" />
        {/* additional lines for denser coverage */}
        <path d="M-50 440 C80 400 160 240 280 200 S420 160 500 140" />
        <path d="M-50 470 C80 430 160 270 280 230 S420 190 500 170" />
        <path d="M-50 500 C80 460 160 300 280 260 S420 220 500 200" />
        <path d="M-50 80 C80 40 160 -120 280 -160 S420 -200 500 -220" />
        <path d="M-50 50 C80 10 160 -150 280 -190 S420 -230 500 -250" />
        <path d="M-50 20 C80 -20 160 -180 280 -220 S420 -260 500 -280" />
      </g>
    </svg>
  );
}

function YellowSvg() {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 480"
      role="img"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Topographic contour pattern</title>
      <rect width="680" height="480" fill="#F5D800" rx="20" />
      <g
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.5"
      >
        <path d="M-20,60 C40,20 120,10 180,50 C240,90 260,140 220,170 C180,200 100,190 60,160 C20,130 -30,110 -20,60Z" />
        <path d="M10,80 C60,45 130,38 185,72 C230,100 245,145 210,168 C175,192 105,182 70,155 C30,128 -10,115 10,80Z" />
        <path d="M40,100 C80,72 140,68 188,95 C220,115 230,150 198,167 C165,184 108,175 78,150 C45,125 12,122 40,100Z" />
        <path
          fill="none"
          d="M480,-10 C550,10 640,40 700,20 C740,8 760,-5 780,10"
        />
        <path
          fill="none"
          d="M500,15 C560,32 640,58 695,42 C730,32 750,20 770,30"
        />
        <path
          fill="none"
          d="M520,38 C575,52 645,72 692,60 C722,52 742,42 758,50"
        />
        <path
          fill="none"
          d="M400,-20 C470,0 580,30 650,10 C690,0 720,-10 750,5"
        />
        <path
          fill="none"
          d="M-30,200 C80,160 200,140 320,180 C440,220 540,260 660,230 C720,215 760,200 800,210"
        />
        <path
          fill="none"
          d="M-30,225 C80,188 200,170 315,208 C435,246 535,282 655,255 C715,242 755,228 800,236"
        />
        <path
          fill="none"
          d="M-30,250 C75,215 195,198 310,234 C428,272 528,305 648,280 C708,268 750,255 800,262"
        />
        <path
          fill="none"
          d="M-30,275 C70,242 188,228 305,262 C422,296 522,326 642,304 C702,293 746,281 800,288"
        />
        <path
          fill="none"
          d="M-30,300 C65,268 182,256 300,288 C416,320 516,348 636,328 C696,318 742,307 800,314"
        />
        <path d="M540,350 C600,310 680,300 740,330 C790,355 820,390 800,420 C780,450 720,460 670,445 C610,426 560,400 540,370 C530,360 530,355 540,350Z" />
        <path d="M560,362 C612,328 682,320 735,346 C778,368 805,398 787,424 C769,450 714,458 668,444 C614,427 568,402 552,375 C544,362 548,360 560,362Z" />
        <path d="M578,375 C622,346 684,340 730,362 C768,381 792,407 776,430 C760,450 708,456 666,443 C618,428 575,405 562,380 C556,368 562,368 578,375Z" />
        <path
          fill="none"
          d="M-30,380 C60,360 150,355 230,375 C310,395 360,420 420,415 C470,411 510,400 530,410"
        />
        <path
          fill="none"
          d="M-30,400 C55,382 145,378 225,396 C305,414 355,438 415,433 C463,430 505,419 525,428"
        />
        <path
          fill="none"
          d="M-30,420 C50,403 138,400 220,417 C298,434 348,454 408,450 C456,448 498,438 518,446"
        />
        <path
          fill="none"
          d="M-30,440 C45,424 132,422 214,438 C292,454 342,470 402,467 C450,465 492,455 512,462"
        />
        <path d="M280,30 C330,-10 420,-5 460,40 C500,85 480,140 430,155 C380,170 320,150 295,115 C270,80 260,60 280,30Z" />
        <path d="M300,45 C344,12 425,18 460,58 C492,96 474,145 428,158 C382,171 326,152 303,120 C280,88 275,72 300,45Z" />
      </g>
    </svg>
  );
}

function PillarCard({ card }: { card: (typeof pillarCards)[number] }) {
  return (
    <div
      className="w-full h-full px-7 py-7 flex flex-col justify-end gap-3 relative overflow-hidden"
      style={{
        backgroundColor: card.bg,
        backgroundImage: card.backgroundImage,
        color: card.textColor,
        borderRadius: 18,
      }}
    >
      {"useSvg" in card && card.useSvg && <GreyWavesSvg />}
      {"useYellowSvg" in card && card.useYellowSvg && <YellowSvg />}

      <h3 className="text-3xl font-medium leading-[1.20]  relative z-10">
        {card.title}
      </h3>

      <p
        className=" text-sm leading-[1.45]  relative z-10"
        style={{ color: card.descColor }}
      >
        {card.description}
      </p>
    </div>
  );
}

export function CoreSafetyPillarsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  const getLeft = (index: number): number => {
    const base = index * (CARD_WIDTH_DEFAULT - CARD_OVERLAP);
    if (hovered === null || index <= hovered) return base;
    return base + (CARD_WIDTH_EXPANDED - CARD_WIDTH_DEFAULT);
  };

  const getWidth = (index: number): number =>
    hovered === index ? CARD_WIDTH_EXPANDED : CARD_WIDTH_DEFAULT;

  const getZIndex = (index: number): number => {
    if (hovered === index) return 10;
    return CARD_COUNT - index;
  };

  return (
    <section className="w-full px-6 pb-16 lg:px-28 lg:pb-20">
      <div className="mx-auto w-full max-w-[1240px]">
        {/* TITLE */}
        <h2 className="text-center text-3xl font-bold tracking-[-0.02em] text-[#8f1131] sm:text-5xl pt-8">
          Core Safety Pillars
        </h2>

        {/* SUBTEXT */}
        <p className="mx-auto mt-4 max-w-[760px] text-center text-sm text-[#303742]">
          Our safety framework is built on three key pillars that ensure
          consistent protection, compliance, and operational excellence across
          every voyage.
        </p>

        {/* MOBILE */}
        <div className="mx-auto mt-10 flex max-w-[980px] flex-col gap-3 md:hidden">
          {pillarCards.map((card) => (
            <PillarCard key={card.title} card={card} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="mt-16 hidden justify-center md:flex">
          <div
            className="relative h-[280px]"
            style={{
              width: hovered !== null ? totalWidthExpanded : totalWidthBase,
              transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {pillarCards.map((card, index) => (
              <div
                key={card.title}
                className="absolute top-0 h-full"
                style={{
                  left: getLeft(index),
                  width: getWidth(index),
                  zIndex: getZIndex(index),
                  transition:
                    "left 0.4s cubic-bezier(0.4,0,0.2,1), width 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <PillarCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
