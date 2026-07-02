import { FiFileText, FiDownload, FiEye, FiPlusCircle, FiCheckCircle, FiClock, FiAlertCircle } from "react-icons/fi";
import "./Invoices.css";

const invoices = [
  {
    id: "INV-2031",
    jobId: "CMP-1010",
    resident: "Mr. Sharma",
    flat: "A-402",
    service: "Plumbing Repair",
    amount: "₹3,500",
    issueDate: "28 Jun 2026",
    dueDate: "05 Jul 2026",
    status: "Paid",
  },
  {
    id: "INV-2028",
    jobId: "CMP-1015",
    resident: "Mrs. Mehta",
    flat: "B-101",
    service: "Electrical Wiring",
    amount: "₹5,200",
    issueDate: "25 Jun 2026",
    dueDate: "02 Jul 2026",
    status: "Paid",
  },
  {
    id: "INV-2035",
    jobId: "CMP-1025",
    resident: "Mrs. Patil",
    flat: "B-203",
    service: "Electrical Repair",
    amount: "₹4,800",
    issueDate: "22 Jun 2026",
    dueDate: "29 Jun 2026",
    status: "Overdue",
  },
  {
    id: "INV-2040",
    jobId: "CMP-1031",
    resident: "Mr. Joshi",
    flat: "C-110",
    service: "Lift Maintenance",
    amount: "₹9,000",
    issueDate: "18 Jun 2026",
    dueDate: "08 Jul 2026",
    status: "Pending",
  },
  {
    id: "INV-2045",
    jobId: "CMP-1034",
    resident: "Ms. Kulkarni",
    flat: "D-504",
    service: "Water Leakage",
    amount: "₹11,000",
    issueDate: "10 Jun 2026",
    dueDate: "10 Jul 2026",
    status: "Pending",
  },
  {
    id: "INV-2022",
    jobId: "CMP-1018",
    resident: "Mr. Joshi",
    flat: "C-305",
    service: "AC Servicing",
    amount: "₹2,800",
    issueDate: "15 Jun 2026",
    dueDate: "22 Jun 2026",
    status: "Paid",
  },
];

function Invoices() {
  const paid = invoices.filter((i) => i.status === "Paid").length;
  const pending = invoices.filter((i) => i.status === "Pending").length;
  const overdue = invoices.filter((i) => i.status === "Overdue").length;

  const getStatusClass = (status) => {
    switch (status) {
      case "Paid": return "inv-status paid";
      case "Pending": return "inv-status pending";
      case "Overdue": return "inv-status overdue";
      default: return "inv-status";
    }
  };

  return (
    <div className="invoices-page">
      <div className="page-header">
        <div>
          <h1>Invoices</h1>
          <p>Manage and track all invoices submitted for completed jobs.</p>
        </div>
        <button className="create-invoice-btn">
          <FiPlusCircle /> Create Invoice
        </button>
      </div>

      {/* Summary */}
      <div className="inv-summary">
        <div className="inv-summary-card">
          <FiFileText className="inv-sum-icon blue" />
          <div>
            <h3>{invoices.length}</h3>
            <p>Total Invoices</p>
          </div>
        </div>
        <div className="inv-summary-card">
          <FiCheckCircle className="inv-sum-icon green" />
          <div>
            <h3>{paid}</h3>
            <p>Paid</p>
          </div>
        </div>
        <div className="inv-summary-card">
          <FiClock className="inv-sum-icon yellow" />
          <div>
            <h3>{pending}</h3>
            <p>Pending</p>
          </div>
        </div>
        <div className="inv-summary-card">
          <FiAlertCircle className="inv-sum-icon red" />
          <div>
            <h3>{overdue}</h3>
            <p>Overdue</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="invoices-table-card">
        <h2>All Invoices</h2>
        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Job ID</th>
              <th>Resident</th>
              <th>Flat</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <tr key={i}>
                <td className="inv-id">{inv.id}</td>
                <td>{inv.jobId}</td>
                <td>{inv.resident}</td>
                <td>{inv.flat}</td>
                <td>{inv.service}</td>
                <td className="inv-amount">{inv.amount}</td>
                <td>{inv.issueDate}</td>
                <td className={inv.status === "Overdue" ? "overdue-date" : ""}>{inv.dueDate}</td>
                <td><span className={getStatusClass(inv.status)}>{inv.status}</span></td>
                <td>
                  <div className="inv-actions">
                    <button className="icon-btn view"><FiEye /></button>
                    <button className="icon-btn download"><FiDownload /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Invoices;
