import { createSlice } from "@reduxjs/toolkit";
import { DEPARTMENTS } from "../../shared/staffs";

// state, reducers: state,action
// createSlice: name, state, reducers (state+ actoin)

const departmentSlice = createSlice({
  name: "department",
  initialState: DEPARTMENTS,
  reducers: {
    add: (state) => state,
  },
});

const { actions, reducer } = departmentSlice;
export const { add } = actions;
export default reducer;
