import "./App.css";
import { fetchStaff, fetchDepartment } from "./redux/ActionCreators";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/HomeComponent";
import Department from "./components/departments/DepartmentComponent";
import SalaryPage from "./components/SalaryPage";

import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const staffs = useSelector((state) => state.staff);
  const departments = useSelector((state) => state.department);
  const dispatch = useDispatch();

  // Routes list with path & component for react-router-dom
  const routes = [
    { name: "HomePage", path: "/staff", Component: Home },
    { name: "StaffDetail", path: "/staff/:staffid", Component: Home },
    { name: "DepartmentPage", path: "/department", Component: Department },
  ];

  useEffect(() => {
    dispatch(fetchStaff());
    dispatch(fetchDepartment());
  }, []);

  return (
    <div className="App">
      <Header />

      {/* Router for each path using routes list */}
      <Switch>
        {routes.map(({ path, Component }) => {
          return (
            <Route
              path={path}
              component={({ match }) => (
                <Component
                  match={match}
                  staffs={staffs}
                  departments={departments}
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
      <Footer />
    </div>
  );
}

export default App;
