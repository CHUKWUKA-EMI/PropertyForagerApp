import { IUserRegistrationRequest } from "@/types/user";
import { axiosInstance } from "./axiosConfig";

export const _registerUser = async (payload: IUserRegistrationRequest) => {
  const response = await axiosInstance.post("/api/accounts/register", payload, {
    validateStatus: (status) => status < 500,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const _loginUser = async (email: string, password: string) => {
  const response = await axiosInstance.post(
    "/api/accounts/authenticate",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
