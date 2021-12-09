// Can use any name for export default
import staffReducer from "../components/staffs/staffReducer";
import departmentReducer from "../components/departments/departmentSlice";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    staff: staffReducer,
    department: departmentReducer,
  }),
  applyMiddleware(logger, thunk)
);

export default store;
