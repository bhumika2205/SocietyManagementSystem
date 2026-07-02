import { FiCheckCircle, FiStar, FiCalendar, FiUser } from "react-icons/fi";
import "./CompletedJobs.css";

const completedJobs = [
  {
    id: "CMP-1010",
    resident: "Mr. Sharma",
    flat: "A-402",
    service: "Plumbing Repair",
    completedDate: "28 Jun 2026",
    payment: "₹3,500",
    rating: 5,
    feedback: "Excellent work, very professional!",
  },
  {
    id: "CMP-1015",
    resident: "Mrs. Mehta",
    flat: "B-101",
    service: "Electrical Wiring",
    completedDate: "25 Jun 2026",
    payment: "₹5,200",
    rating: 4,
    feedback: "Good job, finished on time.",
  },
  {
    id: "CMP-1018",
    resident: "Mr. Joshi",
    flat: "C-305",
    service: "AC Servicing",
    completedDate: "22 Jun 2026",
    payment: "₹2,800",
    rating: 5,
    feedback: "Very satisfied with the service.",
  },
  {
    id: "CMP-1020",
    resident: "Ms. Kulkarni",
    flat: "D-202",
    service: "Painting",
    completedDate: "18 Jun 2026",
    payment: "₹8,000",
    rating: 3,
    feedback: "Average, could be better.",
  },
  {
    id: "CMP-1022",
    resident: "Mr. Desai",
    flat: "A-110",
    service: "Carpentry",
    completedDate: "14 Jun 2026",
    payment: "₹4,600",
    rating: 4,
    feedback: "Neat work, no complaints.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((s) => (
        <FiStar
          key={s}
          className={s <= rating ? "star filled" : "star"}
        />
      ))}
    </div>
  );
}

function CompletedJobs() {
  const totalEarnings = completedJobs.reduce(
    (sum, job) => sum + parseInt(job.payment.replace(/[₹,]/g, "")),
    0
  );
  const avgRating = (
    completedJobs.reduce((sum, job) => sum + job.rating, 0) /
    completedJobs.length
  ).toFixed(1);

  return (
    <div className="completed-jobs-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Completed Jobs</h1>
          <p>Review all jobs you have successfully completed.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card green">
          <FiCheckCircle className="summary-icon" />
          <div>
            <h3>{completedJobs.length}</h3>
            <p>Total Completed</p>
          </div>
        </div>
        <div className="summary-card purple">
          <FiUser className="summary-icon" />
          <div>
            <h3>₹{totalEarnings.toLocaleString()}</h3>
            <p>Total Earned</p>
          </div>
        </div>
        <div className="summary-card yellow">
          <FiStar className="summary-icon" />
          <div>
            <h3>{avgRating} ★</h3>
            <p>Avg. Rating</p>
          </div>
        </div>
        <div className="summary-card blue">
          <FiCalendar className="summary-icon" />
          <div>
            <h3>Jun 2026</h3>
            <p>This Month</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="completed-table-card">
        <h2>Job History</h2>
        <table>
          <thead>
            <tr>
              <th>Complaint ID</th>
              <th>Resident</th>
              <th>Flat</th>
              <th>Service</th>
              <th>Completed On</th>
              <th>Payment</th>
              <th>Rating</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {completedJobs.map((job, index) => (
              <tr key={index}>
                <td>{job.id}</td>
                <td>{job.resident}</td>
                <td>{job.flat}</td>
                <td>{job.service}</td>
                <td>{job.completedDate}</td>
                <td className="payment-amount">{job.payment}</td>
                <td>
                  <StarRating rating={job.rating} />
                </td>
                <td className="feedback-text">{job.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompletedJobs;
