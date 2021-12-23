import { useState } from "react";
import "./App.css";
import BoxContainer from "./components/BoxContainer";

function App() {
  const [colorState, setColorState] = useState("black");
  const stateBorder = (id) => {
    var black = document.getElementById("black");
    var blue = document.getElementById("blue");
    var green = document.getElementById("green");
    black.classList.remove("border__orange");
    blue.classList.remove("border__orange");
    green.classList.remove("border__orange");
    var select = document.getElementById(id);
    select.classList.add("border__orange");
  };

  return (
    <div className="app">
      <div className="box--container">
        <BoxContainer colorState={colorState} />
        <BoxContainer colorState={colorState} />
        <BoxContainer colorState={colorState} />
        <BoxContainer colorState={colorState} />
        <BoxContainer colorState={colorState} />
        <BoxContainer colorState={colorState} />
        <BoxContainer colorState={colorState} />
        <BoxContainer colorState={colorState} />
        <BoxContainer colorState={colorState} />
        <BoxContainer colorState={colorState} />
      </div>
      <h2>Select a color and click on any cell of the grid</h2>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        <div
          id="black"
          className="selectColor black border__orange"
          onClick={(e) => {
            setColorState("black");
            stateBorder("black");
          }}
        ></div>
        <div
          id="blue"
          className="selectColor blue"
          onClick={(e) => {
            setColorState("blue");
            stateBorder("blue");
          }}
        ></div>
        <div
          id="green"
          className="selectColor green"
          onClick={(e) => {
            setColorState("green");
            stateBorder("green");
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
