import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

class NavBarDrop extends Component {
  render() {
    return (
      <Navbar dark color="info">
        <div className="container">
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          <Nav>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle caret color="muted">
                Bố cục
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  onClick={() => {
                    this.props.onClick(12);
                  }}
                >
                  1 cột
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    this.props.onClick(6);
                  }}
                >
                  2 cột
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    this.props.onClick(4);
                  }}
                >
                  3 cột
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    this.props.onClick(3);
                  }}
                >
                  4 cột
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => {
                    this.props.onClick(null);
                  }}
                >
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </div>
      </Navbar>
    );
  }
}

export default NavBarDrop;
