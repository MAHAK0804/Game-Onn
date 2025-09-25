import React, { useState } from "react";
import login from "../../../public/assets/login.png";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/store/slices/authSlice";
import { useFormik } from "formik";
import { ILogin } from "@/interfaces";
import { LoginInputValidations } from "@/validations/validationSchema";
import { useRouter } from "next/router";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  // useEffect(() => {
  //   dispatch(setRegisterState(false));
  // }, [dispatch]);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik<ILogin>({
    initialValues: { emailId: "", password: "" },
    validationSchema: LoginInputValidations,
    onSubmit: (values) => {
      console.log("loginData->>>>>>", values);

      dispatch(setAuthState(true));
      router.push("/");
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

          <form action="" className="" onSubmit={formik.handleSubmit}>
            {/* Email Id */}
            <div className="flex flex-col m-5 lg:m-10 justify-between items-start gap-1">
              <div className="flex flex-row gap-2">
                <label className="text-xl">Email Id</label>
                <label className="text-xl text-red-400">*</label>
              </div>
              <input
                type="email"
                className="border border-gray-300 w-full rounded-2xl p-2"
                placeholder="Enter Your Email Id"
                onChange={formik.handleChange("emailId")}
                value={formik.values.emailId}
                onBlur={formik.handleBlur("emailId")}
                required
              />
              {formik.touched.emailId && formik.errors.emailId && (
                <p style={{ color: "red" }}>{formik.errors.emailId}</p>
              )}
            </div>
            {/* Password */}
            <div className="flex flex-col m-5 lg:m-10 justify-between items-start gap-1 ">
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
                  value={formik.values.password}
                  onBlur={formik.handleBlur("password")}
                  maxLength={8}
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

            {/* RememberMe */}
            <div className="flex flex-row  m-5 lg:m-10 justify-between items-center">
              <div className="flex flex-row gap-1">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <div>
                <Link href={"#"}>Forget Password?</Link>
              </div>
            </div>
            {/* btn */}
            <div className=" m-5 lg:m-10">
              {/* <Link href={"/"}> */}
              <button
                className="border w-full p-2 rounded-2xl cursor-pointer bg-black text-gray-300"
                type="submit"
              >
                Login
              </button>
              {/* </Link> */}
            </div>
            {/* Register Link */}
            <div className="w-full text-center flex flex-row justify-center gap-2 items-center">
              <p>Do not have account?</p>
              <Link href={"/register"} className="cursor-pointer">
                {" "}
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
