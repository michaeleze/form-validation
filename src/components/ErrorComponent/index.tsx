import React from "react";

const ErrorComponent = ({item }: {item: {text: string, value: boolean}}) => (
  <div>
    {item?.value ? <span>correct</span> : <span> wrong</span>} <span>{item.text}</span>
  </div>
);

export default ErrorComponent;
