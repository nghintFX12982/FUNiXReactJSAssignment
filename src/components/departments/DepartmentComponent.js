import { fetchData } from "../../redux/ActionCreators";
import { RenderStaff } from "../features/RenderStaff";

import React, { useState, useEffect } from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// ----- Presentational Component -----
const RenderDepartment = (props) => {
  console.log(props);
  return (
    <Jumbotron>
      <Link to={`${props.match.path}/${props.department.id}`}>
        <h2>{props.department.name}</h2>
      </Link>
      <p>Số lượng nhân viên: {props.department.numberOfStaff}</p>
    </Jumbotron>
  );
};

// ----- Container Component -----
function Department(props) {
  const departmentStaff = useSelector((state) => state.departmentStaff);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch((dispatch) => {
      fetchData(dispatch, `departments/${props.match.params.deptId}`);
    });
  }, []);

  console.log(departmentStaff);

  if (props.match.params.deptId) {
    if (departmentStaff.isLoading) {
      return "";
    } else if (departmentStaff.errmess) {
      return <h4 style={{ marginTop: "80px" }}>{departmentStaff.errmess}</h4>;
    } else {
      return (
        <div className="container">
          <RenderStaff
            staffList={departmentStaff.departmentstaffs}
            match={props.match}
            isLoading={props.isLoading}
          />
        </div>
      );
    }
  } else {
    return (
      <div className="container">
        <div className="row">
          {props.departments.departments.map((department) => (
            <div className="col-12 col-md-6 col-xl-4">
              <RenderDepartment department={department} match={props.match} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Department;
