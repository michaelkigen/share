import * as yup from "yup";

export const LoginValidationSchema = yup.object({
  phoneNumber: yup.string().required("required"),
  password: yup
    .string()
    .min(6, "6 characters minimum")
    .required("")
    .required("required"),
});
