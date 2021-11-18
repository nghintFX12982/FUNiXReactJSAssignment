import React, { Component } from "react";
import "./App.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";

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
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
            <Nav>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret color="muted">
                  Bố cục
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => this.setLayout(6)}>
                    2 cột
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setLayout(4)}>
                    3 cột
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setLayout(3)}>
                    4 cột
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => this.setLayout(null)}>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </div>
        </Navbar>
        <StaffList columns={this.state.layout} staffList={this.state.staffs} />
      </div>
    );
  }
}

export default App;
