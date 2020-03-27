import React from "react";
import { connect } from "react-redux";
import { List, Avatar, Button, Skeleton, Typography } from "antd";
import reqwest from "reqwest";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class PatientList extends React.Component {
  render() {
    console.log(this.props);
    const { patients } = this.props;
    return (
      <List
        className="demo-loadmore-list custom-list"
        itemLayout="horizontal"
        dataSource={patients}
        renderItem={item => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">View/Edit</a>,
              <a key="list-loadmore-more">Delete</a>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src="" />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.domain}
            />
          </List.Item>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients.patients
  };
};

const mapPropsToState = dispatch => {
  return {
    add_patient: data => {
      dispatch({ type: "ADD_PATIENT", data: data });
    }
  };
};
export default connect(mapStateToProps, mapPropsToState)(PatientList);
