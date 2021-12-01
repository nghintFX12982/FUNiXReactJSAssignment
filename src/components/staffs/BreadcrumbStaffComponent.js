import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

// Presentational Component
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

// Container Component
function BreadcrumbStaff(props) {
  return (
    <div className="row" id="breadcrumb-search-section">
      <div className="col-12 col-md-6" id="breadcrumb">
        {/* ----- Breadcrumb Section ----- */}
        <div className="row">
          {/* Breadcrumb */}
          <div className="col-8 col-md-6 col-lg-4">
            <RenderBreadcrumb match={props.match} />
          </div>
          {/* Add button */}
          <div className="col-4 col-md-6 col-lg-8 left-align">
            <Button color="danger" id="add-btn" onClick={props.toggleModal}>
              Add
            </Button>
          </div>
        </div>
      </div>
      {/* ----- Search Box Section ----- */}
      <div className="col-12 col-md-6" id="staff-search">
        <div className="row my-2">
          <div className="col-8">
            <Input
              type="text"
              id="staff-search-box"
              placeholder="Nhập tên nhân viên"
              onBlur={props.handleBlur}
            />
          </div>
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

export default BreadcrumbStaff;
