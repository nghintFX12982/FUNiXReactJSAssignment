import { createSlice } from "@reduxjs/toolkit";
import { DEPARTMENTS } from "../../shared/staffs";

const departmentSlice = createSlice({
  name: "department",
  initialState: DEPARTMENTS,
  reducers: {
    addDepartment: (state, action) => {
      state.forEach((department, index) => {
        if (department.id === action.payload.department.id) {
          department.numberOfStaff += 1;
        }
      });
    },
  },
});

const { actions, reducer } = departmentSlice;
export const { addDepartment } = actions;
export default reducer;
