import { createSlice } from "@reduxjs/toolkit";

const resDetailsSlice = createSlice({
  name: "resDetails",
  initialState: {
    cartItems: [], //cart items
  },
  reducers: {
    addToCart: (state, action) => {
      let isExistingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      let newCartItems;
      if (isExistingItem) {
        newCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: (item.count || 0) + 1 }
            : item
        );
        isExistingItem = true;
      } else {
        const newItem = { ...action.payload, count: 1 };
        newCartItems = [...state.cartItems, newItem];
      }
      return { ...state, cartItems: newCartItems };
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = resDetailsSlice.actions;
export default resDetailsSlice.reducer;
