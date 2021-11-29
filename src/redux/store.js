import staffReducer from "./staffSlice";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = {
//   staff: staffReducer,
// };

const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
});

export default store;
