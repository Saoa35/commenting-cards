import { combineReducers } from "redux";
import { likesReducer } from "./likesReducere";

export const rootReducer = combineReducers({
  likesReducer,
});
