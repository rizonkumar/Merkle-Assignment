import React, { useState, useRef } from "react";
import Select from "react-select";
import { HiOutlineSearch } from "react-icons/hi";
import "../../custom-styles.css";

const Dropdown = ({ items, onSelect, placeholder, isMulti, searchable }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);
  const [showSelect, setShowSelect] = useState(false);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onSelect(selected || []);
  };

  const handleSearch = () => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  const toggleSelectVisibility = () => {
    setShowSelect(!showSelect);
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
          onClick={handleSearch}
        />
      </div>
      <div className="d-none d-lg-block">
        <Select
          ref={selectRef}
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
