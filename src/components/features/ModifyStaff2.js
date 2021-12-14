import { modifyData, deleteData } from "../../redux/ActionCreators";

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
import { useDispatch } from "react-redux";
import { Control, LocalForm, Errors } from "react-redux-form";
import dateFormat from "dateformat";

function ModifyStaff2(props) {
  const dispatch = useDispatch();
  const [selectedStaff, setSelectedStaff] = useState({
    id: props.staffList[0].id,
    name: props.staffList[0].name,
    doB: props.staffList[0].doB,
    salaryScale: props.staffList[0].salaryScale,
    startDate: props.staffList[0].startDate,
    departmentId: props.staffList[0].departmentId,
    annualLeave: props.staffList[0].annualLeave,
    overTime: props.staffList[0].overTime,
  });

  let btnType = "";

  // ---------- Handle click & submit buttom ----------
  // *** Default value of selected staff
  function handleOnChange(e) {
    setSelectedStaff({
      id: props.staffList[e.target.value].id,
      name: props.staffList[e.target.value].name,
      doB: props.staffList[e.target.value].doB,
      salaryScale: props.staffList[e.target.value].salaryScale,
      startDate: props.staffList[e.target.value].startDate,
      departmentId: props.staffList[e.target.value].departmentId,
      annualLeave: props.staffList[e.target.value].annualLeave,
      overTime: props.staffList[e.target.value].overTime,
    });
  }

  // *** Click what button?
  function handleClick(e) {
    btnType = e.target.value;
  }

  // *** Change or delete data
  function handleSubmit(value) {
    const newStaff = { ...value };

    // Convert newStaff.id from index number from right id
    newStaff.id = props.staffList[newStaff.id].id;

    if (btnType === "modify") {
      btnType = "";
      modifyData(dispatch, newStaff);
    }

    if (btnType === "delete") {
      btnType = "";

      deleteData(dispatch, newStaff.id);
    }
  }

  // ---------- Modal's close button ----------
  const closeBtn = (
    <button className="close" onClick={props.toggleModal}>
      &times;
    </button>
  );

  // ---------- Render modal ----------
  return (
    <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal} close={closeBtn}>
        Chỉnh sửa thông tin
      </ModalHeader>
      <ModalBody>
        <LocalForm onSubmit={handleSubmit}>
          {/* *** Full name */}
          <Row className="form-group">
            <Label htmlFor="name" md={4}>
              Họ tên
            </Label>
            <Col md={8}>
              <Control.select
                model=".id"
                id="name"
                name="name"
                defaultValue={Number(0)}
                className="form-control"
                onChange={handleOnChange}
              >
                {/* Value is position of staff in staffList */}
                {props.staffList.map((staff, staffIndex) => {
                  return (
                    <option key={staffIndex} value={staffIndex}>
                      {staff.name}
                    </option>
                  );
                })}
              </Control.select>
              <Errors model=".name" className="text-danger" />
            </Col>
          </Row>

          {/* *** Date of birth*/}
          <Row className="form-group">
            <Label htmlFor="doB" md={4}>
              Ngày sinh
            </Label>

            <Col md={8}>
              <Row>
                <Col md={12}>
                  <Control.input
                    type="date"
                    model=".doB"
                    id="old-doB"
                    value={dateFormat(selectedStaff.doB, "yyyy-mm-dd")}
                    className="form-control"
                  />
                </Col>

                <Col md={12}>
                  <Control.input
                    type="date"
                    model=".doB"
                    id="doB"
                    name="doB"
                    className="form-control"
                  />
                  <Errors model=".doB" className="text-danger" />
                </Col>
              </Row>
            </Col>
          </Row>

          {/* *** Started Date*/}
          <Row className="form-group">
            <Label htmlFor="startDate" md={4}>
              Ngày vào công ty
            </Label>

            <Col md={8}>
              <Row>
                <Col md={12}>
                  <Control.input
                    type="date"
                    model=".old-startDate"
                    id="old-startDate"
                    value={dateFormat(selectedStaff.startDate, "yyyy-mm-dd")}
                    className="form-control"
                  />
                  <Errors model=".startDate" className="text-danger" />
                </Col>
                <Col md={12}>
                  <Control.input
                    type="date"
                    model=".startDate"
                    id="startDate"
                    name="startDate"
                    className="form-control"
                  />
                  <Errors model=".startDate" className="text-danger" />
                </Col>
              </Row>
            </Col>
          </Row>

          {/* *** Department */}
          <Row className="form-group">
            <Label htmlFor="department" md={4}>
              Phòng ban
            </Label>
            {/* Default department */}
            <Col md={4}>
              <Control.select
                model=".old-department"
                id="old-department"
                className="form-control"
              >
                {props.departments.map((department) => {
                  if (department.id === selectedStaff.departmentId) {
                    return (
                      <option key={department.id} value={department.id}>
                        {department.name}
                      </option>
                    );
                  }
                })}
              </Control.select>
            </Col>
            {/* New department */}
            <Col md={4}>
              <Control.select
                model=".departmentId"
                id="department"
                name="department"
                className="form-control"
              >
                <option value="default">(Mặc định)</option>
                {/* Show department options except default one */}
                {props.departments.map((department) => {
                  if (department.id !== selectedStaff.departmentId) {
                    return (
                      <option key={department.id} value={department.id}>
                        {department.name}
                      </option>
                    );
                  }
                })}
              </Control.select>
            </Col>
          </Row>

          {/* *** Salary Scale */}
          <Row className="form-group">
            <Label htmlFor="salaryScale" md={4}>
              Hệ số lương
            </Label>

            <Col md={4}>
              <Control
                model=".old-salaryScale"
                id="old-salary"
                className="form-control"
                value={selectedStaff.salaryScale}
              ></Control>
            </Col>

            <Col md={4}>
              <Control
                model=".salaryScale"
                id="salaryScale"
                name="salaryScale"
                placeholder="Nhập số mới"
                className="form-control"
                validators={{
                  typeCheck: (val) =>
                    !val || (!Number.isNaN(Number(val)) && val >= 0 && val < 4),
                }}
              />
              <Errors
                model=".salaryScale"
                className="text-danger"
                messages={{
                  typeCheck: "Yêu cầu nhập số từ 1-3",
                }}
              />
            </Col>
          </Row>

          {/* *** Annual Leave */}
          <Row className="form-group">
            <Label htmlFor="annualLeave" md={4}>
              Ngày nghỉ còn lại
            </Label>

            <Col md={4}>
              <Control
                model=".old-annualLeave"
                id="old-annualLeave"
                className="form-control"
                value={selectedStaff.annualLeave}
              />
            </Col>

            <Col md={4}>
              <Control
                model=".annualLeave"
                id="annualLeave"
                name="annualLeave"
                className="form-control"
                placeholder="Nhập số mới"
                validators={{
                  typeCheck: (val) => !val || !Number.isNaN(Number(val)),
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

          {/* *** Overtime */}
          <Row className="form-group">
            <Label htmlFor="overTime" md={4}>
              Ngày đã làm thêm
            </Label>

            <Col md={4}>
              <Control
                model=".old-overTime"
                id="old-overTime"
                className="form-control"
                value={selectedStaff.overTime}
              />
            </Col>

            <Col md={4}>
              <Control
                model=".overTime"
                id="overTime"
                name="overTime"
                className="form-control"
                placeholder="Nhập số mới"
                validators={{
                  typeCheck: (val) => !val || !Number.isNaN(Number(val)),
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

          {/* *** Submit button */}
          <Row className="form-group">
            <Col className="col-7 offset-4">
              {/* Modify button */}
              <Button
                type="submit"
                value="modify"
                color="info"
                onClick={handleClick}
              >
                Chỉnh sửa
              </Button>

              {/* Delete button */}
              <Button
                className="mx-1"
                type="submit"
                value="delete"
                color="danger"
                onClick={handleClick}
              >
                Xoá
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </ModalBody>
    </Modal>
  );
}

export default ModifyStaff2;
