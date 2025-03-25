import React from "react";

function ResetPasswordModal({ onClose, setModal }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
        <div className="bg-white p-5 rounded-lg shadow-lg ">
          <div className="flex justify-center items-center w-96">
            <img src="./reset.png" alt="" className="h-50 w-50" />
          </div>
          <p className="text-xl font-bold text-center">Reset Password</p>
          <p className="text-gray-500 mb-3 text-center">
          Please kindly set your new password
          </p>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">New Password</label>
            <input 
              type="email" 
              id="email" 
              placeholder="" 
              className="w-96  p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p>Password Strength:</p>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">Re-enter Password</label>
            <input 
              type="email" 
              id="email" 
              placeholder="" 
              className="w-96 mb-3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            className="w-full bg-[#151C39] text-white p-2 rounded-md"
            onClick={() => setModal("passwordChanged")} // Open CheckEmailModal
          >
           Confirm
          </button>
        </div>
      </div>
    );
  }

export default ResetPasswordModal;
