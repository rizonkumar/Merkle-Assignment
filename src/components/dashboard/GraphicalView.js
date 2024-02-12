import React from "react";
import AbilityListGraphicalView from "../AbilityListGraphicalView";

const GraphicalView = ({ selectedPokemonNames = [] }) => {
  if (selectedPokemonNames.length === 0) {
    return <div className="p-4 text-center">No Pokémon selected</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="mb-4 w-full text-center text-lg font-bold">
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
