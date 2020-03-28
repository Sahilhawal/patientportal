import React from "react";
import { connect } from "react-redux";
import { Card } from "antd";

const MyProfile = props => {
  console.log(props);
  const { patients } = props;
  console.log(patients);
  return (
    <div className="container">
      <Card title={patients.name} style={{ width: 300 }}>
        <p>
          <strong>Age: </strong>
          {patients.age}
        </p>
        <p>
          <strong>Email: </strong>
          {patients.email}
        </p>
        <p>
          <strong>Gender: </strong>
          {patients.gender}
        </p>
        <p>
          <strong>DOB: </strong> {patients.date_of_birth}
        </p>
        <p>
          <strong>Last Visited: </strong>
          {patients.date_of_last_visit}
        </p>
        <p>
          <strong>Symptoms : </strong>
          {patients.symptoms}
        </p>
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
