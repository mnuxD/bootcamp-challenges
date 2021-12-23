import "./_Shape.css";
import { useState } from "react";
const Shape = ({ type, userColor }) => {
  const [bgColor, setBgColor] = useState();
  const changeColor = () => {
    setBgColor(userColor);
  };
  return (
    <div
      onClick={changeColor}
      className={`shape ${type}`}
      style={{ backgroundColor: bgColor }}
    ></div>
  );
};
export default Shape;
