import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
