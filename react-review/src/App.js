import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import ShowMessageFunction from "./components/ShowMessageFunction";
import ShowMessageClass from "./components/ShowMessageClass";

import { SET_MESSAGE } from "./redux/constants";
import { fetchPokemons } from "./redux/actions";

function App() {
  const [showFn, setShowFn] = useState(false);
  const [showClass, setShowClass] = useState(true);
  const [message, setMessage] = useState();
  const [pokemons, setPokemons] = useState([]);
  const refInput = useRef();

  const dispatch = useDispatch();

  const handleClick = (event) => {
    const msg = refInput.current.value;
    console.log("msg", msg);
    // setMessage(msg);
    dispatch({ type: SET_MESSAGE, payload: msg });
  };

  const getPokemons = () => {
    dispatch(fetchPokemons());
  };

  useEffect(() => {
    // getPokemons();
  }, []);

  return (
    <div className="App">
      <button onClick={getPokemons}>Cargar Pokemones</button>
      {pokemons.map((item, i) => (
        <h1 key={i}>{item.name}</h1>
      ))}
      {/* <input ref={refInput}></input>
      <button onClick={handleClick}>Show text</button>

      {showFn && <ShowMessageFunction message={message} />}
      {showClass && <ShowMessageClass />}
      <button onClick={() => setShowClass(!showClass)}>
        Show class component
      </button>
      <button onClick={() => setShowFn(!showFn)}>
        Show functional component
      </button> */}
    </div>
  );
}

export default App;
