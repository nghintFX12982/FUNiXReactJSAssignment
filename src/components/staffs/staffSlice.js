import { createSlice } from "@reduxjs/toolkit";
import { STAFFS } from "../../shared/staffs";

const currentStaffList = [...STAFFS];

// Get data from local storage and update to current staff list if available
if (localStorage.getItem("newStaff")) {
  const localData = JSON.parse(localStorage.getItem("newStaff"));
  localData.forEach((data) => {
    currentStaffList.push(data);
  });
}

const staffSlice = createSlice({
  name: "staff",
  initialState: currentStaffList,
  reducers: {
    addStaff: (state, action) => {
      //state will get from initialState
      //state is current state of reducer
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = staffSlice;
export const { addStaff } = actions;
export default reducer;
