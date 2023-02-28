import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  console.log("ne istedin ?", state);
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      const newObj = {
        id: Date.now(),
        title: action.payload.title,
        director: action.payload.director,
        genre: action.payload.genre,
        metascore: Number(action.payload.metascore),
        description: action.payload.description,
      };
      return {
        ...state,
        movies: [...state.movies, newObj],
      };
    default:
      return state;
  }
};

export default reducer;
