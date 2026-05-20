import { AxiosError } from "axios";
import { ListWorkFlowEfficiency } from "@/interfaces/Home";
import axiosInstance from "@/service/admin/axios";
import { UpdateWorkFlow } from "@/interfaces/admin/Home";

const BASE = "/workflow-efficiency";

export const getWorkflowEfficiency = async (): Promise<ListWorkFlowEfficiency[]> => {
  try {
    const res = await axiosInstance.get(BASE);
    return res.data;
  } catch (error) {
    throw (error as AxiosError).response?.data;
  }
};

export const createWorkflowEfficiency = async (data: Partial<UpdateWorkFlow>) => {
  try {
    const res = await axiosInstance.patch(BASE, data);
    return res.data;
  } catch (error) {
    throw (error as AxiosError).response?.data;
  }
};

export const updateWorkflowEfficiency = async (id: string, data: UpdateWorkFlow) => {
  try {
    const res = await axiosInstance.patch(`${BASE}`, data);
    return res.data;
  } catch (error) {
    throw (error as AxiosError).response?.data;
  }
};

export const deleteWorkflowEfficiency = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`${BASE}/${id}`);
    return res.data;
  } catch (error) {
    throw (error as AxiosError).response?.data;
  }
};
