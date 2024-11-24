import React, { useState } from "react";
import { Modal, Button, Input, Select } from "antd";

const { Option } = Select;

const initialUsers = [
  { id: 1, name: "Ashraf", email: "ashraf@example.com", role: "Admin" },
  { id: 2, name: "Shahil", email: "shahil@example.com", role: "Editor" },
  { id: 3, name: "Faiz", email: "faiz@example.com", role: "Viewer" },
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

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setFormValues(user);
    setIsEditModalOpen(true);
  };

  const handleSaveUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, ...formValues } : user
    );
    setUsers(updatedUsers);
    setIsEditModalOpen(false);
    setSelectedUser(null);
    setFormValues({ name: "", email: "", role: "" });
  };

  const handleAddUser = () => {
    setFormValues({ name: "", email: "", role: "" });
    setIsAddModalOpen(true);
  };

  const handleSaveNewUser = () => {
    const newUser = {
      id: users.length + 1,
      ...formValues,
    };
    setUsers([...users, newUser]);
    setIsAddModalOpen(false);
    setFormValues({ name: "", email: "", role: "" });
  };

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteUser = () => {
    const updatedUsers = users.filter((user) => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    setIsDeleteModalOpen(false);
    setSelectedUser(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleRoleChange = (value) => {
    setFormValues({ ...formValues, role: value });
  };

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4">
        <Button
          type="primary"
          className="w-full sm:w-auto"
          onClick={handleAddUser}
        >
          Add User
        </Button>
      </div>

      <div className="overflow-x-auto">
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
                <td className="border border-gray-300 px-4 py-2 truncate">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 truncate">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2 truncate">
                  {user.role}
                </td>
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
      </div>

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
        {/* Fields */}
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
