import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../components/Home/Body/restaurentSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
  },
});

export default store;
