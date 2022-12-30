import { COMMENT_CREATE, COMMENT_UPDATE } from "./types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return { ...state, comments: [...state.comments, action.data] };

    case COMMENT_UPDATE:
      return { ...state };

    default:
      return state;
  }
};
