import React, { useState } from "react";
import { Modal, Button, Input, Checkbox, message } from "antd";

const permissionsData = [
  { id: 1, name: "Read" },
  { id: 2, name: "Write" },
  { id: 3, name: "Delete" },
  { id: 4, name: "Execute" },
];

const rolesData = [
  { id: 1, name: "Admin", permissions: [1, 2, 3, 4] },
  { id: 2, name: "Editor", permissions: [1, 2] },
  { id: 3, name: "Viewer", permissions: [1] },
  { id: 4, name: "Guest", permissions: [1] },
];

const PermissionManagement = () => {
  const [roles, setRoles] = useState(rolesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRoleName, setNewRoleName] = useState("");
  const [newRolePermissions, setNewRolePermissions] = useState([]);

  const handlePermissionChange = (roleId, permissionId) => {
    const updatedRoles = roles.map((role) => {
      if (role.id === roleId) {
        const hasPermission = role.permissions.includes(permissionId);
        const updatedPermissions = hasPermission
          ? role.permissions.filter((id) => id !== permissionId) // Remove permission
          : [...role.permissions, permissionId]; // Add permission
        return { ...role, permissions: updatedPermissions };
      }
      return role;
    });
    setRoles(updatedRoles);
  };

  // Handle adding a new role
  const handleAddRole = () => {
    if (!newRoleName.trim()) {
      message.error("Role name cannot be empty.");
      return;
    }
    if (roles.some((role) => role.name === newRoleName)) {
      message.error("This role already exists.");
      return;
    }

    const newRole = {
      id: roles.length + 1,
      name: newRoleName,
      permissions: newRolePermissions,
    };
    setRoles([...roles, newRole]);
    setNewRoleName("");
    setNewRolePermissions([]);
    setIsModalOpen(false);
    message.success("New role added successfully!");
  };

  const handlePermissionToggleForNewRole = (permissionId) => {
    const hasPermission = newRolePermissions.includes(permissionId);
    const updatedPermissions = hasPermission
      ? newRolePermissions.filter((id) => id !== permissionId)
      : [...newRolePermissions, permissionId];
    setNewRolePermissions(updatedPermissions);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Add Role
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              {permissionsData.map((permission) => (
                <th
                  key={permission.id}
                  className="border border-gray-300 px-4 py-2"
                >
                  {permission.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {role.name}
                </td>
                {permissionsData.map((permission) => (
                  <td
                    key={permission.id}
                    className="border border-gray-300 px-4 py-2 text-center"
                  >
                    <input
                      type="checkbox"
                      checked={role.permissions.includes(permission.id)}
                      onChange={() =>
                        handlePermissionChange(role.id, permission.id)
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Role Modal */}
      <Modal
        title="Add New Role"
        visible={isModalOpen}
        onOk={handleAddRole}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className="mb-4">
          <label className="block font-medium mb-1">Role Name</label>
          <Input
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
            placeholder="Enter role name"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Assign Permissions</label>
          {permissionsData.map((permission) => (
            <div key={permission.id} className="flex items-center mb-2">
              <Checkbox
                checked={newRolePermissions.includes(permission.id)}
                onChange={() => handlePermissionToggleForNewRole(permission.id)}
              >
                {permission.name}
              </Checkbox>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default PermissionManagement;
