"use client";

import { useEffect, useState } from "react";
import { Mail, Trash2, Building2, User } from "lucide-react";
import axiosInstance from "@/service/admin/axios";

interface Contact {
  _id: string;
  name: string;
  companyName: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function ContactListPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const res = await axiosInstance.get<Contact[]>("/contact");

      setContacts(res.data || []);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/contact/${id}`);

      setContacts((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete contact");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="h-10 w-10 rounded-full border-b-2 border-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Contact Messages
        </h1>

        <p className="text-gray-500">
          Manage customer contact inquiries.
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            {/* TABLE HEAD */}
            <thead>
              <tr className="bg-gray-50 border-b">

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Company
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Message
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>


              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >

                    {/* NAME */}
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-gray-400" />

                        <div className="font-medium text-gray-800">
                          {item.name}
                        </div>
                      </div>
                    </td>

                    {/* COMPANY */}
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Building2 size={15} className="text-gray-400" />
                        {item.companyName}
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={14} />
                        {item.email}
                      </div>
                    </td>

                    {/* MESSAGE */}
                    <td className="p-4 text-sm text-gray-600 max-w-[350px]">
                      <p className="line-clamp-2">
                        {item.message}
                      </p>
                    </td>

                    {/* DATE */}
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>

                

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="p-10 text-center text-gray-500 italic"
                  >
                    No contact messages found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}