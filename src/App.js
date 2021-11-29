import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StaffPage from "./components/StaffPage";
import StaffDetailPage from "./components/StaffDetailPage";
import DepartmentPage from "./components/DepartmentPage";
import SalaryPage from "./components/SalaryPage";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetailPage
          staff={
            this.props.staffs.filter(
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
              <StaffPage staffList={this.props.staffs} match={match} />
            )}
            exact
          />
          <Route path="/staff/:staffId" component={StaffWithId} />
          <Route
            path="/department"
            component={() => (
              <DepartmentPage departmentList={this.props.departments} />
            )}
          />
          <Route
            path="/salary"
            component={({ match }) => (
              <SalaryPage staffList={this.props.staffs} match={match} />
            )}
          />

          <Redirect from="/" to="/staff" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStatetoProps)(App));
