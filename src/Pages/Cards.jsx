import React from "react";
import { IconFolderDown } from "@tabler/icons-react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ title, type }) => {
  const isDonut = type === "donut";

  const chartOptions = {
    series: isDonut ? [44, 55] : [{ name: "Users", data: [44, 55, 67, 83, 90] }],
    options: {
      chart: {
        type: isDonut ? "donut" : "bar",
        width: 250,
      },
      labels: isDonut ? ["Subsribers", "Non Subsribers"] : undefined,
      colors: isDonut ? ["#344BFD", "#F68D2B"] : ["#007BFF"],
      plotOptions: isDonut
        ? {}
        : {
            bar: {
              horizontal: false,
              columnWidth: "45%",
            },
          },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 180,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="bg-white rounded-md shadow-lg flex flex-col w-[50%] h-40">
      <h3 className="text-sm p-3 font-semibold">{title}</h3>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type={isDonut ? "donut" : "bar"}
        width={260}
      />
    </div>
  );
};

const TableComponent = ({ title, data }) => {
  return (
    <div className="bg-white rounded-md shadow-lg w-[50%]">
      <h3 className="text-lg font-semibold mb-2 text-center bg-[#D9EBFF]">{title}</h3>

      {/* Fix: Set a max height and enable scrolling */}
      <div className="max-h-[80%] overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white">
            <tr className="border-b-2 border-gray-300">
              <th className="py-2 px-4 text-left">S.No</th>
              <th className="py-2 text-left">Name</th>
              <th className="py-2 text-left">Phone</th>
              <th className="py-2 text-left">Plan</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.phone}</td>
                <td className="py-2 text-green-600">{item.plan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


function Cards() {
  const recentUsers = [
    { name: "John Doe", plan: "Premium", phone: "9876543210" },
    { name: "Jane Smith", plan: "Basic", phone: "8765432109" },
    { name: "Alice Brown", plan: "Standard", phone: "7654321098" },
    { name: "John Doe", plan: "Premium", phone: "9876543210" },
    { name: "Jane Smith", plan: "Basic", phone: "8765432109" },
    { name: "Alice Brown", plan: "Standard", phone: "7654321098" },
  ];

  const recentSearches = [
    { name: "Michael Scott", plan: "Basic", phone: "6543210987" },
    { name: "Dwight Schrute", plan: "Standard", phone: "5432109876" },
    { name: "Jim Halpert", plan: "Premium", phone: "4321098765" },
  ];

  return (
    <div className="pr-2 text-sm">
      <div className="flex justify-between mb-5">
        {["Total User", "Subscriptions", "Total Lead", "Experiment Count"].map((title, index) => (
          <div key={index} className="bg-white flex gap-5 py-3 items-center px-14 rounded-md shadow-md">
            <div className="bg-[#EFEFEF] rounded-full p-2 font-bold">
            <IconFolderDown stroke={2} />
            </div>
           
            <div>
              <p>{title}</p>
              <p className="font-bold">{index === 2 ? 45 : index === 3 ? 135 : 3867}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-5 mb-2">
        <ApexChart title="Subscribers & Non Subscribers" type="donut" />
        {/**/ }<ApexChart title="Non Subscribers" type="" />
      </div>

      <div className="flex justify-center gap-4 h-[38vh]">
        <TableComponent title="Recent Users" data={recentUsers} />
        <TableComponent title="Recent Subscribers" data={recentSearches} />
      </div>
    </div>
  );
}

export default Cards;
