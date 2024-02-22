import React from "react";
import AbilityListGraphicalView from "../AbilityListGraphicalView";
import "../../custom-styles.css";

const GraphicalView = ({ selectedPokemonNames = [] }) => {
  if (selectedPokemonNames.length === 0) {
    return (
      <h3 className="text-denstu-red py-4 text-center text-lg fw-bold">
        No Pokémon selected
      </h3>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center p-4">
      <h2 className="text-merkle-red-tint mb-4 w-100 text-center text-lg fw-bold">
        Pokémon Charts
      </h2>
      <div className="w-100" style={{ maxWidth: "45vw" }}>
        <div className="row row-cols-1 row-cols-sm-2 g-4">
          {selectedPokemonNames.map((pokemonName) => (
            <AbilityListGraphicalView
              key={pokemonName}
              pokemonName={pokemonName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicalView;
