import React from "react";
import './index.css';

interface IInput {
  name: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  minlength?: number | undefined;
  type?: string;
  required?: boolean
}

const Input: React.FC<IInput> = (props) => {
  const {
    name,
    value,
    handleChange,
    minlength,
    type,
    required,
  } = props;

  return (
    <div className="inputContainer">
      <p>{name}</p>
      <input
        className="input"
        name={name}
        onChange={handleChange}
        value={value}
        minLength={minlength}
        type={type}
        required={required}
      />
    </div>
  )
};

export default Input;
