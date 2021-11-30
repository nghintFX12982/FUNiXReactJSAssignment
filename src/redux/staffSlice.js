//store: state + action -> reducer
import { createSlice } from "@reduxjs/toolkit";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";

export const staffSlice = createSlice({
  name: "staff",
  initialState: {
    staffs: STAFFS,
    departments: DEPARTMENTS,
  },
  reducers: {
    add: (state, action) => {
      return state.staffs.push(action.payload);
      // return state;
    },
  },
});

const { actions, reducer } = staffSlice;
export const { add } = staffSlice.actions; // named export
export default reducer; // default export
