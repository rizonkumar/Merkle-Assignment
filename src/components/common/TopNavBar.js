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

  console.log(dropdownOptions);

  return (
    <div className="bg-blue-900 text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" onClick={toggleSidebar} />
        <img src={LOGO_URL} alt="Logo" className="h-8 ml-4 " />
      </div>
      <div className="flex items-center">
        <Dropdown
          items={dropdownOptions}
          onSelect={(selected) => onSelectView(selected.map((s) => s.value))}
          placeholder="Select Pokémon"
          isMulti={true}
          searchable={true}
          width="300px"
          height="40px"
          optionTextColor="black"
          border="1px solid #ccc"
        />
        <UserProfile user={{ name: "Rizon Kumar" }} />
      </div>
    </div>
  );
};

export default TopNavBar;
