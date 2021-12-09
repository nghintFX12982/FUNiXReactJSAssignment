import { Loading } from "../LoadingComponent";

import React from "react";
import { Jumbotron } from "reactstrap";

// ----- Presentational Component -----
const RenderDepartment = ({ department }) => {
  return (
    <Jumbotron>
      <h2>{department.name}</h2>
      <p>Số lượng nhân viên: {department.numberOfStaff}</p>
    </Jumbotron>
  );
};

// ----- Container Component -----
function Department(props) {
  const department = props.departments.departments.map((department) => {
    return (
      <div className="col-12 col-md-6 col-xl-4">
        <RenderDepartment department={department} />
      </div>
    );
  });

  if (props.departments.isLoading) {
    return "";
  } else {
    return (
      <div className="container">
        <div className="row">{department}</div>
      </div>
    );
  }
}

export default Department;
