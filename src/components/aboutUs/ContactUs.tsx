import Image from "next/image";
// import Link from "next/link";
import React, { useState } from "react";
import contactus from "../../../public/assets/contact-us.webp";
import { useFormik } from "formik";
import { IContactUs } from "@/interfaces";
import { ContactUsValidations } from "@/validations/validationSchema";

export default function ContactUs() {
  const [mobile, setMobile] = useState("");
  const formik = useFormik<IContactUs>({
    initialValues: {
      fullName: "",
      mobileNo: mobile,
      emailId: "",
      message: "",
    },
    validationSchema: ContactUsValidations,
    onSubmit: (values) => {
      alert(values);
    },
  });
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    formik.setFieldValue("message", text);

    const words = text.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const digitsOnly = input.replace(/\D/g, "");
    formik.handleChange("mobileNo");
    setMobile(digitsOnly);
  };
  return (
    <div className="bg-[#f0f0f0] w-full p-5 ">
      <h2 className="text-2xl lg:text-5xl text-center py-2 font-semibold">
        Have something to say?
      </h2>
      <div className="bg-[#e5e5e5] rounded-xl w-full lg:w-[80%]  lg:m-auto my-4 lg:my-10  p-5 lg:p-10 flex flex-wrap shadow-lg">
        <div className="w-full lg:w-1/2 lg:border-r-1 lg:py-10 lg:px-10">
          <div className="w-full shadow-lg rounded-lg">
            <Image
              src={contactus}
              alt="contact"
              className="w-full h-full rounded-lg"
            />
          </div>
          <p className="text-[22px] text-gray-800 py-10">
            Let us know your questions, suggestions and concerns by filling out
            the contact form.
          </p>
          <div className="flex flex-wrap gap-10 lg:gap-2 justify-center items-center my-5">
            <div className=" bg-[#f0f0f0]] border-3 border-gray-800 rounded-lg w-[60%] lg:w-[40%] m-auto text-center px-2 py-5 leading-11 shadow-2xl">
              <i className="fa-solid fa-phone text-gray-800 text-4xl"></i>
              <p className="text-lg text-gray-800">Phone</p>
              <p className="text-lg text-gray-800"> +1234567890</p>
            </div>
            <div className="border-3 border-gray-800 rounded-lg w-[60%] lg:w-[40%] m-auto text-center px-2 py-5 leading-11 shadow-2xl">
              <i className="fa-solid fa-envelope text-gray-800 text-4xl"></i>
              <p className="text-lg text-gray-800">Email Id </p>
              <p className="text-lg text-gray-800">abc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
          <form action="" className="shadow-2xl p-5 rounded-2xl">
            <div className="flex flex-col  my-2 lg:m-5 justify-between items-start gap-1">
              <div className="flex flex-row gap-2">
                <label className="text-md">Full Name</label>
                <label className="text-md text-red-400">*</label>
              </div>
              <input
                type="text"
                className="border border-gray-300 w-full rounded-2xl p-2"
                placeholder="Enter Your Full Name"
                onChange={formik.handleChange("fullName")}
                onBlur={formik.handleBlur("fullName")}
                value={formik.values.fullName}
                required
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p style={{ color: "red" }}>{formik.errors.fullName}</p>
              )}
            </div>
            <div className="flex flex-col my-2 lg:m-5 justify-between items-start gap-1">
              <div className="flex flex-row gap-2">
                <label className="text-md">Email Id</label>
                <label className="text-md text-red-400">*</label>
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
            <div className="flex flex-col my-2 lg:m-5 justify-between items-start gap-1">
              <div className="flex flex-row gap-2">
                <label className="text-md">Mobile Number</label>
                <label className="text-md text-red-400">*</label>
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
            <div className="flex flex-col my-2 lg:m-5 justify-between items-start gap-1 w-full">
              <div className="flex flex-row gap-2">
                <label className="text-md">Message</label>
                <label className="text-md text-red-400">*</label>
              </div>

              <div className="relative w-9/10">
                <textarea
                  className="border border-gray-300 w-full h-[20vh] rounded-2xl p-2 resize-none pr-16"
                  placeholder="Enter Your Message"
                  maxLength={250}
                  onChange={handleChange}
                  onBlur={formik.handleBlur("message")}
                  value={formik.values.message}
                  required
                ></textarea>

                <span className="absolute bottom-2 right-4 text-xs text-gray-500 pointer-events-none">
                  {wordCount}/250 words
                </span>
                {formik.touched.message && formik.errors.message && (
                  <p style={{ color: "red" }}>{formik.errors.message}</p>
                )}
              </div>
            </div>
            <div className="m-4">
              {/* <Link href={"/"}> */}
              <button className="border w-full p-2 rounded-2xl cursor-pointer bg-black text-gray-300">
                Submit
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
