import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../components/Home/Body/restaurentSlice";
import resDetailsReducer from "../components/DetailsPage/resDetailsSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    resDetails: resDetailsReducer,
  },
});

export default store;
