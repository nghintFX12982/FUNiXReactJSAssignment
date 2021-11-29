import { STAFFS, DEPARTMENTS } from "../shared/staffs";

// initialState -> action - reducer
export const initialState = {
  staffs: STAFFS,
  departments: DEPARTMENTS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
