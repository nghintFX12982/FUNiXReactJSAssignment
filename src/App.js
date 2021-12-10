import "./App.css";
import { fetchData } from "./redux/ActionCreators";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/HomeComponent";
import Department from "./components/departments/DepartmentComponent";
import Salary from "./components/salary/SalaryComponent";

import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const staffs = useSelector((state) => state.staff);
  const departments = useSelector((state) => state.department);
  const salary = useSelector((state) => state.salary);
  const dispatch = useDispatch();

  // Routes list with path & component for react-router-dom
  const routes = [
    { name: "HomePage", path: "/staff", Component: Home },
    { name: "StaffDetail", path: "/staff/:staffid", Component: Home },
    { name: "DeptPage", path: "/department", Component: Department },
    { name: "DeptStaff", path: "/department/:deptId", Component: Department },
    { name: "SalaryPage", path: "/salary", Component: Salary },
  ];

  // Fetch data after render
  useEffect(() => {
    dispatch((dispatch) => {
      fetchData(dispatch, "staffs");
      fetchData(dispatch, "departments");
      fetchData(dispatch, "staffsSalary");
    });
  }, []);

  return (
    <div className="App">
      {/* ----- Header Section ----- */}
      <Header />

      {/* ----- Router Section ----- */}
      {/* Route with 3 props: path, component & exact */}
      <Switch>
        {routes.map(({ path, Component }) => {
          return (
            <Route
              key={path}
              path={path}
              component={({ match }) => (
                <Component
                  match={match}
                  staffs={staffs}
                  departments={departments}
                  salary={salary}
                />
              )}
              exact
            />
          );
        })}
        {/* <Route
          path="/salary"
          component={({ match }) => (
            <SalaryPage staffList={staffs} match={match} />
          )}
        /> */}
        <Redirect from="/" to="/staff" />
      </Switch>

      {/* ----- Footer Section ----- */}
      <Footer />
    </div>
  );
}

export default App;
