import React from "react";

function PasswordChangedModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 className="text-xl font-bold">Password Changed</h2>
        <p className="text-gray-500">
        You've Successfully Completed Your Password Reset!
        </p>
        <button onClick={onClose} className="w-full bg-[#151C39]  text-white py-2 rounded-md mt-3">
         Log in Now
        </button>
      </div>
    </div>
  );
}

export default PasswordChangedModal;
