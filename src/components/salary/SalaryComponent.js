import { RenderSalary } from "../features/RenderSalary";

import React, { useState } from "react";
import { Button, Card, CardText, Jumbotron } from "reactstrap";

const formatDecimal = require("format-decimal");

// ----- Presentational Component -----
// const RenderSalary = ({ staff, salary }) => {
//   return (
//     <Jumbotron style={{ textAlign: "left" }}>
//       <h2 className="py-3">{staff.name}</h2>
//       <p>Mã nhân viên: {staff.id}</p>
//       <p>Hệ số lương: {staff.salaryScale}</p>
//       <p>Số giờ làm thêm: {staff.overTime}</p>
//       <Card className="p-1">
//         <CardText>
//           Lương:{" "}
//           {formatDecimal(salary, {
//             decimal: ".",
//             thousands: ",",
//             precision: 0,
//           })}
//         </CardText>
//       </Card>
//     </Jumbotron>
//   );
// };

const SortButton = () => {
  return (
    <div id="sort" className="row">
      <div className="col-12">
        <h5>Sắp xếp theo</h5>
      </div>
      <div className="col-12">
        <Button onClick={() => {}}>
          <i class="fa fa-sort-amount-asc" aria-hidden="true"></i> Lương thấp
        </Button>

        <Button onClick={() => {}}>
          <i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Lương cao
        </Button>
      </div>
    </div>
  );
};

// ----- Container Component -----
function Salary(props) {
  const [staffList, setStaffList] = useState(props.salary.staffs);

  // Salary Calculation Feature
  // function salaryCalc(salaryScale, overTime) {
  //   const basicSalary = 3000000;
  //   const overTimeSalary = 200000;
  //   return salaryScale * basicSalary + overTime * overTimeSalary;
  // }

  // Sort by salary will be triggerd when "sort" button is clicked
  // function sortSalary(sorttype) {
  //   let sortedStaffList = [...staffList];
  //   let salaryA = 0;
  //   let salaryB = 0;

  //   if (sorttype === "inc") {
  //     sortedStaffList.sort(function (a, b) {
  //       salaryA = salaryCalc(a.salaryScale, a.overTime);
  //       salaryB = salaryCalc(b.salaryScale, b.overTime);
  //       return salaryA - salaryB;
  //     });
  //   }

  //   if (sorttype === "dec") {
  //     sortedStaffList.sort(function (a, b) {
  //       salaryA = salaryCalc(a.salaryScale, a.overTime);
  //       salaryB = salaryCalc(b.salaryScale, b.overTime);
  //       return salaryB - salaryA;
  //     });
  //   }

  //   setStaffList(sortedStaffList);
  // }

  // const staff = staffList.map((staff) => {
  //   return (
  //     <div className="col-12 col-md-6 col-xl-4">
  //       <RenderSalary
  //         staff={staff}
  //         salary={salaryCalc(staff.salaryScale, staff.overTime)}
  //       />
  //     </div>
  //   );
  // });

  return (
    <div className="container">
      {/* ----- Sort Function Section ----- */}
      <SortButton />

      {/* ----- Render staff Section ----- */}
      <RenderSalary
        staffList={props.salary.staffs}
        isLoading={props.salary.isLoading}
        errmes={props.salary.errmess}
      />
    </div>
  );
}

export default Salary;
