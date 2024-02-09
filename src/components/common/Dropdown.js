import React, { useState, useEffect } from "react";
import Select from "react-select"; // Assuming you're using react-select

const Dropdown = ({
  onSelect,
  placeholder,
  isMulti = false,
  searchable = true,
  apiURL,
  width,
  height,
  border,
  optionTextColor,
}) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(isMulti ? [] : "");

  useEffect(() => {
    if (apiURL) {
      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
          const formattedOptions = data.results.map((item) => ({
            value: item.name,
            label: item.name,
          }));
          setOptions(formattedOptions);
        })
        .catch((error) => console.error("Fetching error: ", error));
    }
  }, [apiURL]);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onSelect(selected);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isMulti={isMulti}
      isSearchable={searchable}
      placeholder={placeholder}
      styles={{
        control: (base) => ({
          ...base,
          width,
          minHeight: height,
          borderColor: border,
        }),
        option: (base, state) => ({
          ...base,
          color: state.isFocused ? "white" : optionTextColor, // Change color on focus
          backgroundColor: state.isFocused ? "#FDB913" : "white", // Change background color on focus
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
