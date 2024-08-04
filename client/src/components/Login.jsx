import React, { useState } from "react";
import { IoIosLock } from "react-icons/io";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <button
        className="text-white text-semibold flex gap-2 justify-center items-center"
        onClick={() => setOpenModal(true)}
      >
        <IoIosLock className="text-white text-xl" />
        LOGIN
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <h1 className="text-xl font-semibold">Login</h1>
          <div className="my-2 bg-gray-200 h-0.5"></div>

          <h3>Please enter your email and your password here:</h3>

          <form className="mt-4">
            <div className="mt-8">
              <label className="text-sm mb-2 block">Email Address *</label>
              <input
                type="email"
                className="w-full border-none focus:ring-0 focus:border-black"
              />
              <div className="bg-gray-200 h-0.5"></div>
            </div>

            <div className="mt-8 relative">
              <label className="text-sm mb-2 block">Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border-none focus:ring-0 focus:border-black"
              />
              <div className="bg-gray-200 h-0.5"></div>

              {!showPassword ? (
                <button
                  className="absolute right-0 top-10"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(true);
                  }}
                >
                  <IoEye className="text-2xl" />
                </button>
              ) : (
                <button
                  className="absolute right-0 top-10"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(false);
                  }}
                >
                  <IoEyeOff className="text-2xl" />
                </button>
              )}
            </div>

            <div className="my-8 flex justify-end">
              <button className="flex gap-2 bg-blue-500 px-4 py-2 text-white font-semibold text-sm rounded-lg shadow-lg">
                SUBMIT
                <IoMdSend className="text-xl" />
              </button>
            </div>
          </form>

          <p>Don't have an account? Create one now REGISTER</p>

          <div className="mt-8 flex justify-center">
            <button className="flex gap-2 bg-white border border-blue-500 px-4 py-2 text-blue-500 font-semibold text-sm rounded-lg shadow-lg">
              <FaGoogle className="text-xl" />
              LOGIN WITH GOOGLE
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
