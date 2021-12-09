const Department = (
  state = {
    isLoading: true,
    departments: [],
  },
  action
) => {
  switch (action.type) {
    case "department/loading":
      return {
        ...state,
        isLoading: true,
        departments: [],
      };
    case "department/add":
      return {
        ...state,
        isLoading: false,
        departments: action.payload,
      };
    default:
      console.log("department default");
      return state;
  }
};

// const departmentSlice = createSlice({
//   name: "department",
//   initialState: currentDepartment,
//   reducers: {
//     addDepartment: (state, action) => {
//       state.forEach((department, index) => {
//         if (department.id === action.payload.department.id) {
//           department.numberOfStaff += 1;
//         }
//       });
//     },
//   },
// });

// const { actions, reducer } = departmentSlice;
// export const { addDepartment } = actions;
export default Department;
