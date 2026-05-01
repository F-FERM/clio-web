export function TechnologyDrivenConnectivity() {
  const features = [
    "Real-time vessel tracking",
    "Live weather & operational insights",
    "Predictive maintenance insights",
    "Centralized control systems",
  ];

  return (
    <div className="bg-[#e0f2fe] p-8 rounded-[14px]">
      <h3 className="text-2xl font-bold text-[#1e40af] mb-4">
        TECHNOLOGY-DRIVEN CONNECTIVITY
      </h3>
      <p className="text-sm text-gray-800 mb-6">
        Our suite of advanced digital systems keeps you connected to every
        aspect of your operations.
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-sm text-gray-800 flex items-start gap-3"
          >
            <span className="text-[#1e40af] font-bold">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
