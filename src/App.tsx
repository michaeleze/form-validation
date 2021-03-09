import React, {useState} from 'react';
import Input from "./components/Input";
import ErrorComponent from "./components/ErrorComponent";
import './App.css';

const ERRORMESSAGE = [
  {text: '8+ characters', value: false},
  {text: 'lowercase letter', value: false},
  {text: 'uppercase letter', value: false},
  {text: 'number', value: false},
  {text: 'special character', value: false}
]

function App() {
  const [password, setPassword] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>(ERRORMESSAGE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (!password) {
      setShowError(true);
    } else if (password?.length >= 8) {
      setErrorMessage((prevState: any) => {
        const findError = [...prevState].find(error => error.text === '8+ characters');
        findError.value = true;
        return [...prevState];
      });
      console.log(errorMessage, /[a-z]/.test(password))
      setShowError(true);
      setPassword('');
    } else if ((/[a-z]/.test(password))) {
      setErrorMessage((prevState: any) => {
        const findError = [...prevState].find(error => error.text === 'lowercase letter');
        findError.value = true;
        return [...prevState];
      });
      console.log(password, errorMessage, /[a-z]/.test(password))
      setShowError(true);
      setPassword('');
    } else if ((/[A-Z]/.test(password))) {
      setErrorMessage((prevState: any) => {
        const findError = [...prevState].find(error => error.text === 'uppercase letter');
        findError.value = true;
        return [...prevState];
      });
      console.log(errorMessage, /[a-z]/.test(password))
      setShowError(true);
      setPassword('');
    } else {
      setErrorMessage(ERRORMESSAGE);
    }
  }

  return (
    <div className="root">
      <div id="app" className="app">
        <div className="container">
          <Input name="Email"/>
          <Input name="Password" handleChange={handleChange} value={password}/>
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
