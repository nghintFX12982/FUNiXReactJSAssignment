import { Loading } from "../LoadingComponent";

import React from "react";
import { Card, CardText, Jumbotron } from "reactstrap";

export const RenderSalary = (props) => {
  const formatDecimal = require("format-decimal");

  // Error case
  if (props.errmess) {
    return <h4 style={{ marginTop: "40px" }}>{props.errmess}</h4>;
  }

  // Loading case
  if (props.isLoading) {
    return <Loading />;
  }

  // Success case
  if (!props.isLoading) {
    return (
      <div className="row">
        {props.staffList.map((staff) => (
          <div key={staff.id} className="col-12 col-md-6 col-xl-4">
            <Jumbotron style={{ textAlign: "left" }}>
              <h2 className="py-3">{staff.name}</h2>
              <p>Mã nhân viên: {staff.id}</p>
              <p>Hệ số lương: {staff.salaryScale}</p>
              <p>Số giờ làm thêm: {staff.overTime}</p>
              <Card className="p-1">
                <CardText>
                  Lương:{" "}
                  {formatDecimal(staff.salary || 0, {
                    decimal: ".",
                    thousands: ",",
                    precision: 0,
                  })}
                </CardText>
              </Card>
            </Jumbotron>
          </div>
        ))}
      </div>
    );
  }
};
