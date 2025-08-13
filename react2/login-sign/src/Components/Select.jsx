import React from "react";

const Select = ({ options, className, name, onChange, value }) => {
  return (
    <>
      <select
        className={className}
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value="">Select An Option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        // console.log("options==>",options)
        ))}
      </select>
    </>
  );
};

export default Select;

