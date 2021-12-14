import { Loading } from "../LoadingComponent";
import ModifyStaff from "./ModifyStaffComponent";

import React from "react";

function Info(props) {
  if (props.staffs.isLoading) {
    return <Loading />;
  }

  if (!props.staffs.isLoading) {
    return (
      <ModifyStaff
        staffList={props.staffs.staffs}
        departmentList={props.departments.departments}
      />
    );
  }
}

export default Info;
