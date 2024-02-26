import React, { useState } from "react";
import mockPokemonData from "../utils/mockData";

const AbilityListTabularView = ({ pokemonName }) => {
  const [showDetails, setShowDetails] = useState(false);
  const pokemon = mockPokemonData.find(
    (pokemon) => pokemon.name === pokemonName
  );

  if (!pokemon) {
    return (
      <tr>
        <td colSpan="3" className="text-center">
          Pokemon not found
        </td>
      </tr>
    );
  }

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <tr className="table-hover">
      <td className="border p-2">{pokemon?.name}</td>
      <td className="border p-2">
        <ul className="list-unstyled">
          {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </td>
      <td className="border p-2 text-center">
        <strong onClick={handleToggleDetails} style={{ cursor: "pointer" }}>
          Total Power: {pokemon?.power?.total}
        </strong>
        {showDetails && (
          <ul className="list-unstyled mt-2">
            {Object.entries(pokemon?.power?.stats)
              .filter(
                ([key]) =>
                  key === "attack" ||
                  key === "defense" ||
                  key === "speed" ||
                  key === "specialAttack" ||
                  key === "specialDefense"
              )
              .map(([key, value]) => (
                <li key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </li>
              ))}
          </ul>
        )}
      </td>
    </tr>
  );
};

export default AbilityListTabularView;
