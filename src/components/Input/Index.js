import React from "react";
import "./styles.css";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="Input"
    />
  );
};

export default Input;