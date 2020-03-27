import React from "react";
import { connect } from "react-redux";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import userAuth from "../auth/user_auth";

const { Header } = Layout;

const Navbar = props => {
  console.log(props);
  const handlieSignOut = () => {
    console.log("sign out", props);
    props.user_logout();
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <a href="#">Patient Portal</a>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {props.auth.domain === "doctor" ? (
            <Menu.Item key="3">
              <Link to="/create">Create Patient</Link>
            </Menu.Item>
          ) : null}

          {props.auth.domain === "doctor" ? (
            <Menu.Item key="4">
              <Link to="/patientlist">Patient List</Link>
            </Menu.Item>
          ) : null}

          {props.auth.isLoggedIn === false ? (
            <Menu.Item key="1">
              <Link to="/login">Sign In</Link>
            </Menu.Item>
          ) : (
            <Menu.Item key="2">
              <Link to="/" onClick={handlieSignOut}>
                Sign Out
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
    </Layout>
  );
};

const mapStateToProps = state => {
  console.log(state.auth.user_session);
  return {
    auth: state.auth
  };
};

const mapPropsToState = dispatch => {
  return {
    user_logout: data => {
      console.log("data", data);
      dispatch({ type: "USER_LOGOUT", data: data });
    }
  };
};

export default connect(mapStateToProps, mapPropsToState)(Navbar);
