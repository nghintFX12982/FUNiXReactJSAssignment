import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="navbar" className="container-fluid">
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
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
