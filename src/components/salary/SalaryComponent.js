import { RenderSalary } from "../features/RenderSalary";
import { SortButton } from "../features/SortSalary";

import React, { useState } from "react";

// ----- Container Component -----
function Salary(props) {
  const [staffList, setStaffList] = useState(props.salary.staffs);

  return (
    <div className="container">
      {/* ----- Sort Function Section ----- */}
      <SortButton staffList={staffList} setStaffList={setStaffList} />

      {/* ----- Render staff Section ----- */}
      <RenderSalary
        staffList={staffList}
        isLoading={props.salary.isLoading}
        errmes={props.salary.errmess}
      />
    </div>
  );
}

export default Salary;
