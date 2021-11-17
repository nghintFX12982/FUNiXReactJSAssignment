import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardGroup } from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const staffName = this.props.staffList.map((staff) => {
      return (
        <CardGroup className="col-12 col-md-6 col-lg-4">
          <Card className="m-1" key={staff.id}>
            <CardImg top src={staff.image} alt={staff.name} />
            <CardBody>
              <CardTitle>
                {staff.name} - {staff.department.name}
              </CardTitle>
            </CardBody>
          </Card>
        </CardGroup>
      );
    });

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
