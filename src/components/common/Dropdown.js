import React, { useState } from "react";
import Select from "react-select";

const Dropdown = ({ items, onSelect, placeholder, isMulti, searchable }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onSelect(selected || []);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      color: "black",
      borderColor: "black",
      boxShadow: "none",
      "&:hover": {
        borderColor: "black",
      },
    }),
    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected ? "blue" : isFocused ? "lightblue" : null,
        color: "black",
      };
    },
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={items}
        isMulti={isMulti}
        isSearchable={searchable}
        placeholder={placeholder}
        styles={customStyles}
      />
    </div>
  );
};

export default Dropdown;
