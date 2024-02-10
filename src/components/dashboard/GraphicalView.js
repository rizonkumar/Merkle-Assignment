import React from "react";
import AbilityListGraphicalView from "../AbilityListGraphicalView";

const GraphicalView = ({ selectedPokemonNames = [] }) => {
  if (selectedPokemonNames.length === 0) {
    return <div className="p-4">No Pokémon selected</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Pokémon Charts</h2>
      <div className="grid grid-cols-2 gap-6">
        {" "}
        {/* Container for multiple charts */}
        {selectedPokemonNames.map((pokemonName) => (
          <AbilityListGraphicalView
            key={pokemonName}
            pokemonName={pokemonName}
          />
        ))}
      </div>
    </div>
  );
};

export default GraphicalView;
