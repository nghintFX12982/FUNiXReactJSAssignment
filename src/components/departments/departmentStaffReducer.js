const DepartmentStaff = (
  state = {
    isLoading: true,
    errmess: null,
    departmentstaffs: [],
  },
  action
) => {
  switch (action.type) {
    case "department-staffs/loading":
      return {
        ...state,
        errmess: null,
        isLoading: true,
        departmentstaffs: [],
      };

    case "department-staffs/fail":
      return {
        ...state,
        errmess: action.payload,
        isLoading: false,
        departmentstaffs: [],
      };

    case "department-staffs/add":
      return {
        ...state,
        errmess: null,
        isLoading: false,
        departmentstaffs: action.payload,
      };

    default:
      return state;
  }
};

export default DepartmentStaff;
