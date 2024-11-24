import React, { useState } from "react";
import { Modal, Button, Input } from "antd";

const initialRoles = [
  { id: 1, name: "Admin", description: "Full access to the system." },
  { id: 2, name: "Editor", description: "Can edit content." },
  { id: 3, name: "Viewer", description: "Read-only access." },
];

const RoleManagement = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [formValues, setFormValues] = useState({ name: "", description: "" });

  // Handle opening the add modal
  const handleAddRole = () => {
    setFormValues({ name: "", description: "" });
    setIsAddModalOpen(true);
  };

  // Save new role
  const handleSaveNewRole = () => {
    const newRole = {
      id: roles.length + 1,
      ...formValues,
    };
    setRoles([...roles, newRole]);
    setIsAddModalOpen(false);
    setFormValues({ name: "", description: "" });
  };

  // Handle opening the edit modal
  const handleEditRole = (role) => {
    setSelectedRole(role);
    setFormValues(role);
    setIsEditModalOpen(true);
  };

  // Save edited role
  const handleSaveRole = () => {
    const updatedRoles = roles.map((role) =>
      role.id === selectedRole.id ? { ...role, ...formValues } : role
    );
    setRoles(updatedRoles);
    setIsEditModalOpen(false);
    setSelectedRole(null);
    setFormValues({ name: "", description: "" });
  };

  // Handle opening the delete confirmation modal
  const handleDeleteRole = (role) => {
    setSelectedRole(role);
    setIsDeleteModalOpen(true);
  };

  // Confirm deletion
  const confirmDeleteRole = () => {
    const updatedRoles = roles.filter((role) => role.id !== selectedRole.id);
    setRoles(updatedRoles);
    setIsDeleteModalOpen(false);
    setSelectedRole(null);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button type="primary" onClick={handleAddRole}>
          Add Role
        </Button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Role Name</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="border border-gray-300 px-4 py-2">{role.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {role.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Button
                  type="primary"
                  onClick={() => handleEditRole(role)}
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button danger onClick={() => handleDeleteRole(role)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Role Modal */}
      <Modal
        title="Add Role"
        visible={isAddModalOpen}
        onOk={handleSaveNewRole}
        onCancel={() => setIsAddModalOpen(false)}
      >
        <div className="mb-4">
          <label className="block font-medium mb-1">Role Name</label>
          <Input
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            placeholder="Enter role name"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Description</label>
          <Input
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
            placeholder="Enter role description"
          />
        </div>
      </Modal>

      {/* Edit Role Modal */}
      <Modal
        title="Edit Role"
        visible={isEditModalOpen}
        onOk={handleSaveRole}
        onCancel={() => setIsEditModalOpen(false)}
      >
        <div className="mb-4">
          <label className="block font-medium mb-1">Role Name</label>
          <Input
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            placeholder="Enter role name"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Description</label>
          <Input
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
            placeholder="Enter role description"
          />
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        title="Confirm Deletion"
        visible={isDeleteModalOpen}
        onOk={confirmDeleteRole}
        onCancel={() => setIsDeleteModalOpen(false)}
      >
        <p>
          Are you sure you want to delete the role{" "}
          <strong>{selectedRole?.name}</strong>?
        </p>
      </Modal>
    </div>
  );
};

export default RoleManagement;
