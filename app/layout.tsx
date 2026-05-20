import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
  title: "CLIO",
  description: "CLIO",
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
        <link rel="icon" href="/images/logo/cliologo.png" type="image/png" />
      </head>
      <body
        className={`${poppins.className} bg-[#F6FBFF] text-black min-h-screen flex flex-col`}
      >
        <Providers>
          <main className="w-full flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
