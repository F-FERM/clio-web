export const footerDarkContent = {
  columns: [
    {
      title: "Company",
      items: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact-us" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Vessel Management", href: "/vessel-landing" },
        { label: "Technical Services", href: "#" },
        { label: "Crew Management", href: "#" },
        { label: "Maritime Logistics", href: "#" },
      ],
    },
    {
      title: "Operations",
      items: [
        { label: "Fleet Monitoring", href: "/fleet" },
        { label: "Global Routes", href: "/global-network" },
        { label: "Compliance & Safety", href: "/safety-compliance" },
        { label: "Performance Optimization", href: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "Customer Support", href: "/contact-us" },
        { label: "Service Request", href: "#" },
        { label: "Help Center", href: "#" },
      ],
    },
  ],
  brand: "CLIO",
  copyright: "Copyright © Clio Ship Managment & Operation 2024",
  cta: "Need Reliable Ship Management Solutions?",
  ctaButton: "Contact Us",
  address: "Office: 1414 Boulevard Place, Tower 2 Downtown Burj Khalifa, Dubai - UAE",
  email: "info@clioship.com",
  phone: "00971 4 3702800",
  policies: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
} as const;
