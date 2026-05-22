"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  Image,
  Briefcase,
  Ship,
  Truck,
  Workflow,
  Info,
  ChevronDown,
  ShieldCheck,
  Anchor,
  ChevronUp,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import "./globals.css";


const sidebarItems = [
  {
    label: "Home",
    icon: Home,
    children: [
      { label: "Hero", href: "/admin/home/vessel-landing", icon: Image },
      { label: "Service", href: "/admin/home/our-services", icon: Briefcase },
      { label: "Ship", href: "/admin/home/ship", icon: Ship },
      { label: "Transport", href: "/admin/home/transport", icon: Truck },
      { label: "Workflow", href: "/admin/home/workflow", icon: Workflow },
      { label: "FAQ", href: "/admin/home/faq", icon: Info },
    ],
  },
  {
    label: "About",
    icon: Info,
    children: [
      { label: "Hero", href: "/admin/about/hero", icon: Image },
      { label: "What We Do", href: "/admin/about/what-we-do", icon: Workflow },
    ],
  },
  {
    label: "Blog",
    icon: Image,
    children: [
      { label: "Manage", href: "/admin/blog/landing", icon: Image },
    ],
  },
  {
    label: "Network",
    icon: Workflow,
    children: [
      { label: "Manage", href: "/admin/network", icon: Image },
    ],
  },
  {
    label: "Career",
    icon: Briefcase,
    children: [
      { label: "Manage", href: "/admin/career", icon: Image },
    ],
  },
  {
    label: "Safety Compliance",
    icon: ShieldCheck,
    children: [
      { label: "Manage", href: "/admin/safety", icon: Image },
    ],
  },
  {
    label: "Fleet",
    icon: Anchor,
    children: [
      { label: "Manage", href: "/admin/fleet", icon: Image },
    ],
  },
  {
    label: "Contact",
    icon: Briefcase,
    children: [
      { label: "Manage", href: "/admin/contact", icon: Image },
    ],
  },
   {
    label: "Footer",
    icon: Briefcase,
    children: [
      { label: "Manage", href: "/admin/footer", icon: Image },
    ],
  },
  {
        
 label: "Contact details",
    icon: Briefcase,
    children: [
      { label: "Manage", href: "/admin/contact-details", icon: Image },
    ],
  },
  {
           
 label: "Job applications",
    icon: Briefcase,
    children: [
     
      { label: "Manage", href: "/admin/job-applications", icon: Image },
    ],
  }
  
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>("Home");

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    
    // Clear cookie
    document.cookie = "access_token=; path=/; max-age=0";
    
    // Redirect to login
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen">
      <aside className="h-screen w-[260px] bg-[#0F172A] text-white flex flex-col sticky top-0">
        {/* Header */}
        <div className="px-6 py-5 text-xl font-semibold border-b border-white/10">
          Admin Panel
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isOpen = openMenu === item.label;

            return (
              <div key={item.label}>
                {/* Parent Item */}
                <button
                  onClick={() => toggleMenu(item.label)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <ChevronUp
                    size={16}
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Sub Items */}
                {isOpen && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.children.map((sub) => {
                      const SubIcon = sub.icon;
                      const isActive = pathname === sub.href;

                      return (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`
                            flex items-center gap-3 px-3 py-2 rounded-md text-sm
                            ${
                              isActive
                                ? "bg-white/10 text-white"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }
                          `}
                        >
                          <SubIcon size={16} />
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 bg-[#F6F8FA] flex flex-col h-screen overflow-hidden">
        <header className="bg-white border-b px-8 py-4 flex justify-end items-center shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </header>
        <div className="flex-1 p-8 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
