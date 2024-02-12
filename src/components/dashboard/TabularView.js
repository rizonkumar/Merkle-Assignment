import AbilityListTabularView from "../AbilityListTabularView";

const TabularView = ({ selectedPokemonNames = [] }) => {
  if (selectedPokemonNames.length === 0) {
    return (
      <h2 className="text-denstu-red p-4 text-center text-lg font-bold">
        No Pokémon selected
      </h2>
    );
  }

  return (
    <div className="p-4 text-center">
      <h2 className="text-merkle-red-tint relative mb-4 text-center text-lg font-bold">
        Pokémon Data
      </h2>
      <div className="overflow-x-auto">
        {" "}
        <table className="w-full table-auto border-collapse border border-slate-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-denstu-teal border border-slate-300 p-2 font-bold">
                Name
              </th>
              <th className="text-denstu-teal border border-slate-300 p-2 font-bold">
                Abilities
              </th>
              <th className="text-denstu-teal border border-slate-300 p-2 font-bold">
                Power
              </th>
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
