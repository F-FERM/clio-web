export function StrategicPortCoverage() {
  const features = [
    "Vessel inspections & maintenance",
    "Crew management",
    "Logistics coordination",
    "Compliance & documentation",
  ];

  return (
    <div className="bg-[#ffd700] p-8 rounded-[14px]">
      <h3 className="text-2xl font-bold text-[#8b0000] mb-4">
        STRATEGIC PORT COVERAGE
      </h3>
      <p className="text-sm text-gray-800 mb-6">
        Our presence in major international ports allows us to provide
        comprehensive services and rapid response to your vessel's needs.
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-sm text-gray-800 flex items-start gap-3"
          >
            <span className="text-[#8b0000] font-bold">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
