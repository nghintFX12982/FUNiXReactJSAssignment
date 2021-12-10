import { baseUrl } from "../shared/baseUrl";

// ----- Fetch staff data from baseUrl -----
export const fetchData = (dispatch, params) => {
  return fetch(baseUrl + params)
    .then(
      (res) => {
        console.log(res);
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
    .then((list) => {
      if (params === "staffs") {
        dispatch(addStaff(list));
      }
      if (params.indexOf("Dept") !== -1) {
        dispatch(addDepartmentsStaff(list));
      }
      if (params === "departments") {
        dispatch(addDepartments(list));
      }
    })
    .catch((err) => {
      dispatch(failDepartmentStaff(err.message));
    });
};

// ------ Actions for store ------
export const addStaff = (staffList) => {
  return {
    type: "staff/add",
    payload: staffList,
  };
};

export const addDepartments = (departmentList) => {
  return {
    type: "department/add",
    payload: departmentList,
  };
};

export const addDepartmentsStaff = (staffList) => {
  return {
    type: "departmentstaffs/add",
    payload: staffList,
  };
};

export const failDepartmentStaff = (errmess) => {
  return {
    type: "departmentstaffs/fail",
    payload: errmess,
  };
};
