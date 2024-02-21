import React from "react";
import TableauReport from "tableau-react";

const TableauView = () => {
  const options = {
    height: "500px",
    width: "100%",
    hideTabs: true,
    hideToolbar: true,
  };

  const tableauUrl =
    "https://prod-apnortheast-a.online.tableau.com/t/rizonrahi0639313a95/authoring/react/Dashboard1/Sheet%201#4";
  return (
    <div>
      <h2>Tableau Dashboard</h2>
      <TableauReport url={tableauUrl} options={options} />
    </div>
  );
};

export default TableauView;
