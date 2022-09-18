import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        saveToCart: (state, action) => {
            const index = state.cart.findIndex(
                (book) => book.id === action.payload.id
            );
            if (index === -1) {
                state.cart.push(action.payload);
            } else {
                state.cart = state.cart.filter(
                    (favourite) => favourite.id !== action.payload.id
                );
            }
        },
        saveTotalPrice: (state, action) => {
            state.totalPrice = state.totalPrice + action.payload;
        },
    },
});

export const { saveToCart, saveTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
