import { AxiosResponse } from "axios";

export interface IAxiosResponse extends AxiosResponse {
  cancelRequest: (reason?: any) => void;
}
