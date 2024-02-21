import React, { useState, useRef } from "react";
import Select, { components } from "react-select";
import { HiOutlineSearch } from "react-icons/hi";

const Dropdown = ({ items, onSelect, placeholder, isMulti, searchable }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onSelect(selected || []);
  };

  const MultiValue = (props) => {
    if (selectedOption.length > 1 && props.index >= 1) {
      return props.index === 1 ? (
        <components.MultiValue {...props} children=".." />
      ) : null;
    }
    return <components.MultiValue {...props} />;
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
    valueContainer: (provided) => ({
      ...provided,
      overflow: "hidden",
    }),
    multiValue: (styles) => ({
      ...styles,
      maxWidth: "100%",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
    }),
  };

  return (
    <div className="col-6">
      <div className="d-lg-none">
        <HiOutlineSearch
          className="h-6 w-6 text-white me-2"
          style={{ height: "24px", width: "24px", cursor: "pointer" }}
          onClick={() => selectRef.current.focus()}
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
          components={{ MultiValue }}
        />
      </div>
    </div>
  );
};

export default Dropdown;
