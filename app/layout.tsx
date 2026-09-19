import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

import { VesselTopNav } from "@/features/vessel-landing/components/VesselTopNav";
import { FooterDarkSection } from "@/features/footer-dark/FooterDarkSection";
import Providers from "./providers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clio-maritime.com"),
  verification: {
    google: "PWUGDWRgBlM_0wLjH8R1oFiM11uXHRwtIZHf_PxHHBM",
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
  alternates: {
    canonical: "https://www.clio-maritime.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={poppins.variable}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/images/logo/favicon.png" type="image/png" />
      </head>

      <body
        className={`${poppins.className} bg-[#F6FBFF] text-black min-h-screen flex flex-col`}
      >
        {/* ============================= */}
        {/* Organization Schema */}
        {/* ============================= */}

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CLIO Ship Management & Operation",
            url: "https://www.clio-maritime.com/",
            logo: "https://www.clio-maritime.com/_next/static/media/cliologo.0_gndt.o_cw9u.png",
            alternateName: "CLIO",
            sameAs: ["https://www.instagram.com/clio.ship.management/?__pwa=1"],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "00971 4 3702800",
                contactType: "customer service",
                email: "info@clio-maritime.com",
                areaServed: "AE",
                availableLanguage: "en",
              },
            ],
          })}
        </Script>

        {/* ============================= */}
        {/* Google Analytics */}
        {/* ============================= */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C64WPXZFC9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C64WPXZFC9');
          `}
        </Script>

        {/* ============================= */}
        {/* Google Tag Manager */}
        {/* ============================= */}

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRMMZCNL');
          `}
        </Script>

        {/* ============================= */}
        {/* Google Tag Manager - NoScript */}
        {/* ============================= */}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRMMZCNL"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {/* ============================= */}
        {/* Application */}
        {/* ============================= */}

        <Providers>
          <main className="w-full flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
