const Staff = (state = { staffs: [] }, action) => {
  switch (action.type) {
    case "staff/add":
      console.log("staff/add");
      return {
        ...state,
        staffs: action.payload,
      };
    default:
      console.log("default");
      return state;
  }
};

// const { actions, reducer } = staffSlice;
// export const { addStaff } = actions;
// export default reducer;
export default Staff;
