import React from "react";
import { Card, CardText, Jumbotron } from "reactstrap";
import { STAFFS } from "../shared/staffs";
import { Link, Route, Switch } from "react-router-dom";

const formatDecimal = require("format-decimal");
const sortedStaffList = [...STAFFS];

// ----- Container Component -----
function SortBar({ match }) {
  // Sort salary
  const sortSalary = (sorttype) => {
    if (sorttype === "inc") {
      sortedStaffList.sort(function (a, b) {
        return a.salary - b.salary;
      });
    } else {
      sortedStaffList.sort(function (a, b) {
        return b.salary - a.salary;
      });
    }
  };

  return (
    <div id="sort">
      <Link to={`${match.path}/sort-inc`} onClick={() => sortSalary("inc")}>
        <span id="sort-inc">
          <i class="fa fa-sort-amount-asc" aria-hidden="true"></i> Sắp xếp tăng
          dần
        </span>
      </Link>

      <Link to={`${match.path}/sort-dec`} onClick={() => sortSalary("dec")}>
        <span id="sort-dec">
          <i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Sắp xếp giảm
          dần
        </span>
      </Link>
    </div>
  );
}

const RenderSalary = ({ staff }) => {
  // Caculate salary & add to cloned array
  let salary = Number.parseInt(staff.salaryScale * 3000000, 10);
  sortedStaffList.forEach((sortedStaff, index) => {
    if (staff.id === sortedStaff.id) {
      sortedStaffList[index].salary = salary;
    }
  });

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
            precision: 0,
          })}
        </CardText>
      </Card>
    </Jumbotron>
  );
};

// ----- Presentational Component -----
function SalaryPage({ staffList, match }) {
  // Staff Component
  const Staff = ({ staffList }) => {
    const staff = staffList.map((staff) => {
      return (
        <div className="col-12 col-md-6 col-xl-4">
          <RenderSalary staff={staff} />
        </div>
      );
    });

    return <div className="row">{staff}</div>;
  };

  return (
    <div className="container">
      {/* Bar for sort function */}
      <SortBar match={match} />
      {/* Routing in salary page */}
      <Switch>
        <Route
          path={`${match.path}`}
          component={() => <Staff staffList={staffList} />}
          exact
        />
        <Route
          path={`${match.path}/sort-inc`}
          component={() => <Staff staffList={sortedStaffList} />}
          exact
        />
        <Route
          path={`${match.path}/sort-dec`}
          component={() => <Staff staffList={sortedStaffList} />}
          exact
        />
      </Switch>
    </div>
  );
}

export default SalaryPage;
