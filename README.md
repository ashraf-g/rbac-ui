# Role-Based Access Control (RBAC) UI

A user-friendly **Role-Based Access Control (RBAC)** system built with **React.js**, **Ant Design**, and **Tailwind CSS**. The application allows administrators to manage users, roles, and permissions efficiently through a clean and intuitive interface.

## Features

### Core Functionalities:

1. **User Management**:

   - View a list of users.
   - Add, edit, and delete users.
   - Assign roles to users.

2. **Role Management**:

   - View a list of roles.
   - Add, edit, and delete roles.
   - Define permissions for roles (e.g., Read, Write, Delete).

3. **Permission Management**:
   - Easily manage permissions dynamically for roles.

### Additional Features:

- Responsive design with **Tailwind CSS**.
- Clean and reusable components using **Ant Design**.
- Seamless CRUD operations with local state management.

---

## Technologies Used

### Frontend:

- **React.js**: A popular JavaScript library for building user interfaces.
- **Ant Design (Antd)**: Provides a rich set of pre-styled UI components.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive styling.

---

## Installation

### Prerequisites:

- Node.js (v14 or later)
- npm (v6 or later)

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ashraf-g/rbac-ui.git
   cd rbac-ui
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

---

## Project Structure

```
src/
├── components/
│   ├── UserManagement.jsx
│   ├── RoleManagement.jsx
│   ├── PermissionManagement.jsx
│   ├── MainLayout.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Users.jsx
│   ├── Roles.jsx
│   └── Permissions.jsx
├── App.js
└── index.css

```

---

## Usage

1. **Navigate to the Dashboard**:

   - Provides an overview of users, roles, and permissions.

2. **Manage Users**:

   - Go to the **Users** page.
   - Add new users with a name, email, and role.
   - Edit or delete existing users.

3. **Manage Roles**:
   - Go to the **Roles** page.
   - Add new roles with custom permissions (e.g., Read, Write, Delete).
   - Edit or delete existing roles.

---

## Future Enhancements

- Add search and filtering functionality.
- Connect with a real backend using REST APIs or GraphQL.
- Implement authentication and authorization for enhanced security.

---

## License

This project is licensed under the [MIT License](LICENSE).
