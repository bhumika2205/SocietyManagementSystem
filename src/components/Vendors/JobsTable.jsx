import "./JobsTable.css";

const jobs = [
  {
    id: "CMP-1021",
    resident: "Mr. Sharma",
    flat: "A-402",
    service: "Plumbing Repair",
    priority: "High",
    status: "Assigned",
    action: "Accept"
  },
  {
    id: "CMP-1025",
    resident: "Mrs. Patil",
    flat: "B-203",
    service: "Electrical Repair",
    priority: "Medium",
    status: "In Progress",
    action: "Update"
  },
  {
    id: "CMP-1031",
    resident: "Mr. Joshi",
    flat: "C-110",
    service: "Lift Maintenance",
    priority: "Low",
    status: "Completed",
    action: "View"
  },
  {
    id: "CMP-1034",
    resident: "Ms. Kulkarni",
    flat: "D-504",
    service: "Water Leakage",
    priority: "High",
    status: "Accepted",
    action: "Start"
  }
];

function JobsTable() {

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "priority high";
      case "Medium":
        return "priority medium";
      case "Low":
        return "priority low";
      default:
        return "priority";
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Assigned":
        return "status assigned";
      case "Accepted":
        return "status accepted";
      case "In Progress":
        return "status progress";
      case "Completed":
        return "status completed";
      default:
        return "status";
    }
  };

  return (

    <section className="table-card">

      <div className="table-header">

        <div>

          <h2>Assigned Service Requests</h2>

          <p>
            Track and manage every complaint assigned by the administrator.
          </p>

        </div>

      </div>

      <table>

        <thead>

          <tr>

            <th>Complaint ID</th>
            <th>Resident</th>
            <th>Flat</th>
            <th>Service</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {jobs.map((job, index) => (

            <tr key={index}>

              <td>{job.id}</td>

              <td>{job.resident}</td>

              <td>{job.flat}</td>

              <td>{job.service}</td>

              <td>
                <span className={getPriorityClass(job.priority)}>
                  {job.priority}
                </span>
              </td>

              <td>
                <span className={getStatusClass(job.status)}>
                  {job.status}
                </span>
              </td>

              <td>
                <button className="action-btn">
                  {job.action}
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>

  );

}

export default JobsTable;