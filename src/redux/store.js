import staffReducer from "../components/staffs/staffSlice";
import departmentReducer from "../components/departments/departmentSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  staff: staffReducer,
  department: departmentReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
