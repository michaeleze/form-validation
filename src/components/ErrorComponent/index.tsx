import React from "react";
import './index.css';

const ErrorComponent = ({item }: {item: {text: string, value: boolean}}) => (
  <div>
    {item?.value ? <span className='checkIcon'>&#10003;</span> : <span className='crossIcon'> &#10007; </span>} <span>{item.text}</span>
  </div>
);

export default ErrorComponent;
