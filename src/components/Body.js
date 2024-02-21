import React from "react";
import TabularView from "./dashboard/TabularView";
import GraphicalView from "./dashboard/GraphicalView";

const Body = ({ currentView, selectedPokemonNames }) => {
  console.log(currentView);
  return (
    <div className="p-3 md:p-8">
      {currentView === "tabular" ? (
        <TabularView selectedPokemonNames={selectedPokemonNames} />
      ) : (
        <GraphicalView selectedPokemonNames={selectedPokemonNames} />
      )}
    </div>
  );
};

export default Body;
