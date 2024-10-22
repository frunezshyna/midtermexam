import './App.css';
import { useState } from "react";

function Key({ label, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  )
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");
  const [nameDisplayed, setNameDisplayed] = useState(false);

  const messages = [
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared",
    "Having A Strong Work Ethic"
  ];

  const numClickHandler = (e) => {
    const index = parseInt(e.target.innerHTML);
    if (index >= 0 && index < messages.length) {
      setDisp(messages[index]);
    }
  }

  const resetClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
    setNameDisplayed(false);
  }

  const nameClickHandler = () => {
    setDisp("Frunez Shyna Cayanan");
    setNameDisplayed(true);
  }

  return (
    <div className="App">
      <h1>Frunez Shyna Cayanan - IT3A</h1>
      <div className="Calc">
        <div className="Disp">
          <Display display={disp} />
        </div>
        <div className="Buttons">
          {[...Array(10)].map((_, index) => (
            <Key key={index} label={index} clickHandler={numClickHandler} />
          ))}
          <Key label={"RESET"} clickHandler={resetClickHandler} />
          <Key label={"NAME"} clickHandler={nameClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
