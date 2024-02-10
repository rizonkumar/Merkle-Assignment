import React from "react";
import mockPokemonData from "../utils/mockData";

const AbilityListTabularView = ({ pokemonName }) => {
  const pokemon = mockPokemonData.find(
    (pokemon) => pokemon.name === pokemonName
  );

  if (!pokemon) {
    return (
      <tr>
        <td colSpan="3">Pokemon not found</td>
      </tr>
    );
  }

  return (
    <tr className="hover:bg-gray-50">
      {" "}
      {/* Add row highlights */}
      <td className="border border-slate-300 p-2">{pokemon.name}</td>
      <td className="border border-slate-300 p-2">
        <ul className="list-disc list-inside">
          {" "}
          {/* Format abilities nicely */}
          {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </td>
      <td className="border border-slate-300 p-2 text-center">
        {pokemon.power}
      </td>
    </tr>
  );
};

export default AbilityListTabularView;
