import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import './style.scss'


export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-page">
        <Outlet />
      </div>
    </div>
  );
};
