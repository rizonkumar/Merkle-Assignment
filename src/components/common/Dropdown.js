import React, { useState } from "react";
import Select from "react-select";
import { HiOutlineSearch } from "react-icons/hi";
import "../../custom-styles.css";

const Dropdown = ({ items, onSelect, placeholder, isMulti, searchable }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onSelect(selected || []);
  };

  const handleSearch = () => {
    const selectedValues = isMulti
      ? selectedOption.map((option) => option.value)
      : [selectedOption.value];
    onSelect(selectedValues);
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
      color: "black",
    }),
  };

  return (
    <div className="col-6">
      <div className="d-lg-none">
        <HiOutlineSearch
          className="h-6 w-6 text-white me-2"
          style={{ height: "24px", width: "24px", cursor: "pointer" }}
          onClick={handleSearch} // Trigger the search operation
        />
      </div>
      <div className="d-none d-lg-block">
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
    </div>
  );
};

export default Dropdown;
