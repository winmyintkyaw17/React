import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    watchedMovies: []
}
const movieSlice = createSlice({
    name: "movies",
   initialState,
    reducers: {
        addToWatched: (state, action) => {
            if (!state.watchedMovies.some((movie) => movie.id === action.payload.id)) {
              state.watchedMovies.push(action.payload);
            }
          },
          removeFromWatched: (state, action) => {
            state.watchedMovies = state.watchedMovies.filter(
              (movie) => movie.id !== action.payload
            );
          },
    }
})

export const { addToWatched,removeFromWatched} = movieSlice.actions;
export default movieSlice.reducer;