"use client";

import { useEffect, useState } from "react";


import {
  ContactSection,
  listContactSectionApi,
  updateContactSection,
} from "@/app/api/admin/contact/contact";
import ContactSectionForm from "@/features/admin/ContactForm";

export default function ContactSectionPage() {
  const [data, setData] = useState<ContactSection | null>(null);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await listContactSectionApi();

      const actualData = Array.isArray(res)
        ? res[0]
        : (res as any)?.data?.[0] || res;

      setData(actualData);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (formData: any) => {
    if (!data?._id) {
      alert(
        "No ID found for updating. Please ensure contact section exists."
      );
      return;
    }

    try {
      await updateContactSection({
        ...formData,
        _id: data._id,
      });

      alert("Contact section updated successfully!");

      fetchData();
    } catch (err) {
      console.error("Update error:", err);

      alert("Failed to update contact section");
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Contact Section
        </h1>

        <p className="text-gray-500">
          Manage contact page content.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl border border-dashed">
        {data ? (
          <ContactSectionForm
            initialData={data}
            onSubmit={handleSubmit}
          />
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed">
            <p className="text-gray-500 italic">
              No contact section found in database.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}