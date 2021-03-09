import React from "react";
import './index.css';

const Input = ({ name, value, handleChange } : {name: string, value?: string, handleChange?: (e: any) => void}) => (
  <div className="inputContainer">
    <p>{name}</p>
    <input className="input" name={name} onChange={handleChange} value={value}/>
  </div>
);

export default Input;
