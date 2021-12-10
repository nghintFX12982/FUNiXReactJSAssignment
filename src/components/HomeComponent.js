import Staff from "./staffs/StaffComponent";
import StaffDetail from "./staffs/StaffDetailComponent";

import React from "react";

const Home = (props) => {
  if (props.match.params.staffid) {
    console.log("Staff Detail");
    // Render info of each staff
    return (
      <StaffDetail
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
    // Render all staffs
    return (
      <Staff
        staffList={props.staffs.staffs}
        match={props.match}
        isLoading={props.staffs.isLoading}
      />
    );
  }
};

export default Home;
