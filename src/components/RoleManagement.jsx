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

  const handleAddRole = () => {
    setFormValues({ name: "", description: "" });
    setIsAddModalOpen(true);
  };

  const handleSaveNewRole = () => {
    const newRole = {
      id: roles.length + 1,
      ...formValues,
    };
    setRoles([...roles, newRole]);
    setIsAddModalOpen(false);
    setFormValues({ name: "", description: "" });
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setFormValues(role);
    setIsEditModalOpen(true);
  };

  const handleSaveRole = () => {
    const updatedRoles = roles.map((role) =>
      role.id === selectedRole.id ? { ...role, ...formValues } : role
    );
    setRoles(updatedRoles);
    setIsEditModalOpen(false);
    setSelectedRole(null);
    setFormValues({ name: "", description: "" });
  };

  const handleDeleteRole = (role) => {
    setSelectedRole(role);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteRole = () => {
    const updatedRoles = roles.filter((role) => role.id !== selectedRole.id);
    setRoles(updatedRoles);
    setIsDeleteModalOpen(false);
    setSelectedRole(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="p-4">
      <div className="flex justify-end sm:justify-start mb-4">
        <Button
          type="primary"
          className="w-full sm:w-auto"
          onClick={handleAddRole}
        >
          Add Role
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                Role Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                Description
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                  {role.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                  {role.description}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                  <div className="flex flex-col sm:flex-row sm:space-x-2">
                    <Button
                      type="primary"
                      onClick={() => handleEditRole(role)}
                      className="mb-2 sm:mb-0"
                    >
                      Edit
                    </Button>
                    <Button danger onClick={() => handleDeleteRole(role)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
