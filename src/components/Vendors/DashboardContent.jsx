import {
  FiTool,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiAlertCircle
} from "react-icons/fi";

import "./DashboardContent.css";

const jobs = [
  {
    title: "Lift Maintenance",
    society: "Sunshine Residency",
    time: "09:00 AM",
    status: "In Progress"
  },
  {
    title: "Water Pump Repair",
    society: "Green Valley",
    time: "11:30 AM",
    status: "Pending"
  },
  {
    title: "Generator Inspection",
    society: "Royal Heights",
    time: "03:00 PM",
    status: "Completed"
  }
];

function DashboardContent() {

  return (

    <section className="dashboard-row">

      {/* Jobs */}

      <div className="jobs-card">

        <div className="card-header">

          <h2>Today's Assigned Jobs</h2>

          <button>View All</button>

        </div>

        {jobs.map((job,index)=>(

          <div className="job-item" key={index}>

            <div className="job-icon">

              <FiTool/>

            </div>

            <div className="job-details">

              <h4>{job.title}</h4>

              <p>

                <FiMapPin/>

                {job.society}

              </p>

            </div>

            <div className="job-time">

              <FiClock/>

              {job.time}

            </div>

            <div className={`status ${job.status.replace(" ","-")}`}>

              {job.status}

            </div>

          </div>

        ))}

      </div>

      {/* Payment */}

      <div className="payment-card">

        <h2>Payment Summary</h2>

        <div className="payment-circle">

    ₹1.84L

    <span>Total</span>

</div>

        <div className="payment-info">

          <div>

            <h3>₹1,25,000</h3>

            <p>Received</p>

          </div>

          <div>

            <h3>₹59,500</h3>

            <p>Pending</p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default DashboardContent;