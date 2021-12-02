import { createSlice } from "@reduxjs/toolkit";
import { DEPARTMENTS } from "../../shared/staffs";

// const currentDepartmentList = [...DEPARTMENTS];
// Cannot use clone method to create new array because of READ-ONLY key
const currentDepartment = [
  {
    id: "Dept01",
    name: "Sale",
    numberOfStaff: 1,
  },
  {
    id: "Dept02",
    name: "HR",
    numberOfStaff: 1,
  },
  {
    id: "Dept03",
    name: "Marketing",
    numberOfStaff: 2,
  },
  {
    id: "Dept04",
    name: "IT",
    numberOfStaff: 1,
  },
  {
    id: "Dept05",
    name: "Finance",
    numberOfStaff: 11,
  },
];

// Get data from local storage & increase number of staffs in specific department
if (localStorage.getItem("newStaff")) {
  let localData = JSON.parse(localStorage.getItem("newStaff"));
  for (let i = 0; i < localData.length; i++) {
    const data = localData[i];
    for (let j = 0; j < currentDepartment.length; j++) {
      const department = currentDepartment[j];
      if (data.department.name === department.name) {
        department.numberOfStaff += 1;
      }
    }
  }
}

const departmentSlice = createSlice({
  name: "department",
  initialState: currentDepartment,
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
