"use client";

import { useEffect, useState } from "react";

import {
  Mail,
  Trash2,
  Briefcase,
  MapPin,
  FileText,
  ExternalLink,
  User,
} from "lucide-react";
import { deleteJobApplication, getAllJobApplications, JobApplication } from "@/app/api/admin/job-applications/page";



export default function JobApplicationsPage() {

  const [applications, setApplications] = useState<
    JobApplication[]
  >([]);

  const [loading, setLoading] = useState(true);

  // ==========================
  // FETCH
  // ==========================

  const fetchApplications = async () => {
    try {
      const res = await getAllJobApplications();

      setApplications(res || []);
    } catch (error) {
      console.error(
        "Failed to fetch applications:",
        error
      );

      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // ==========================
  // DELETE
  // ==========================

  const handleDelete = async (id: string) => {

    const confirmDelete = confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) return;

    try {

      await deleteJobApplication(id);

      setApplications((prev) =>
        prev.filter((item) => item._id !== id)
      );

    } catch (error) {

      console.error("Delete failed:", error);

      alert("Failed to delete application");
    }
  };

  // ==========================
  // LOADING
  // ==========================

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="h-10 w-10 rounded-full border-b-2 border-blue-600 animate-spin" />
      </div>
    );
  }

  // ==========================
  // UI
  // ==========================

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>

        <h1 className="text-2xl font-bold text-gray-800">
          Job Applications
        </h1>

        <p className="text-gray-500">
          Manage career applications submitted by candidates.
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
                  Candidate
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Job
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Location
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  CV
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>

                <th className="p-4 text-center text-sm font-semibold text-gray-700">
                  Actions
                </th>

              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>

              {applications.length > 0 ? (

                applications.map((item) => (

                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >

                    {/* NAME */}
                    <td className="p-4">

                      <div className="flex items-center gap-2">

                        <User
                          size={16}
                          className="text-gray-400"
                        />

                        <div className="font-medium text-gray-800">
                          {item.name}
                        </div>

                      </div>

                    </td>

                    {/* EMAIL */}
                    <td className="p-4">

                      <div className="flex items-center gap-2 text-sm text-gray-600">

                        <Mail size={14} />

                        {item.email}

                      </div>

                    </td>

                    {/* JOB */}
                    <td className="p-4">

                      <div className="space-y-1">

                        <div className="flex items-center gap-2 text-sm font-medium text-gray-800">

                          <Briefcase size={14} />

                          {item.jobTitle}

                        </div>

                        <div className="text-xs text-gray-500">
                          {item.jobId?.type}
                        </div>

                      </div>

                    </td>

                    {/* LOCATION */}
                    <td className="p-4">

                      <div className="flex items-center gap-2 text-sm text-gray-600">

                        <MapPin size={14} />

                        {item.jobId?.location}

                      </div>

                    </td>

                    {/* CV */}
                    <td className="p-4">

                      <a
                        href={item.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >

                        <FileText size={15} />

                        View CV

                        <ExternalLink size={13} />

                      </a>

                    </td>

                    {/* DATE */}
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}
                    </td>

                    {/* ACTION */}
                    <td className="p-4">

                      <div className="flex items-center justify-center">

                        <button
                          onClick={() =>
                            handleDelete(item._id)
                          }
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >

                          <Trash2 size={18} />

                        </button>

                      </div>

                    </td>

                  </tr>
                ))

              ) : (

                <tr>

                  <td
                    colSpan={7}
                    className="p-10 text-center text-gray-500 italic"
                  >
                    No applications found.
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