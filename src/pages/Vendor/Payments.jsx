import { FiCreditCard, FiCheckCircle, FiClock, FiTrendingUp, FiDownload } from "react-icons/fi";
import "./Payments.css";

const payments = [
  {
    invoiceId: "INV-2031",
    jobId: "CMP-1010",
    resident: "Mr. Sharma",
    service: "Plumbing Repair",
    amount: "₹3,500",
    date: "28 Jun 2026",
    status: "Received",
  },
  {
    invoiceId: "INV-2028",
    jobId: "CMP-1015",
    resident: "Mrs. Mehta",
    service: "Electrical Wiring",
    amount: "₹5,200",
    date: "25 Jun 2026",
    status: "Received",
  },
  {
    invoiceId: "INV-2035",
    jobId: "CMP-1025",
    resident: "Mrs. Patil",
    service: "Electrical Repair",
    amount: "₹4,800",
    date: "22 Jun 2026",
    status: "Pending",
  },
  {
    invoiceId: "INV-2040",
    jobId: "CMP-1031",
    resident: "Mr. Joshi",
    service: "Lift Maintenance",
    amount: "₹9,000",
    date: "18 Jun 2026",
    status: "Pending",
  },
  {
    invoiceId: "INV-2022",
    jobId: "CMP-1018",
    resident: "Mr. Joshi",
    service: "AC Servicing",
    amount: "₹2,800",
    date: "15 Jun 2026",
    status: "Received",
  },
  {
    invoiceId: "INV-2045",
    jobId: "CMP-1034",
    resident: "Ms. Kulkarni",
    service: "Water Leakage",
    amount: "₹11,000",
    date: "10 Jun 2026",
    status: "Processing",
  },
];

function Payments() {
  const received = payments
    .filter((p) => p.status === "Received")
    .reduce((s, p) => s + parseInt(p.amount.replace(/[₹,]/g, "")), 0);
  const pending = payments
    .filter((p) => p.status !== "Received")
    .reduce((s, p) => s + parseInt(p.amount.replace(/[₹,]/g, "")), 0);

  const getStatusClass = (status) => {
    switch (status) {
      case "Received": return "pay-status received";
      case "Pending": return "pay-status pending";
      case "Processing": return "pay-status processing";
      default: return "pay-status";
    }
  };

  return (
    <div className="payments-page">
      <div className="page-header">
        <div>
          <h1>Payments</h1>
          <p>Track all your earnings and pending dues from society jobs.</p>
        </div>
      </div>

      {/* Summary */}
      <div className="pay-summary">
        <div className="pay-card green">
          <div className="pay-card-icon"><FiCheckCircle /></div>
          <div>
            <h3>₹{received.toLocaleString()}</h3>
            <p>Total Received</p>
          </div>
        </div>
        <div className="pay-card orange">
          <div className="pay-card-icon"><FiClock /></div>
          <div>
            <h3>₹{pending.toLocaleString()}</h3>
            <p>Pending Amount</p>
          </div>
        </div>
        <div className="pay-card blue">
          <div className="pay-card-icon"><FiCreditCard /></div>
          <div>
            <h3>{payments.length}</h3>
            <p>Total Transactions</p>
          </div>
        </div>
        <div className="pay-card purple">
          <div className="pay-card-icon"><FiTrendingUp /></div>
          <div>
            <h3>₹{(received + pending).toLocaleString()}</h3>
            <p>Total Billed</p>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="payments-table-card">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Job ID</th>
              <th>Resident</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i}>
                <td className="invoice-id">{p.invoiceId}</td>
                <td>{p.jobId}</td>
                <td>{p.resident}</td>
                <td>{p.service}</td>
                <td className="amount-cell">{p.amount}</td>
                <td>{p.date}</td>
                <td><span className={getStatusClass(p.status)}>{p.status}</span></td>
                <td>
                  <button className="download-btn">
                    <FiDownload /> Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payments;
