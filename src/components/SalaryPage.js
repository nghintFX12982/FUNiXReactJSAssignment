import React from "react";
import { Card, CardText, Jumbotron } from "reactstrap";

// ----- Container Component -----
const formatDecimal = require("format-decimal");

const RenderSalary = ({ staff }) => {
  let salary = formatDecimal(staff.salaryScale * 3000000, {
    decimal: ".",
    precision: 0,
    thousands: ",",
  });

  return (
    <Jumbotron style={{ textAlign: "left" }}>
      <h2 className="py-3">{staff.name}</h2>
      <p>Mã nhân viên: {staff.id}</p>
      <p>Hệ số lương: {staff.salaryScale}</p>
      <p>Số giờ làm thêm: {staff.overTime}</p>
      <Card className="p-1">
        <CardText>Lương: {salary}</CardText>
      </Card>
    </Jumbotron>
  );
};

// ----- Presentational Component -----
function SalaryPage({ staffList }) {
  const staff = staffList.map((staff) => {
    return (
      <div className="col-12 col-md-6 col-xl-4">
        <RenderSalary staff={staff} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{staff}</div>
    </div>
  );
}

export default SalaryPage;
