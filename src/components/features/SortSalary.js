import React from "react";
import { Button } from "reactstrap";

export const SortButton = (props) => {
  // ----- Use sort method to sort salary -----
  function sortSalary(sortType) {
    const sortedList = [...props.staffList];

    // Increasing sort
    if (sortType === "inc") {
      sortedList.sort((a, b) => a.salary - b.salary);
    }

    // Decreaing sort
    if (sortType === "dec") {
      sortedList.sort((a, b) => b.salary - a.salary);
    }

    props.setStaffList(sortedList);
  }

  return (
    <div id="sort" className="row">
      <div className="col-12">
        <h5>Sắp xếp theo</h5>
      </div>
      <div className="col-12">
        <Button onClick={() => sortSalary("inc")}>
          <i class="fa fa-sort-amount-asc" aria-hidden="true"></i> Lương thấp
        </Button>

        <Button onClick={() => sortSalary("dec")}>
          <i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Lương cao
        </Button>
      </div>
    </div>
  );
};
