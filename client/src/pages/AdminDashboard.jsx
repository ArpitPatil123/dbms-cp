import React from "react";
import Sidebar from "../template/Sidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
