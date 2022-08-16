import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    authorized: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            if (state.userInfo === action.payload) {
                state.authorized = true;
            }
        },
        register: (state, action) => {
            state.userInfo = action.payload;
            state.authorized = true;
            localStorage.setItem("user", state.userInfo);
        },
        logout: (state) => {
            state.userInfo = {};
            state.authorized = false;
        },
        authorization: (state, action) => {},
    },
});

export const { login, register, authorization } = userSlice.actions;

export default userSlice.reducer;
