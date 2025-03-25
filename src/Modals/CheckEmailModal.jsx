import React from "react";

function CheckEmailModal({ onClose, setModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg ">
        <div className="flex justify-center items-center">
          <img src="./checkemail.png" alt="" className="h-50 w-50" />
        </div>
        <p className="text-xl font-bold text-center">Check Email!</p>
        <p className="text-gray-500 mb-3 w-96">
          Thanks! An email was sent that will ask you to click on a link to
          verify that you own this account. If you don't get the email, Retry
        </p>
        <button
          className="w-full bg-[#151C39] text-white p-2 rounded-md"
          onClick={() => setModal("resetPassword")} // Open CheckEmailModal
        >
         Open email inbox 
        </button>
        <button className="w-full text-gray-500 mt-2" onClick={onClose}>
         Resend email
        </button>
      </div>
    </div>
  );
}

export default CheckEmailModal;
