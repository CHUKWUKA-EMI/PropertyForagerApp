import { IProperty } from "./property";

export interface IAgency extends BaseType {
  id: string;
  agencyName?: string;
  properties: IProperty[];
  city?: string;
  state?: string;
  ownerId: string;
  profileCompletionPercentage: number;
}
