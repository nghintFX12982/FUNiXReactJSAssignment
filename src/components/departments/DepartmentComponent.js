import { fetchData } from "../../redux/ActionCreators";
import { RenderBreadcrumb } from "../features/RenderBreadcrumb";
import { RenderStaff } from "../features/RenderStaff";
import { Loading } from "../LoadingComponent";

import React, { useEffect } from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Department(props) {
  const departmentStaff = useSelector((state) => state.departmentStaff);
  const dispatch = useDispatch();
  const departmentList = {};

  // Create new object of department's id & name
  props.departments.departments.forEach((department) => {
    departmentList[department.id] = department.name;
  });

  useEffect(() => {
    dispatch((dispatch) => {
      dispatch(fetchData(`departments/${props.match.params.deptId}`));
    });
  }, []);

  // ---------- Renders staff of each department ----------
  if (props.match.params.deptId) {
    return (
      <div className="container">
        <RenderBreadcrumb
          deptName={departmentList[props.match.params.deptId]}
        />

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
                <Jumbotron>
                  <Link to={`${props.match.path}/${department.id}`}>
                    <h2>{department.name}</h2>
                  </Link>
                  <p>Số lượng nhân viên: {department.numberOfStaff}</p>
                </Jumbotron>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Department;
