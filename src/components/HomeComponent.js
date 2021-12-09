import { fetchStaff } from "../redux/ActionCreators";
import StaffPage from "./staffs/StaffComponent";
import StaffDetailPage from "./StaffDetailPage";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = (props) => {
  if (props.match.params.staffid) {
    console.log("Staff Detail");
    return (
      <StaffDetailPage
        staff={
          props.staffs.staffs.filter(
            (staff) =>
              staff.id === Number.parseInt(props.match.params.staffid, 10)
          )[0]
        }
        isLoading={props.staffs.isLoading}
      />
    );
  } else {
    console.log("Staff Page");
    return (
      <StaffPage
        staffList={props.staffs.staffs}
        match={props.match}
        isLoading={props.staffs.isLoading}
      />
    );
  }
};

export default Home;
