import { FiBell, FiSearch, FiMenu } from "react-icons/fi";
import "./Navbar.css";

function Navbar({ onMenuClick }) {
  return (
    <header className="navbar">

      <div className="navbar-left">
        {/* Hamburger — only on mobile */}
        <button className="hamburger" onClick={onMenuClick} aria-label="Open menu">
          <FiMenu />
        </button>
        <div>
          <h2>Vendor Dashboard</h2>
          <p>Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      <div className="navbar-right">

        <div className="search-box">
          <FiSearch />
          <input type="text" placeholder="Search jobs..." />
        </div>

        <button className="bell" aria-label="Notifications">
          <FiBell />
        </button>

        <div className="profile">
          <div className="avatar">V</div>
          <div className="profile-info">
            <h4>Vendor Name</h4>
            <p>Electrical Services</p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
