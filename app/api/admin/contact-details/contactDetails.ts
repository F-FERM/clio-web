// app/api/admin/contact/contact.ts

import axiosInstance from "@/service/admin/axios";


// ==========================
// TYPES
// ==========================

export interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContactResponse {
  data: Contact[];
  total: number;
  currentPage: number;
  totalPages: number;
}


// ==========================
// GET ALL CONTACTS
// ==========================

export const getAllContacts = async (): Promise<ContactResponse> => {
  const response = await axiosInstance.get(
    "/contact"
  );

  return response.data;
};


// ==========================
// MARK AS READ
// ==========================

export const markContactAsRead = async (id: string) => {
  const response = await axiosInstance.patch(
    `/contact/${id}/read`
  );

  return response.data;
};


// ==========================
// DELETE CONTACT
// ==========================

export const deleteContact = async (id: string) => {
  const response = await axiosInstance.delete(
    `/contact/${id}`
  );

  return response.data;
};