import { SET_POKEMONS } from "../constants";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return { pokemons: action.payload };

    default:
      return state;
  }
}
