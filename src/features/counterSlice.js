// import the createSlice() function to use
import { createSlice } from '@reduxjs/toolkit';

//create a var which will be a slice object
const counterSlice = createSlice({
    //name of the slice
    name: 'counter',
    //the initial state of the slice
    initialState: {num: 0},
    //all of the reducers (the logic of the state)
    reducers: {
        //note, you don't need to return the state anymore, you can just mutate the state directly and the RTK will handle the rest
        increase: state => {
            state.num++;
        },

        decrease: state => {
            state.num--;
        },

        double: state => {
            state.num *= 2;
        },

        reset: state => {
            state.num = 0;
        }
    }
});

export const {increase, decrease, double, reset} = counterSlice.actions;
export default counterSlice.reducer;
