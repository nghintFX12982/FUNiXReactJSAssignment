import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export const RenderBreadcrumb = (props) => {
  // breadCrumb name based on staff or department page
  const breadcrumbName = props.staffName ? "Nhân Viên" : "Bộ Phận";

  return (
    <div className="row">
      <div className="col-12">
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem>
            <Link to="/staff">{breadcrumbName}</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>{props.staffName || props.deptName}</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  );
};
