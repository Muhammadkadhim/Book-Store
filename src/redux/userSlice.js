import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    email: "",
    password: "",
    isAuthorized: false,
    message: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        register: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
            let userInfo = {
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
            };
            localStorage.setItem("user", JSON.stringify(userInfo));
            state.isAuthorized = true;
        },
        login: (state, action) => {
            let parsedUserData = JSON.parse(localStorage.getItem("user"));
            let userData = {
                username: parsedUserData.username,
                email: parsedUserData.email,
                password: parsedUserData.password,
            };
            if (JSON.stringify(userData) === JSON.stringify(action.payload)) {
                state.isAuthorized = true;
            } else {
                state.message = "Please check your username or password again!";
            }
        },
        logout: (state) => {
            state.isAuthorized = false;
        },
    },
});

export const { login, register, logout } = userSlice.actions;

export default userSlice.reducer;
