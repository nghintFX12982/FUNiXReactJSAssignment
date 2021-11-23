import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link, Route } from "react-router-dom";

// ----- Container Component -----
const RenderBreadcrumb = ({ staffList, match }) => {
  function myFunc() {
    const filterList = staffList.filter(
      (staff) =>
        staff.department.name === document.getElementById("mySelect").value
    );
  }

  return (
    <React.Fragment>
      <Breadcrumb tag="nav" listTag="div" className="col-12 col-md-8">
        <BreadcrumbItem>
          <Link to="/staff">Nhân Viên</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <FormGroup className="col-12 col-md-4">
        <Input type="select" name="select" id="mySelect" onChange={myFunc}>
          <option value="default">Mặc định</option>
          <option value="Finance">Bộ phận Finance</option>
          <option value="HR">Bộ phận HR</option>
          <option value="IT">Bộ phận IT</option>
          <option value="Marketing">Bộ phận Marketing</option>
          <option value="Sale">Bộ phận Sale</option>
        </Input>
      </FormGroup>
    </React.Fragment>
  );
};

const RenderStaff = ({ match, staff }) => {
  return (
    <Card className="staff-img">
      <Link to={`${match.path}/${staff.id}`}>
        <CardImg src={staff.image} alt={staff.name} />
      </Link>
      <CardBody>
        <CardTitle>{staff.name}</CardTitle>
      </CardBody>
    </Card>
  );
};

// ----- Presentational Component -----
function StaffPage({ match, staffList }) {
  const staff = staffList.map((staff) => {
    return (
      <div className="col-6 col-md-4 col-xl-2 my-2">
        <RenderStaff staff={staff} match={match} />
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <RenderBreadcrumb staffList={staffList} match={match} />
        </div>
        <div className="row">{staff}</div>
      </div>
    </React.Fragment>
  );
}

export default StaffPage;
