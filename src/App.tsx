import React, { useState, memo } from 'react';
import Input from './components/Input';
import ErrorMessageWithButton from './components/ErrorMessageWithButton';
import { validate } from './utils';
import './App.css';

function App() {
  const [state, setState] = useState<Array<{ text: string, value: boolean }>>([]);
  const [disabled,setDisabled] =  useState<boolean>(true);

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const errorMessage = validate(event.target.value);

    setState([...state, ...errorMessage]);

    const findInvalidMessage = errorMessage.find((item) => item.value === false );

    if(!findInvalidMessage) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  },[]);

  const handleSubmit = () => alert('password ok');

  return (
    <div className="root">
      <div id="app" className="app">
        <div className="inputWrapper">
          <Input name="email"/>
          <Input
            name="password"
            handleChange={handleChange}
            minlength={8}
            type="password"
            required
            testId="input-password"
          />
        </div>
        <div className="submitWrapper">
          <ErrorMessageWithButton disabled={disabled} errorMessage={state} handleSubmit={handleSubmit}/>
        </div>
      </div>
    </div>
  );
}

export default memo(App);
