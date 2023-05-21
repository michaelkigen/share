import * as yup from "yup";

const emailFormat =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const firstStepRegistrationValidation = yup.object({
  phoneNumber: yup.string().required("required"),
  password: yup
    .string()
    .min(6, "password must be more than 5 characters")
    .required("")
    .required("required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords don't match")
    .required("required"),
});

export const PersonalInfoRegistrationValidaation = yup.object({
  firstName: yup
    .string()
    .min(3, "too short")
    .max(15, "too long")
    .required("required"),
  lastName: yup
    .string()
    .min(3, "too short")
    .max(15, "too long")
    .required("required"),
  email: yup
    .string()
    .matches(emailFormat, "invalid email")
    .required("required"),
});

export const VerficationCodeValidation = yup.object({
  firstVerificationCode: yup.string().max(1).min(1).required("required"),
  secondVerificationCode: yup.string().max(1).min(1).required("required"),
  thirdVerificationCode: yup.string().max(1).min(1).required("required"),
  fourthVerificationCode: yup.string().max(1).min(1).required("required"),
});

//display form input errors
export const showInputError = (error, touched, message) => {
  return error && touched ? message : "";
};
