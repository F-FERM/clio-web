// app/api/admin/job-applications/jobApplications.ts

import axiosInstance from "@/service/admin/axios";


// ==============================
// TYPES
// ==============================

export interface Job {
  _id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface JobApplication {
  _id: string;
  jobId: Job;
  name: string;
  email: string;
  cvUrl: string;
  jobTitle: string;
  createdAt: string;
  updatedAt: string;
}


// ==============================
// GET ALL APPLICATIONS
// ==============================

export const getAllJobApplications = async (): Promise<
  JobApplication[]
> => {
  const response = await axiosInstance.get(
    "/job-applications"
  );

  return response.data;
};


// ==============================
// DELETE APPLICATION
// ==============================

export const deleteJobApplication = async (
  id: string
) => {
  const response = await axiosInstance.delete(
    `/job-applications/${id}`
  );

  return response.data;
};