import { COMMENT_CREATE } from "./types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  console.log("input text Reducer >", action);

  //   switch (action.type) {
  //     case COMMENT_CREATE:
  //       return { ...state, text: action.text };

  //     default:
  return state;
  //   }
};
