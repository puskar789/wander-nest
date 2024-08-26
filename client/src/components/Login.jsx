import React, { useState } from "react";
import { IoIosLock } from "react-icons/io";
import { Modal } from "flowbite-react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import Register from "./Register";
import useGlobal from "../zustand/useGlobal";
import GoogleOneTapLogin from "./oauth/GoogleOneTapLogin";

const Login = () => {
  // const [openModal, setOpenModal] = useState(false);
  const { openModal, setOpenModal } = useGlobal();
  const [showPassword, setShowPassword] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputs;

    // implement loading
    setInputs({
      email: "",
      password: "",
    });
  };

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
      {!openRegister ? (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <h1 className="text-xl font-semibold">Login</h1>
            <div className="my-2 bg-gray-200 h-0.5"></div>

            <h3>Please enter your email and your password here:</h3>

            <form className="mt-4" onSubmit={handleFormSubmit}>
              <div className="mt-8">
                <label className="text-sm mb-2 block text-blue-500 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full border-none focus:ring-0 focus:border-black"
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                />
                <div className="bg-gray-200 h-0.5"></div>
              </div>

              <div className="mt-8 relative">
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

              <div className="my-8 flex justify-end">
                <button className="flex gap-2 bg-blue-500 px-4 py-2 text-white font-semibold text-sm rounded-lg shadow-lg hover:bg-blue-700 active:border-y-2 border-blue-900">
                  SUBMIT
                  <IoMdSend className="text-xl" />
                </button>
              </div>
            </form>

            <p>
              Don't have an account? Create one now{" "}
              <span
                className="text-blue-500 font-semibold cursor-pointer"
                onClick={() => setOpenRegister(true)}
              >
                REGISTER
              </span>
            </p>

            <div className="mt-8 flex justify-center">
              <GoogleOneTapLogin />
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        <Register setOpenRegister={setOpenRegister} />
      )}
    </>
  );
};

export default Login;
