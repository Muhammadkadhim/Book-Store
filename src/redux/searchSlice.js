import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: "",
    searchRes: [],
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        saveSearchedRes: (state, action) => {
            state.searchRes = action.payload.works;
            state.searchTerm = action.payload.query;
        },
        clearState: (state) => {
            state.searchRes = [];
            state.searchTerm = "";
        },
    },
});

export const { saveSearchedRes, clearState } = searchSlice.actions;

export default searchSlice.reducer;
