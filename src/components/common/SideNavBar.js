import React from "react";
import { BsGraphUp, BsTable } from "react-icons/bs";
import "../../custom-styles.css";

const SideNavBar = ({ isExpanded, setCurrentView }) => {
  return (
    <div
      className={`transition-all ${isExpanded ? "ps-5" : "ps-2"} d-flex flex-column align-items-center bg-merkle-blue text-white`}
    >
      <div className="ms-2 mt-2">
        <div
          className={`d-flex ${isExpanded ? "flex-row" : "flex-column"} w-100 align-items-center cursor-pointer`}
          onClick={() => setCurrentView("tabular")}
        >
          <BsTable className="m-2 me-2 h-8 w-10" />
          <span className={`${isExpanded ? "ms-5" : "mt-4"}`}>Tabular</span>
        </div>
        <div
          className={`d-flex ${isExpanded ? "flex-row" : "flex-column"} w-100 align-items-center cursor-pointer`}
          onClick={() => setCurrentView("graphical")}
        >
          <BsGraphUp className="m-2 me-2 h-8 w-10" />
          <span className={`${isExpanded ? "ms-5" : "mt-4"}`}>Graphical</span>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
