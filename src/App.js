import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/permissions" element={<Permissions />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
