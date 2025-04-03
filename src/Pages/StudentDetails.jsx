import { IconArrowsSort } from "@tabler/icons-react";

import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
function StudentDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const lead = location.state?.lead;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const handleModalClose2 = () => {
    setIsModalOpen2(false);
  };
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const handleModalClose3 = () => {
    setIsModalOpen3(false);
  };

  const handleFollowUpSubmit = () => {
    console.log("Follow-up Submitted");
    setIsModalOpen(false); // Close Reset Password Modal
    setTimeout(() => setIsModalOpen3(true), 100); // Open Success Modal with a slight delay
  };
  if (!lead) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-xl font-semibold">No Lead Data Found</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex justify-end mb-2 mr-2 gap-2">
        <button
          className="p-2 border border-bg-[#151C39] text-[#151C39] rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Reset Password
        </button>
        <button
          className="p-2 bg-[#151C39] text-white rounded-md"
          onClick={() => setIsModalOpen2(true)}
        >
          Edit Profile
        </button>
      </div>
      <div className="flex gap-2 mb-2 justify-between">
        <div className="w-96 bg-white p-5 rounded-lg shadow-md">
          <h2 className="font-bold mb-4">Student Profile</h2>
          <p className="flex justify-between">
            <strong>Name</strong> {lead.name}
          </p>
          <p className="flex justify-between">
            <strong>Email ID</strong> {lead.name}
          </p>
          <p className="flex justify-between">
            <strong>Phone Number</strong> {lead.date}
          </p>
          <p className="flex justify-between">
            <strong>Subscription Plan</strong> {lead.source}
          </p>
          <p className="flex justify-between">
            <strong>Last Login</strong> {lead.status}
          </p>
          <p className="flex justify-between">
            <strong>Leaderboard Ranking</strong> {lead.assign}
          </p>
        </div>
        <div className="bg-white p-2 w-64">
        <p>Experiment Progress</p>
        </div>
        <div className="bg-white w-96">
          <p className="font-bold p-5">Roles Assignment</p>

          <div className="flex flex-col justify-center p-1">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              laborum aperiam dicta facilis obcaecati mollitia deleniti
              quibusdam, fuga nisi quas aliquid minus officia in corrupti ut
              tempora, culpa illo dolore!
            </p>
          </div>
        </div>
      </div>
      <div className="max-h-[33vh] overflow-auto  bg-white rounded-lg shadow-md text-sm">
        <table className="w-full border-collapse h-[10%]">
          <thead className="sticky top-0 bg-white shadow-md">
            <tr>
              {["S.No", "Grade", "Experiment Progress", "Last Login Date"].map(
                (heading) => (
                  <th
                    key={heading}
                    className="py-3 px-4 font-medium text-center bg-white"
                  >
                    <div className="flex items-center justify-center gap-1">
                      {heading}
                      <IconArrowsSort
                        size={16}
                        className="cursor-pointer text-gray-500 mt-1"
                      />
                    </div>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                Grade: "Grade 2",
                Experiment_Progress: "90 % Completed",
                last_login_date: "03.03.2025",
                
              },
              {
                id: 2,
                Grade: "Grade 2",
                Experiment_Progress: "90 % Completed",
                last_login_date: "03.03.2025",
              },
              {
                id: 3,
                Grade: "Grade 2",
                Experiment_Progress: "90 % Completed",
                last_login_date: "03.03.2025",
              },
              {
                id: 4,
                Grade: "Grade 2",
                Experiment_Progress: "90 % Completed",
                last_login_date: "03.03.2025",
              },
            ].map((lead, index) => (
              <tr key={lead.id} className="border-b border-gray-300">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{lead.Experiment_Progress}</td>
                <td className="py-3 px-4 text-center">{lead.Grade}</td>
                <td className="py-3 px-4 text-center">{lead.last_login_date}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-50 backdrop-blur-md">
          <div className="flex flex-col bg-white p-6 rounded-lg w-[400px]">
            <div className="space-y-3">
                <div className="flex justify-center items-center flex-col">
                <img src="/resetpassword.png" alt="" className="h-25 w-20"/>
                <p>Reset Password</p>
                </div>
               
              {/* Lead Name */}
              <div className="flex justify-between">
                <label className="font-medium">New Password</label>
                <input
                  type="text"
                  name=""
                  readOnly
                  className="border p-2 rounded bg-gray-100 "
                />
              </div>
              <div className="flex justify-between">
                <label className="font-medium">Confirm Password</label>
                <input
                  type="text"
                  name=""
                  readOnly
                  className="border p-2 rounded bg-gray-100 "
                />
              </div>

         
            </div>

            <div className="mt-4 gap-2 flex justify-end">
              <button
                onClick={handleModalClose}
                className=" text-black border border-b-gray-600 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                 onClick={() => {
                    handleFollowUpSubmit(); 
                    setIsModalOpen3(true);
                  }}
             
                className="bg-[#151C39] text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
        {isModalOpen3 && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-50 backdrop-blur-md">
          <div className="flex flex-col bg-white p-6 rounded-lg w-[400px]">
            <div className="space-y-3">
                <div className="relative flex justify-center items-center flex-col">
                    <button   onClick={handleModalClose3} className="absolute rounded-full -right-6  p-2 bg-white -top-10 hover:cursor-pointer">X</button>
                <img src="/resetpassword.png" alt="" className="h-25 w-20"/>
                <p>Successfully your password has ben set</p>
                </div>
            </div>
          </div>
        </div>
      )}
        {isModalOpen2 && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-50 backdrop-blur-md">
          <div className="flex flex-col bg-white p-6 rounded-lg w-[400px]">
            <h2 className="font-bold text-xl mb-4 text-center">
              Edit Profile
            </h2>

            <div className="space-y-3">
              {/* Lead Name */}
              <div className="flex justify-between">
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  name="leadName"
                  readOnly
                  className="border p-2 rounded bg-gray-100 "
                />
              </div>

              {/* Follow Up Date */}
              <div className="flex justify-between">
                <label className="font-medium">Email</label>
                <input
                  type="text"
                  name="leadName"
                  readOnly
                  className="border p-2 rounded bg-gray-100 "
                />
              </div>

              {/* Schedule Follow Up */}
              <div className="flex justify-between">
                <label className="font-medium">Phone Number</label>
                <input
                  type="text"
                  name="leadName"
                  readOnly
                  className="border p-2 rounded bg-gray-100 "
                />
              </div>

              {/* Convert to Sales */}
              <div className="flex justify-between">
                <label className="font-medium">Role Assignment</label>
                <input
                  type="text"
                  name="leadName"
                  readOnly
                  className="border p-2 rounded bg-gray-100 "
                />
              </div>

              {/* Notes */}
             
            </div>

            <div className="mt-4 gap-2 flex justify-end">
              <button
                onClick={handleModalClose2}
                className="border border-b-gray-500 text-black px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleFollowUpSubmit}
                className="bg-[#151C39] text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDetails;
