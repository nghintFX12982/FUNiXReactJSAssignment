import { addStaff } from "./staffSlice";
import { addDepartment } from "../departments/departmentSlice";

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
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

  return (
    <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
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
                  lenRange: (val) => val && val.length >= 3 && val.length <= 15,
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
                defaultValue="Finance"
              >
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Sale">Sale</option>
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
  );
}

export default AddStaffModal;
