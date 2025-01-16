import React from "react";
import Navdashboard from "../pages/dashboard/navdashboard";
import "./dashboardlayout.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboardlay">
      <Navdashboard />
      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
