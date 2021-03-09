import React, {useState} from 'react';
import Input from "./components/Input";
import ErrorComponent from "./components/ErrorComponent";
import { Validate } from "./utils";
import './App.css';

function App() {
  const [password, setPassword] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const message = Validate.check(password);

    console.log(message);
    setErrorMessage(message);
  };

  return (
    <div className="root">
      <div id="app" className="app">
        <div className="container">
          <Input name="email"/>
          <Input name="password" handleChange={handleChange} value={password}/>
        </div>
        <div className="submitContainer">
          <div>
            {showError && errorMessage?.map((item: { text: string, value: boolean }) => <ErrorComponent item={item} key={item.text}/>)}
            <button className="submitButton" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
