// app/api/contact/contactSection.ts

import axiosInstance from "@/service/admin/axios";
import { AxiosError } from "axios";

export interface ContactInfoItem {
  _id?: string;
  title: string;
  value: string;
}

export interface ContactSection {
  _id: string;
  heading: string;
  description: string;
  backgroundImage: string;

  contactInfo: ContactInfoItem[];

  formTitle: string;
  buttonText: string;

  bottomTitle: string;
  bottomDescription: string;
  bottomImage: string;

  createdAt?: string;
  updatedAt?: string;
}

const BASE = "/contact/section";

// LIST
export const listContactSectionApi = async () => {
  try {
    const response = await axiosInstance.get<ContactSection[]>(BASE);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const apiError = error.response?.data;

      const errorMessage =
        apiError?.error ||
        apiError?.message ||
        error.message ||
        "An unexpected error occurred";

      const normalizedError = new Error(errorMessage);

      (normalizedError as any).statusCode =
        apiError?.statusCode || error.response?.status;

      (normalizedError as any).raw = apiError;

      throw normalizedError;
    }

    throw error;
  }
};

// CREATE
export const createContactSection = async (
  data: Partial<ContactSection>
) => {
  try {
    const res = await axiosInstance.patch(BASE, data);
    return res.data;
  } catch (error) {
    throw (error as AxiosError).response?.data;
  }
};

// UPDATE
export const updateContactSection = async (
  data: Partial<ContactSection> & { _id: string }
) => {
  try {
    const { _id, ...payload } = data;

    const res = await axiosInstance.patch(
      `${BASE}`,
      payload
    );

    return res.data;
  } catch (error) {
    throw (error as AxiosError).response?.data;
  }
};

// DELETE
export const deleteContactSection = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`${BASE}/${id}`);
    return res.data;
  } catch (error) {
    throw (error as AxiosError).response?.data;
  }
};