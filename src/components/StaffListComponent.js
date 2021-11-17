import React, { Component } from "react";

class StaffList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">{staffName}</div>
        <div className="row">
          <div className="col-12">
            Bấm vào hình nhân viên để xem thông tin chi tiết
          </div>
        </div>
      </div>
    );
  }
}

export default StaffList;
