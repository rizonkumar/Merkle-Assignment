import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai"; // Home and Project icons

const SideNavBar = ({ isExpanded }) => {
  return (
    <div
      className={`transition-width duration-300 ${
        isExpanded ? "w-64" : "w-16"
      } bg-gray-800 h-full text-white flex flex-col items-center justify-between`}
    >
      <div className="mt-2 flex items-center w-full">
        {/* Home Dashboard Icon */}
        <AiFillHome className="h-8 w-8" />
        {isExpanded && <span className="ml-2">Home</span>}
      </div>
      {/* Projects Dashboard Icon */}
      <div className="mt-2 flex items-center w-full">
        <AiFillProject className="h-8 w-8" />
        {isExpanded && <span className="ml-2">Projects</span>}
      </div>
      {/* ... Additional icons and labels ... */}
    </div>
  );
};

export default SideNavBar;
