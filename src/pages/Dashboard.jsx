import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { UserOutlined, TeamOutlined, SettingOutlined } from "@ant-design/icons";
import { Pie } from "@ant-design/plots";

const Dashboard = () => {
  const stats = {
    users: 120,
    roles: 5,
    permissions: 15,
  };

  const chartData = [
    { type: "Users", value: 120 },
    { type: "Roles", value: 5 },
    { type: "Permissions", value: 15 },
  ];

  const pieConfig = {
    appendPadding: 10,
    data: chartData,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    label: {
      type: "outer",
      content: "{name} ({percentage})",
    },
    interactions: [{ type: "element-active" }],
  };

  return (
    <div className="dashboard">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Statistics Section */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Users"
              value={stats.users}
              prefix={<UserOutlined />}
              className="text-blue-500"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Roles"
              value={stats.roles}
              prefix={<TeamOutlined />}
              className="text-green-500"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Permissions"
              value={stats.permissions}
              prefix={<SettingOutlined />}
              className="text-orange-500"
            />
          </Card>
        </Col>
      </Row>

      {/* Data Visualization Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Data Overview</h2>
        <Pie {...pieConfig} />
      </div>

      {/* Key Features Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card title="User Management" hoverable>
              Add, edit, and manage users in the system efficiently.
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Role Management" hoverable>
              Define roles with specific permissions and responsibilities.
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Permission Control" hoverable>
              Customize and control permissions for different roles.
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
