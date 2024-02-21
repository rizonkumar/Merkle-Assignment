import React from "react";
import TabularView from "./dashboard/TabularView";
import GraphicalView from "./dashboard/GraphicalView";
import TabuleauView from "./dashboard/TableauView";

const Body = ({ currentView, selectedPokemonNames, tableauUrl }) => {
  return (
    <div className="p-md-5 p-3">
      {currentView === "tabular" && (
        <TabularView selectedPokemonNames={selectedPokemonNames} />
      )}
      {currentView === "graphical" && (
        <GraphicalView selectedPokemonNames={selectedPokemonNames} />
      )}
      {currentView === "tableau" && <TabuleauView tableauUrl={tableauUrl} />}
    </div>
  );
};

export default Body;
