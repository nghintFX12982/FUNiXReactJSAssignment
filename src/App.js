import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBarDrop from "./components/NavBarDropComponent";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import Header from "./components/Header";
import StaffPage from "./components/StaffPage";
import StaffDetailPage from "./components/StaffDetailPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
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
        <Header />

        <Switch>
          <Route
            path="/staff"
            component={() => <StaffPage staffList={this.state.staffs} />}
            exact
          />
          <Route path="/staff/:staffId" component={StaffWithId} />
          <Redirect from="/" to="/staff" exact />
        </Switch>
      </div>
    );
  }
}

export default App;
