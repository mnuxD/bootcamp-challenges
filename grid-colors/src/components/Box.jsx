import "../App.css";
import { useState } from "react";
const Box = ({ colorState }) => {
  const [color, setColor] = useState();
  const changeColor = () => {
    setColor(colorState);
  };
  return <div className={`box ${color}`} onClick={changeColor}></div>;
};
export default Box;
