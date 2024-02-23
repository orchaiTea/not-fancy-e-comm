import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeItemFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    emptyCart(state) {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
