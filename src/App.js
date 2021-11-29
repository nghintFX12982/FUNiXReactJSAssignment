import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StaffPage from "./components/StaffPage";
import StaffDetailPage from "./components/StaffDetailPage";
import DepartmentPage from "./components/DepartmentPage";
import SalaryPage from "./components/SalaryPage";
import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const staffs = useSelector((state) => state.staff.staffs);
  const departments = useSelector((state) => state.staff.departments);
  const dispatch = useDispatch();

  const StaffWithId = ({ match }) => {
    return (
      <StaffDetailPage
        staff={
          props.staffs.filter(
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
        <Route
          path="/staff"
          component={({ match }) => (
            <StaffPage staffList={staffs} match={match} />
          )}
          exact
        />
        <Route path="/staff/:staffId" component={StaffWithId} />
        <Route
          path="/department"
          component={() => <DepartmentPage departmentList={departments} />}
        />
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
