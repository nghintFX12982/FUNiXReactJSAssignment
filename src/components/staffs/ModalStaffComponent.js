import { addStaff } from "./staffSlice";
import { addDepartment } from "../departments/departmentSlice";

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
  Row,
  Col,
} from "reactstrap";

function AddStaffModal(props) {
  const staffList = [...props.staffList];
  let newStaff = {};

  function handleInputChange(e) {
    if (e.target.value) {
      let staffKey = e.target.name;
      let value = e.target.value;
      newStaff[staffKey] = value;
      newStaff.id = staffList.length;
      newStaff.image = "/assets/images/alberto.png";
    }
  }

  // This function will get value from modal form when click submit button
  function handleSubmit(e) {
    props.toggleModal();
    staffList.push(newStaff);
    newStaff = {};
    props.setStaffList(staffList);

    e.preventDefault();

    // departmentList.forEach((department, index) => {
    //   if (department.name === newStaff.department) {
    //     newStaff.department = department;
    //   }
    // });

    // let localStaff = localStorage.getItem("newStaff")
    //   ? JSON.parse(localStorage.getItem("newStaff"))
    //   : [];

    // localStaff.push(newStaff);
    // props.staffList.push(localStaff);
    // localStorage.setItem("newStaff", JSON.stringify(localStaff));
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
                />
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
                />
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
                  defaultValue="Finance"
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
