import {
  AddPropertyPayload,
  ListPropertiesRequest,
  UploadPropertyImagesRequest,
} from "@/types/property";
import { axiosInstance } from "./axiosConfig";

export const _getLatestProperties = async () => {
  const response = await axiosInstance.post(
    "/api/properties/latestProperties",
    {},
    {
      validateStatus: (status) => status < 500,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};

export const _getPropertiesList = async (payload?: ListPropertiesRequest) => {
  const response = await axiosInstance.post(
    "/api/properties/list",
    { ...payload },
    {
      validateStatus: (status) => status < 500,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};

export const _getPropertyDetails = async (propertyId: string) => {
  const response = await axiosInstance.get(`/api/properties/${propertyId}`, {
    validateStatus: (status) => status < 500,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const _addProperty = async (
  payload: AddPropertyPayload,
  authToken: string
) => {
  const response = await axiosInstance.post(
    "/api/properties/add",
    { payload },
    {
      validateStatus: (status) => status < 500,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};

export const _saveDraft = async (
  payload: Partial<AddPropertyPayload>,
  authToken: string
) => {
  const response = await axiosInstance.post(
    "/api/properties/saveDraft",
    { payload },
    {
      validateStatus: (status) => status < 500,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};

export const _uploadPropertyImages = async (
  payload: UploadPropertyImagesRequest,
  authToken: string
) => {
  const formData = new FormData();
  payload.images.forEach((file, index) => {
    formData.append(`file${index + 1}`, file, file.name);
  });
  const response = await axiosInstance.post(
    `/api/properties/${payload.propertyId}/uploadImages`,
    { ...payload.images },
    {
      validateStatus: (status) => status < 500,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response;
};
