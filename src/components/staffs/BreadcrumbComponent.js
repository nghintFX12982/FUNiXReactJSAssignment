import React from "react";
import { Breadcrumb, BreadcrumbItem, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

function StaffBreadcrumb(props) {
  return (
    <div className="row" id="breadcrumb-search-section">
      <div className="col-12 col-md-6" id="breadcrumb">
        {/* ----- Add Button Section ----- */}
        <div className="row">
          {/* Breadcrumb */}
          <div className="col-8 col-md-6 col-lg-4">
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem>
                <Link to={props.match.path}>
                  {" "}
                  <h3 style={{ display: "inline-block" }}>Nhân viên</h3>
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          {/* Add button */}
          <div className="col-4 col-md-6 col-lg-8 left-align">
            <div className="row">
              <div className="col-12 ">
                <Button
                  style={{ marginBottom: "8px" }}
                  color="danger"
                  id="add-btn"
                  onClick={props.toggleModal}
                >
                  Thêm
                </Button>
              </div>
              <div className="col-12 ">
                <Button color="danger" id="add-btn" onClick={props.toggleModal}>
                  Chỉnh sửa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- Search Section ----- */}
      <div className="col-12 col-md-6" id="staff-search">
        <div className="row my-2">
          {/* Search Box */}
          <div className="col-8">
            <Input
              type="text"
              id="staff-search-box"
              placeholder="Nhập tên nhân viên"
              onBlur={props.handleBlur}
            />
          </div>

          {/* Search Button */}
          <div className="col-4">
            <Button
              color="primary"
              size="md"
              id="staff-search-btn"
              onClick={props.handleClick}
            >
              Tìm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffBreadcrumb;
