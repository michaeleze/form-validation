import React from "react";

const ErrorComponent = ({item }: {item: {text: string, value: boolean}}) => (
  <div>
    {item?.value ? <span className='checkIcon'>U+2713</span> : <span className='crossIcon'> U+2713</span>} <span>{item.text}</span>
  </div>
);

export default ErrorComponent;
