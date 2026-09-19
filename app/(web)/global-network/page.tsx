import type { Metadata } from "next";
import Script from "next/script";
import NetworkPage from "./NetworkPage";

export const metadata: Metadata = {
  title: "Best Global Maritime Service in Dubai | CLIO Maritime",

  description:
    "Best global maritime service in Dubai, offering reliable vessel management, marine logistics, crew management, technical support, and maritime solutions.",

  metadataBase: new URL("https://clio-maritime.com"),

  alternates: {
    canonical: "https://clio-maritime.com/global-network",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="global-network-organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CLIO Ship Management & Operation",
          url: "https://clio-maritime.com/global-network",
          logo: "https://clio-maritime.com/_next/static/media/cliologo.0_gndt.o_cw9u.png",
          alternateName: "CLIO",
          sameAs: ["https://www.instagram.com/clio.ship.management/?__pwa=1"],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "00971 4 3702800",
              contactType: "",
              email: "info@Clio-Maritime.com",
              areaServed: "AE",
              availableLanguage: "en",
            },
          ],
        })}
      </Script>

      <NetworkPage />
    </>
  );
}
