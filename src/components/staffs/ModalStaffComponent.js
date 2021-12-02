import { addStaff } from "./staffSlice";
import { addDepartment } from "../departments/departmentSlice";

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Control, LocalForm, Errors } from "react-redux-form";

function AddStaffModal(props) {
  const [staffList, setStaffList] = useState(props.staffList);

  const departmentList = useSelector((state) => state.department);
  const dispatch = useDispatch();

  // This function will get value from modal form when click submit button
  function handleSubmit(value) {
    const newStaff = { ...value };

    newStaff.id = staffList.length;
    newStaff.image = "/assets/images/alberto.png";

    departmentList.forEach((department, index) => {
      if (department.name === newStaff.department) {
        newStaff.department = department;
      }
    });

    let localStaff = localStorage.getItem("newStaff")
      ? JSON.parse(localStorage.getItem("newStaff"))
      : [];

    localStaff.push(newStaff);
    localStorage.setItem("newStaff", JSON.stringify(localStaff));

    dispatch(addStaff(newStaff));
    dispatch(addDepartment(newStaff));
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
        <FormGroup onSubmit={handleSubmit}>
          {/* Full name */}
          <Row className="form-group">
            <Label htmlFor="name" md={5}>
              Họ tên
            </Label>
            <Col md={7}>
              <Input id="name" name="name" className="form-control" />
            </Col>
          </Row>
          {/* Date of birth*/}
          <Row className="form-group">
            <Label htmlFor="doB" md={5}>
              Ngày sinh
            </Label>
            <Col md={7}>
              <Input type="date" id="doB" name="doB" className="form-control" />
            </Col>
          </Row>
          {/* Started Date*/}
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
              />
            </Col>
          </Row>
          {/* Department */}
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
              >
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Sale">Sale</option>
              </Input>
            </Col>
          </Row>
          {/* Salary Scale */}
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
              />
            </Col>
          </Row>
          {/* Annual Leave */}
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
              />
            </Col>
          </Row>
          {/* Overtime */}
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
        </FormGroup>
      </ModalBody>
    </Modal>
  );
}

export default AddStaffModal;
