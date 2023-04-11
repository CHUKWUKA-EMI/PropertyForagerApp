export enum RoleType {
  Tenant,
  Agency,
  PropertyOwner,
}

export interface IUserRegistrationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  agencyCity?: string;
  agencyState?: string;
  agencyName?: string;
  roleType: RoleType;
}
