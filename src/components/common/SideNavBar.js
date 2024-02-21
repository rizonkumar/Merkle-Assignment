import React from "react";
import { BsGraphUp, BsTable } from "react-icons/bs";

const SideNavBar = ({ isExpanded, setCurrentView }) => {
  return (
    <div
      className={` transition-all duration-300 ease-in-out ${
        isExpanded ? " pr-5" : " pr-2"
      } flex flex-col items-center bg-merkle-blue text-white`}
    >
      <div className="ml-2 mt-2 space-y-4 text-xs">
        <div
          className={`flex ${
            isExpanded ? "flex-row" : "flex-col"
          } w-full  cursor-pointer items-center`}
          onClick={() => setCurrentView("tabular")}
        >
          <BsTable className="m-2 mr-2 h-8  w-10" />
          <span className={`${isExpanded ? "ml-5" : "mt-4"}`}>Tabular</span>
        </div>
        <div
          className={`flex ${
            isExpanded ? "flex-row" : "flex-col"
          } w-full  cursor-pointer items-center`}
          onClick={() => setCurrentView("graphical")}
        >
          <BsGraphUp className="m-2 mr-2 h-8 w-10" />
          <span className={`${isExpanded ? "ml-5" : "mt-4"} `}>Graphical</span>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
