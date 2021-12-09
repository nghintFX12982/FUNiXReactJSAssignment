const Staff = (
  state = {
    isLoading: true,
    staffs: [],
  },
  action
) => {
  switch (action.type) {
    case "staff/loading":
      return {
        ...state,
        isLoading: true,
        staffs: [],
      };
    case "staff/add":
      return {
        ...state,
        isLoading: false,
        staffs: action.payload,
      };
    default:
      return state;
  }
};

export default Staff;
