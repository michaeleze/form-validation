import React from "react";
import ErrorComponent from "../ErrorComponent";
import './index.css';

interface IErrorMessageWithButton {
  errorMessage: Array<{ text: string, value: boolean }>;
  handleSubmit: (x: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string
};

const ErrorMessageWithButton: React.FC<IErrorMessageWithButton> = ({errorMessage, handleSubmit, text = 'Submit'}) => (
  <div className="errorMessageWithButton">
    <div>
      {
        errorMessage?.map((item: { text: string, value: boolean }) => (<ErrorComponent item={item} key={item.text}/>))
      }
    </div>
    <button className="submitButton" onClick={handleSubmit}>{text}</button>
  </div>
);

export default ErrorMessageWithButton
