import { baseUrl } from "../shared/baseUrl";

// Fetch staff data from baseUrl
export const fetchStaff = () => (dispatch) => {
  console.log("fetchStaff");

  return fetch(baseUrl)
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          let err = new Error("Error " + res.status + ": " + res.statusText);
          throw err;
        }
      },
      (err) => {
        let errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((staffList) => dispatch(addStaff(staffList)));
};

export const addStaff = (staffList) => {
  console.log("addStaff");
  return {
    type: "staff/add",
    payload: staffList,
  };
};
