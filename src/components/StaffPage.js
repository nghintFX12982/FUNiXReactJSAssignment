import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

// ----- Presentational Component -----
const RenderBreadcrumb = ({ match }) => {
  return (
    <Breadcrumb tag="nav" listTag="div">
      <BreadcrumbItem>
        <Link to={match.path}>Nhân Viên</Link>
      </BreadcrumbItem>
    </Breadcrumb>
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

const RenderFilterForm = () => {
  return (
    <React.Fragment>
      <option value="default">Mặc định</option>
      <option value="Finance">Bộ phận Finance</option>
      <option value="HR">Bộ phận HR</option>
      <option value="IT">Bộ phận IT</option>
      <option value="Marketing">Bộ phận Marketing</option>
      <option value="Sale">Bộ phận Sale</option>
    </React.Fragment>
  );
};

// ----- Container Component -----
function StaffPage(props) {
  const [staffList, setStaffList] = useState(props.staffList);

  // When change option in form, trigger this function to filter list
  function filterStaffList() {
    let btnValue = document.getElementById("mySelect").value;
    let filteredList = [];

    if (btnValue === "default") {
      filteredList = [...props.staffList];
    } else {
      filteredList = props.staffList.filter(
        (staff) => staff.department.name === btnValue
      );
    }

    setStaffList(filteredList);
  }

  const staff = staffList.map((staff) => {
    return (
      <div className="col-6 col-md-4 col-xl-2 my-2">
        <RenderStaff staff={staff} match={props.match} />
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="container">
        {/* ---------- */}
        {/* Breadcrumb and filter form Section */}
        {/* ---------- */}
        <div className="row">
          {/* Breadcrumb */}
          <div className="col-12 col-md-8">
            <RenderBreadcrumb match={props.match} />
          </div>
          {/* Filter form */}
          <div className="col-12 col-md-4">
            <FormGroup>
              <Input type="select" id="mySelect" onChange={filterStaffList}>
                <RenderFilterForm />
              </Input>
            </FormGroup>
          </div>
        </div>
        {/* ---------- */}
        {/* Staff Render Section */}
        {/* ---------- */}
        <div className="row">{staff}</div>
      </div>
    </React.Fragment>
  );
}

export default StaffPage;
