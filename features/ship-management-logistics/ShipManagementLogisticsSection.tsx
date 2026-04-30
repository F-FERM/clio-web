import { FeatureInfoCard } from "@/features/ship-management-logistics/components/FeatureInfoCard";
import { SmartFleetPanel } from "@/features/ship-management-logistics/components/SmartFleetPanel";
import { shipManagementContent } from "@/features/ship-management-logistics/shipManagement.constants";

export function ShipManagementLogisticsSection() {
  return (
    <section className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10 xl:px-12 py-7">
      <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-[3fr_1.5fr] items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="max-w-[900px] text-balance text-3xl sm:text-4xl leading-snug sm:leading-[1.6] font-bold tracking-[-0.02em] text-[#8f1131]">
            {shipManagementContent.heading}
          </h1>

          <p className="mt-4 sm:mt-5 max-w-[830px] text-sm sm:text-base text-[#31333a]">
            {shipManagementContent.description}
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {shipManagementContent.cards.map((card) => (
              <FeatureInfoCard
                key={card.title}
                title={card.title}
                description={card.description}
                tags={card.tags}
                variant={card.variant}
              />
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <SmartFleetPanel
          title={shipManagementContent.sideCardTitle}
          description={shipManagementContent.sideCardDescription}
        />
      </div>
    </section>
  );
}