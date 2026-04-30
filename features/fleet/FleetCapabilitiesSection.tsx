const capabilities = [
  "Advanced Engineering",
  "Global Reach",
  "Safety & Compliance",
] as const;

export function FleetCapabilitiesSection() {
  return (
    <section className="w-full px-6 pb-16 lg:px-28 lg:pb-20 mt-20">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 md:grid-cols-[0.86fr_1.14fr]">
        <div>
          <h2 className="max-w-[480px] text-4xl leading-[1.02] font-bold tracking-[-0.03em] text-[#8f1131]">
            Powering Global Maritime Operations
          </h2>
          <p className="mt-5 max-w-[500px] text-sm leading-normal text-[#323842]">
            Our fleet capabilities are built to deliver consistent performance
            across every voyage, combining advanced technology, global
            operational reach, and strict safety standards. We ensure efficient,
            reliable, and compliant maritime solutions tailored to meet evolving
            industry demands.
          </p>
        </div>

        <div className="space-y-3 pt-20">
          {capabilities.map((item) => (
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
