import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, List } from "reactstrap";
import dateFormat from "dateformat";

// ---------- Presentational Component ----------
// *** BreadCrumb Section
const RenderBreadcrumb = ({ staff }) => {
  return (
    <Breadcrumb tag="nav" listTag="div">
      <BreadcrumbItem>
        <Link to="/staff">Nhân Viên</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>{staff.name}</BreadcrumbItem>
    </Breadcrumb>
  );
};

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
  return (
    <List type="unstyled" style={{ textAlign: "left" }}>
      <li>Họ và tên: {staff.name}</li>
      <li>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
      <li>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</li>
      {departments.map((department) => {
        if (department.id === staff.departmentId) {
          return <li>Phòng ban: {department.name}</li>;
        }
      })}
      <li>Số ngày nghỉ còn lại: {staff.annualLeave}</li>
      <li>Số ngày đã làm thêm: {staff.overTime}</li>
    </List>
  );
};

// ---------- Container Component ----------
function StaffDetail({ staff, departments }) {
  return (
    <div className="container">
      {/* *** Breadcrumb Section */}
      <div className="row">
        <div className="col-12">
          <RenderBreadcrumb staff={staff} />
        </div>
      </div>

      {/* *** Image & Info Section */}
      <div className="row">
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
