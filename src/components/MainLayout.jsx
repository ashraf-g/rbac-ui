import React from "react";
import { Menu, Layout } from "antd";
import { UserOutlined, TeamOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const { Content, Sider } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible>
        <div className="h-16 bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
          RBAC System
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <Link to="/roles">Roles</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <Link to="/permissions">Permissions</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout>
        <Navbar />
        <Content className="p-6 bg-gray-100">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
