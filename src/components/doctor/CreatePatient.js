import React, { Component } from "react";
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

const CreatePatient = props => {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log(values.date_of_birth.format("YYYY/MM/DD"));
    values.date_of_birth = values.date_of_birth.format("YYYY/MM/DD");
    values.date_of_last_visit = values.date_of_last_visit.format("YYYY/MM/DD");
    console.log(values);
    props.add_patient(values);
    props.history.push("/patientlist");
  };

  const onGenderChange = value => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        return;
    }
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
          name="name"
          label="Name"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99
            }
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="symptoms" label="Symptoms">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="medicines" label="Medicines">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="date_of_birth" label="Date of Birth" {...config}>
          <DatePicker format={dateFormat} />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="date_of_last_visit" label="Last Visited" {...config}>
          <DatePicker format={dateFormat} />
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
    add_patient: data => {
      data.id = Math.random();
      dispatch({ type: "ADD_PATIENT", data: data });
    }
  };
};

export default connect(null, mapPropsToState)(CreatePatient);
