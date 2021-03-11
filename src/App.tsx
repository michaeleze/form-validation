import React, {useState} from 'react';
import Input from "./components/Input";
import ErrorMessageWithButton from "./components/ErrorMessageWithButton";
import {Validate, ERRORMESSAGE} from "./utils";
import './App.css';

function App() {
  const [state, setState] = useState<any>([]);
  const [disabled,setDisabled] =  useState<boolean>(true);

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const message = Validate.check(event.target.value);
    setState(message);
  }, []);

  const handleSubmit = () => {
    const findInvalid = state.find((message: {text: string, value: boolean }) => message.value === false);

    if(findInvalid) {
      return;
    }
    else {
      setDisabled(false)
    }
  };

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
