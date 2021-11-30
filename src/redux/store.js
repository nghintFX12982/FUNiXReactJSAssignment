import staffReducer from "./staffSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
});

export default store;
