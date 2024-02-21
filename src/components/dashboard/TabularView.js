import React from "react";
import AbilityListTabularView from "../AbilityListTabularView";
import "../../index.css";

const TabularView = ({ selectedPokemonNames = [] }) => {
  if (selectedPokemonNames.length === 0) {
    return (
      <h2 className="text-denstu-red py-4 text-center fw-bold">
        No Pokémon selected
      </h2>
    );
  }

  return (
    <div className="py-4 text-center">
      <h2 className="text-merkle-red-tint mb-4 text-center fw-bold">
        Pokémon Data
      </h2>
      <div className="overflow-auto">
        <table className="table table-responsive table-bordered">
          <thead>
            <tr className="bg-light">
              <th className="text-denstu-teal p-2 fw-bold">Name</th>
              <th className="text-denstu-teal p-2 fw-bold">Abilities</th>
              <th className="text-denstu-teal p-2 fw-bold">Power</th>
            </tr>
          </thead>
          <tbody>
            {selectedPokemonNames.map((pokemonName) => (
              <AbilityListTabularView
                key={pokemonName}
                pokemonName={pokemonName}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabularView;
