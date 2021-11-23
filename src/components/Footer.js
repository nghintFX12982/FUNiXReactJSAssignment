import React from "react";
import { Jumbotron, List } from "reactstrap";
import { NavLink } from "react-router-dom";

function Footer(props) {
  return (
    <div id="footer">
      <Jumbotron>
        <div className="row">
          <div className="col-12 col-md-4">
            <h1 className="display-5">Điều hướng</h1>
            <List type="unstyled">
              <li>
                <NavLink to="/staff">Nhân Viên</NavLink>
              </li>
              <li>
                <NavLink to="/department">Phòng Ban</NavLink>
              </li>
              <li>
                <NavLink to="/salary">Bảng Lương</NavLink>
              </li>
            </List>
          </div>
          <div className="col-12 col-md-8">
            <h1 className="display-5">Địa chỉ</h1>
            <p className="lead">
              121, Clear Water Bay Road Clear Water Bay, KowLoon HONG KONG
            </p>
            <p>
              <i class="fa fa-phone" aria-hidden="true"></i>: +852 1234 5678
            </p>
            <p>
              <i class="fa fa-fax" aria-hidden="true"></i>: +852 8765 4321
            </p>
            <p>
              <i class="fa fa-envelope" aria-hidden="true"></i>:
              confusion@food.net
            </p>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Footer;
