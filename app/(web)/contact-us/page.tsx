import { ContactFormHeroSection } from "@/features/contact-us/ContactFormHeroSection";
import { GlobalReachSection } from "@/features/contact-us/GlobalReachSection";

const page = () => {
  return (
    <div className="mt-32">
      <ContactFormHeroSection />
      <GlobalReachSection />
    </div>
  );
};

export default page;
