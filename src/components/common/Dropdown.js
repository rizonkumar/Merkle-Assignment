import React from "react";

const Dropdown = ({ items = [], onSelect, placeholder }) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="bg-gray-700 text-white h-10 px-4 border border-gray-600 rounded shadow"
    >
      <option value="">{placeholder}</option>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
