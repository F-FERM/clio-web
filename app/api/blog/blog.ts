import { LisBlogResponse, Card, ListBlogSection } from "@/interfaces/Blog";
import axiosInstance from "@/service/axios";
import { AxiosError } from "axios";

export const ListBlogApi = async (data: {
  search?: string;
  page?: number;
  limit?: number;
}) => {
  const { search, page, limit } = data;
  try {
    const params = new URLSearchParams();
    if (search) {
      params.append("search", search);
    }
    if (page) {
      params.append("page", page.toString());
    }
    if (limit) {
      params.append("limit", limit.toString());
    }

    const response = await axiosInstance.get<LisBlogResponse>(
      `/blog/home?${params.toString()}`,
    );
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
export const ListBlogSectionApi = async (data: {
  search?: string;
  page?: number;
  limit?: number;
}) => {
  const { search, page, limit } = data;
  try {
    const params = new URLSearchParams();
    if (search) {
      params.append("search", search);
    }
    if (page) {
      params.append("page", page.toString());
    }
    if (limit) {
      params.append("limit", limit.toString());
    }

    const response = await axiosInstance.get<ListBlogSection>(
      `/blog?${params.toString()}`,
    );
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
export const CreateBlogApi = async (data: any) => {
  try {
    const response = await axiosInstance.post("/blog/home", data);
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

export const UpdateBlogApi = async (id: string, data: any) => {
  try {
    const response = await axiosInstance.patch(`/blog/home/${id}`, data);
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

export const DeleteBlogApi = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/blog/home/${id}`);
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
