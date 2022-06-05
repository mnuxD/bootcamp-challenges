import { useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("useEFFECT");
    fetch("http://localhost:4000/get")
      .then((data) => data.json())
      .then((result) => {
        console.log("RESULT ", result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React asdasd
        </a>
      </header>
    </div>
  );
}

export default App;
