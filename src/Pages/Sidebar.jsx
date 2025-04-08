import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IconLayoutDashboard,
  IconBrandMyOppo,
  IconUsers,
  IconListTree,
  IconTableShare,
  IconFocus2,
  IconWallet,
  IconMessageReport,
  IconSettings,
} from "@tabler/icons-react";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      icon: <IconLayoutDashboard stroke={2} />,
      path: "cards",
    },
    {
      name: "Lead Management",
      icon: <IconBrandMyOppo stroke={2} />,
      path: "leadmanagement",
    },
    { name: "Students", icon: <IconUsers stroke={2} />, path: "students" },
    {
      name: "Subscribers",
      icon: <IconListTree stroke={2} />,
      path: "subscribers",
    },
    {
      name: "Experiment",
      icon: <IconTableShare stroke={2} />,
      path: "experiment",
    },
    {
      name: "Leaderboard",
      icon: <IconFocus2 stroke={2} />,
      path: "leaderboard",
    },
    { name: "Packages", icon: <IconWallet stroke={2} />, path: "packages" },
    { name: "Report", icon: <IconMessageReport stroke={2} />, path: "report" },
    { name: "Settings", icon: <IconSettings stroke={2} />, path: "setting" },
  ];

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    const activeMenu =
      menuItems.find((item) => item.path === currentPath)?.name || "Dashboard";
    setActiveItem(activeMenu);

    // ✅ Allow `lead-details` and `editprofile` to open
    if (
      !menuItems.some((item) => item.path === currentPath) &&
      !["editprofile", "lead-details", "student-details"].includes(currentPath)
    ) {
      navigate("/dashboard/cards", { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleItemClick = (itemName, path) => {
    setActiveItem(itemName);
    navigate(`/dashboard/${path}`);
  };

  return (
    <div className="w-48 h-[calc(100vh-2rem)]  rounded-md shadow-2xl text-black text-center flex flex-col items-center bg-white text-xs">
      <img src="./logo.png" alt="" className="h-25 w-30" />
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-1">
            <button
              className={`text-center flex items-center gap-1 px-7 py-0.5 hover:bg-orange-600 w-full ${
                activeItem === item.name ? "bg-orange-600 text-white" : ""
              } `}
              onClick={() => handleItemClick(item.name, item.path)}
            >
              <span
                className={`p-1 rounded ${
                  activeItem === item.name ? "bg-[#151C39] text-white" : ""
                }`}
              >
                {item.icon}
              </span>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="mb-25"></div>
    </div>
  );
}

export default Sidebar;
