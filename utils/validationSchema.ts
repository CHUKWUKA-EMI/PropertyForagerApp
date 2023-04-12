import { IUserRegistrationRequest, RoleType } from "@/types/user";
import * as yup from "yup";

export const getSignUpValidationSchema = (
  signupState: IUserRegistrationRequest
) => {
  const schema: yup.ObjectSchema<IUserRegistrationRequest> = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    phoneNumber: yup
      .string()
      .required()
      .matches(/^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{13})$/gm),
    roleType: yup.number().required(),
    agencyName:
      signupState.roleType == RoleType.Agency
        ? yup.string().required()
        : yup.string().optional(),
    agencyCity:
      signupState.roleType == RoleType.Agency
        ? yup.string().required()
        : yup.string().optional(),
    agencyState:
      signupState.roleType == RoleType.Agency
        ? yup.string().required()
        : yup.string().optional(),
  });

  return schema;
};
