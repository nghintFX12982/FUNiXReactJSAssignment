import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBarDrop from "./components/NavBarDropComponent";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import Header from "./components/Header";
import StaffPage from "./components/StaffPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      layout: null,
    };
  }

  setLayout(colwidth) {
    if (colwidth === null) return this.setState({ layout: null });

    if (window.innerWidth < 500) {
      return alert("Chỉ áp dụng với màn hình tablet và desktop");
    }

    if (window.innerWidth < 900 && colwidth <= 3) {
      return alert("Chỉ áp dụng với màn hình desktop");
    }

    this.setState({ layout: colwidth });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route
            path="/staff"
            component={() => <StaffPage staffList={this.state.staffs} />}
            exact
          />
          <Redirect from="/" to="/staff" />
        </Switch>
      </div>
    );
  }
}

export default App;
