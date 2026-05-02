import { FaqSection } from "@/features/faq-section/FaqSection";
import { OurServiceSection } from "@/features/our-service/OurServiceSection";
import { ShipManagementLogisticsSection } from "@/features/ship-management-logistics/ShipManagementLogisticsSection";
import { TransportMaritimeSection } from "@/features/transport-maritime/TransportMaritimeSection";
import { VesselLandingSection } from "@/features/vessel-landing/VesselLandingSection";
import { WorkflowEfficiencySection } from "@/features/workflow-efficiency/WorkflowEfficiencySection";

export default function Home() {
  return (
    <main className="w-full lg:p-4 p-2">
      <VesselLandingSection /> <OurServiceSection />
      <ShipManagementLogisticsSection /> <TransportMaritimeSection />
      <WorkflowEfficiencySection />
      <FaqSection />
    </main>
  );
}
