import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

// ------------------------------------
// ----- Presentational Component -----
const RenderBreadcrumb = ({ match }) => {
  return (
    <React.Fragment>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem>
          <Link to={match.path}>
            {" "}
            <h3 style={{ display: "inline-block" }}>Nhân viên</h3>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
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

const RenderFilterForm = () => {
  return (
    <React.Fragment>
      <option value="default">(Bộ phận)</option>
      <option value="Finance">Bộ phận Finance</option>
      <option value="HR">Bộ phận HR</option>
      <option value="IT">Bộ phận IT</option>
      <option value="Marketing">Bộ phận Marketing</option>
      <option value="Sale">Bộ phận Sale</option>
    </React.Fragment>
  );
};

// -------------------------------
// ----- Container Component -----
function StaffPage(props) {
  const [staffList, setStaffList] = useState(props.staffList);
  const [searchList, setSearchList] = useState(props.staffList);
  const [currentDepartment, setCurrentDepartment] = useState("default");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // This function will update searchList when search box is blurred
  function handleBlur(e) {
    const searchValue = e.target.value;
    setSearchList(props.staffList);

    if (searchValue !== "") {
      setSearchList(
        props.staffList.filter(
          (staff) =>
            staff.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
      );
    }
  }

  // This function will set staffList as searchList & re-render when click "find" button
  function handleClick(e) {
    setCurrentDepartment("default");
    setStaffList(searchList);
  }

  // This function will update filtered list & re-render when options are changed
  function filterStaffList(e) {
    let filteredValue = e.target.value;
    let filteredList = [...props.staffList];

    if (filteredValue !== "default") {
      filteredList = props.staffList.filter(
        (staff) => staff.department.name === filteredValue
      );
    }

    setCurrentDepartment(filteredValue);
    setStaffList(filteredList);
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
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
        <div className="row" id="breadcrumb-search-section">
          {/* Breadcrumb */}
          <div className="col-12 col-md-6" id="breadcrumb">
            <div className="row">
              <div className="col-8 col-md-6 col-lg-4">
                <RenderBreadcrumb match={props.match} />
              </div>
              <div className="col-4 col-md-6 col-lg-8 left-align">
                <Button color="danger" id="add-btn" onClick={toggleModal}>
                  Add
                </Button>
              </div>
            </div>
          </div>
          {/* Search Box */}
          <div className="col-12 col-md-6" id="staff-search">
            <div className="row my-2">
              <div className="col-8">
                <Input
                  type="text"
                  id="staff-search-box"
                  placeholder="Nhập tên nhân viên"
                  onBlur={handleBlur}
                />
              </div>
              <div className="col-4">
                <Button
                  color="primary"
                  size="md"
                  id="staff-search-btn"
                  onClick={handleClick}
                >
                  Tìm
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal form */}
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <ModalHeader>Header</ModalHeader>
        </Modal>
        {/* Filter form */}
        <div className="row">
          <div className="col-12 col-md-4">
            <FormGroup>
              <Input
                type="select"
                id="mySelect"
                value={currentDepartment}
                onChange={filterStaffList}
              >
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
