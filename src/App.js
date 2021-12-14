import "./App.css";
import { fetchData } from "./redux/ActionCreators";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/HomeComponent";
import Department from "./components/departments/DepartmentComponent";
import Salary from "./components/salary/SalaryComponent";
import Info from "./components/modify/InfoComponent";

import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const staffs = useSelector((state) => state.staff);
  const departments = useSelector((state) => state.department);
  const salary = useSelector((state) => state.salary);
  const dispatch = useDispatch();
  const location = useLocation();

  // Routes list with path & component for react-router-dom
  const routes = [
    { name: "HomePage", path: "/staff", Component: Home },
    { name: "StaffDetail", path: "/staff/:staffid", Component: Home },
    { name: "DeptPage", path: "/department", Component: Department },
    { name: "DeptStaff", path: "/department/:deptId", Component: Department },
    { name: "SalaryPage", path: "/salary", Component: Salary },
    { name: "EditPage", path: "/edit", Component: Info },
  ];

  // Fetch data after render
  useEffect(() => {
    dispatch((dispatch) => {
      dispatch(fetchData("staffs"));
      dispatch(fetchData("departments"));
      dispatch(fetchData("staffsSalary"));
    });
  }, []);

  return (
    <div className="App">
      {/* ----- Header Section ----- */}
      <Header />

      {/* ----- Router Section ----- */}
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="page">
          <Switch>
            {/* Route for each path */}
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

            {/* Redirect */}
            <Redirect from="/" to="/staff" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>

      {/* ----- Footer Section ----- */}
      <Footer />
    </div>
  );
}

export default App;
