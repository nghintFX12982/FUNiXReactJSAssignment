import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
    <div id="navbar">
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          onClick={() => {
            if (isOpen === true) {
              toggle();
            }
          }}
          navbar
        >
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
        </Collapse>
        <RouterLink to="/staff">
          <NavbarText>Thông Tin Nhân Viên</NavbarText>
        </RouterLink>
      </Navbar>
    </div>
  );
};

export default Header;
