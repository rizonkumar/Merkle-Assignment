import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import mockPokemonData from "../utils/mockData";

const AbilityListGraphicalView = ({ pokemonName }) => {
  const pokemon = mockPokemonData.find((p) => p.name === pokemonName);
  if (!pokemon) {
    return <p style={{ color: "#F23A1D" }}>Pokemon not found</p>;
  }

  const statsLabels = Object.keys(pokemon.power.stats);
  const statsValues = Object.values(pokemon.power.stats);

  const primaryColor = "#12295D";
  const secondaryColor = "#5B19C4";

  const barChartBackgroundColors = statsValues.map((_, index) =>
    index % 2 === 0 ? primaryColor : secondaryColor
  );

  const powerData = {
    labels: statsLabels,
    datasets: [
      {
        label: `${pokemon.name} Stats`,
        data: statsValues,
        backgroundColor: barChartBackgroundColors,
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartBackgroundColors = ["#00CACF", "#06757E"];

  const abilitiesData = {
    labels: pokemon.abilities,
    datasets: [
      {
        label: "Abilities",
        data: pokemon.abilities.map(() => 1),
        backgroundColor: pokemon.abilities.map(
          (_, index) =>
            doughnutChartBackgroundColors[
              index % doughnutChartBackgroundColors?.length
            ]
        ),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="mx-auto mb-4 px-2 px-sm-4" style={{ maxWidth: "32rem" }}>
      <h2
        className="mb-4 text-center text-xl fw-bold"
        style={{ color: primaryColor }}
      >
        {pokemon.name}
      </h2>
      <div className="d-flex flex-column align-items-center gap-4">
        <div className="w-100">
          <Bar data={powerData} options={{ maintainAspectRatio: true }} />
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
