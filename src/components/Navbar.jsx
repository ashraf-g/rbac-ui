import React from "react";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  // Dropdown menu for avatar
  const avatarMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="">Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="">Settings</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="bg-blue-600 shadow-md">
      <div className="flex items-center justify-between h-full">
        {/* Branding */}
        <div className="text-white text-lg font-bold">
          <Link to="/" className="text-white hover:text-gray-300">
            RBAC Dashboard
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center">
          {/* Avatar with Dropdown */}
          <Dropdown overlay={avatarMenu} placement="bottomRight">
            <Avatar
              size="large"
              style={{ backgroundColor: "#87d068", cursor: "pointer" }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
