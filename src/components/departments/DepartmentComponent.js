import { fetchData } from "../../redux/ActionCreators";
import { RenderStaff } from "../features/RenderStaff";
import { Loading } from "../LoadingComponent";

import React, { useState, useEffect } from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// ----- Presentational Component -----
const RenderDepartment = (props) => {
  // Render department: department name + number of staff
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

  // ---------- Renders staff of each department ----------
  if (props.match.params.deptId) {
    return (
      <div className="container">
        <RenderStaff
          staffList={departmentStaff.departmentstaffs}
          match={props.match}
          isLoading={departmentStaff.isLoading}
          errmess={departmentStaff.errmess}
        />
      </div>
    );
  }

  // ---------- Render all departments ----------
  if (!props.match.params.deptId) {
    // *** Loading case
    if (props.departments.isLoading) {
      return <Loading />;
    }

    // *** Success case
    if (!props.departments.isLoading) {
      return (
        <div className="container">
          <div className="row">
            {props.departments.departments.map((department) => (
              <div key={department.id} className="col-12 col-md-6 col-xl-4">
                <RenderDepartment department={department} match={props.match} />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Department;
