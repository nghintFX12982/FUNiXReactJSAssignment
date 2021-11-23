import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { STAFFS, DEPARTMENTS } from "./shared/staffs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StaffPage from "./components/StaffPage";
import StaffDetailPage from "./components/StaffDetailPage";
import DepartmentPage from "./components/DepartmentPage";
import SalaryPage from "./components/SalaryPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetailPage
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === Number.parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div className="App">
        <Header /> {/* Xem lai code phan nay */}
        <Switch>
          <Route
            path="/staff"
            component={({ match }) => (
              <StaffPage staffList={this.state.staffs} match={match} />
            )}
            exact
          />
          <Route path="/staff/:staffId" component={StaffWithId} />
          <Route
            path="/department"
            component={() => (
              <DepartmentPage departmentList={this.state.departments} />
            )}
          />
          <Route
            path="/salary"
            component={({ match }) => (
              <SalaryPage staffList={this.state.staffs} match={match} />
            )}
          />

          <Redirect from="/" to="/staff" exact />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
