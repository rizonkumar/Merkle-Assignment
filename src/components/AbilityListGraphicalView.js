import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import mockPokemonData from "../utils/mockData";

const AbilityListGraphicalView = ({ pokemonName }) => {
  console.log("Name", pokemonName);
  const pokemon = mockPokemonData.find((p) => p.name === pokemonName);
  console.log(pokemon);
  if (!pokemon)
    return <p className="text-merkle-red-tint">Pokemon not found</p>;

  const powerData = {
    labels: ["Power"],
    datasets: [
      {
        label: pokemon.name,
        data: [pokemon.power],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const abilitiesData = {
    labels: pokemon.abilities,
    datasets: [
      {
        label: "Abilities",
        data: pokemon.abilities.map(() => 1), // same weight
        backgroundColor: pokemon.abilities.map(
          (_, index) =>
            `hsl(${(index / pokemon.abilities.length) * 360}, 70%, 70%)`,
        ), // for the unique color for each ability
        hoverOffset: 5,
      },
    ],
  };

  console.log("Abilites Data: ", abilitiesData);
  return (
    <div className="mx-auto mb-4 max-w-md px-2 sm:px-4">
      <h2 className="mb-4 text-center text-xl font-bold text-denstu-teal ">
        {pokemon.name}
      </h2>
      <div className="flex flex-col items-center gap-3">
        <div className="">
          <Bar
            data={powerData}
            options={{ indexAxis: "y", maintainAspectRatio: true }}
          />
        </div>
        <div className="">
          <Doughnut
            data={abilitiesData}
            options={{ maintainAspectRatio: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default AbilityListGraphicalView;
