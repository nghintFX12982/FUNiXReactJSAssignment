import { Loading } from "./LoadingComponent";

import Staff from "./staffs/StaffComponent";
import StaffDetail from "./staffs/StaffDetailComponent";

import React from "react";

const Home = (props) => {
  // Loading data
  if (props.staffs.isLoading) {
    return <Loading />;
  }
  // Render each staff
  if (!props.staffs.isLoading) {
    if (props.match.params.staffid) {
      return (
        <StaffDetail
          staff={
            props.staffs.staffs.filter(
              (staff) =>
                staff.id === Number.parseInt(props.match.params.staffid, 10)
            )[0]
          }
          departments={props.departments}
        />
      );
    }

    // Render all staffs
    if (!props.match.params.staffid) {
      return (
        <Staff
          staffList={props.staffs.staffs}
          departments={props.departments.departments}
          match={props.match}
        />
      );
    }
  }
};

export default Home;
