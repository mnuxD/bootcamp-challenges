import Shape from "../components/shape/Shape.jsx";
import "./_paint.css";
import { useState } from "react";
const Paint = () => {
  const [userColor, setUserColor] = useState();
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <input
          value={userColor}
          type="text"
          onChange={(e) => {
            setUserColor(e.target.value);
          }}
        />
        <div
          className="colorBox red"
          onClick={(e) => {
            setUserColor("red");
          }}
        ></div>
        <div
          className="colorBox yellow"
          onClick={(e) => {
            setUserColor("yellow");
          }}
        ></div>
        <div
          className="colorBox blue"
          onClick={(e) => {
            setUserColor("blue");
          }}
        ></div>
      </div>

      <Shape userColor={userColor} type="circle" />
      <Shape userColor={userColor} type="rectangle" />
      <Shape userColor={userColor} type="square" />
      <Shape userColor={userColor} type="parallelogram" />
    </div>
  );
};
export default Paint;
