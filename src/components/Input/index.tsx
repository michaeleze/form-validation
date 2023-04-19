import React from "react";
import './index.css';

interface IInput {
  name: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  minlength?: number | undefined;
  type?: string;
  required?: boolean;
  testId?: string;
}

const Input: React.FC<IInput> = (props) => {
  const {
    name,
    value,
    handleChange,
    minlength,
    type,
    required,
    testId
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
        data-testid={testId}
      />
    </div>
  )
};

export default Input;
