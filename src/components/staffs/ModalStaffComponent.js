import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Row,
  Col,
} from "reactstrap";

// ----- Controlled Form -----
function AddStaffModal(props) {
  const staffList = [...props.staffList];
  let newStaff = {};
  let errors = { name: "", doB: "", startDate: "" };
  let [nameError, setNameError] = useState("Yêu cầu bắt buộc");

  function handleInputChange(e) {
    if (e.target.value) {
      let staffKey = e.target.name;
      let value = e.target.value;
      newStaff[staffKey] = value;

      // Default value of department when add new staff is "Finance"
      newStaff.department = newStaff.department || "Finance";
      newStaff.salaryScale = newStaff.salaryScale || 1;
      newStaff.annualLeave = newStaff.annualLeave || 0;
      newStaff.overTime = newStaff.overTime || 0;

      newStaff.id = staffList.length;
      newStaff.image = "/assets/images/alberto.png";
      props.departmentList.forEach((department) => {
        if (newStaff.department === department.name) {
          newStaff.department = department;
        }
      });
    }

    // Call check valid function
    checkValid();
  }

  function checkValid() {
    // Check name valid
    if (!newStaff.name || newStaff.name.length < 4) {
      setNameError("Yêu cầu nhập nhiều hơn 3 ký tự");
    } else {
      setNameError("");
    }
  }

  // This function will get value from modal form when click submit button
  function handleSubmit(e) {
    e.preventDefault();
    props.toggleModal();
    // Cannot use directly or clone DEPARTMENT due to READ-ONLY property
    let departmentList = [
      {
        id: "Dept01",
        name: "Sale",
        numberOfStaff: 1,
      },
      {
        id: "Dept02",
        name: "HR",
        numberOfStaff: 1,
      },
      {
        id: "Dept03",
        name: "Marketing",
        numberOfStaff: 2,
      },
      {
        id: "Dept04",
        name: "IT",
        numberOfStaff: 1,
      },
      {
        id: "Dept05",
        name: "Finance",
        numberOfStaff: 11,
      },
    ];

    departmentList.forEach((department, index) => {
      if (department.name === newStaff.department.name) {
        department.numberOfStaff += 1;
      }
    });
    console.log(departmentList);

    staffList.push(newStaff);
    newStaff = {};

    props.setStaffList(staffList);
    props.setDepartments(departmentList);
  }

  const closeBtn = (
    <button className="close" onClick={props.toggleModal}>
      &times;
    </button>
  );

  return (
    <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal} close={closeBtn}>
        Thêm nhân viên
      </ModalHeader>
      <ModalBody>
        {/* ----- Uncontrolled Form ----- */}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            {/* Full name */}
            <Row className="form-group">
              <Label htmlFor="name" md={5}>
                Họ tên
              </Label>
              <Col md={7}>
                <Input
                  id="name"
                  name="name"
                  className="form-control"
                  onChange={handleInputChange}
                  valid={nameError === ""}
                  invalid={nameError !== ""}
                />
                <FormFeedback>{nameError}</FormFeedback>
              </Col>
            </Row>
          </FormGroup>
          {/* Date of birth*/}
          <FormGroup>
            <Row className="form-group">
              <Label htmlFor="doB" md={5}>
                Ngày sinh
              </Label>
              <Col md={7}>
                <Input
                  type="date"
                  id="doB"
                  name="doB"
                  className="form-control"
                  onChange={handleInputChange}
                  invalid={errors.doB}
                />
                <FormFeedback>Hello</FormFeedback>
              </Col>
            </Row>
          </FormGroup>
          {/* Started Date*/}
          <FormGroup>
            <Row className="form-group">
              <Label htmlFor="startDate" md={5}>
                Ngày vào công ty
              </Label>
              <Col md={7}>
                <Input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
          </FormGroup>
          {/* Department */}
          <FormGroup>
            <Row className="form-group">
              <Label htmlFor="department" md={5}>
                Phòng ban
              </Label>
              <Col md={7}>
                <Input
                  type="select"
                  id="department"
                  name="department"
                  className="form-control"
                  onChange={handleInputChange}
                >
                  <option value="Finance">Finance</option>
                  <option value="HR">HR</option>
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sale">Sale</option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
          {/* Salary Scale */}
          <FormGroup>
            <Row className="form-group">
              <Label htmlFor="salaryScale" md={5}>
                Hệ số lương
              </Label>
              <Col md={7}>
                <Input
                  id="salaryScale"
                  name="salaryScale"
                  placeHolder="1-3"
                  className="form-control"
                  defaultValue="1"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
          </FormGroup>
          {/* Annual Leave */}
          <FormGroup>
            <Row className="form-group">
              <Label htmlFor="annualLeave" md={5}>
                Số ngày nghỉ còn lại
              </Label>
              <Col md={7}>
                <Input
                  id="annualLeave"
                  name="annualLeave"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
          </FormGroup>
          {/* Overtime */}
          <FormGroup>
            <Row className="form-group">
              <Label htmlFor="overTime" md={5}>
                Số ngày đã làm thêm
              </Label>
              <Col md={7}>
                <Input
                  id="overTime"
                  name="overTime"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
          </FormGroup>
          {/* Submit button */}
          <FormGroup>
            <Row className="form-group">
              <Col className="col-7 offset-5">
                <Button type="submit" color="primary">
                  Thêm
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
}

export default AddStaffModal;
