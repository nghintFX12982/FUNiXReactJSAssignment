import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StaffPage from "./components/staffs/StaffComponent";
import StaffDetailPage from "./components/StaffDetailPage";
import DepartmentPage from "./components/departments/DepartmentComponent";
import SalaryPage from "./components/SalaryPage";
import { useSelector } from "react-redux";

function App() {
  const staffs = useSelector((state) => state.staff);
  const departments = useSelector((state) => state.staff.departments);

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
        <Route
          path="/staff"
          component={({ match }) => (
            <StaffPage staffList={staffs} match={match} />
          )}
          exact
        />
        <Route path="/staff/:staffId" component={StaffWithId} />
        {/* <Route
          path="/department"
          component={() => <DepartmentPage departmentList={departments} />}
        /> */}
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
