import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    authorized: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {},
        register: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("user", state.userInfo);
        },
        authorization: (state, action) => {},
    },
});

export const { login, register, authorization } = userSlice.actions;

export default userSlice.reducer;
