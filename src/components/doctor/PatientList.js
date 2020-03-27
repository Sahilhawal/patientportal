import React from "react";
import { connect } from "react-redux";
import { List, Avatar } from "antd";

class PatientList extends React.Component {
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

export default connect(mapStateToProps)(PatientList);
