import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [
    {
        id: 1,
        name: "Place 1",
        image:
        "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 2,
        name: "Place 2",
        image:
        "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 3,
        name: "Place 3",
        image:
        "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 4,
        name: "Place 4",
        image:
        "https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 5,
        name: "Place 5",
        image:
        "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 6,
        name: "Place 6",
        image:
        "https://images.pexels.com/photos/3889987/pexels-photo-3889987.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 7,
        name: "Place 7",
        image:
        "https://images.pexels.com/photos/1804177/pexels-photo-1804177.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Popular Places",
        visited: false,
    },
    {
        id: 8,
        name: "Place 8",
        image:
        "https://images.pexels.com/photos/72479/pexels-photo-72479.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Popular Places",
        visited: false,
    },
]};
const placesSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        markAsVisited: (state, action) => {
            const place = state.cards.find(
                (place) => place.id === action.payload
            );
            if(place) {
                place.visited =true;
            }
        },
        unMarkAsVisited: (state,action) => {
            const place = state.cards.find(
                (place) => place.id === action.payload
            );
            if (place) {
                place.visited = false;
            }
        }
    },
});
export const { markAsVisited, unMarkAsVisited} = placesSlice.actions;
export default placesSlice.reducer;