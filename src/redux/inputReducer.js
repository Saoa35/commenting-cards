import { INPUT_TEXT } from "./types";

const initialState = {
  text: "",
};

export const inputReducer = (state = initialState, action) => {
  console.log("input text Reducer >", action);

  switch (action.type) {
    case INCREMENT:
      return { ...state, likes: state.likes + 1 };

    case DECREMENT:
      return { ...state, likes: state.likes - 1 };

    default:
      return state;
  }
};
