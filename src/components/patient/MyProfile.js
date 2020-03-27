import React from "react";
import { connect } from "react-redux";
import { Card } from "antd";

const MyProfile = props => {
  console.log(props);
  const { patients } = props;
  console.log(patients);
  return (
    <div className="container">
      <Card
        title={patients.name}
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>{patients.age}</p>
        <p>{patients.email}</p>
        <p>{patients.domain}</p>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  //console.log(state, ownProps);
  const id = ownProps.match.params.id;
  return {
    patients: state.patients.patients.find(patient => patient.id === id)
  };
};

export default connect(mapStateToProps)(MyProfile);
