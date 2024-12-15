import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    items: [], // Original unfiltered list
    filteredRestaurants: [], // Filtered list
    filtersActive: false, // Track if filters are active
    filters: [],
    isSotingActive: false, //Track sorting active
    sortOption: "Relevance (Default)",
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.items = action.payload; // Assuming payload is the complete list
      state.filteredRestaurants = action.payload; // Initialize filtered list as the complete list
    },
    updateFilteredRestaurants: (state, action) => {
      state.filteredRestaurants = action.payload?.filteredResList;
      state.filtersActive =
        action.payload?.filteredResList.length !== state.items.length;
      state.filters = action.payload.filters || state.filters;
      state.isSotingActive =
        action.payload?.isSotingActive || state.isSotingActive;
      state.sortOption = action.payload.sortOption || state.sortOption;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addRestaurants, updateFilteredRestaurants, removeItem } =
  restaurantsSlice.actions;
export default restaurantsSlice.reducer;
