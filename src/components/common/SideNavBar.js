import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai"; // Home and Project icons

const SideNavBar = ({ isExpanded }) => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-16"
      } bg-blue-900 h-full text-white flex flex-col items-center`}
    >
      {/* Icon and Label Container */}
      <div className="mt-2 space-y-2">
        {/* Home Icon and Label */}
        <div
          className={`flex ${
            isExpanded ? "flex-row" : "flex-col"
          } items-center justify-center w-full`}
        >
          <AiFillHome className="h-8 w-8" />
          <span className={`${isExpanded ? "ml-2" : "mt-1"} text-sm`}>
            Home
          </span>
        </div>
        {/* Projects Icon and Label */}
        <div
          className={`flex ${
            isExpanded ? "flex-row" : "flex-col"
          } items-center justify-center w-full`}
        >
          <AiFillProject className="h-8 w-8" />
          <span className={`${isExpanded ? "ml-2" : "mt-1"} text-sm`}>
            Projects
          </span>
        </div>
      </div>
      {/* ... Additional icons and labels ... */}
    </div>
  );
};

export default SideNavBar;
