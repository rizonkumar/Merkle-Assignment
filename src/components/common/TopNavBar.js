import React, { useState } from "react";
import Dropdown from "./Dropdown";
import UserProfile from "./UserProfile";
import { LOGO_URL } from "../../utils/constants";

const TopNavBar = ({ projects = [], onProjectSelect }) => {
  const [selectedDashboard, setSelectedDashboard] = useState("");

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
        <img src={LOGO_URL} alt="Logo" className="h-8 mr-4" />
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
      <UserProfile user={{ name: "Rizon Kumar" }} />
    </div>
  );
};

export default TopNavBar;
