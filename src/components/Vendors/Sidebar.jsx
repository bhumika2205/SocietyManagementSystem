import {
  FiHome, FiTool, FiCheckCircle, FiDollarSign,
  FiFileText, FiFolder, FiMessageSquare, FiUser,
  FiSettings, FiLogOut, FiX,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const menuItems = [
  { icon: <FiHome />,         name: "Dashboard",      path: "/dashboard" },
  { icon: <FiTool />,         name: "Assigned Jobs",  path: "/assigned-jobs" },
  { icon: <FiCheckCircle />,  name: "Completed Jobs", path: "/completed-jobs" },
  { icon: <FiDollarSign />,   name: "Payments",       path: "/payments" },
  { icon: <FiFileText />,     name: "Invoices",       path: "/invoices" },
  { icon: <FiFolder />,       name: "Documents",      path: "/documents" },
  { icon: <FiMessageSquare />,name: "Messages",       path: "/messages" },
  { icon: <FiUser />,         name: "Profile",        path: "/profile" },
  { icon: <FiSettings />,     name: "Settings",       path: "/settings" },
];

function Sidebar({ onClose }) {
  return (
    <aside className="sidebar">
      <div>
        {/* Mobile close button */}
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
          <FiX />
        </button>

        <div className="logo">
          <h2>SocietyHub</h2>
          <p>Vendor Portal</p>
        </div>

        <nav className="menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <button className="logout-btn">
        <FiLogOut />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
