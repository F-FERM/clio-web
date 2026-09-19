import type { Metadata } from "next";

import { FaqSection } from "@/features/faq-section/FaqSection";
import { OurServiceSection } from "@/features/our-service/OurServiceSection";
import { ShipManagementLogisticsSection } from "@/features/ship-management-logistics/ShipManagementLogisticsSection";
import { TransportMaritimeSection } from "@/features/transport-maritime/TransportMaritimeSection";
import { VesselLandingSection } from "@/features/vessel-landing/VesselLandingSection";
import { WorkflowEfficiencySection } from "@/features/workflow-efficiency/WorkflowEfficiencySection";

export const metadata: Metadata = {
  title: "Top Vessel Management Services in UAE | CLIO Maritime",

  description:
    "Top Vessel Management Services in UAE and best ship management service in Dubai, delivering reliable, efficient, and professional maritime solutions.",

  keywords: [
    "vessel management services in UAE",
    "vessel management services in Dubai",
    "ship management services in UAE",
    "ship management services in Dubai",
    "vessel management company UAE",
    "ship management company Dubai",
    "maritime services UAE",
    "marine services Dubai",
    "crew management UAE",
    "technical ship management UAE",
    "maritime logistics UAE",
  ],

  metadataBase: new URL("https://www.clio-maritime.com/"),

  alternates: {
    canonical: "https://www.clio-maritime.com/",
  },

  openGraph: {
    title: "Top Vessel Management Services in UAE | CLIO Maritime",
    description:
      "CLIO Maritime provides reliable vessel management, technical management, crew management, and maritime logistics services in Dubai, UAE.",
    url: "https://www.clio-maritime.com/",
    siteName: "CLIO Maritime",
    type: "website",
    locale: "en_AE",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top Vessel Management Services in UAE - CLIO Maritime",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Vessel Management Services in UAE | CLIO Maritime",
    description:
      "CLIO Maritime provides reliable vessel management, technical management, crew management, and maritime logistics services in Dubai, UAE.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="w-full lg:p-4 p-2">
      <VesselLandingSection />
      <OurServiceSection />
      <ShipManagementLogisticsSection />
      <TransportMaritimeSection />
      <WorkflowEfficiencySection />
      <FaqSection />
    </main>
  );
}
