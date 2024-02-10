import React from "react";
import TabularView from "./dashboard/TabularView";
import GraphicalView from "./dashboard/GraphicalView";

const Body = ({ currentView, selectedPokemonNames }) => {
  return (
    <div className="flex-grow">
      {currentView === "tabular" && (
        <TabularView selectedPokemonNames={selectedPokemonNames} />
      )}
      {currentView === "graphical" && (
        <GraphicalView selectedPokemonNames={selectedPokemonNames} />
      )}
    </div>
  );
};

export default Body;
