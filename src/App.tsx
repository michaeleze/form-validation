import React, {useState} from 'react';
import Input from "./components/Input";
import ErrorComponent from "./components/ErrorComponent";
import { Validate } from "./utils";
import './App.css';

function App() {
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<any>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const message = Validate.check(password);

    setErrorMessage(message);
  };

  return (
    <div className="root">
      <div id="app" className="app">
        <div className="container">
          <Input name="email" />
          <Input
            name="password"
            handleChange={handleChange}
            value={password}
            minlength={8}
            type='password'
            required
          />
        </div>
        <div className="submitContainer">
          <div>
            {errorMessage?.map((item: { text: string, value: boolean }) => (<ErrorComponent item={item} key={item.text}/>))}
            <button className="submitButton" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
