const Staff = (
  state = {
    staffs: [],
  },
  action
) => {
  switch (action.type) {
    case "staff/add":
      console.log("staff/add");
      return {
        ...state,
        staffs: action.payload,
      };
    default:
      console.log("default");
      console.log(state);
      return state;
  }
};

export default Staff;
