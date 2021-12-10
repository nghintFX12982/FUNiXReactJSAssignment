import { baseUrl } from "../shared/baseUrl";

// ----------- Actions for reducer -----------
// For staff component
export const addStaff = (staffList) => {
  return {
    type: "staff/add",
    payload: staffList,
  };
};

// For department component
export const addDepartments = (departmentList) => {
  return {
    type: "department/add",
    payload: departmentList,
  };
};

export const addDepartmentsStaff = (staffList) => {
  return {
    type: "department-staffs/add",
    payload: staffList,
  };
};

export const failDepartmentStaff = (errmess) => {
  return {
    type: "department-staffs/fail",
    payload: errmess,
  };
};

// For salary component
export const addSalary = (staffList) => {
  return {
    type: "salary/add",
    payload: staffList,
  };
};

// ----------- Fetch data from baseUrl -----------
const dispatchList = [
  { name: "staff", params: "staffs", action: addStaff },
  { name: "department", params: "departments", action: addDepartments },
  { name: "salary", params: "staffsSalary", action: addSalary },
];

export const fetchData = (dispatch, params) => {
  return (
    fetch(baseUrl + params)
      .then(
        (res) => {
          if (res.ok) {
            return res;
          }

          if (!res.ok) {
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

      // Hanlde when get response successful
      .then((list) => {
        dispatchList.forEach((item) => {
          if (item.params === params) dispatch(item.action(list));
        });

        if (params.indexOf("Dept") !== -1) {
          dispatch(addDepartmentsStaff(list));
        }
      })

      // Handle when get error
      .catch((err) => {
        dispatch(failDepartmentStaff(err.message));
      })
  );
};
