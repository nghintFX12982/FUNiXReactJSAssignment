import { createSlice } from "@reduxjs/toolkit";
import { STAFFS } from "../../shared/staffs";

const staffSlice = createSlice({
  name: "staff",
  initialState: STAFFS,
  reducers: {
    addStaff: (state, action) => {
      //state will get from initialState
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = staffSlice;
export const { addStaff } = actions;
export default reducer;
