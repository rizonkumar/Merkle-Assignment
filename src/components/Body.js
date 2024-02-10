import React from "react";
import TabularView from "./dashboard/TabularView";
import GraphicalView from "./dashboard/GraphicalView";

const Body = ({ currentView, selectedPokemonNames, onToggleView }) => {
  return (
    <div className="p-4">
      <div className="text-right">
        <button
          onClick={onToggleView}
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Switch to {currentView === "tabular" ? "Graphical" : "Tabular"} View
        </button>
      </div>
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
