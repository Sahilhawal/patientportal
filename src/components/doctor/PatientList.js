import React from "react";
import { connect } from "react-redux";
import { List, Avatar } from "antd";

class PatientList extends React.Component {
  handleDelete = event => {
    console.log(event.target.id);
    console.log();
    this.props.delete_patient(event.target.id);
  };
  render() {
    console.log("lsit", this.props);
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
              <a id={item.email} onClick={this.handleDelete}>
                Delete
              </a>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src="" />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={"Gender: " + item.gender}
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
    delete_patient: data => {
      dispatch({ type: "DELETE_PATIENT", data: data });
    }
  };
};

export default connect(mapStateToProps, mapPropsToState)(PatientList);
