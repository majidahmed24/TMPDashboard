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

function Students() {
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
    date: "2024-03-28",
    mail: "karan@gmail.com",
    phone: "1234567890",
    role: "Admin",
    source: index % 2 === 0 ? "Referral" : "Website",
    status: statusOptions[index % statusOptions.length],
    assign: "Alex Smith",
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
    <div className="h-screen flex flex-col text-sm">
      {/* Header Section */}
      <div className="p-5 flex justify-between items-center">
        <p className="text-lg font-semibold">Students</p>
        <button className="flex gap-1 bg-white px-4 py-2 text-black rounded-md" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          Filter <IconFilter />
        </button>
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
      <div className="overflow-auto h-[60%] p-2">
        <table className="w-full">
          <thead className="sticky top-0 bg-white shadow-md">
            <tr>
              {["S.No", "User ID", "Name", "Email", "Phone", "Status", "Role", "Date", "Action"].map((heading) => (
                <th key={heading} className="py-3 px-4 text-center">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentLeads.map((lead, index) => (
              <tr key={lead.id} className="border-b border-gray-600">
                <td className="py-3 px-4 text-center">{indexOfFirstLead + index + 1}</td>
                <td className="py-3 px-4 text-center">{lead.id}</td>
                <td className="py-3 px-4 text-center">{lead.name}</td>
                <td className="py-3 px-4 text-center">{lead.mail}</td>
                <td className="py-3 px-4 text-center">{lead.phone}</td>
                <td className="py-3 px-4 text-center">{lead.status}</td>
                <td className="py-3 px-4 text-center">{lead.role}</td>
                <td className="py-3 px-4 text-center">{lead.date}</td>
                <td className="py-3 px-4 text-center flex gap-2">
                  <button onClick={() => navigate("/dashboard/lead-details", { state: { lead } })}><IconEye size={18} /></button>
                  <button onClick={() => { setModalType("edit"); setSelectedLead(lead); }}><IconEdit size={18} /></button>
                  <button onClick={() => { setModalType("delete"); setSelectedLead(lead); }}><IconTrash size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
