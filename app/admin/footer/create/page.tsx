"use client";


import { createFooter } from "@/app/api/admin/footer/footer";
import FooterForm from "@/features/admin/FooterForm";
import { useRouter } from "next/navigation";

export default function CreateFooterPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      await createFooter(data);
      router.push("/admin/footer");
    } catch (err) {
      console.error("Create error:", err);
      alert("Failed to create footer");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-6">Add New Footer</h1>
      <FooterForm onSubmit={handleSubmit} />
    </div>
  );
}
