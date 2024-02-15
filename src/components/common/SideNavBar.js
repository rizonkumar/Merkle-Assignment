import React from "react";
import { BsGraphUp, BsTable } from "react-icons/bs";
import "../../custom-styles.css";

const SideNavBar = ({ isExpanded, setCurrentView }) => {
  return (
    <div
      className="col-12 col-lg-2 bg-merkle-blue text-white"
    >
      <div
        className={`d-flex ${isExpanded ? "flex-row" : "flex-column"} w-100 align-items-center cursor-pointer mb-4`}
        onClick={() => setCurrentView("tabular")}
      >
        <BsTable className="m-2 me-2 h-8 w-10" />
        <span>Tabular</span>
      </div>
      <div
        className={`d-flex ${isExpanded ? "flex-row" : "flex-column"} w-100 align-items-center cursor-pointer`}
        onClick={() => setCurrentView("graphical")}
      >
        <BsGraphUp className="m-2 me-2 h-8 w-10" />
        <span>Graphical</span>
      </div>
    </div>
  );
};

export default SideNavBar;
