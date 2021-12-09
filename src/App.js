import "./App.css";
import { fetchStaff } from "./redux/ActionCreators";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/HomeComponent";
import StaffPage from "./components/staffs/StaffComponent";
import StaffDetailPage from "./components/StaffDetailPage";
import DepartmentPage from "./components/departments/DepartmentComponent";
import SalaryPage from "./components/SalaryPage";

import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const staffs = useSelector((state) => state.staff);
  const departments = useSelector((state) => state.department);
  const dispatch = useDispatch();
  const routes = [
    {
      name: "HomePage",
      path: "/staff",
      Component: Home,
    },
    {
      name: "StaffDetail",
      path: "/staff/:staffid",
      Component: Home,
    },
  ];

  console.log(staffs);
  useEffect(() => {
    console.log("fetch staff");
    dispatch(fetchStaff());
  }, {});

  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Staff Route */}
        {routes.map(({ path, Component }) => {
          return (
            <Route
              path={path}
              component={({ match }) => (
                <Component match={match} staffs={staffs} />
              )}
              exact
            ></Route>
          );
        })}
        {/* <Route
          path="/staff"
          component={({ match }) => (
            <StaffPage
              staffList={staffs.staffs}
              match={match}
              isLoading={staffs.isLoading}
            />
          )}
          exact
        /> */}
        {/* Staff Detail Route */}
        {/* <Route path="/staff/:staffId" component={StaffWithId} /> */}
        {/* Department Route */}
        {/* <Route
          path="/department"
          component={() => <DepartmentPage departmentList={departments} />}
        /> */}
        {/* Salary Route */}
        {/* <Route
          path="/salary"
          component={({ match }) => (
            <SalaryPage staffList={staffs} match={match} />
          )}
        /> */}
        <Redirect from="/" to="/staff" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
