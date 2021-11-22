import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <RouterLink to="/staff">
        <NavbarBrand>Logo</NavbarBrand>
      </RouterLink>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <RouterLink to="/staff">
              <NavLink>
                <i class="fa fa-users" aria-hidden="true"></i> Nhân Viên
              </NavLink>
            </RouterLink>
          </NavItem>
          <NavItem>
            <RouterLink to="/department">
              <NavLink>
                <i class="fa fa-id-card-o" aria-hidden="true"></i> Phòng Ban
              </NavLink>
            </RouterLink>
          </NavItem>
          <NavItem>
            <RouterLink to="/salary">
              <NavLink>
                <i class="fa fa-money" aria-hidden="true"></i> Bảng Lương
              </NavLink>
            </RouterLink>
          </NavItem>
          {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Header;
