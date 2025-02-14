import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import favouritesReducer from "./favouritesSlice"

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        favourites: favouritesReducer,
    }
})