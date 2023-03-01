import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";

import movieReducer from "./movieReducer";

const rootReducers = combineReducers({
  favorite: favoritesReducer,
  move: movieReducer,
});
export default rootReducers;
