import React from "react";
import { connect } from "react-redux";
import { List, Avatar, Modal, Button } from "antd";

class PatientList extends React.Component {
  state = {
    visible: false,
    name: "",
    email: "",
    age: "",
    gender: "",
    date_of_birth: "",
    date_of_last_visit: "",
    symptoms: "",
    medicines: ""
  };

  showModal = event => {
    console.log(
      "props",
      this.props.patients.filter(patient => patient.email == event.target.id)
    );
    const modalData = this.props.patients.filter(
      patient => patient.email == event.target.id
    );
    this.setState({
      visible: true,
      name: modalData[0].name,
      email: modalData[0].email,
      age: modalData[0].age,
      gender: modalData[0].gender,
      date_of_birth: modalData[0].date_of_birth,
      date_of_last_visit: modalData[0].date_of_last_visit,
      symptoms: modalData[0].symptoms,
      medicines: modalData[0].medicines
    });
    console.log(modalData[0].name);
    console.log("state", this.state);
    console.log("onono", modalData[0].symptoms[0].value);
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleDelete = event => {
    console.log(event.target.id);
    this.props.delete_patient(event.target.id);
  };
  handleEdit = event => {
    this.props.history.push("/edit/" + event.target.id);
  };
  render() {
    const symptoms = [...this.state.symptoms];
    const { patients } = this.props;
    return (
      <div>
        <List
          className="demo-loadmore-list custom-list"
          itemLayout="horizontal"
          dataSource={patients}
          renderItem={item => (
            <List.Item
              actions={[
                <a id={item.email} onClick={this.handleEdit}>
                  > Edit
                </a>,
                <a id={item.email} onClick={this.handleDelete}>
                  Delete
                </a>,
                <a id={item.email} onClick={this.showModal}>
                  View
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
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            <strong>Name: </strong>
            {this.state.name}
          </p>
          <p>
            <strong>Age: </strong>
            {this.state.age}
          </p>
          <p>
            <strong>Email: </strong>
            {this.state.email}
          </p>
          <p>
            <strong>Gender: </strong>
            {this.state.gender}
          </p>
          <p>
            <strong>DOB: </strong> {this.state.date_of_birth}
          </p>
          <p>
            <strong>Last Visited: </strong>
            {this.state.date_of_last_visit}
          </p>
          <p>
            <strong>Symptoms : </strong>
            {symptoms.map(a => a.value).toString()}
          </p>
          <p>
            <strong>Medicines : </strong>
            {this.state.medicines}
          </p>
        </Modal>
      </div>
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
