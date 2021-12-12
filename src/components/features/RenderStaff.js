import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

export const RenderStaff = (props) => {
  // Error case
  if (props.errmess) {
    return <h4 style={{ marginTop: "40px" }}>{props.errmess}</h4>;
  }

  // Success case
  return (
    <div className="row">
      {props.staffList.map((staff) => (
        <div key={staff.id} className="col-6 col-md-4 col-xl-2 my-2">
          <Card className="staff-img">
            {/* Image part */}
            <Link to={`/staff/${staff.id}`}>
              <CardImg src={staff.image} alt={staff.name} />
            </Link>
            {/* Body part with staff name */}
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};
