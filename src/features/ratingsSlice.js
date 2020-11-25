import { createSlice } from '@reduxjs/toolkit';

const ratingsSlice = createSlice({
    name: "ratings",
    initialState: [],
    reducers: {
        addRating: (state, action) => {
            state.push(action.payload);
        },
        removeRating: (state) => {
            state.pop();
        },
        removeSpec: (state, action) => {
            return state.filter((elem) => elem.id !== action.payload);
        },
        removeAll: () => {
            return [];
        }
    }
});

export const {addRating, removeRating, removeAll, removeSpec} = ratingsSlice.actions;
export default ratingsSlice.reducer;