import service1 from "../../public/images/services/Service1.jpg";
import service2 from "../../public/images/services/Service2.png";
import service3 from "../../public/images/services/Service3.jpg";

export const ourServiceContent = {
  title: "Our Service",
  description:
    "Full control of your maritime operations in one place.Clio Ship Management delivers integrated solutions that simplify vessel operations, enhance efficiency, and ensure global compliance.",

  cards: [
    {
      title: "EXPERT VESSEL MANAGEMENT",
      tag: "Sea",
       tagColor: "bg-[#79BED7]",
      image: service1,
      imagePosition: "left" as const,
      hoverText:"Comprehensive ship management solutions ensuring safe, efficient, and compliant vessel operations across global waters."
    },
    {
      title: "MARITIME LOGISTIC",
      tag: "Global",
       tagColor: "bg-[#10A31A]",
      image: service2,
      imagePosition: "center" as const,
      hoverText:"Seamless coordination of shipping logistics, ensuring timely delivery, optimized routes, and cost-effective operations worldwide."
    },
    {
      title: "TECHNICAL & CREW SUPPORT",
      tag: "Operations",
       tagColor: "bg-[#86172B]",
      image: service3,
      imagePosition: "right" as const,
      hoverText:"Expert technical maintenance and skilled crew management to keep your fleet running at peak performance."
    },
  ],
};