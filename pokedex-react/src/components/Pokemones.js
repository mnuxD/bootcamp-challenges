import "../App.css";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";

function Pokemones() {
  return (
    <div className="body">
      <p>***** POKEDEX *****</p>
      <div className="app">
        <Pokedex />
      </div>
    </div>
  );
}

export default Pokemones;
