import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, List } from "reactstrap";
import dateFormat from "dateformat";

// ----- Container Component -----
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

const RenderImage = ({ staff }) => {
  return (
    <Card>
      <CardImg top with="100%" src={staff.image} alt={staff.name} />
    </Card>
  );
};

const RenderDetail = ({ staff }) => {
  return (
    <List type="unstyled" style={{ textAlign: "left" }}>
      <li>Họ và tên: {staff.name}</li>
      <li>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
      <li>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</li>
      <li>Phòng ban: {staff.department.name}</li>
      <li>Số ngày nghỉ còn lại: {staff.annualLeave}</li>
      <li>Số ngày đã làm thêm: {staff.overTime}</li>
    </List>
  );
};

// ----- Presentational Component -----
function StaffDetailPage({ staff }) {
  return (
    <div className="container">
      {/* ---------- */}
      {/* Breadcrumb Section */}
      <div className="row">
        <div className="col-12">
          <RenderBreadcrumb staff={staff} />
        </div>
      </div>
      {/* ---------- */}
      {/* Image & Info Section */}
      <div className="row">
        <div className="col-12 col-md-4 col-xl-3">
          <RenderImage staff={staff} />
        </div>
        <div className="col-12 col-md-8 col-xl-9">
          <RenderDetail staff={staff} />
        </div>
      </div>
    </div>
  );
}

export default StaffDetailPage;
