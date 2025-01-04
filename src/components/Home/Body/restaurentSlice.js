import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    items: [], // Original unfiltered list
    filteredRestaurants: [], // Filtered list
    filtersActive: false, // Track if filters are active
    filters: [],
    isSortingActive: false, //Track sorting active
    sortOption: "Relevance (Default)",
    isSearchActive: false,
    searchText: "",
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.items = action.payload; // Assuming payload is the complete list
      state.filteredRestaurants = action.payload; // Initialize filtered list as the complete list
    },
    updateFilteredRestaurants: (state, action) => {
      state.filteredRestaurants = action.payload?.filteredResList;
      state.filtersActive = action.payload?.filters?.length > 0 || state.filtersActive;
      state.filters = action.payload?.filters || state?.filters;
      state.isSortingActive =
        action.payload?.isSortingActive ?? state.isSortingActive;
      state.sortOption = action.payload?.sortOption || state.sortOption;
      state.isSearchActive =
        action.payload?.isSearchActive ?? state?.isSearchActive;
      state.searchText = action.payload?.searchText ?? state?.searchText; //returns action.payload.searchText if it is not null or undefined. Otherwise, it retains the current value of state.searchText
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addRestaurants, updateFilteredRestaurants, removeItem } =
  restaurantsSlice.actions;
export default restaurantsSlice.reducer;
