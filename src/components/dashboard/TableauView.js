import React from "react";
import TableauReport from "tableau-react";

const TableauView = () => {
  const options = {
    height: "800px",
    width: "100%",
    hideTabs: true,
    hideToolbar: true,
  };

  const tableauUrl =
    "https://prod-apnortheast-a.online.tableau.com/t/rizonrahi0639313a95/views/react/Dashboard1?:origin=card_share_link&:embed=n";

  return (
    <div className="container mt-1">
      {" "}
      <h2 className="text-center mb-4">Tableau Dashboard</h2>
      <div className="embed-responsive embed-responsive-16by9">
        {" "}
        <TableauReport url={tableauUrl} options={options} />
      </div>
    </div>
  );
};

export default TableauView;
