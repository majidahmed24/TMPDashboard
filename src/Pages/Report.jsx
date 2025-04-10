import React, { useState } from "react";
import {
  IconEye,
  IconEdit,
  IconTrash,
  IconArrowsSort,
  IconFilter,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function Report() {
  const statusOptions = ["New", "Pending", "Converted", "Loss", "Follow Up"];
  const leads = Array.from({ length: 20 }, (_, index) => ({
    date: "2024-03-28",
    month: "September",
    registration_count: "10",
    subscribers_count: "12345",
  }));
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [customDate, setCustomDate] = useState("");
 

  const leadsPerPage = 10;
  const totalPages = Math.ceil(leads.length / leadsPerPage);
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col text-sm">
      {/* Header Section */}
      <div className="p-5 flex justify-between items-center relative">
        <p className="text-lg font-semibold">Lead Management</p>
        <div className="flex gap-3">
          <button
            className="px-4 py-2 border  border-[#151C39] text-[#151C39] rounded-md"
            onClick={() => {
           
            }}
          >
            Export
          </button>
          <button
            className="flex gap-1 bg-white px-4 py-2 text-black rounded-md"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Filter
            <IconFilter />
          </button>
        </div>

        {/* Filter Dropdown */}
        {isFilterOpen && (
          <div className="absolute top-15 right-5 bg-[#DBE9FF] text-[#005D67] p-3 rounded shadow-lg z-50">
            {[
              "Today",
              "Last 7 Days",
              "This Month",
              "Last 30 Days",
              "This Year",
              "Custom Date",
            ].map((option) => (
              <button
                key={option}
                className="block w-full text-left px-3 py-2 "
                onClick={() => setSelectedFilter(option)}
              >
                {option}
              </button>
            ))}
            {selectedFilter === "Custom Date" && (
              <div className="mt-3">
                <input
                  type="date"
                  className="border p-2 w-full rounded"
                  value={customDate}
                  onChange={(e) => setCustomDate(e.target.value)}
                />
                <button className="mt-2 bg-[#151C39] text-white w-full p-2 rounded">
                  Search
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Scrollable Table Section */}
      <div className="flex overflow-auto p-2">
        <table className="w-full">
          <thead className="sticky top-0 bg-white shadow-md">
            <tr>
              {[
                "S.No",
                "Date",
                "Month",
                "Registration Count",
                "Subscribers Count",
              ].map((heading) => (
                <th key={heading} className="py-3 px-4 font-medium text-center">
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
                <td className="py-3 px-4 text-center">
                  {indexOfFirstLead + index + 1}
                </td>
                <td className="py-3 px-4 text-center">{lead.date}</td>
                <td className="py-3 px-4 text-center">{lead.month}</td>
                <td className="py-3 px-4 text-center">{lead.registration_count}</td>
                <td className="py-3 px-4 text-center">{lead.subscribers_count}</td>
              
                
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default Report;
