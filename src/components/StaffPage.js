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

// ----- Container Component -----
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

// ----- Presentational Component -----
function StaffPage(props) {
  const [staffList, setStaffList] = useState(props.staffList);

  function myFunc() {
    let btnValue = document.getElementById("mySelect").value;
    let filterList = [];

    if (btnValue === "default") {
      filterList = [...props.staffList];
    } else {
      filterList = props.staffList.filter(
        (staff) => staff.department.name === btnValue
      );
    }

    setStaffList(filterList);
  }

  // Staff Component
  const Staff = () => {
    const staff = staffList.map((staff) => {
      return (
        <div className="col-6 col-md-4 col-xl-2 my-2">
          <RenderStaff staff={staff} match={props.match} />
        </div>
      );
    });

    return <div className="row">{staff}</div>;
  };

  return (
    <React.Fragment>
      <div className="container">
        {/* Row of breadcrumb and filter form */}
        <div className="row">
          <div className="col-12 col-md-8">
            <RenderBreadcrumb match={props.match} />
          </div>

          <div className="col-12 col-md-4">
            <FormGroup>
              <Input type="select" id="mySelect" onChange={myFunc}>
                <RenderFilterForm />
              </Input>
            </FormGroup>
          </div>
        </div>
        {/* Row of staff render */}
        <Staff />
      </div>
    </React.Fragment>
  );
}

export default StaffPage;
