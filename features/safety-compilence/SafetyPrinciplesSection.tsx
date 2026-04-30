const principles = [
  "Zero Harm Commitment",
  "Regulatory Compliance",
  "Continuous Training",
  "Risk Management",
] as const;

export function SafetyPrinciplesSection() {
  return (
    <section className="w-full px-6 py-14 lg:px-28 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 md:grid-cols-[0.82fr_1.18fr]">
        <div>
          <h2 className="max-w-[420px] text-4xl leading-[1.03] font-bold tracking-[-0.03em] text-[#8f1131]">
            Our Safety Principles
          </h2>
          <p className="mt-5 max-w-[470px] text-sm leading-normal text-[#303742]">
            Our safety pillars define the foundation of our operations, guiding
            every decision to ensure the highest standards of protection,
            compliance, and operational excellence at sea.
          </p>
          <button
            type="button"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#8f949c] px-5 py-2 text-sm font-semibold text-[#1f242b]"
          >
            <span>Contact Us</span>
            <span className="text-sm">↗</span>
          </button>
        </div>

        <div className="space-y-3 pt-20">
          {principles.map((item) => (
            <div
              key={item}
              className="rounded-[14px] border border-[#ccd2da] px-11 py-4 text-lg leading-none font-medium text-[#8f1131]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
