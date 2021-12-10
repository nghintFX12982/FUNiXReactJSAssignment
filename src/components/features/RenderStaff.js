import { Loading } from "../LoadingComponent";

import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

export const RenderStaff = (props) => {
  if (props.isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="row">
        {props.staffList.map((staff) => (
          <div className="col-6 col-md-4 col-xl-2 my-2">
            <Card className="staff-img">
              <Link to={`${props.match.path}/${staff.id}`}>
                <CardImg src={staff.image} alt={staff.name} />
              </Link>
              <CardBody>
                <CardTitle>{staff.name}</CardTitle>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    );
  }
};
