import { Outlet } from "react-router-dom";

import Sidebar from "../components/Vendors/Sidebar";
import Navbar from "../components/Vendors/Navbar";

import "./VendorLayout.css";

function VendorLayout() {
  return (
    <div className="dashboard">
      {/* Fixed Sidebar */}
      <aside className="sidebar-wrapper">
        <Sidebar />
      </aside>

      {/* Right Side */}
      <main className="main">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Scrollable Content */}
        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default VendorLayout;