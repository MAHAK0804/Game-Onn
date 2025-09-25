import React, { useState } from "react";
import login from "../../../public/assets/login.png";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { IRegister } from "@/interfaces";
import { RegisterInputsValidations } from "@/validations/validationSchema";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const [mobile, setMobile] = useState("");

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const digitsOnly = input.replace(/\D/g, "");
    setMobile(digitsOnly);
    formik.handleChange("mobileNo");
  };
  const [pinCode, setPincode] = useState("");

  const handlePinCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const digitsOnly = input.replace(/\D/g, "");
    formik.handleChange("pinCode");

    setPincode(digitsOnly);
  };
  const formik = useFormik<IRegister>({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNo: mobile,
      pinCode: pinCode,
      emailId: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterInputsValidations,
    onSubmit: (values) => {
      // console.log("registerData->>>>>>", values);
      alert(values.pinCode);
    },
  });
  return (
    <>
      <div className="w-[90%]  m-auto mt-10 pt-10 flex flex-wrap">
        {/* Image */}
        <div className="w-full lg:w-1/2 h-full ">
          <Image src={login} alt="login" />
        </div>
        {/* form */}
        <div className="w-full lg:w-1/2 h-full lg:p-4">
          <h4 className="text-center text-2xl py-2">Welcome to Game Onn</h4>
          <form action="" className="">
            <div className="w-full flex flex-row">
              {/* Firstname*/}
              <div className="flex flex-col w-1/2 m-5 justify-between items-start gap-1">
                <div className="flex flex-row gap-2">
                  <label className="text-xl">First Name</label>
                  <label className="text-xl text-red-400">*</label>
                </div>
                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-2xl p-2"
                  placeholder="Enter Your First Name"
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                  value={formik.values.firstName}
                  required
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p style={{ color: "red" }}>{formik.errors.firstName}</p>
                )}
              </div>

              {/* Lastname*/}
              <div className="flex flex-col w-1/2 m-5  justify-between items-start gap-1">
                <div className="flex flex-row gap-2">
                  <label className="text-xl">Last Name</label>
                  <label className="text-xl text-red-400">*</label>
                </div>
                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-2xl p-2"
                  placeholder="Enter Your Last Name"
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                  value={formik.values.lastName}
                  required
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p style={{ color: "red" }}>{formik.errors.lastName}</p>
                )}
              </div>
            </div>
            {/* Email Id */}
            <div className="flex flex-col m-5 justify-between items-start gap-1">
              <div className="flex flex-row gap-2">
                <label className="text-xl">Email Id</label>
                <label className="text-xl text-red-400">*</label>
              </div>
              <input
                type="email"
                className="border border-gray-300 w-full rounded-2xl p-2"
                placeholder="Enter Your Email Id"
                onChange={formik.handleChange("emailId")}
                onBlur={formik.handleBlur("emailId")}
                value={formik.values.emailId}
                required
              />
              {formik.touched.emailId && formik.errors.emailId && (
                <p style={{ color: "red" }}>{formik.errors.emailId}</p>
              )}
            </div>
            <div className="w-full flex flex-row">
              {/* Mobile Number*/}
              <div className="flex flex-col w-1/2 m-5 justify-between items-start gap-1">
                <div className="flex flex-row gap-2">
                  <label className="text-xl">Mobile Number</label>
                  <label className="text-xl text-red-400">*</label>
                </div>

                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-2xl p-2"
                  placeholder="Enter Your Mobile Number"
                  value={mobile}
                  onChange={handleMobileChange}
                  maxLength={10}
                  onBlur={formik.handleBlur("mobileNo")}
                  required
                />
                {formik.touched.mobileNo && formik.errors.mobileNo && (
                  <p style={{ color: "red" }}>{formik.errors.mobileNo}</p>
                )}
              </div>

              {/* Post Code*/}
              <div className="flex flex-col w-1/2 m-5  justify-between items-start gap-1">
                <div className="flex flex-row gap-2">
                  <label className="text-xl">Pin Code</label>
                  <label className="text-xl text-red-400">*</label>
                </div>
                <input
                  type="text"
                  className="border border-gray-300 w-full rounded-2xl p-2"
                  placeholder="Enter Your Pin Code"
                  value={pinCode}
                  onChange={handlePinCode}
                  maxLength={6}
                  onBlur={formik.handleBlur("pinCode")}
                  required
                />
                {formik.touched.pinCode && formik.errors.pinCode && (
                  <p style={{ color: "red" }}>{formik.errors.pinCode}</p>
                )}
              </div>
            </div>
            <div className="w-full flex flex-row">
              {/* Password*/}
              <div className="flex flex-col w-1/2 m-5 justify-between items-start gap-1">
                <div className="flex flex-row gap-2">
                  <label className="text-xl">Password</label>
                  <label className="text-xl text-red-400">*</label>
                </div>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border border-gray-300 w-full rounded-2xl p-2 pr-10"
                    placeholder="At least 8 characters"
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    value={formik.values.password}
                    required
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <i className="fa-solid fa-eye-slash"></i>
                    ) : (
                      <i className="fa-solid fa-eye"></i>
                    )}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p style={{ color: "red" }}>{formik.errors.password}</p>
                )}
              </div>

              {/* Confirm Password*/}
              <div className="flex flex-col w-1/2 m-5  justify-between items-start gap-1">
                <div className="flex flex-row gap-2">
                  <label className="text-xl">Confirm Password</label>
                  <label className="text-xl text-red-400">*</label>
                </div>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border border-gray-300 w-full rounded-2xl p-2 pr-10"
                    placeholder="At least 8 characters"
                    onChange={formik.handleChange("confirmPassword")}
                    onBlur={formik.handleBlur("confirmPassword")}
                    value={formik.values.confirmPassword}
                    required
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <i className="fa-solid fa-eye-slash"></i>
                    ) : (
                      <i className="fa-solid fa-eye"></i>
                    )}
                  </div>
                </div>
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <p style={{ color: "red" }}>
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </div>
            </div>

            {/* btn */}
            <div className="m-4">
              {/* <Link href={"/"}> */}
              <button
                className="border w-full p-2 rounded-2xl cursor-pointer bg-black text-gray-300"
                onClick={() => formik.handleSubmit()}
              >
                Register
              </button>
              {/* </Link> */}
            </div>
            <div className="w-full text-center flex flex-row justify-center gap-2 items-center">
              <p>Already have an account?</p>
              <Link href={"/login"} className="cursor-pointer">
                Login{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
