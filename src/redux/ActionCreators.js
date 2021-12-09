import { addDepartment } from "../components/departments/departmentReducer";
import { baseUrl } from "../shared/baseUrl";

// ----- Fetch staff data from baseUrl -----
export const fetchStaff = () => (dispatch) => {
  return fetch(baseUrl + "staffs")
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

// ----- Fetch department data from baseUrl -----
export const fetchDepartment = () => (dispatch) => {
  return fetch(baseUrl + "departments")
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
    .then((departmentList) => dispatch(addDepartments(departmentList)));
};

export const addDepartments = (departmentList) => {
  console.log("add Departments");
  return {
    type: "department/add",
    payload: departmentList,
  };
};
