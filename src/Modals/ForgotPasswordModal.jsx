import React from "react";

function ForgotPasswordModal({ onClose, setModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <div className="flex justify-center items-center">
          <img src="./forgot.png" alt="" className="h-50 w-50" />
        </div>
        <p className="text-xl font-bold text-center">Forgot Password</p>
        <p className="text-gray-500 mb-3">
          Enter your email to receive password reset instructions.
        </p>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email/Phone Number
          </label>
          <input
            type="email"
            id="email"
            placeholder=""
            className="w-96 mb-3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          className="w-full bg-[#151C39] text-white p-2 rounded-md"
          onClick={() => setModal("checkEmail")} // Open CheckEmailModal
        >
          Send Email
        </button>
        <button className="w-full text-gray-500 mt-2" onClick={onClose}>
          Back to login
        </button>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;
