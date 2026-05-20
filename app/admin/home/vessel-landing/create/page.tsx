"use client";


import { createHero } from "@/app/api/admin/home/vessellanding";
import HeroForm from "@/features/admin/HeroForm";
import { useRouter } from "next/navigation";


export default function CreateHeroPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    await createHero(data);
    router.push("/admin/home/vessel-landing");
  };

  return <HeroForm onSubmit={handleSubmit} />;
}