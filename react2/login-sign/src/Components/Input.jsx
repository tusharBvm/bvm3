import React from "react";

function Input({ type, className, name, onChange, value,checked,pattern,minLength,maxLength,min,max}) {
  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}

      />
    </>
  );
}

export default Input;


