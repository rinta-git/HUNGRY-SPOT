import { configureStore } from "@reduxjs/toolkit";
import restaurentReducer from "../components/Home/Body/restaurentSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurentReducer,
  },
});

export default store;
