import Staff from "./staffs/StaffComponent";
import StaffDetail from "./staffs/StaffDetailComponent";

import React from "react";

const Home = (props) => {
  // Render each staff
  if (props.match.params.staffid) {
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
  }

  // Render all staffs
  if (!props.match.params.staffid) {
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
