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
      return state;
  }
};

export default Department;
