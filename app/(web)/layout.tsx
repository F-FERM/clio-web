import { VesselTopNav } from "@/features/vessel-landing/components/VesselTopNav";
import { FooterDarkSection } from "@/features/footer-dark/FooterDarkSection";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <VesselTopNav
        brand="CLIO"
        navItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Global Network", href: "/global-network" },
          { label: "Career", href: "/career" },
          { label: "Safety Compliance", href: "/safety-compliance" },
          { label: "Fleet", href: "/fleet" },
        ]}
        contactLabel="Contact Us"
        contactHref="/contact-us"
      />
      <div className="w-full">{children}</div>
      <FooterDarkSection />
    </>
  );
}
