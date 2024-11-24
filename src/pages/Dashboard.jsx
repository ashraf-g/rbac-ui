import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { UserOutlined, TeamOutlined, SettingOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const stats = {
    users: 120,
    roles: 5,
    permissions: 15,
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
    </div>
  );
};

export default Dashboard;
