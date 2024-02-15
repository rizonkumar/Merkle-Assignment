import React, { useState } from "react";
import Select from "react-select";
import "../../custom-styles.css";

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
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? "#243c5a" : isFocused ? "#41547D" : null,
      color: "white",
    }),
  };

  return (
    <div className="d-flex">
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
