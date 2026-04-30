import { ContactFormHeroSection } from "@/features/contact-us/ContactFormHeroSection";
import { GlobalReachSection } from "@/features/contact-us/GlobalReachSection";
import React from "react";

const page = () => {
  return (
    <div className="mt-32">
      <ContactFormHeroSection />
      <GlobalReachSection />
    </div>
  );
};

export default page;
