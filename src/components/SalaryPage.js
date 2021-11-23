import React from "react";
import { Card, CardText, Jumbotron } from "reactstrap";
import { STAFFS } from "../shared/staffs";
import { NavLink, Route, Switch } from "react-router-dom";
import { exact } from "prop-types";

const formatDecimal = require("format-decimal");
const sortedStaffList = [...STAFFS];
// ----- Sort Function -----
function sortInc(sortedStaffList) {
  for (let i = 0; i <= sortedStaffList.length - 2; i++) {
    for (let j = i + 1; j <= sortedStaffList.length - 1; j++) {
      if (sortedStaffList[i].salary > sortedStaffList[j].salary) {
        let temp = sortedStaffList[i];
        sortedStaffList[i] = sortedStaffList[j];
        sortedStaffList[j] = temp;
      }
    }
  }
}

function sortDec(sortedStaffList) {
  for (let i = 0; i <= sortedStaffList.length - 2; i++) {
    for (let j = i + 1; j <= sortedStaffList.length - 1; j++) {
      if (sortedStaffList[i].salary < sortedStaffList[j].salary) {
        let temp = sortedStaffList[i];
        sortedStaffList[i] = sortedStaffList[j];
        sortedStaffList[j] = temp;
      }
    }
  }
  console.log(sortedStaffList);
}

// ----- Container Component -----
function SortBar({ match }) {
  return (
    <div id="sort">
      <NavLink
        to={`${match.path}/sort-az`}
        onClick={() => sortInc(sortedStaffList)}
      >
        <span id="sort-inc">
          <i class="fa fa-sort-amount-asc" aria-hidden="true"></i> Sắp xếp tăng
          dần
        </span>
      </NavLink>
      <NavLink
        to={`${match.path}/sort-za`}
        onClick={() => sortDec(sortedStaffList)}
      >
        <span id="sort-dec">
          <i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Sắp xếp giảm
          dần
        </span>
      </NavLink>
    </div>
  );
}

const RenderSalary = ({ staff }) => {
  let salary = Number.parseInt(staff.salaryScale * 3000000, 10);
  sortedStaffList[staff.id].salary = salary;

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
function SalaryPage({ staffList, match }) {
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
      <SortBar match={match} />
      <Switch>
        <Route
          path={`${match.path}`}
          component={() => <Staff staffList={staffList} />}
          exact
        />
        <Route
          path={`${match.path}/sort-az`}
          component={() => <Staff staffList={sortedStaffList} />}
          exact
        />
        <Route
          path={`${match.path}/sort-za`}
          component={() => <Staff staffList={sortedStaffList} />}
          exact
        />
      </Switch>
    </div>
  );
}

export default SalaryPage;
