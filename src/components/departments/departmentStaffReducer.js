const DepartmentStaff = (
  state = {
    isLoading: true,
    errmess: null,
    departmentstaffs: [],
  },
  action
) => {
  switch (action.type) {
    case "departmentstaffs/loading":
      return {
        ...state,
        errmess: null,
        isLoading: true,
        departmentstaffs: [],
      };
    case "departmentstaffs/fail":
      return {
        ...state,
        errmess: action.payload,
        isLoading: false,
        departmentstaffs: [],
      };

    case "departmentstaffs/add":
      return {
        ...state,
        errmess: [],
        isLoading: false,
        departmentstaffs: action.payload,
      };
    default:
      return state;
  }
};

export default DepartmentStaff;
