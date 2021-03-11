import React, {useState} from 'react';
import Input from "./components/Input";
import ErrorMessageWithButton from "./components/ErrorMessageWithButton";
import {Validate} from "./__helper";
import './App.css';

function App() {
  const [state, setState] = useState<Array<{ text: string, value: boolean }>>([]);
  const [disabled,setDisabled] =  useState<boolean>(true);

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const errorMessage = Validate.check(event.target.value);
    setState([...state, ...errorMessage]);

    const findInvalid = errorMessage.find((item) => item.value === false );
    if(!findInvalid) {
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
            type='password'
            required
          />
        </div>
        <div className="submitWrapper">
          <ErrorMessageWithButton disabled={disabled} errorMessage={state} handleSubmit={handleSubmit}/>
        </div>
      </div>
    </div>
  );
}

export default App;
