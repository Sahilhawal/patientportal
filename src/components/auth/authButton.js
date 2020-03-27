import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { Layout, Menu } from "antd";
import userAuth from "./user_auth";

const AuthButton = withRouter(({ history }) =>
  userAuth.isAuthenticated ? (
    <Menu.Item key="1">
      <Link to="/login">Sign In</Link>
    </Menu.Item>
  ) : (
    <Menu.Item key="2">
      <Link to="/">Sign Out</Link>
    </Menu.Item>
  )
);

export default AuthButton;
