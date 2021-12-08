import "./App.css";
import { fetchStaff } from "./redux/ActionCreators";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StaffPage from "./components/staffs/StaffComponent";
import StaffDetailPage from "./components/StaffDetailPage";
import DepartmentPage from "./components/departments/DepartmentComponent";
import SalaryPage from "./components/SalaryPage";

import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const staffs = useSelector((state) => state.staff.staffs);
  const departments = useSelector((state) => state.department);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    dispatch(fetchStaff());
  });

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

  console.log("return component");
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Staff Route */}
        <Route
          path="/staff"
          component={({ match }) => (
            <StaffPage staffList={staffs} match={match} />
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
