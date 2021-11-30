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
  Label,
  Row,
  Col,
} from "reactstrap";
import { add } from "../redux/staffSlice";
import { useDispatch } from "react-redux";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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

  // This function will get value from modal form when click submit button
  function handleSubmit(value) {
    const action = add(value);
    const dispatch = useDispatch();
    console.log(action);
    dispatch(action);
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
          <div className="col-12 col-md-6" id="breadcrumb">
            <div className="row">
              {/* Breadcrumb */}
              <div className="col-8 col-md-6 col-lg-4">
                <RenderBreadcrumb match={props.match} />
              </div>
              {/* Add button */}
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
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={handleSubmit}>
              {/* Full name */}
              <Row className="form-group">
                <Label htmlFor="name" md={5}>
                  Họ tên
                </Label>
                <Col md={7}>
                  <Control
                    model=".name"
                    id="name"
                    name="name"
                    className="form-control"
                    validators={{
                      lenRange: (val) =>
                        val && val.length >= 3 && val.length <= 15,
                    }}
                  />
                  <Errors
                    model=".name"
                    className="text-danger"
                    messages={{
                      lenRange: "Yêu cầu nhập từ 3-15 ký tự",
                    }}
                  />
                </Col>
              </Row>
              {/* Date of birth*/}
              <Row className="form-group">
                <Label htmlFor="doB" md={5}>
                  Ngày sinh
                </Label>
                <Col md={7}>
                  <Control.input
                    type="date"
                    model=".doB"
                    id="doB"
                    name="doB"
                    className="form-control"
                    validators={{
                      required: (val) => val,
                    }}
                  />
                  <Errors
                    model=".doB"
                    className="text-danger"
                    messages={{
                      required: "Yêu cầu bắt buộc ",
                    }}
                  />
                </Col>
              </Row>
              {/* Started Date*/}
              <Row className="form-group">
                <Label htmlFor="startDate" md={5}>
                  Ngày vào công ty
                </Label>
                <Col md={7}>
                  <Control.input
                    type="date"
                    model=".startDate"
                    id="startDate"
                    name="startDate"
                    className="form-control"
                    validators={{
                      required: (val) => val,
                    }}
                  />
                  <Errors
                    model=".startDate"
                    className="text-danger"
                    messages={{
                      required: "Yêu cầu bắt buộc ",
                    }}
                  />
                </Col>
              </Row>
              {/* Department */}
              <Row className="form-group">
                <Label htmlFor="department" md={5}>
                  Phòng ban
                </Label>
                <Col md={7}>
                  <Control.select
                    model=".department"
                    id="department"
                    name="department"
                    className="form-control"
                  >
                    <option>Finance</option>
                    <option>HR</option>
                    <option>IT</option>
                    <option>Marketing</option>
                    <option>Sale</option>
                  </Control.select>
                  <Errors model=".department" />
                </Col>
              </Row>
              {/* Salary Scale */}
              <Row className="form-group">
                <Label htmlFor="salaryScale" md={5}>
                  Hệ số lương
                </Label>
                <Col md={7}>
                  <Control
                    model=".salaryScale"
                    id="salaryScale"
                    name="salaryScale"
                    placeHolder="1-3"
                    className="form-control"
                    defaultValue="1"
                    validators={{
                      typeCheck: (val) => Number.parseInt(val),
                      numRange: (val) => val > 0 && val < 4,
                    }}
                  />
                  <Errors
                    model=".salaryScale"
                    className="text-danger"
                    messages={{
                      typeCheck: "Yêu cầu nhập số",
                      numRange: "Yêu cầu nhập số từ 1-3",
                    }}
                  />
                </Col>
              </Row>
              {/* Annual Leave */}
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={5}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={7}>
                  <Control
                    model=".annualLeave"
                    id="annualLeave"
                    name="annualLeave"
                    className="form-control"
                    defaultValue="0"
                    validators={{
                      typeCheck: (val) => !Number.isNaN(Number(val)),
                    }}
                  />
                  <Errors
                    model=".annualLeave"
                    className="text-danger"
                    messages={{
                      typeCheck: "Yêu cầu nhập số ",
                    }}
                  />
                </Col>
              </Row>
              {/* Overtime */}
              <Row className="form-group">
                <Label htmlFor="overTime" md={5}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={7}>
                  <Control
                    model=".overTime"
                    id="overTime"
                    name="overTime"
                    className="form-control"
                    defaultValue="0"
                    validators={{
                      typeCheck: (val) => !Number.isNaN(Number(val)),
                    }}
                  />
                  <Errors
                    model=".overTime"
                    className="text-danger"
                    messages={{
                      typeCheck: "Yêu cầu nhập số",
                    }}
                  />
                </Col>
              </Row>
              {/* Submit button */}
              <Row className="form-group">
                <Col className="col-7 offset-5">
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
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
