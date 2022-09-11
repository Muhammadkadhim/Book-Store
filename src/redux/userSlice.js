import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    cart: [],
    favourites: [],
    authorized: false,
    error: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = state.userInfo;
            if (
                action.payload.email === email &&
                action.payload.password === password
            )
                state.authorized = true;
        },
        register: (state, action) => {
            state.userInfo = action.payload;
            state.authorized = true;
        },
        logout: (state) => {
            state.authorized = false;
        },
    },
});

export const { login, register, authorization, logout } = userSlice.actions;

export default userSlice.reducer;
