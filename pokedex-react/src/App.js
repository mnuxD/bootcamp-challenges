import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import Pokemones from "./components/Pokemones";
import PokemonId from "./components/PokemonId";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Pokemones />} />
          <Route path="/pokemon/:pokemonid" element={<PokemonId />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
