import { createSlice } from "@reduxjs/toolkit";

const resDetailsSlice = createSlice({
  name: "resDetails",
  initialState: {
    cartItems: [], //cart items
  },
  reducers: {
    addToCart: (state, action) => {
      let isExistingItem = state.cartItems.find(
        (item) => item.card?.info?.id === action.payload.card?.info?.id
      );
      let newCartItems;
      if (isExistingItem) {
        newCartItems = state.cartItems.map((item) =>
          item?.card?.info?.id === action.payload.card?.info?.id
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
    updateQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.card?.info?.id === action.payload.card?.info?.id
          ? { ...item, count: action.payload.count }
          : item
      );
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.card?.info?.id !== action.payload.card?.info?.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, updateQty, removeFromCart, clearCart } = resDetailsSlice.actions;
export default resDetailsSlice.reducer;
