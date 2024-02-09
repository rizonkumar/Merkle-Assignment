import React from "react";
import Dropdown from "./Dropdown";
import UserProfile from "./UserProfile";
import { LOGO_URL } from "../../utils/constants";
import { Bars3Icon } from "@heroicons/react/24/outline";

const TopNavBar = ({ toggleSidebar, isSidebarExpanded, onSelectView }) => {
  const dropdownOptions = [
    { label: "Tabular View", value: "tabular" },
    { label: "Graphical View", value: "graphical" },
  ];

  const handleSelectDashboard = (selectedValue) => {
    onSelectView(selectedValue); // Update the view in the parent component
  };

  return (
    <div className="bg-gray-800 text-white flex justify-between items-center p-4">
      {/* Left Section with Icon and Logo */}
      <div className="flex items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" onClick={toggleSidebar} />
        <img src={LOGO_URL} alt="Logo" className="h-8 ml-4 " />
      </div>

      {/* Right Section with Dropdown and UserProfile */}
      <div className="flex items-center">
        <Dropdown
          items={dropdownOptions}
          onSelect={handleSelectDashboard}
          placeholder="Select Dashboard"
        />
        <UserProfile user={{ name: "Rizon Kumar" }} />
      </div>
    </div>
  );
};

export default TopNavBar;
