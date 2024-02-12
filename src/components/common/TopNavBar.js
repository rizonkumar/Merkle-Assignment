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
    <div className="xs:block bg-merkle-blue fixed left-0 top-0 z-40 w-full flex-row items-center justify-between p-3 text-white sm:flex">
      <div className="flex items-center justify-between">
        {" "}
        <Bars3Icon
          className="ml-3 h-8 w-8 cursor-pointer text-white"
          onClick={toggleSidebar}
        />
        <img
          src={LOGO_URL}
          alt="Logo"
          className="ml-7 h-12 w-auto rounded-sm"
        />
        <span className="flex items-center sm:hidden  ">
          <UserProfile user={{ name: "Rizon Kumar" }} />
        </span>
      </div>

      <div className="mt-2 sm:m-0 sm:flex">
        <Dropdown
          items={dropdownOptions}
          onSelect={(selected) => onSelectView(selected.map((s) => s.value))}
          placeholder="Select Pokémon"
          isMulti={true}
          searchable={true}
        />
        <span className="hidden items-center sm:flex ">
          <UserProfile user={{ name: "Rizon Kumar" }} />
        </span>
      </div>
    </div>
  );
};

export default TopNavBar;
