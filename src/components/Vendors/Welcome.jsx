import "./Welcome.css";
import { FiTool, FiCalendar, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  });

  return (
    <section className="welcome-card">

      {/* Left Side */}
      <div className="welcome-content">

        <div className="welcome-date">
          <FiCalendar />
          <span>{formattedDate}</span>
        </div>

        <h1>
          Welcome Back,
          <span>ABC Electrical Services 👋</span>
        </h1>

        <p>
            You have <strong>5 assigned jobs</strong>,{" "}
            <strong>2 pending acceptances</strong> and{" "}
            <strong>₹18,500 pending payments</strong>.
            <br />
            Manage every service request from assignment to payment.
        </p>

        <button className="welcome-btn" onClick={() => navigate("/assigned-jobs")}>
          View Assigned Requests
          <FiArrowRight />
        </button>

      </div>

      {/* Right Side */}
      <div className="welcome-image">

        <div className="hero-circle one"></div>
        <div className="hero-circle two"></div>

        <div className="hero-icon">
          <FiTool />
        </div>

      </div>

    </section>
  );
}

export default Welcome;