import { FiBell, FiSearch, FiCalendar } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="navbar">

      <div className="navbar-left">
        <h2>Vendor Dashboard</h2>
        <p>Welcome back! Here's what's happening today.</p>
      </div>

      <div className="navbar-right">

        <div className="search-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search jobs, vendors..."
          />
        </div>

        <div className="date-box">
          <FiCalendar />
          <span>{today}</span>
        </div>

        <button className="bell">
          <FiBell />
        </button>

        <div className="profile">

          <div className="avatar">
            V
          </div>

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