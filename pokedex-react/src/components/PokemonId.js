import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokemon from "./Pokemon";
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");
const PokemonId = () => {
  const [pokemon, setPokemon] = useState();
  const { pokemonid } = useParams();
  const getPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonid}`
    ).then((res) => res.json());

    const newElement = {
      id: response.id,
      name: capitalize(response.name),
      image: response.sprites.back_default,
      ability: capitalize(response.abilities[0].ability.name),
    };
    setPokemon(newElement);
    console.log(newElement);
  };
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      {pokemon && (
        <Pokemon
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          ability={pokemon.ability}
        />
      )}
    </>
  );
};

export default PokemonId;
