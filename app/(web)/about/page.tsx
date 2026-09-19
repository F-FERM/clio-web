import MaritimeHero from "@/features/global-leaders/GlobalLeadersSection";
import { WhatWeDoSection } from "@/features/what-we-do/WhatWeDoSection";
import { WhoWeAreSection } from "@/features/who-we-are/WhoWeAreSection";
import { WhyChooseClioSection } from "@/features/why-choose-clio/WhyChooseClioSection";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Leading Maritime Company in Dubai | CLIO Maritime Services",

  description:
    "CLIO Maritime is a leading maritime company in Dubai, offering reliable vessel management, ship management, crew, technical and marine services.",

  alternates: {
    canonical: "https://clio-maritime.com/about",
  },

  openGraph: {
    title: "Leading Maritime Company in Dubai | CLIO Maritime Services",

    description:
      "CLIO Maritime is a leading maritime company in Dubai, offering reliable vessel management, ship management, crew, technical and marine services.",

    url: "https://clio-maritime.com/about",

    siteName: "CLIO Maritime",

    type: "website",

    locale: "en_AE",

    images: [
      {
        url: "https://clio-maritime.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CLIO Maritime - Leading Maritime Company in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Leading Maritime Company in Dubai | CLIO Maritime Services",

    description:
      "CLIO Maritime is a leading maritime company in Dubai, offering reliable vessel management, ship management, crew, technical and marine services.",

    images: ["https://clio-maritime.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const page = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "CLIO Ship Management & Operation",

    alternateName: "CLIO",

    url: "https://clio-maritime.com/about",

    logo: "https://clio-maritime.com/images/clio-logo.png",

    sameAs: ["https://www.instagram.com/clio.ship.management/"],

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+971 4 3702800",
        contactType: "customer service",
        email: "info@clio-maritime.com",
        areaServed: "AE",
        availableLanguage: "en",
      },
    ],
  };

  return (
    <>
      <Script
        id="about-organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(organizationSchema)}
      </Script>

      <div className="mt-33 lg:mt-45">
        <section className="w-full px-6 lg:px-34">
          <div className="mx-auto w-full max-w-[1240px]">
            <MaritimeHero />
          </div>
        </section>

        <WhoWeAreSection />

        <WhatWeDoSection />

        <WhyChooseClioSection />
      </div>
    </>
  );
};

export default page;
