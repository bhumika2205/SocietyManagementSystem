import {
  FiActivity,
  FiBell,
  FiFileText,
  FiCheckCircle
} from "react-icons/fi";

import "./ActivitySection.css";

const activities = [
  {
    icon: <FiActivity />,
    title: "New Job Assigned",
    desc: "Electrical inspection - Block B",
    time: "2 min ago"
  },
  {
    icon: <FiFileText />,
    title: "Invoice Generated",
    desc: "Invoice #INV2031",
    time: "18 min ago"
  },
  {
    icon: <FiCheckCircle />,
    title: "Payment Received",
    desc: "₹12,500 credited",
    time: "1 hour ago"
  }
];

const notices = [
  "Power shutdown on Saturday (10 AM - 1 PM)",
  "Water tank cleaning on Monday",
  "Parking maintenance in Block C",
];

function ActivitySection() {
  return (
    <section className="activity-grid">

      <div className="activity-card">

        <h2>Recent Activity</h2>

        {activities.map((item, index) => (
          <div className="activity-item" key={index}>

            <div className="activity-icon">
              {item.icon}
            </div>

            <div className="activity-text">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>

            <span>{item.time}</span>

          </div>
        ))}

      </div>

      <div className="notice-card">

        <h2>Society Notices</h2>

        {notices.map((notice, index) => (
          <div className="notice-item" key={index}>
            <FiBell />
            <span>{notice}</span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default ActivitySection;