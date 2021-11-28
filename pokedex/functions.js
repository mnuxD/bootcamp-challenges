const getPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const response = await fetch(url);
  const { results } = await response.json();
  //console.log(results);
  return results;
};

getPokemon();

const printPokemonName = async () => {
  const pokemonName = await getPokemon();
  //console.log(pokemonName);
  for (let i = 0; i < 20; i++) {
    const getPokemonDetails = async () => {
      const response = await fetch(pokemonName[i].url);
      const pokemonDetails = await response.json();
      return pokemonDetails;
    };
    const pokemonDetails = await getPokemonDetails();
    // console.log(pokemonDetails);
    console.log(pokemonDetails.abilities[0].ability.name);
    const divPokemon = document.createElement("div");
    divPokemon.classList.add("pokemon");

    const img = document.createElement("img");
    // img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    //   i + 1
    // }.png`;
    img.src = pokemonDetails.sprites.front_shiny;
    img.alt = "pokemon";

    const namePokemon = document.createElement("p");
    namePokemon.innerText = pokemonName[i].name;

    divPokemon.append(img, namePokemon);
    document.getElementById("app").append(divPokemon);
    // document.getElementById(`name${i}`).innerText = pokemonName[i - 1].name;
    // document.getElementById(
    //   `img${i}`
    // ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    // document.getElementById(``);
  }

  // console.log(pokemonName[0].sprites);
};

printPokemonName();
