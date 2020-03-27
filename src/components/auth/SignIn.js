import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import userAuth from "./user_auth";
import PatientList from "../doctor/PatientList";

const auth_data = {
  users: [
    { email: "sahil@test.com", password: "1234", domain: "doctor", id: "1" },
    { email: "patient@test.com", password: "1234", domain: "patient", id: "2" }
  ]
};
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo);
};

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    domain: ""
  };

  login = values => {
    var user_logging_in = auth_data.users.find(user => {
      return user.email === values.username;
    });
    if (user_logging_in.password === values.password) {
      userAuth.authenticate(user_logging_in, () => {
        this.setState(
          () => ({
            redirectToReferrer: true,
            domain: user_logging_in.domain,
            id: user_logging_in.id
          }),
          this.props.user_login(user_logging_in)
        );
      });
    }
  };
  render() {
    const { redirectToReferrer, domain, id } = this.state;
    if (redirectToReferrer === true) {
      if (domain === "doctor") return <Redirect to="/patientlist" />;
      if (domain === "patient") return <Redirect to={"/myprofile/" + id} />;
    }

    return (
      <div className="container">
        <h1>Sign In</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true
          }}
          onFinish={this.login}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapPropsToState = dispatch => {
  return {
    user_login: data => {
      console.log("data", data);
      dispatch({ type: "USER_LOGIN", data: data });
    }
  };
};

export default connect(null, mapPropsToState)(Login);

/*
export default function AuthExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
}
*/
