import * as Yup from "yup";

export const LoginInputValidations = Yup.object({
  emailId: Yup.string().email().required("Email Id is required"),
  password: Yup.string()
    .length(8, "Atleast 8 characters")
    .required("Password is required"),
});
export const RegisterInputsValidations = Yup.object({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  mobileNo: Yup.string()
    .matches(/^[0-9]+$/, "Mobile number must be numeric")
    .length(10, "Mobile number must be exactly 10 digits")
    .required("Mobile Number is Required"),
  pinCode: Yup.string()
    .matches(/^[0-9]+$/, "Pin Code must be numeric")
    .required("Pin code isrRequired"),

  emailId: Yup.string().email().required("Email Id is required"),
  password: Yup.string()
    .length(8, "Atleast 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .length(8, "Atleast 8 characters")
    .required("Confirm Password is required"),
});
export const ContactUsValidations = Yup.object({
  fullName: Yup.string().required("Full Name is Required"),
  mobileNo: Yup.string()
    .matches(/^[0-9]+$/, "Mobile number must be numeric")
    .length(10, "Mobile number must be exactly 10 digits")
    .required("Mobile Number is Required"),

  emailId: Yup.string().email().required("Email Id is required"),
  message: Yup.string().required("Message is Required"),
});
