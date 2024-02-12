import React from "react";
import AbilityListGraphicalView from "../AbilityListGraphicalView";

const GraphicalView = ({ selectedPokemonNames = [] }) => {
  if (selectedPokemonNames.length === 0) {
    return (
      <h2 className="text-denstu-red p-4 text-center text-lg font-bold">
        No Pokémon selected
      </h2>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-merkle-red-tint mb-4 w-full text-center text-lg font-bold">
        Pokémon Charts
      </h2>
      <div className="w-full max-w-[45vw] sm:grid sm:grid-cols-2 sm:gap-4">
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
