import React, { useState } from "react";
import { IconBrandGoogle, IconBrandApple, IconBrandFacebook } from "@tabler/icons-react";
import ForgotPasswordModal from "./src/Modals/ForgotPasswordModal";
import ResetPasswordModal from "./src/Modals/ResetPasswordModal";
import CheckEmailModal from "./src/Modals/CheckEmailModal";
import PasswordChangedModal from "./src/Modals/PasswordChangedModal";

function Login() {
  const [modal, setModal] = useState(null);

  return (
    <div>
      {/* Header Section (Always Visible) */}
      <div className="flex flex-col md:flex-row justify-between p-5">
        <img src="./logo.png" className="h-20 w-25" />
        <p className="mt-3">Don't have an account? Register Now</p>
      </div>

      {/* Login Form (Hidden When Modal is Open) */}
      {modal === null && (
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl font-bold">Login</p>
          <p className="text-gray-500">Enter your details to log in to your account.</p>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">Email/Phone Number</label>
            <input 
              type="email" 
              id="email" 
              placeholder="" 
              className="w-96 mb-3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="" 
              className="w-96 mb-4 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <p className="flex justify-end text-blue-500 cursor-pointer" onClick={() => setModal("forgotPassword")}>
              Forgot Password?
            </p>
          </div>

          <button className="w-96 bg-[#151C39] text-white p-2 rounded-md mt-2">
            Login
          </button>

          <p className="mb-5 mt-5">Or Sign in with</p>
          <div className="flex gap-5">
            <button className="border px-4 py-2 rounded-md flex gap-1">
              <IconBrandGoogle stroke={2} /> Google
            </button>
            <button className="border px-4 py-2 rounded-md flex gap-1">
              <IconBrandApple stroke={2} /> Apple
            </button>
            <button className="border px-4 py-2 rounded-md flex gap-1">
              <IconBrandFacebook stroke={2} /> Facebook
            </button>
          </div>
        </div>
      )}

      {/* Render Modals Based on State */}
      {modal === "forgotPassword" && <ForgotPasswordModal onClose={() => setModal(null)} setModal={setModal} />}

      {modal === "checkEmail" && <CheckEmailModal onClose={() => setModal(null)} setModal={setModal} />}
      {modal === "resetPassword" && <ResetPasswordModal onClose={() => setModal(null)} setModal={setModal} />}
      {modal === "passwordChanged" && <PasswordChangedModal onClose={() => setModal(null)} />}
    </div>
  );
}

export default Login;
