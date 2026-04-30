const pillarCards = [
  {
    title: "Prepared for Every Situation",
    description:
      "Our crews are trained to respond to emergencies through structured drills and regular drills. We maintain robust response systems to ensure safe action with minimal impact.",
    cardClass:
      "bg-[#9e1f3a] text-white bg-[repeating-linear-gradient(145deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_10px)]",
  },
  {
    title: "Smart Safety Monitoring",
    description:
      "We leverage modern technology to monitor safety through real-time tracking, predictive maintenance, and performance analytics that ensures early detection of potential operational risks.",
    cardClass:
      "bg-[#d6e1eb] text-[#8f1131] bg-[radial-gradient(circle_at_22px_22px,rgba(0,0,0,0.06)_1.5px,transparent_1.5px)] bg-[length:34px_34px]",
  },
  {
    title: "Safe & Efficient Operations",
    description:
      "Our operations are supported by advanced monitoring systems and regular inspections to ensure vessels perform at optimal safety levels. From navigation to cargo handling, every process is carefully controlled and evaluated.",
    cardClass:
      "bg-[#f1df3f] text-[#8f1131] bg-[radial-gradient(circle_at_20px_20px,rgba(0,0,0,0.07)_1.4px,transparent_1.4px)] bg-[length:30px_30px]",
  },
] as const;

export function CoreSafetyPillarsSection() {
  return (
    <section className="w-full px-6 pb-16 lg:px-28 lg:pb-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2 className="text-center text-4xl leading-none font-bold tracking-[-0.03em] text-[#8f1131]">
          Core Safety Pillars
        </h2>
        <p className="mx-auto mt-4 max-w-[760px] text-center text-sm leading-normal text-[#303742]">
          Our safety framework is built on three key pillars that ensure
          consistent protection, compliance, and operational excellence across
          every voyage.
        </p>

        <div className="mx-auto mt-20 grid max-w-[980px] grid-cols-1 gap-0 md:grid-cols-3">
          {pillarCards.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`relative min-h-[205px] px-7 py-7 ${pillar.cardClass} ${
                index === 0
                  ? "rounded-l-[18px]"
                  : index === pillarCards.length - 1
                    ? "rounded-r-[18px]"
                    : ""
              }`}
            >
              <h3 className="max-w-[260px] text-3xl leading-[1.08] font-semibold">
                {pillar.title}
              </h3>
              <p
                className={`mt-4 text-sm leading-[1.45] ${
                  index === 0 ? "text-white/85" : "text-[#2f3440]"
                }`}
              >
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
