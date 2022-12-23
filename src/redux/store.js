import { createStore } from "redux";

const initialState = {
  likes: 0,
};

const reducer = (state = initialState, action) => {
  console.log("reducer >", action);

  switch (action.type) {
    case "INCREMENT":
      break;

    default:
      break;
  }

  return state;
};

const store = createStore(reducer);

export default store;
