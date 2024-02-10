// TopNavBar.js
import React from "react";
import Dropdown from "./Dropdown";
import UserProfile from "./UserProfile";
import { LOGO_URL } from "../../utils/constants";
import { Bars3Icon } from "@heroicons/react/24/outline";
import mockPokemonData from "../../utils/mockData";

const TopNavBar = ({ toggleSidebar, onSelectView }) => {
  const dropdownOptions = mockPokemonData.map((pokemon) => ({
    value: pokemon.name,
    label: pokemon.name,
  }));

  return (
    <div className="fixed w-full bg-blue-900 text-white flex justify-between items-center p-4 z-40">
      <Bars3Icon
        className="h-8 w-8 cursor-pointer text-white"
        onClick={toggleSidebar}
      />
      <img src={LOGO_URL} alt="Logo" className="h-12 w-auto ml-4" />
      <div className="flex items-center">
        <Dropdown
          items={dropdownOptions}
          onSelect={(selected) => onSelectView(selected.map((s) => s.value))}
          placeholder="Select Pokémon"
          isMulti={true}
          searchable={true}
        />
        <UserProfile user={{ name: "Rizon Kumar" }} />
      </div>
    </div>
  );
};

export default TopNavBar;
