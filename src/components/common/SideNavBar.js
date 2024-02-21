import React from "react";
import { BsGraphUp, BsTable } from "react-icons/bs";
import { SiTableau } from "react-icons/si";
import "../../custom-styles.css";

const SideNavBar = ({ isExpanded, setCurrentView }) => {
  return (
    <div
      className={`col-12 col-lg-2 bg-merkle-blue text-white ${isExpanded ? "side-nav-expanded" : "side-nav-collapsed"}`}
    >
      <div
        className="d-flex flex-column w-100 align-items-center cursor-pointer mb-4"
        onClick={() => setCurrentView("tabular")}
      >
        <BsTable className="m-2 me-2 h-8 w-10" />
        <span>Tabular</span>
      </div>
      <div
        className="d-flex flex-column w-100 align-items-center cursor-pointer mb-4"
        onClick={() => setCurrentView("graphical")}
      >
        <BsGraphUp className="m-2 me-2 h-8 w-10" />
        <span>Graphical</span>
      </div>
      <div
        className="d-flex flex-column w-100 align-items-center cursor-pointer mb-4"
        onClick={() => setCurrentView("tableau")}
      >
        <SiTableau className="m-2 me-2 h-8 w-10" />
        <span>Tableau</span>
      </div>
    </div>
  );
};

export default SideNavBar;
