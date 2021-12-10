// Can use any name for export default
import staffReducer from "../components/staffs/staffReducer";
import departmentReducer from "../components/departments/departmentReducer";
import departmentStaffReducer from "../components/departments/departmentStaffReducer";
import salaryReducer from "../components/salary/salaryReducer";

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    staff: staffReducer,
    department: departmentReducer,
    departmentStaff: departmentStaffReducer,
    salary: salaryReducer,
  }),
  applyMiddleware(logger, thunk)
);

export default store;
