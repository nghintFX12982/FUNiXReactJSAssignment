import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";

// ----- Container Component -----
const RenderBreadcrumb = () => {
  return (
    <Breadcrumb tag="nav" listTag="div">
      <BreadcrumbItem>
        <Link to="/staff">Nhân Viên</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

const RenderStaff = ({ staff }) => {
  return (
    <Link to={`/staff/${staff.id}`}>
      <Card className="staff-img">
        <CardImg src={staff.image} alt={staff.name} />
        <CardBody>
          <CardTitle>{staff.name}</CardTitle>
        </CardBody>
      </Card>
    </Link>
  );
};

// ----- Presentational Component -----
function StaffPage({ staffList }) {
  const staff = staffList.map((staff) => {
    return (
      <div className="col-6 col-md-4 col-xl-2 my-2">
        <RenderStaff staff={staff} />
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="container">
        <RenderBreadcrumb />
        <div className="row">{staff}</div>
      </div>
    </React.Fragment>
  );
}

export default StaffPage;
