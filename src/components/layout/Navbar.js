import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <a href="#">Patient Portal</a>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Link to="/signin">Sign In</Link>
          </Menu.Item>
          <Menu.Item key="2">Sign Out</Menu.Item>
          <Menu.Item key="3">
            <Link to="/create">Create Patient</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
