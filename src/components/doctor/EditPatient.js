import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Form, Input, InputNumber, Button, Select, DatePicker } from "antd";
import moment from "moment";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const validateMessages = {
  required: "This field is required!",
  types: {
    email: "Not a validate email!",
    number: "Not a validate number!"
  },
  number: {
    range: "Must be between"
  }
};
const dateFormat = "YYYY/MM/DD";
const EditPatient = props => {
  console.log("Edit Form", props.patients);
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ name: "Hi" });
  }, []);
  const onGenderChange = value => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!"
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!"
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Hi there!"
        });
    }
  };

  const onFinish = values => {
    var dob = values.user.DOB;
    console.log("dob", dob.format("DD/MM/YYYY"));
    values.user.date_of_birth = values.user.DOB.format("DD/MM/YYYY");
    values.user.date_of_last_visit = values.user.DOLV.format("DD/MM/YYYY");
    console.log(values);
    props.edit_patient(values);
  };
  const config = {
    rules: [{ type: "object", required: true, message: "Please select time!" }]
  };
  return (
    <div className="container">
      <h1>Create Patient</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email" }]}
        >
          <Input defaultValue={props.patients.email} disabled />
        </Form.Item>
        <Form.Item name={["user", "age"]} label="Age">
          <Input type="number" min={1} max={10} defaultValue={3} />
        </Form.Item>

        <Form.Item
          name={["user", "gender"]}
          label="Gender"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            defaultValue={props.patients.gender}
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item name={["user", "DOB"]} label="Date of Birth" {...config}>
          <DatePicker
            defaultValue={moment(props.patients.date_of_birth, dateFormat)}
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item name={["user", "address"]} label="Address">
          <Input.TextArea defaultValue={props.patients.address} />
        </Form.Item>
        <Form.Item name={["user", "DOLV"]} label="Last Visited" {...config}>
          <DatePicker
            defaultValue={moment(props.patients.date_of_birth, dateFormat)}
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
const mapPropsToState = dispatch => {
  return {
    edit_patient: data => {
      dispatch({ type: "EDIT_PATIENT", data: data });
    }
  };
};
const mapStateToProps = (state, ownProps) => {
  //console.log(state, ownProps);
  const id = ownProps.match.params.id;
  return {
    patients: state.patients.patients.find(patient => patient.email === id)
  };
};
export default connect(mapStateToProps, mapPropsToState)(EditPatient);
