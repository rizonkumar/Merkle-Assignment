import React, { useState } from "react";
import Select from "react-select";

const Dropdown = ({
  items,
  onSelect,
  placeholder,
  isMulti,
  searchable,
  width,
  height,
  border,
  optionTextColor,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onSelect(selected || []);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={items}
      isMulti={isMulti}
      isSearchable={searchable}
      placeholder={placeholder}
      styles={{
        control: (base) => ({
          ...base,
          width: width,
          minHeight: height,
          borderColor: border,
        }),
        option: (base, state) => ({
          ...base,
          color: state.isFocused ? "white" : optionTextColor,
          backgroundColor: state.isFocused ? "#FDB913" : "white",
        }),
        singleValue: (base) => ({
          ...base,
          color: optionTextColor,
        }),
        input: (base) => ({
          ...base,
          color: optionTextColor,
        }),
      }}
    />
  );
};

export default Dropdown;
