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
    <>
      <div className="fixed flex-row w-full bg-blue-900 text-white sm:flex xs:block justify-between items-center p-4 z-40">
        <div className="flex items-center justify-between">
          {" "}
          <Bars3Icon
            className="h-8 w-8 cursor-pointer text-white"
            onClick={toggleSidebar}
          />
          <img
            src={LOGO_URL}
            alt="Logo"
            className="h-12 w-auto ml-7 rounded-sm"
          />
          <span className="flex items-center sm:hidden  ">
            <UserProfile user={{ name: "Rizon Kumar" }} />
          </span>
        </div>

        <div className="sm:flex mt-2 sm:m-0">
          <span className="">
            <Dropdown
              items={dropdownOptions}
              onSelect={(selected) =>
                onSelectView(selected.map((s) => s.value))
              }
              placeholder="Select Pokémon"
              isMulti={true}
              searchable={true}
            />
          </span>
          <span className="sm:flex items-center hidden ">
            <UserProfile user={{ name: "Rizon Kumar" }} />
          </span>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
