import { INPUT_TEXT } from "./types";

const initialState = {
  text: "",
};

export const inputReducer = (state = initialState, action) => {
  console.log("input text Reducer >", action);

  switch (action.type) {
    case INPUT_TEXT:
      return { ...state };

    default:
      return state;
  }
};
