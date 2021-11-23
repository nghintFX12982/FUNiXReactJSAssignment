import React from "react";
import { Card, CardText, Jumbotron } from "reactstrap";
import { STAFFS } from "../shared/staffs";

// ----- Container Component -----
const formatDecimal = require("format-decimal");

const RenderSalary = ({ staff }) => {
  let salary = Number.parseInt(staff.salaryScale * 3000000, 10);

  STAFFS[staff.id].salary = salary;
  console.log(STAFFS);

  return (
    <Jumbotron style={{ textAlign: "left" }}>
      <h2 className="py-3">{staff.name}</h2>
      <p>Mã nhân viên: {staff.id}</p>
      <p>Hệ số lương: {staff.salaryScale}</p>
      <p>Số giờ làm thêm: {staff.overTime}</p>
      <Card className="p-1">
        <CardText>
          Lương:{" "}
          {formatDecimal(salary, {
            decimal: ".",
            thousands: ",",
            precision: "0",
          })}
        </CardText>
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
      <div id="sort">
        <span id="sort-inc">
          <i class="fa fa-sort-amount-asc" aria-hidden="true"></i> Sắp xếp tăng
          dần
        </span>
        <span id="sort-dec">
          <i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Sắp xếp giảm
          dần
        </span>
      </div>
      <div className="row">{staff}</div>
    </div>
  );
}

export default SalaryPage;
