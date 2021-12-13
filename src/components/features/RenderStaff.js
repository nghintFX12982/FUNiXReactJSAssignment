import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

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
          {/* exit~ is effect when in is false */}
          {/* enter~ is effect when in is true */}
          <FadeTransform
            in
            fadeProps={{ exitFade: "0", enterFade: "1" }}
            transformProps={{ exitTransform: "scale(.7) translateY(50%)" }}
          >
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
          </FadeTransform>
        </div>
      ))}
    </div>
  );
};
