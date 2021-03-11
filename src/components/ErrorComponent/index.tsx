import React from "react";
import './index.css';

const ErrorComponent:React.FC<{item: {text: string, value: boolean}}> = ({item }) => (
  <p>
    {console.log("item", item)}
    {item?.value ? <span className='checkIcon'>&#10003;</span> : <span className='crossIcon'> &#10007; </span>} <span>{item.text}</span>
  </p>
);

export default ErrorComponent;
