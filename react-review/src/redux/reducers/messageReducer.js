import { SET_MESSAGE } from "../constants";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return { message: "Hola message!!!" };

    default:
      return state;
  }
}
