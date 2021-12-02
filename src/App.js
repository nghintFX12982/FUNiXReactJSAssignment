import "./App.css";
import { STAFFS, DEPARTMENTS } from "./shared/staffs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StaffPage from "./components/staffs/StaffComponent";
import StaffDetailPage from "./components/StaffDetailPage";
import DepartmentPage from "./components/departments/DepartmentComponent";
import SalaryPage from "./components/SalaryPage";

import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [staffs, setStaffs] = useState(STAFFS);
  const departments = [...DEPARTMENTS];

  const StaffWithId = ({ match }) => {
    return (
      <StaffDetailPage
        staff={
          staffs.filter(
            (staff) => staff.id === Number.parseInt(match.params.staffId, 10)
          )[0]
        }
      />
    );
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Staff Route */}
        <Route
          path="/staff"
          component={({ match }) => (
            <StaffPage
              staffList={staffs}
              departmentList={departments}
              match={match}
              setStaffs={setStaffs}
            />
          )}
          exact
        />
        {/* Staff Detail Route */}
        <Route path="/staff/:staffId" component={StaffWithId} />
        {/* Department Route */}
        <Route
          path="/department"
          component={() => <DepartmentPage departmentList={departments} />}
        />
        {/* Salary Route */}
        <Route
          path="/salary"
          component={({ match }) => (
            <SalaryPage staffList={staffs} match={match} />
          )}
        />

        <Redirect from="/" to="/staff" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
