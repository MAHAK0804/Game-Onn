import React from "react";
import login from "../../../public/assets/login.png";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/store/slices/authSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[90%]  m-auto my-10 p-10 flex flex-wrap">
        {/* Image */}
        <div className="w-full lg:w-1/2 h-full ">
          <Image src={login} alt="login" />
        </div>
        {/* form */}
        <div className="w-full lg:w-1/2 h-full lg:p-4">
          <h4 className="text-center text-2xl py-2">Welcome Back</h4>
          <form action="" className="">
            {/* Email Id */}
            <div className="flex flex-col m-5 lg:m-10 justify-between items-start gap-1">
              <label className="text-xl">Email Id</label>
              <input
                type="email"
                className="border border-gray-300 w-full rounded-2xl p-2"
                placeholder="Enter Your Email"
                required
              />
            </div>
            {/* Password */}
            <div className="flex flex-col m-5 lg:m-10 justify-between items-start gap-1">
              <label className="text-xl">Password</label>
              <input
                type="password"
                className="border border-gray-300 w-full rounded-2xl p-2"
                placeholder="At least 8 character"
                required
              />
            </div>

            {/* RememberMe */}
            <div className="flex flex-row  m-5 lg:m-10 justify-between items-center">
              <div className="flex flex-row gap-1">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <div>
                <Link href={"#"}>ForgetPassword?</Link>
              </div>
            </div>
            {/* btn */}
            <div className=" m-5 lg:m-10">
              <Link href={"/"}>
                <button
                  className="border w-full p-2 rounded-2xl cursor-pointer bg-black text-gray-300"
                  onClick={() => dispatch(setAuthState(true))}
                >
                  Login
                </button>
              </Link>
            </div>
            {/* Register Link */}
            <div className="w-full text-center">
              <p>
                Do not have account?
                <Link href="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
