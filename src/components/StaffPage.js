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
      <Link to="/staff">
        <BreadcrumbItem tag="a" href="#">
          Home
        </BreadcrumbItem>
      </Link>
    </Breadcrumb>
  );
};

const RenderStaff = ({ staff }) => {
  return (
    <Card className="staff-img">
      <CardImg src={staff.image} alt={staff.name} />
      <CardBody>
        <CardTitle>{staff.name}</CardTitle>
      </CardBody>
    </Card>
  );
};

// ----- Presentational Component -----
function StaffPage({ staffList }) {
  const staff = staffList.map((staff) => {
    return (
      <div className="col-6 col-md-4 col-xl-2">
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
