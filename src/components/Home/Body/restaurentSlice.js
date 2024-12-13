import { createSlice } from "@reduxjs/toolkit";

const restaurentSlice = createSlice({
  name: "restaurents",
  initialState: {
    items: [], // Original unfiltered list
    filteredRestaurants: [], // Filtered list
    filtersActive: false, // Track if filters are active
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.items = action.payload; // Assuming payload is the complete list
      state.filteredRestaurants = action.payload; // Initialize filtered list as the complete list
    },
    updateFilteredRestaurants: (state, action) => {
      state.filteredRestaurants = action.payload;
      state.filtersActive = action.payload.length !== state.items.length;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addRestaurants, updateFilteredRestaurants, removeItem } = restaurentSlice.actions;
export default restaurentSlice.reducer;
