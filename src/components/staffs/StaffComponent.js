import AddNewStaff from "../features/AddNewStaff";
import ModifyStaff from "../features/ModifyStaff";
import StaffBreadcrumb from "./BreadcrumbComponent";
import { RenderStaff } from "../features/RenderStaff";

import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";

const filterOption = [
  { name: "(Bộ phận)", value: "default" },
  { name: "Bộ phận Finance", value: "Finance" },
  { name: "Bộ phận HR", value: "HR" },
  { name: "Bộ phận IT", value: "IT" },
  { name: "Bộ phận Marketing", value: "Marketing" },
  { name: "Bộ phận Sale", value: "Sale" },
];

// Main Component
function Staff(props) {
  const [staffList, setStaffList] = useState(props.staffList);
  const [searchList, setSearchList] = useState(props.staffList);
  const [currentDepartment, setCurrentDepartment] = useState("default");
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  const [isModifyStaffOpen, setIsModifyStaffOpen] = useState(false);

  // ---------- Search Feature ----------
  // *** Update searchList when search box is blurred
  function handleBlur(e) {
    const searchValue = e.target.value;

    // Reset search list
    setSearchList(props.staffList);

    // Compare search value with each name in staff list
    if (searchValue !== "") {
      const list = props.staffList.filter((staff) => {
        const lowerName = staff.name.toLowerCase();
        const lowerValue = searchValue.toLowerCase();

        return lowerName.indexOf(lowerValue) !== -1;
      });

      setSearchList(list);
    }
  }

  // *** Re-render list when click "find" button
  function handleClick(e) {
    setCurrentDepartment("default");
    setStaffList(searchList);
  }

  // ---------- Filter Feature ----------
  // *** Filtered list & re-render when options are changed
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

  // ---------- Toogle Feature ----------
  // *** Toggle modal
  function toggleAddStaff() {
    setIsAddStaffOpen(!isAddStaffOpen);
  }

  function toggleModifyStaff() {
    setIsModifyStaffOpen(!isModifyStaffOpen);
  }

  // ---------- Render ----------
  return (
    <div className="container">
      {/* *** Breadcrumb and Search Section */}
      <StaffBreadcrumb
        match={props.match}
        toggleAddStaff={toggleAddStaff}
        toggleModifyStaff={toggleModifyStaff}
        handleBlur={handleBlur}
        handleClick={handleClick}
      />

      {/* *** Add/Modify Staff Feature */}
      <AddNewStaff
        isModalOpen={isAddStaffOpen}
        toggleModal={toggleAddStaff}
        departments={props.departments}
      />
      <ModifyStaff
        isModalOpen={isModifyStaffOpen}
        toggleModal={toggleModifyStaff}
        staffList={staffList}
        departments={props.departments}
        match={props.match}
      />

      {/* *** Filter form */}
      <div className="row">
        <div className="col-12 col-md-4">
          <FormGroup>
            <Input
              type="select"
              id="mySelect"
              value={currentDepartment}
              onChange={filterStaffList}
            >
              {filterOption.map((option) => (
                <option value={option.value}>{option.name}</option>
              ))}
            </Input>
          </FormGroup>
        </div>
      </div>

      {/* *** Staff Render Section */}
      <RenderStaff staffList={staffList} match={props.match} />
    </div>
  );
}

export default Staff;
