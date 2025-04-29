import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-300 h-auto">
      <div className=" m-auto w-full lg:w-[70%] lg:p-10">
        <div className=" w-full p-5 lg:p-10">
          <div className=" w-full text-center p-5 bg-white rounded-2xl">
            <p className="text-4xl mt-7 text-gray-400">Welcome to Game Onn</p>
            <div className="w-[90%] m-auto text-xl font-bold ">
              <form action="" className="">
                <div className="w-full  flex flex-wrap gap-5">
                  <div className="flex  flex-col  my-3 justify-between items-start gap-1">
                    <label className="text-xl">FirstName</label>
                    <input
                      type="text"
                      className="border border-gray-300 w-full rounded-2xl p-2"
                      placeholder="Enter Your FirstName"
                      required
                    />
                  </div>
                  <div className="flex flex-col my-3 justify-between items-start gap-1">
                    <label className="text-xl">LastName</label>
                    <input
                      type="text"
                      className="border border-gray-300 w-full rounded-2xl p-2"
                      placeholder="Enter Your LastName"
                      required
                    />
                  </div>
                </div>
                {/* Email Id */}
                <div className=" w-full">
                  <div className="flex  flex-col justify-between items-start gap-1">
                    <label className="text-xl">Email Id</label>
                    <input
                      type="email"
                      className="border border-gray-300 w-[93%] rounded-2xl p-2"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                </div>
                {/* Password */}
                <div className="w-full flex flex-wrap items-center gap-5">
                  <div className="flex flex-col my-3 justify-between items-start gap-1">
                    <label className="text-xl">Phone Number</label>
                    <input
                      type="text"
                      className="border border-gray-300 w-full rounded-2xl p-2"
                      placeholder="Enter Your Phone Number"
                      required
                    />
                  </div>
                  <div className="flex flex-col my-3 justify-between items-start gap-1">
                    <label className="text-xl">Post code</label>
                    <input
                      type="text"
                      className="border border-gray-300 w-full rounded-2xl p-2"
                      placeholder="Enter Your Post"
                      required
                    />
                  </div>
                </div>

                <div className="w-full flex flex-wrap items-center gap-5">
                  <div className="flex flex-col my-3 justify-between items-start gap-1">
                    <label className="text-xl">Password</label>
                    <input
                      type="password"
                      className="border border-gray-300 w-full rounded-2xl p-2"
                      placeholder="Atleast 8 Charcter"
                      required
                    />
                  </div>
                  <div className="flex flex-col my-3 justify-between items-start gap-1">
                    <label className="text-xl">Confirm Password</label>
                    <input
                      type="password"
                      className="border border-gray-300 w-full rounded-2xl p-2"
                      placeholder="Enter your same Password"
                      required
                    />
                  </div>
                </div>
                {/* btn */}
                <div className="m-5 lg:m-10">
                  <button className="border w-full p-2 rounded-2xl cursor-pointer bg-black text-gray-300">
                    Register
                  </button>
                </div>
                {/* Register Link */}
                <div className="w-full text-center">
                  <p>
                    Already have account?
                    <Link href="/login">Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
