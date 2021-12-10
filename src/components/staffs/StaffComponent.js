import AddNewStaff from "../features/AddNewStaff";
import ModifyStaff from "../features/ModifyStaff";
import StaffBreadcrumb from "./BreadcrumbComponent";
import { RenderStaff } from "../features/RenderStaff";

import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";

// ------------------------------------
// ----- Presentational Component -----
const RenderFilterForm = () => {
  return (
    <React.Fragment>
      <option value="default">(Bộ phận)</option>
      <option value="Finance">Bộ phận Finance</option>
      <option value="HR">Bộ phận HR</option>
      <option value="IT">Bộ phận IT</option>
      <option value="Marketing">Bộ phận Marketing</option>
      <option value="Sale">Bộ phận Sale</option>
    </React.Fragment>
  );
};

// -------------------------------
// ----- Container Component -----
function Staff(props) {
  const [staffList, setStaffList] = useState(props.staffList);
  const [searchList, setSearchList] = useState(props.staffList);
  const [currentDepartment, setCurrentDepartment] = useState("default");
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  const [isModifyStaffOpen, setIsModifyStaffOpen] = useState(false);

  // ----- Update searchList when search box is blurred -----
  function handleBlur(e) {
    const searchValue = e.target.value;

    // Reset search list
    setSearchList(props.staffList);

    // Create new search list & update to searchList
    if (searchValue !== "") {
      const list = props.staffList.filter((staff) => {
        const lowerName = staff.name.toLowerCase();
        const lowerValue = searchValue.toLowerCase();

        return lowerName.indexOf(lowerValue) !== -1;
      });

      setSearchList(list);
    }
  }

  // ----- Re-render list when click "find" button -----
  function handleClick(e) {
    console.log("click");
    console.log(searchList);
    setCurrentDepartment("default");
    setStaffList(searchList);
  }

  // This function will update filtered list & re-render when options are changed
  function filterStaffList(e) {
    let filteredValue = e.target.value;
    let filteredList = [...props.staffList];

    if (filteredValue !== "default") {
      filteredList = props.staffList.filter(
        (staff) => staff.department.name === filteredValue
      );
    }

    setCurrentDepartment(filteredValue);
    setStaffList(filteredList);
  }

  // Toggle modal
  function toggleAddStaff() {
    setIsAddStaffOpen(!isAddStaffOpen);
  }

  function toggleModifyStaff() {
    setIsModifyStaffOpen(!isModifyStaffOpen);
  }

  return (
    <React.Fragment>
      <div className="container">
        {/* ----- Breadcrumb and Search Section ------ */}
        <StaffBreadcrumb
          match={props.match}
          toggleAddStaff={toggleAddStaff}
          toggleModifyStaff={toggleModifyStaff}
          handleBlur={handleBlur}
          handleClick={handleClick}
        />

        {/* ----- Add/Modify Staff Feature ----- */}
        <AddNewStaff
          isModalOpen={isAddStaffOpen}
          toggleModal={toggleAddStaff}
        />
        <ModifyStaff
          isModalOpen={isModifyStaffOpen}
          toggleModal={toggleModifyStaff}
        />

        {/* ----- Filter form ----- */}
        <div className="row">
          <div className="col-12 col-md-4">
            <FormGroup>
              <Input
                type="select"
                id="mySelect"
                value={currentDepartment}
                onChange={filterStaffList}
              >
                <RenderFilterForm />
              </Input>
            </FormGroup>
          </div>
        </div>

        {/* Staff Render Section */}
        <RenderStaff
          staffList={staffList}
          match={props.match}
          isLoading={props.isLoading}
        />
      </div>
    </React.Fragment>
  );
}

export default Staff;
