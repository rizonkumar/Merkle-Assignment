import React from "react";
import TabularView from "./dashboard/TabularView";
import GraphicalView from "./dashboard/GraphicalView";

const Body = ({ currentView, selectedPokemonNames }) => {
  return (
    <div className="">
      {currentView === "tabular" ? (
        <TabularView selectedPokemonNames={selectedPokemonNames} />
      ) : (
        <GraphicalView selectedPokemonNames={selectedPokemonNames} />
      )}
    </div>
  );
};

export default Body;
