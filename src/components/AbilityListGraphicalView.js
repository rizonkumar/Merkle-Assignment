import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import mockPokemonData from "../utils/mockData";

const AbilityListGraphicalView = ({ pokemonName }) => {
  const pokemon = mockPokemonData.find((p) => p.name === pokemonName);
  if (!pokemon)
    return <p className="text-merkle-red-tint">Pokemon not found</p>;

  const powerData = {
    labels: ["Power"],
    datasets: [
      {
        label: pokemon.name,
        data: [pokemon.power],
        backgroundColor: ["#996DDF"],
        borderColor: ["#05051E"],
        borderWidth: 1,
      },
    ],
  };

  const customColors = ["#439CA3", "#5B19C4", "#FFCE56"];
  const abilitiesData = {
    labels: pokemon.abilities,
    datasets: [
      {
        label: "Abilities",
        data: pokemon.abilities.map(() => 1),
        backgroundColor: pokemon.abilities.map(
          (_, index) => customColors[index % customColors.length]
        ),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="mx-auto mb-4 px-2 px-sm-4" style={{ maxWidth: "32rem" }}>
      {" "}
      <h2 className="mb-4 text-center text-xl fw-bold text-denstu-teal">
        {pokemon.name}
      </h2>
      <div className="d-flex flex-column align-items-center gap-4">
        <div className="w-100">
          <Bar
            data={powerData}
            options={{ indexAxis: "y", maintainAspectRatio: true }}
          />
        </div>
        <div className="w-100">
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
