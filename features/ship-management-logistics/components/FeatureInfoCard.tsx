import { Cog } from "lucide-react";
import { JSX } from "react";

type FeatureTagProps = {
  label: string;
};

function FeatureTag({ label }: FeatureTagProps) {
  return (
    <span className="inline-block rounded-full border border-[#2f3137] px-3 py-[5px] text-xs sm:text-[13px] text-[#2f3137]">
      {label}
    </span>
  );
}

type FeatureInfoCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  variant: "lightBlue" | "yellow";
};

const cardVariantClasses: Record<FeatureInfoCardProps["variant"], string> = {
  lightBlue: "bg-[#E0EFFA]",
  yellow: "bg-[#FAE651]",
};

function LightBlueSvgBackground() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#a8c4d8" strokeWidth="1.2" fill="none">
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
      </g>
    </svg>
  );
}

function YellowSvgBackground() {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 480"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Topographic contour pattern</title>
      <rect width="680" height="480" fill="#F5D800" rx="20" />
      <g
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.5"
      >
        {/* Top-left blob */}
        <path d="M-20,60 C40,20 120,10 180,50 C240,90 260,140 220,170 C180,200 100,190 60,160 C20,130 -30,110 -20,60Z" />
        <path d="M10,80 C60,45 130,38 185,72 C230,100 245,145 210,168 C175,192 105,182 70,155 C30,128 -10,115 10,80Z" />
        <path d="M40,100 C80,72 140,68 188,95 C220,115 230,150 198,167 C165,184 108,175 78,150 C45,125 12,122 40,100Z" />
        {/* Top-right swoosh */}
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
        {/* Central flowing lines */}
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
        {/* Bottom-right cluster */}
        <path d="M540,350 C600,310 680,300 740,330 C790,355 820,390 800,420 C780,450 720,460 670,445 C610,426 560,400 540,370 C530,360 530,355 540,350Z" />
        <path d="M560,362 C612,328 682,320 735,346 C778,368 805,398 787,424 C769,450 714,458 668,444 C614,427 568,402 552,375 C544,362 548,360 560,362Z" />
        <path d="M578,375 C622,346 684,340 730,362 C768,381 792,407 776,430 C760,450 708,456 666,443 C618,428 575,405 562,380 C556,368 562,368 578,375Z" />
        {/* Bottom-left waves */}
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
        {/* Upper middle loop */}
        <path d="M280,30 C330,-10 420,-5 460,40 C500,85 480,140 430,155 C380,170 320,150 295,115 C270,80 260,60 280,30Z" />
        <path d="M300,45 C344,12 425,18 460,58 C492,96 474,145 428,158 C382,171 326,152 303,120 C280,88 275,72 300,45Z" />
      </g>
    </svg>
  );
}

const svgBackgrounds: Record<
  FeatureInfoCardProps["variant"],
  () => JSX.Element
> = {
  lightBlue: LightBlueSvgBackground,
  yellow: YellowSvgBackground,
};

export function FeatureInfoCard({
  title,
  description,
  tags,
  variant,
}: FeatureInfoCardProps) {
  const SvgBackground = svgBackgrounds[variant];

  return (
    <article
      className={`relative overflow-hidden rounded-[22px] p-5 sm:p-6 min-h-[200px] sm:min-h-[230px] ${cardVariantClasses[variant]}
      transition-transform duration-300 ease-out hover:-translate-y-2`}
    >
      {/* SVG Background */}
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <SvgBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <Cog
          className="w-6 h-6 sm:w-7 sm:h-7 text-[#1f2937]"
          strokeWidth={1.7}
        />

        {/* Title */}
        <h3 className="mt-5 sm:mt-7 mb-2 text-[17px] sm:text-[19px] font-bold tracking-[-0.02em] text-[#8b1a2e]">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-xs sm:text-sm text-[#2f3137] leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <FeatureTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}
