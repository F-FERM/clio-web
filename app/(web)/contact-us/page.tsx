import { ContactFormHeroSection } from "@/features/contact-us/ContactFormHeroSection";
import { GlobalReachSection } from "@/features/contact-us/GlobalReachSection";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Vessel Management Services in UAE | GIMSCO Marine Supply",
  description:
    "Top Vessel Management Services in UAE and best ship management service in Dubai, delivering reliable, efficient, and professional maritime solutions.",
  alternates: {
    canonical: "https://clio-maritime.com/contact-us",
  },
};

const page = () => {
  return (
    <>
      <Script
        id="contact-us-organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CLIO Ship Management & Operation",
          url: "https://clio-maritime.com/contact-us",
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

      <div className="mt-32">
        <ContactFormHeroSection />
        <GlobalReachSection />
      </div>
    </>
  );
};

export default page;
