import React from "react";
import { BsGraphUp, BsTable } from "react-icons/bs";

const SideNavBar = ({ isExpanded, setCurrentView }) => {
  return (
    <div
      className={` transition-all duration-300 ease-in-out ${
        isExpanded ? "w-75 pr-5" : "w-25 pr-2"
      } bg-blue-900 text-white flex flex-col items-center`}
    >
      <div className="mt-2 space-y-4 ml-2 text-xs">
        <div
          className={`flex ${
            isExpanded ? "flex-row" : "flex-col"
          } items-center  w-full cursor-pointer`}
          onClick={() => setCurrentView("tabular")}
        >
          <BsTable className="h-8 w-10 m-2  mr-2" />
          <span className={`${isExpanded ? "ml-5" : "mt-4"}`}>Tabular</span>
        </div>
        <div
          className={`flex ${
            isExpanded ? "flex-row" : "flex-col"
          } items-center  w-full cursor-pointer`}
          onClick={() => setCurrentView("graphical")}
        >
          <BsGraphUp className="h-8 w-10 m-2 mr-2" />
          <span className={`${isExpanded ? "ml-5" : "mt-4"} `}>Graphical</span>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
