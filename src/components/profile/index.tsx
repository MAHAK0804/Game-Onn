import React, { useState } from "react";

export default function Profile() {
  const [streetAddress, setStreetAddress] = useState(
    "123, Stadium Road, City, State"
  );
  const [pinCode, setPinCode] = useState("123456");

  const [editAddress, setEditAddress] = useState(false);
  const [editpinCode, setEditPinCode] = useState(false);

  const [editPassword, setEditPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("***********");
  const [name, setName] = useState("John Doe");
  const [editName, setEditName] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-20 lg:my-20 bg-white lg:rounded-3xl shadow-2xl overflow-hidden">
      {/* Banner */}
      <div className="relative h-30 sm:h-56 md:h-30 w-full">
        <div className="absolute inset-0 bg-amber-600 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-5xl font-extrabold drop-shadow-lg select-none">
            Personal Information
          </h1>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-10">
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full border-8 border-amber-600 shadow-lg overflow-hidden p-5">
          <i className="fa-solid fa-user object-cover text-9xl text-gray-800"></i>
          <div className="absolute bottom-2 right-2 bg-amber-600 rounded-full p-2 border-2 border-white shadow-md">
            <i className="fas fa-basketball-ball text-white text-xl"></i>
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left space-y-1">
          {editName ? (
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-3xl lg:text-4xl font-bold text-gray-900 border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                autoFocus
              />
              <div className="flex gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setEditName(false)}
                  className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-amber-400"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditName(false)}
                  className="cursor-pointer text-gray-600 hover:text-gray-800 font-medium px-5 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <h2 className="text-4xl font-extrabold text-gray-900 flex items-center justify-center lg:justify-start gap-3 select-none">
              {name}

              <button
                onClick={() => setEditName(true)}
                className="cursor-pointer text-sm text-amber-600 hover:underline ml-2 focus:outline-none"
              >
                Edit
              </button>
            </h2>
          )}

          <p className="text-gray-700 font-semibold tracking-wide">
            johndoe@example.com
          </p>
          <p className="text-gray-500 text-sm">+91 9876543210</p>
        </div>
      </div>

      {/* Address Section */}
      <section className="px-8 pb-10 pt-10 border-t border-gray-200">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3 border-l-4 border-amber-600 pl-4 select-none">
              Address
            </h3>

            {editAddress ? (
              <>
                <div className="flex flex-col lg:flex-row gap-4">
                  <textarea
                    className="w-full lg:w-3/4 p-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition text-lg resize-none"
                    rows={3}
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    placeholder="Street, Area, City, State"
                  />
                </div>

                <div className="mt-6 flex gap-4 justify-end">
                  <button
                    onClick={() => setEditAddress(false)}
                    className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3 rounded-2xl shadow-md transition focus:outline-none focus:ring-4 focus:ring-amber-400"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditAddress(false)}
                    className="cursor-pointer text-gray-600 hover:text-gray-800 font-medium px-6 py-3 rounded-2xl transition focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {streetAddress}
                </p>

                <button
                  onClick={() => setEditAddress(true)}
                  className="cursor-pointer mt-4 text-amber-600 hover:underline font-semibold text-base transition focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  Edit Address
                </button>
              </>
            )}
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3 border-l-4 border-amber-600 pl-4 select-none">
              Pin Code
            </h3>

            {editpinCode ? (
              <>
                <input
                  type="text"
                  className="w-full lg:w-1/4 p-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition text-lg"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  placeholder="PIN Code"
                  maxLength={6}
                />

                <div className="mt-6 flex gap-4 justify-end">
                  <button
                    onClick={() => setEditAddress(false)}
                    className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3 rounded-2xl shadow-md transition focus:outline-none focus:ring-4 focus:ring-amber-400"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditAddress(false)}
                    className="cursor-pointer text-gray-600 hover:text-gray-800 font-medium px-6 py-3 rounded-2xl transition focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-700 text-lg mt-1">
                  PIN Code: {pinCode}
                </p>

                <button
                  onClick={() => setEditPinCode(true)}
                  className="cursor-pointer mt-4 text-amber-600 hover:underline font-semibold text-base transition focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  Edit Pin Code
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Password Section - unchanged */}
      <section className="px-8 pb-12 pt-10 border-t border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3 border-l-4 border-amber-600 pl-4 select-none">
          Password
        </h3>

        {editPassword ? (
          <>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition text-lg pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <i
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } cursor-pointer`}
                ></i>
              </button>
            </div>

            <div className="mt-6 flex gap-4 justify-end">
              <button
                onClick={() => setEditPassword(false)}
                className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3 rounded-2xl shadow-md transition focus:outline-none focus:ring-4 focus:ring-amber-400"
              >
                Save
              </button>
              <button
                onClick={() => setEditPassword(false)}
                className="cursor-pointer text-gray-600 hover:text-gray-800 font-medium px-6 py-3 rounded-2xl transition focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-gray-700 text-lg tracking-widest select-none">
              ***********
            </p>
            <button
              onClick={() => setEditPassword(true)}
              className="cursor-pointer mt-4 text-amber-600 hover:underline font-semibold text-base transition focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              Change Password
            </button>
          </>
        )}
      </section>
    </div>
  );
}
