import React, { useState } from "react";
import Dropdown from "./Dropdown";
import UserProfile from "./UserProfile";
import { LOGO_URL } from "../../utils/constants";
import { Bars3Icon } from "@heroicons/react/24/outline";

const TopNavBar = ({ projects = [], onProjectSelect, toggleSidebar }) => {
  const [selectedDashboard, setSelectedDashboard] = useState("");

  const dropdownOptions = [
    { label: "Tabular View", value: "tabular" },
    { label: "Graphical View", value: "graphical" },
    // ... add other project options here
  ];

  const handleSelectDashboard = (selectedValue) => {
    setSelectedDashboard(selectedValue);
    if (onProjectSelect && typeof onProjectSelect === "function") {
      onProjectSelect(selectedValue);
    }
  };

  return (
    <div className="bg-gray-800 text-white flex justify-between items-center p-4">
      {/* Left Section with Icon and Logo */}
      <div className="flex items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" onClick={toggleSidebar} />
        <img src={LOGO_URL} alt="Logo" className="h-8 ml-4" />
      </div>

      {/* Right Section with Dropdown and UserProfile */}
      <div className="flex items-center">
        <Dropdown
          items={dropdownOptions}
          onSelect={handleSelectDashboard}
          placeholder="Select Dashboard"
          className="mr-8" // Add margin-right to the dropdown
        />
        <UserProfile user={{ name: "Rizon Kumar" }} />
      </div>
    </div>
  );
};

export default TopNavBar;
