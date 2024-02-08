import React, { useState } from "react";
import Dropdown from "./Dropdown";
import UserProfile from "./UserProfile";
import { LOGO_URL } from "../../utils/constants";

const TopNavBar = ({ projects = [], onProjectSelect, renderDashboard }) => {
  const [selectedDashboard, setSelectedDashboard] = useState(null);

  const dropdownOptions = [
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
            if (selectedValue === "tabular" || selectedValue === "graphical") {
              setSelectedDashboard(selectedValue);
            } else {
              onProjectSelect(selectedValue);
              setSelectedDashboard(null);
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
