import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Vendors/Sidebar";
import Navbar  from "../components/Vendors/Navbar";

import "./VendorLayout.css";

function VendorLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const close = () => setSidebarOpen(false);

  return (
    <div className="dashboard">
      {/* Overlay (mobile) */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={close}
      />

      {/* Sidebar */}
      <aside className={`sidebar-wrapper ${sidebarOpen ? "open" : ""}`}>
        <Sidebar onClose={close} />
      </aside>

      {/* Main */}
      <main className="main">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default VendorLayout;
