import React from "react";
import ErrorComponent from "../ErrorComponent";
import './index.css';

interface IErrorMessageWithButton {
  disabled: boolean;
  errorMessage: Array<{ text: string, value: boolean }>;
  handleSubmit: (x: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string
};

const ErrorMessageWithButton: React.FC<IErrorMessageWithButton> = ({disabled, errorMessage, handleSubmit, text = 'Submit'}) => (
  <div className="errorMessageWithButton">
    <div className='errorMessage'>
      {
        errorMessage?.map((item: { text: string, value: boolean }) => (<ErrorComponent item={item} key={item.text}/>))
      }
    </div>
    <div className='submitButtonWrapper'>
      <button className="submitButton" onClick={handleSubmit} disabled={disabled}>{text}</button>
    </div>
  </div>
);

export default ErrorMessageWithButton
