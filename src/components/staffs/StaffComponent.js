import AddStaffModal from "./ModalStaffComponent";
import BreadcrumbStaff from "./BreadcrumbStaffComponent";
import { Loading } from "../LoadingComponent";
import { RenderStaff } from "../features/RenderStaff";

import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // This function will update searchList when search box is blurred
  function handleBlur(e) {
    const searchValue = e.target.value;
    setSearchList(props.staffList);

    if (searchValue !== "") {
      setSearchList(
        props.staffList.filter(
          (staff) =>
            staff.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
      );
    }
  }

  // This function will set staffList as searchList & re-render when click "find" button
  function handleClick(e) {
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

  // This function will set true/false for isModalOpen flag
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <React.Fragment>
      <div className="container">
        {/* ----- Breadcrumb and Search Section ------ */}
        {console.log("staff component return")}
        <BreadcrumbStaff
          match={props.match}
          toggleModal={toggleModal}
          handleBlur={handleBlur}
          handleClick={handleClick}
        />
        {/* ----- Modal form ----- */}
        <AddStaffModal
          staffList={staffList}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
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
        {/* ---------- */}
        {/* Staff Render Section */}
        {/* ---------- */}
        <RenderStaff
          staffList={props.staffList}
          match={props.match}
          isLoading={props.isLoading}
        />
      </div>
    </React.Fragment>
  );
}

export default Staff;
