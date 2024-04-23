import React from "react";
import "./Styles.css";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button type={Type} onClick={onClick} className="Button">
      {Text}
    </button>
  );
};
    
export default Button;