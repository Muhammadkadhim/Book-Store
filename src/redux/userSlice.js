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
        saveToCart: (state, action) => {
            if (!state.cart.includes(action.payload)) {
                state.cart.push(action.payload);
            } else {
                state.cart.filter((item) => item !== action.payload);
            }
        },
        saveToFavourites: (state, action) => {
            if (!state.favourites.includes(action.payload)) {
                state.favourites.push(action.payload);
            } else {
                state.favourites = state.favourites.filter(
                    (item) => item !== action.payload
                );
            }
        },
    },
});

export const {
    login,
    register,
    authorization,
    logout,
    saveToCart,
    saveToFavourites,
} = userSlice.actions;

export default userSlice.reducer;
