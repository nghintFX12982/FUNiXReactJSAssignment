import { STAFFS } from "../shared/staffs";

export const fetchStaff = () => (dispatch) => {
  console.log("fetchStaff");
  // setTimeout(addStaff(STAFFS), 1000);
  dispatch(addStaff(STAFFS));
};

export const addStaff = (staffList) => {
  console.log("addStaff");
  return {
    type: "staff/add",
    payload: staffList,
  };
};
