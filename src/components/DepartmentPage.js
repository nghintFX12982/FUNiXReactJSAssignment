import React from "react";
import { Jumbotron } from "reactstrap";

// ----- Container Component -----
const RenderDepartment = ({ department }) => {
  return (
    <Jumbotron>
      <h2>{department.name}</h2>
      <p>Số lượng nhân viên: {department.numberOfStaff}</p>
    </Jumbotron>
  );
};

// ----- Presentational Component -----
function DepartmentPage({ departmentList }) {
  const department = departmentList.map((department) => {
    return (
      <div className="col-12 col-md-6 col-xl-4">
        <RenderDepartment department={department} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{department}</div>
    </div>
  );
}

export default DepartmentPage;
