import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
  UncontrolledCollapse,
} from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cols = "col-12 col-md-6 col-lg-4";
    let colwidth = this.props.columns;
    if (colwidth) {
      cols =
        "col-12 col-md-" +
        (colwidth > 3 ? colwidth : 6) +
        " col-lg-" +
        colwidth;
    }

    const staffName = this.props.staffList.map((staff) => {
      return (
        <CardGroup className={cols}>
          <Card className="m-1" key={staff.id}>
            <CardImg
              top
              src={staff.image}
              alt={staff.name}
              id={"toggler" + staff.id}
            />

            <CardBody>
              <CardTitle>
                {staff.name} - {staff.department.name}
              </CardTitle>
              <UncontrolledCollapse toggler={"#toggler" + staff.id}>
                <CardText>
                  Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>
                  Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                </CardText>
                <CardText>Phòng ban: {staff.department.name}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
              </UncontrolledCollapse>
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
