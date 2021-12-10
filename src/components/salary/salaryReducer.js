const Salary = (
  state = {
    isLoading: true,
    errmess: null,
    staffs: [],
  },
  action
) => {
  switch (action.type) {
    case "salary/loading":
      return {
        ...state,
        isLoading: true,
        errmess: null,
        staffs: [],
      };
    case "salary/fail":
      return {
        ...state,
        isLoading: false,
        errmess: action.payload,
        staffs: [],
      };
    case "salary/add":
      return {
        ...state,
        isLoading: false,
        errmess: null,
        staffs: action.payload,
      };
    default:
      return state;
  }
};

export default Salary;
