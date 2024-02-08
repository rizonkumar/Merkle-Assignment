import React from "react";
import Dropdown from "./Dropdown";
import UserProfile from "./UserProfile";
import { LOGO_URL } from "../../utils/constants";
import { Bars3Icon } from "@heroicons/react/24/outline"; // Correct import for Heroicons v2

const TopNavBar = ({ projects = [], onProjectSelect, toggleSidebar }) => {
  const [selectedDashboard, setSelectedDashboard] = React.useState("");

  const dropdownOptions = [
    { label: "Select Dashboard", value: "" }, // Default option
    ...projects.map((project) => ({
      label: project.label,
      value: project.value,
    })),
    { label: "Tabular View", value: "tabular" },
    { label: "Graphical View", value: "graphical" },
  ];

  return (
    <div className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        {/* Hamburger Menu Icon */}
        <Bars3Icon
          className="h-8 w-8 cursor-pointer mr-4"
          onClick={toggleSidebar}
        />
        <img src={LOGO_URL} alt="Logo" className="h-8 mr-4" />
        {/* Dropdown Menu */}
        <Dropdown
          items={dropdownOptions}
          onSelect={(selectedValue) => {
            setSelectedDashboard(selectedValue); // Always update the selected dashboard
            if (selectedValue === "tabular" || selectedValue === "graphical") {
              // If one of these special views is selected, handle accordingly
              // This example assumes you're handling these cases elsewhere or via routing
            } else if (
              onProjectSelect &&
              typeof onProjectSelect === "function"
            ) {
              // Ensure onProjectSelect is a function before calling
              onProjectSelect(selectedValue);
            }
          }}
          placeholder="Select Dashboard"
        />
      </div>
      {/* User Profile */}
      <UserProfile user={{ name: "Rizon Kumar" }} />
    </div>
  );
};

export default TopNavBar;
