import React, { useState } from "react";
import {
  IconEye,
  IconEdit,
  IconTrash,
  IconArrowsSort,
  IconFilter,
  IconChevronDown,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function Leaderboard() {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [customDate, setCustomDate] = useState("");
  const [modalType, setModalType] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const statusOptions = ["New", "Pending", "Converted", "Loss", "Follow Up"];
  const leads = Array.from({ length: 20 }, (_, index) => ({
    id: `LD-00${index + 1}`,
    name: `John Doe ${index + 1}`,
    rank: "2024-03-28",
    points_earned: "karan@gmail.com",
    phone: "1234567890",
    experiment_completed: "Admin",
  }));

  const filterOptions = {
    Date: ["Today", "Last 7 Days", "This Month", "Last 30 Days", "This Year", "Custom Date"],
    Grade: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
    Subscription: ["Trial Pack", "Monthly", "Annual"],
    Status: ["Active", "Inactive"],
  };

  const leadsPerPage = 10;
  const totalPages = Math.ceil(leads.length / leadsPerPage);
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col text-sm">
      {/* Header Section */}
      <div className="p-5 flex justify-between items-center">
        <p className="text-lg font-semibold">Leaderboard</p>
    <div className="flex gap-2">
        <button
            className="px-4 py-2 bg-[#151C39] text-white rounded-md"
          >
           Reset Leaderboard
          </button>
        <button className="flex gap-1 bg-white px-4 py-2 text-black rounded-md" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          Filter <IconFilter />
        </button>
        </div>
       
      </div>

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="font-bold text-xl mb-4 text-center">Filter Options</h2>
            {Object.keys(filterOptions).map((category) => (
              <div key={category} className="mb-3">
                <button className="flex justify-between w-full p-2 border rounded bg-gray-100" onClick={() => setSelectedFilter(selectedFilter === category ? null : category)}>
                  {category} <IconChevronDown size={18} />
                </button>
                {selectedFilter === category && (
                  <div className="mt-2 border p-2 rounded bg-gray-50">
                    {filterOptions[category].map((option) => (
                      <button key={option} className="block w-full text-left px-3 py-1 hover:bg-gray-200" onClick={() => setCustomDate(option)}>
                        {option}
                      </button>
                    ))}
                    {customDate === "Custom Date" && (
                      <input type="date" className="w-full p-2 border rounded mt-2" value={customDate} onChange={(e) => setCustomDate(e.target.value)} />
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="flex justify-end gap-2 mt-4">
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setIsFilterOpen(false)}>Close</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply Filters</button>
            </div>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="overflow-auto p-2">
        <table className="w-full">
          <thead className="sticky top-0 bg-white shadow-md">
            <tr>
              {["S.No", "Name", "Rank", "Points Earned", "Experiment Completed"].map((heading) => (
                <th key={heading} className="py-3 px-4 text-center">
                   <div className="flex items-center justify-center gap-1">
                    {heading}
                    <IconArrowsSort
                      size={16}
                      className="cursor-pointer text-gray-500 mt-1"
                    />
                  </div>
                 </th>
               
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentLeads.map((lead, index) => (
              <tr key={lead.id} className="border-b border-gray-600">
                <td className="py-3 px-4 text-center">{indexOfFirstLead + index + 1}</td>
               
                <td className="py-3 px-4 text-center">{lead.name}</td>
                <td className="py-3 px-4 text-center">{lead.rank}</td>
                <td className="py-3 px-4 text-center">{lead.points_earned}</td>
                <td className="py-3 px-4 text-center">{lead.experiment_completed}</td>
           
              
              </tr>
            ))}
          </tbody>
        </table>
        
      
      </div>
      {modalType === "edit" && selectedLead && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96 space-y-3 flex flex-col">
            <h2 className="font-bold text-center text-xl mb-4">Edit Student</h2>
            <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Name</label>
                  <input
                    type="text"
                    value={selectedLead.name}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Email</label>
                  <input
                    type="text"
                    value={selectedLead.mail}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Phone Number</label>
                  <input
                    type="text"
                    value={selectedLead.phone}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Subscription Status</label>
                  <input
                    type="dropdown"
                    value={selectedLead.mail}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Status</label>
                  <input
                    type="text"
                    value={selectedLead.status}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Register Date</label>
                  <input
                    type="text"
                    value={selectedLead.date}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">
                    Role
                  </label>
                  <input
                    type="text"
                    value={selectedLead.role}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
            <div className="flex justify-end gap-2">
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setModalType(null)}>Cancel</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}
 {modalType === "delete" && selectedLead && (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
    <div className="bg-white p-5 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center">
      <img
        src="/delete.png"
        alt="Delete Confirmation"
        className="w-16 h-16 mb-4"
      />
      <h2 className="font-bold text-xl mb-4 text-center">Are you Sure?</h2>
      <p className="text-center mb-4">Are you sure you want to delete {selectedLead.name}?</p>
      <div className="flex justify-center gap-2">
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setModalType(null)}>Cancel</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
  </div>
)}

       {/* Pagination Section */}
       {totalPages > 1 && (
        <div className="p-4 flex justify-end items-center gap-2">
          <button
            className="px-3 py-1"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              className="px-3 py-1"
              onClick={() => setCurrentPage(pageIndex + 1)}
            >
              {pageIndex + 1}
            </button>
          ))}
          <button
            className="px-3"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
      
    </div>
    
  );
}

export default Leaderboard;
