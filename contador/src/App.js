import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch(ations.decrement());
  };
  const increment = () => {
    dispatch(ations.increment());
  };
  const addBy = () => {
    dispatch(ations.addBy(10));
  };
  return (
    <div>
      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={addBy}>add 10</button>
    </div>
  );
}

export default App;
