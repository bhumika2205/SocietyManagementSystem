import JobsTable from "../../components/Vendors/JobsTable";
import { FiClipboard, FiAlertCircle, FiCheckCircle, FiTool } from "react-icons/fi";
import "./AssignedJobs.css";

function AssignedJobs() {
  return (
    <div className="assigned-jobs-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1>Assigned Jobs</h1>
          <p>All service requests assigned to you by the society administrator.</p>
        </div>
      </div>

      {/* Summary */}
      <div className="aj-summary">
        <div className="aj-card blue">
          <FiClipboard className="aj-icon" />
          <div>
            <h3>18</h3>
            <p>Total Assigned</p>
          </div>
        </div>
        <div className="aj-card orange">
          <FiAlertCircle className="aj-icon" />
          <div>
            <h3>4</h3>
            <p>Pending Acceptance</p>
          </div>
        </div>
        <div className="aj-card yellow">
          <FiTool className="aj-icon" />
          <div>
            <h3>5</h3>
            <p>In Progress</p>
          </div>
        </div>
        <div className="aj-card green">
          <FiCheckCircle className="aj-icon" />
          <div>
            <h3>9</h3>
            <p>Accepted</p>
          </div>
        </div>
      </div>

      {/* Jobs Table */}
      <JobsTable />
    </div>
  );
}

export default AssignedJobs;
