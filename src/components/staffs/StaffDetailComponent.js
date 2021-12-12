import { RenderBreadcrumb } from "../features/RenderBreadcrumb";

import React from "react";
import { Card, CardImg, List } from "reactstrap";
import dateFormat from "dateformat";

// ---------- Presentational Component ----------
// *** Left column: Image section
const RenderImage = ({ staff }) => {
  return (
    <Card>
      <CardImg top with="100%" src={staff.image} alt={staff.name} />
    </Card>
  );
};

// *** Right column: Detail Section
const RenderDetail = ({ staff, departments }) => {
  const formatDecimal = require("format-decimal");

  return (
    <List type="unstyled" style={{ textAlign: "left" }}>
      <li>
        <strong>Họ và tên:</strong> {staff.name}
      </li>
      <li>
        <strong>Ngày sinh:</strong> {dateFormat(staff.doB, "dd/mm/yyyy")}
      </li>
      <li>
        <strong>Ngày vào công ty:</strong>{" "}
        {dateFormat(staff.startDate, "dd/mm/yyyy")}
      </li>
      {departments.map((department) => {
        if (department.id === staff.departmentId) {
          return (
            <li>
              <strong>Phòng ban:</strong> {department.name}
            </li>
          );
        }
      })}
      <li>
        <strong>Lương:</strong>{" "}
        {formatDecimal(staff.salary, {
          thousands: ",",
          decimal: ".",
          precision: 0,
        })}
      </li>
      <li>
        <strong>Số ngày nghỉ còn lại:</strong> {staff.annualLeave}
      </li>
      <li>
        <strong>Số ngày đã làm thêm:</strong> {staff.overTime}
      </li>
    </List>
  );
};

// ---------- Container Component ----------
function StaffDetail({ staff, departments }) {
  return (
    <div className="container">
      {/* *** Breadcrumb Section */}
      <RenderBreadcrumb staffName={staff.name} />

      {/* *** Image & Info Section */}
      <div className="row" style={{ marginBottom: "100px" }}>
        <div className="col-12 col-md-4 col-xl-3">
          <RenderImage staff={staff} />
        </div>
        <div className="col-12 col-md-8 col-xl-9">
          <RenderDetail staff={staff} departments={departments.departments} />
        </div>
      </div>
    </div>
  );
}

export default StaffDetail;
