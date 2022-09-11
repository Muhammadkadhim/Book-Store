import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchRes: [],
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        saveSearchedRes: (state, action) => {
            state.searchRes = action.payload;
        },
    },
});

export const { saveSearchedRes } = searchSlice.actions;

export default searchSlice.reducer;
