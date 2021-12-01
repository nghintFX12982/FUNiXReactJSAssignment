import { createSlice } from "@reduxjs/toolkit";
import { STAFFS } from "../../shared/staffs";

const staffSlice = createSlice({
  name: "staff",
  initialState: STAFFS,
  reducers: {
    add: (state, action) => {
      //state will get from initialState
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = staffSlice;
export const { add } = actions;
export default reducer;
