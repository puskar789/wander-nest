import React, { useState } from "react";
import { IoIosLock } from "react-icons/io";
import { Modal } from "flowbite-react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import useGlobal from "../zustand/useGlobal";
import toast from "react-hot-toast";
import GoogleOneTapLogin from "./oauth/GoogleOneTapLogin";

const Register = ({ setOpenRegister }) => {
  const { openModal, setOpenModal } = useGlobal();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = inputs;

    // implement loading
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    }
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setOpenRegister(false);
  };

  return (
    <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <h1 className="text-xl font-semibold">Register</h1>
        <div className="my-2 bg-gray-200 h-0.5"></div>

        <h3>Please enter your name, email and your password here:</h3>

        <form className="mt-5" onSubmit={handleFormSubmit}>
          <div className="mt-4">
            <label className="text-sm mb-2 block text-blue-500 font-semibold">
              Name *
            </label>
            <input
              type="text"
              className="w-full border-none focus:ring-0 focus:border-black"
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
            <div className="bg-gray-200 h-0.5"></div>
          </div>

          <div className="mt-4">
            <label className="text-sm mb-2 block text-blue-500 font-semibold">
              Email Address *
            </label>
            <input
              type="email"
              className="w-full border-none focus:ring-0 focus:border-black"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <div className="bg-gray-200 h-0.5"></div>
          </div>

          <div className="mt-4 relative">
            <label className="text-sm mb-2 block text-blue-500 font-semibold">
              Password *
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border-none focus:ring-0 focus:border-black"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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

          <div className="mt-4 relative">
            <label className="text-sm mb-2 block text-blue-500 font-semibold">
              Confirm Password *
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full border-none focus:ring-0 focus:border-black"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
            <div className="bg-gray-200 h-0.5"></div>

            {!showConfirmPassword ? (
              <button
                className="absolute right-0 top-10"
                onClick={(e) => {
                  e.preventDefault();
                  setShowConfirmPassword(true);
                }}
              >
                <IoEye className="text-2xl" />
              </button>
            ) : (
              <button
                className="absolute right-0 top-10"
                onClick={(e) => {
                  e.preventDefault();
                  setShowConfirmPassword(false);
                }}
              >
                <IoEyeOff className="text-2xl" />
              </button>
            )}
          </div>

          <div className="my-4 flex justify-end">
            <button className="flex gap-2 bg-blue-500 px-4 py-2 text-white font-semibold text-sm rounded-lg shadow-lg hover:bg-blue-700 active:border-y-2 border-blue-900">
              SUBMIT
              <IoMdSend className="text-xl" />
            </button>
          </div>
        </form>

        <p>
          Already have an account? Sign in now{" "}
          <span
            className="text-blue-500 font-semibold cursor-pointer"
            onClick={() => setOpenRegister(false)}
          >
            LOGIN
          </span>
        </p>

        <div className="mt-7 flex justify-center">
          <GoogleOneTapLogin />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
