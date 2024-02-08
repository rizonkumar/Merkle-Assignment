import React, { useState } from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai"; // Import specific icons

const SideNavBar = () => {
  // State to manage whether the sidebar is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the sidebar's expanded state
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`transition-width duration-300 ${
        isExpanded ? "w-64" : "w-20"
      } bg-gray-800 h-full text-white flex flex-col`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <button onClick={toggleSidebar} className="p-5 hover:bg-gray-700">
        {/* Toggle Button */}
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      <div className="flex flex-col space-y-4 p-5">
        {/* Home Dashboard Icon */}
        <AiFillHome className="cursor-pointer hover:text-gray-300" size={24} />
        {/* Projects Dashboard Icon */}
        <AiFillProject
          className="cursor-pointer hover:text-gray-300"
          size={24}
        />
      </div>
    </div>
  );
};

export default SideNavBar;
