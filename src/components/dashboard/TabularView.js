import AbilityListTabularView from "../AbilityListTabularView";

const TabularView = ({ selectedPokemonNames = [] }) => {
  // console.log("Selected Pokemon Names in Tabular View:", selectedPokemonNames);

  if (selectedPokemonNames.length === 0) {
    return <div className="p-4 text-center">No Pokémon selected</div>;
  }

  return (
    <div className="p-4 text-center">
      <h2 className="relative mb-4 text-center text-lg font-bold">
        Pokémon Data
      </h2>
      <div className="overflow-x-auto">
        {" "}
        <table className="w-full table-auto border-collapse border border-slate-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-slate-300 p-2">Name</th>
              <th className="border border-slate-300 p-2">Abilities</th>
              <th className="border border-slate-300 p-2">Power</th>
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
