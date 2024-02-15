import React from "react";
import Dropdown from "./Dropdown";
import UserProfile from "./UserProfile";
import { LOGO_URL } from "../../utils/constants";
import { Bars3Icon } from "@heroicons/react/24/outline";
import mockPokemonData from "../../utils/mockData";
import "../../custom-styles.css";

const TopNavBar = ({ toggleSidebar, onSelectView }) => {
  const dropdownOptions = mockPokemonData.map((pokemon) => ({
    value: pokemon.name,
    label: pokemon.name,
  }));

  return (
    <div className="d-flex fixed-top align-items-center justify-content-between w-full bg-merkle-blue p-3 text-white">
      <div className="d-flex align-items-center">
        <Bars3Icon
          style={{ height: "32px", width: "32px", cursor: "pointer" }}
          className="ms-3 text-white"
          onClick={toggleSidebar}
        />
        <img
          src={LOGO_URL}
          alt="Logo"
          className="ms-7"
          style={{ height: "48px", maxWidth: "120px" }}
        />
      </div>
      <div className="d-flex align-items-center mt-2">
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
