import React, { useState } from "react";
import { Modal, Button, Input, Select } from "antd";

const { Option } = Select;

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Viewer" },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: "",
  });

  // Handle opening the edit modal
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setFormValues(user);
    setIsEditModalOpen(true);
  };

  // Save edited user
  const handleSaveUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, ...formValues } : user
    );
    setUsers(updatedUsers);
    setIsEditModalOpen(false);
    setSelectedUser(null);
    setFormValues({ name: "", email: "", role: "" });
  };

  // Handle opening the add modal
  const handleAddUser = () => {
    setFormValues({ name: "", email: "", role: "" });
    setIsAddModalOpen(true);
  };

  // Save new user
  const handleSaveNewUser = () => {
    const newUser = {
      id: users.length + 1,
      ...formValues,
    };
    setUsers([...users, newUser]);
    setIsAddModalOpen(false);
    setFormValues({ name: "", email: "", role: "" });
  };

  // Handle opening the delete confirmation modal
  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  // Confirm deletion
  const confirmDeleteUser = () => {
    const updatedUsers = users.filter((user) => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    setIsDeleteModalOpen(false);
    setSelectedUser(null);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle role selection change
  const handleRoleChange = (value) => {
    setFormValues({ ...formValues, role: value });
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button type="primary" onClick={handleAddUser}>
          Add User
        </Button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Button
                  type="primary"
                  onClick={() => handleEditUser(user)}
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button danger onClick={() => handleDeleteUser(user)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add User Modal */}
      <Modal
        title="Add User"
        visible={isAddModalOpen}
        onOk={handleSaveNewUser}
        onCancel={() => setIsAddModalOpen(false)}
      >
        <div className="mb-4">
          <label className="block font-medium mb-1">Name</label>
          <Input
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            placeholder="Enter user name"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <Input
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="Enter user email"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Role</label>
          <Select
            value={formValues.role}
            onChange={handleRoleChange}
            className="w-full"
            placeholder="Select role"
          >
            <Option value="Admin">Admin</Option>
            <Option value="Editor">Editor</Option>
            <Option value="Viewer">Viewer</Option>
          </Select>
        </div>
      </Modal>

      {/* Edit User Modal */}
      <Modal
        title="Edit User"
        visible={isEditModalOpen}
        onOk={handleSaveUser}
        onCancel={() => setIsEditModalOpen(false)}
      >
        <div className="mb-4">
          <label className="block font-medium mb-1">Name</label>
          <Input
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            placeholder="Enter user name"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <Input
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="Enter user email"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Role</label>
          <Select
            value={formValues.role}
            onChange={handleRoleChange}
            className="w-full"
            placeholder="Select role"
          >
            <Option value="Admin">Admin</Option>
            <Option value="Editor">Editor</Option>
            <Option value="Viewer">Viewer</Option>
          </Select>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        title="Confirm Deletion"
        visible={isDeleteModalOpen}
        onOk={confirmDeleteUser}
        onCancel={() => setIsDeleteModalOpen(false)}
      >
        <p>
          Are you sure you want to delete <strong>{selectedUser?.name}</strong>?
        </p>
      </Modal>
    </div>
  );
};

export default UserManagement;
