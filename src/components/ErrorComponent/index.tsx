import React from "react";
import './index.css';

const ErrorComponent:React.FC<{item: {text: string, value?: boolean}, testId?: string}> = ({ item, testId = 'error-component' }) => (
  <div className='errorText' data-testid={testId}>
    {item?.value ? <span className='checkIcon'>&#10003;</span> : <span className='crossIcon'> &#10007; </span>} <span>{item.text}</span>
  </div>
);

export default ErrorComponent;
