import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: {
        favouriteMovies: []
    },
    reducers: {
        toggleFavourite: (state, action) => {
            const movie = state.favouriteMovies.find((m) => m.id === action.payload.id);
      if (movie) {
        movie.isFavourite = !movie.isFavourite; // Toggle the favourite status
      } else {
        // Add movie to favourites if it's not already there
        state.favouriteMovies.push({ ...action.payload, isFavourite: true });
      }
        }
    }
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
